import { Noto_Sans } from "next/font/google";
import PagSec from "@/components/PlantillaPagSec";
import Image from "next/image";
import React from "react";
import Link from 'next/link'
import "../../blog/noticias-antiguas/[noticiasAntiguasId]/Noticias.css";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

async function loadPost(slug) {
  const res = await fetch(
    `https://inea-web-backend-cg20.onrender.com/api/plannings/${slug}?populate=%2A`, {
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
  const post = await loadPost(params.planningId);

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
      // Detectar si es un párrafo que contiene un iframe (embed de YouTube u otro servicio)
      if (item.type === "paragraph" && 
          item.children && 
          item.children.length === 1 && 
          item.children[0].text && 
          item.children[0].text.includes("<iframe")) {
        // Es un código de embed dentro de un párrafo
        return (
          <div key={index} className="my-6 mx-auto rounded-lg overflow-hidden w-full px-2 sm:px-4 md:px-0" style={{ maxWidth: '720px' }}>
            <div 
              className="relative w-full h-0 md:ml-[15%] md:w-[85%]"
              style={{ paddingBottom: '56.25%' }} // 16:9 aspect ratio
            >
              <div 
                className="absolute top-0 left-0 w-full h-full"
                dangerouslySetInnerHTML={{ 
                  __html: item.children[0].text.replace(
                    /<iframe/g, 
                    '<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"'
                  )
                }}
              />
            </div>
          </div>
        );
      }
      
      switch (item.type) {
        case "heading":
          return (
            // <div style={{ width: '720px', maxWidth: '100%', overflow: 'hidden' }}>
            <div className="w-[720px] max-w-full overflow-hidden">
              <div className="w-full overflow-hidden">
                {React.createElement(
                  `h${item.level}`,
                  {
                    key: index,
                    className: `${notoSans.className} text-[#333334] font-bold text-[${
                      21 - item.level
                    }px] break-words`,
                    style: { wordWrap: 'break-word', overflowWrap: 'break-word' }
                  },
                  item.children[0]?.text || ""
                )}
              </div>
            </div>
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
              // <div style={{ width: '720px', maxWidth: '100%', overflow: 'hidden' }}>
              <div className="w-[720px] max-w-full overflow-hidden">
                <p
                  key={index}
                  className={` text-[#333334] text-[18px] font-light break-words`}
                  // style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
                >
                  {item.children.map((child, i) => {
                  if (child.type === "link" && child.url) {
                    return (
                      <a
                        key={i}
                        href={child.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#333334] underline hover:text-[#700425]"
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
              </div>
            );
          
         case "image":
          return (
            <Image
            key={index}
            src={item.image.url || item.image.formats?.large?.url || item.image.formats?.medium?.url}
            alt={item.image.alternativeText || "Imagen de planeación"}
            width={item.image.width}
            height={item.image.height}
            className="my-4"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          );
          
        case "embed":
          return (
            <div key={index} className="my-6 mx-auto rounded-lg overflow-hidden w-full max-w-full px-4 sm:px-0" style={{ maxWidth: '720px' }}>
              <div 
                className="embed-container w-full aspect-video md:ml-[15%] md:w-[85%] " 
                dangerouslySetInnerHTML={{ __html: item.embed.html }}
              />
            </div>
          );

        case "list":
          return (
            <ol
              key={index}
              className={`${notoSans.className} list-decimal pl-6 mb-4`}
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
                className="text-[#333334] underline hover:text-[#700425]"
              >
                {item.children[0]?.text || "Enlace"}
              </Link>
            );z
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
        {/* <div style={{ width: '720px', maxWidth: '100%' }}> */}
        <div className="w-[720px] max-w-full">
          <h1
            className={`${notoSans.className} text-[#333334] text-[18px] font-light`}
            >
            INEA Ciudad de México |{" "}
            {post.data?.attributes?.Fecha
              ? fechaFun(post.data?.attributes?.Fecha)
              : ""}
          </h1>
        </div>
         <div className="m-auto my-6 rounded-lg overflow-hidden max-h-[420px] flex items-center justify-center">
            <Image
              src={post.data.attributes?.Imagen?.data?.attributes?.url}
              alt={post.data.attributes?.Nombre_de_la_Imagen || "Imagen sin título"}
              className="w-full h-full object-contain"
              width={1000}
              height={700}
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 720px"
            />
          </div>
        <div className="mb-6 mt-8 leading-7 overflow-hidden word-wrap: break-word overflow-wrap: break-word text-left" style={{ width: '720px', maxWidth: '100%' }}>{renderContenido(contenido)}</div>
      </PagSec>
    </div>
  );
}

export default Page;
