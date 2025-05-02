import { Open_Sans, Montserrat } from "next/font/google";
import PagSec from "@/components/PlantillaPagSec";
import Image from "next/image";
import React from "react";
import Link from 'next/link'
import "./Noticias.css";


const open_Sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

async function loadPost(slug) {
  const res = await fetch(
   // `https://inea-web-backend.onrender.com/api/blogs/${slug}?populate=%2A`, {
    `https://inea-web-backend-cg20.onrender.com/api/blogs/${slug}?populate=%2A`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache'
      }
    }
  );
  const data = await res.json();

  return data;
}

async function loadEnlaces() {
  const resPineados = await fetch(
    
    `https://inea-web-backend-cg20.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=true&populate=%2A`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache'
      }
    }
  );
  const { data: enlacesPineados } = await resPineados.json();
  if (enlacesPineados.length < 3) {
    const resNoPineados = await fetch(
      //`https://inea-web-backend.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=false&populate=%2A&sort[0]=Fecha:desc`,
      `https://inea-web-backend-cg20.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=false&populate=%2A&sort[0]=Fecha:desc`,
      {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache",
        },
      }
    );
    const { data: enlacesNoPineados } = await resNoPineados.json();

    const enlacesCompletados = [
      ...enlacesPineados,
      ...enlacesNoPineados.slice(0, 3 - enlacesPineados.length),
    ];
    return enlacesCompletados;
  }
  return enlacesPineados;
}

async function Page({ params }) {
  const post = await loadPost(params.noticiasAntiguasId);

  const enlaces = await loadEnlaces();

  const contenido = post.data.attributes.Contenido;

  const fechaFun = (fechaAPI) => {
    const diasSemana = [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ];
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const fecha = new Date(fechaAPI);
    const diaSemana = diasSemana[fecha.getDay()];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
    return `${dia} de ${mes} de ${año}`;
  };

  // Modificación en renderContenido
  const renderContenido = (contenido) => {
    return contenido.map((item, index) => {
      switch (item.type) {
        case "heading":
          return React.createElement(
            `h${item.level}`,
            {
              key: index,
              className: `${montserrat.className} text-[#333334] font-bold text-[${
                21 - item.level
              }px]`,
            },
            item.children[0]?.text || ""
          );
          case "paragraph":
            const textContent = item.children
              .map((child) => (child.type === "text" ? child.text : ""))
              .join("");
          
            if (textContent.trim() === "") {
              // Manejo de párrafos vacíos: agrega un salto de línea visual
              return <br key={index} />;
            }
          
            return (
              <p
                key={index}
                className={` text-[#333334] text-[18px] font-light`}
              >
                {item.children.map((child, i) => {
                  if (child.type === "link" && child.url) {
                    return (
                      <a
                        key={i}
                        href={child.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#333334] underline hover:text-[#611232]"
                      >
                        {child.children?.map((linkChild, j) =>
                          linkChild.type === "text" ? (
                            <span key={j}>{linkChild.text}</span>
                          ) : null
                        )}
                      </a>
                    );
                  }
          
                  if (child.type === "text") {
                    return (
                      <span
                        key={i}
                        className="font-body font-light"
                        style={{
                          textAlign: "left",
                          fontWeight: child.bold ? "bold" : "normal",
                          fontStyle: child.italic ? "italic" : "normal",
                          textDecoration: `${child.underline ? "underline" : ""} ${
                            child.strikethrough ? "line-through" : ""
                          }`,
                        }}
                      >
                        {child.text}
                      </span>
                    );
                  }
          
                  return null; // Manejo para tipos inesperados
                })}
              </p>
            );
          
        case "image":
              return (
                <div className="flex justify-center my-4">
                  <div className="relative w-full max-w-4xl aspect-[3/2]">
                    <Image
                      key={index}
                      src={item.image.formats.large.url}
                      alt={item.image.alternativeText || "Imagen de la noticia"}
                      fill
                      priority={true}
                      className="rounded-lg object-contain"
                    />
                  </div>
                </div>
              );
          
        case "list":
          return (
            <ol
              key={index}
              className={`${open_Sans.className} list-decimal pl-6 mb-4`}
            >
              {item.children.map((listItem, liIndex) => (
                <li key={liIndex}>{listItem.children[0]?.text || ""}</li>
              ))}
            </ol>
          );
        case "quote":
          return (
            <blockquote
              key={index}
              className="border-l-4 border-gray-500 pl-4 italic text-[#333334] my-4"
            >
              {item.children[0]?.text || ""}
            </blockquote>
          );
          case "link":
            return (
              <Link
                key={index}
                href={item.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#333334] underline hover:text-[#611232]"
              >
                {item.children[0]?.text || "Enlace"}
              </Link>
            );
            default:
          return null;
      }
    });
  };

  const noticias = enlaces.map((item) => (
    {
      title: item.attributes.Titulo,
      imageSrc: item.attributes?.Imagen.data[0]?.attributes?.url,
      buttonText: "Ir al sitio",
    link: item.attributes.URL_Externo 
    ? item.attributes.URL_Externo 
      : `/enlaces-de-interes/${item.attributes.slug}`,
  }));
  
  return (
    <div>
      <div className="w-full max-w-screen-sm sm:max-w-2xl md:max-w-4xl px-4 mx-auto mb-10"></div>
      <PagSec
        Enlaces={noticias}
        Titulo={post.data?.attributes?.Titulo}
        Subtitulo={post.data?.attributes?.Subtitulo}
        >
        <h1
          className={`${montserrat.className} text-[#333334] text-[18px] font-light`}
          >
          INEA Ciudad de México |{" "}
          {post.data?.attributes?.Fecha
            ? fechaFun(post.data?.attributes?.Fecha)
            : ""}
        </h1>
          <div className="flex justify-center my-6">
            <div className="relative w-full max-w-4xl aspect-[3/2]">
              <Image
                src={post.data.attributes?.Imagen?.data?.attributes?.url}
                alt={post.data.attributes?.Nombre_de_la_Imagen || "Imagen sin título"}
                fill
                priority
                className="rounded-lg object-contain"
                />
            </div>
          </div>
        <div className="mb-6 mt-8 leading-7 overflow-hidden word-wrap: break-word overflow-wrap: break-word text-left">{renderContenido(contenido)}</div>
      </PagSec>
    </div>
  );
}

export default Page;
