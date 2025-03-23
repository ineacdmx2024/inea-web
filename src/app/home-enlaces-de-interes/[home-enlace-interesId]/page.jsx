"use client";
import { Open_Sans } from "next/font/google";
import PagSec from "@/components/PlantillaPagSec";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
const open_Sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function DetalleEnlace(slug) {
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

  const [cont, setCont] = useState([]);
  console.log(slug.params["home-enlace-interesId"]);
  useEffect(() => {
    const Contenido = async () => {
      const res = await fetch(
        `http://localhost:1337/api/i-enlaces?filters[slug][$eq]=${slug.params["home-enlace-interesId"]}&populate=*`
      );
      const data = await res.json();
      const enlacesData = data.data.map((item) => ({
        titulo: item.attributes.Titulo,
        subtitulo: item.attributes.Subtitulo, // Verifica si 'Subtitulo' existe
        contenido: item.attributes.Contenido, // Verifica si 'Contenido' existe
        slug: item.attributes.slug, // Asegúrate de que 'slug' esté presente
        fecha: item.attributes?.Fecha,
        imagen: item.attributes.Imagen?.data?.attributes?.url,
        NomImg: item.attributes.Imagen?.data?.attributes?.name,
      }));
      setCont(enlacesData);
    };
    Contenido();
  }, []);

  //enlaces laterales
  const [enlacesL, setenlacesL] = useState([]);

  useEffect(() => {
    let enlaces = [];
    const fetchEnlacesL = async () => {
      const resPineados = await fetch(
        `http://localhost:1337/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=true&populate=%2A`
      );
      const { data: enlacesPineados } = await resPineados.json();
      if (enlacesPineados.length < 3) {
        const resNoPineados = await fetch(
          `http://localhost:1337/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=false&populate=%2A&sort[0]=Fecha:desc`
        );
        const { data: enlacesNoPineados } = await resNoPineados.json();

        const enlacesCompletados = [
          ...enlacesPineados,
          ...enlacesNoPineados.slice(0, 3 - enlacesPineados.length),
        ];
        enlaces = enlacesCompletados;
      } else {
        enlaces = enlacesPineados;
      }
      const enlacesLData = enlaces.map((item) => ({
        title: item.attributes.Titulo,
        imageSrc: item.attributes?.Imagen.data[0]?.attributes?.url,
        buttonText: "Ir al sitio",
        link: item.attributes.URL_Externo
          ? item.attributes.URL_Externo
          : `/enlaces-de-interes/${item.attributes.slug}`,
      }));
      setenlacesL(enlacesLData);
    };
    fetchEnlacesL();
  }, []);
  // Modificación en renderContenido

  const renderContenido = (contenido) => {
    return contenido.map((item, index) => {
      switch (item.type) {
        case "heading":
          return React.createElement(
            `h${item.level}`,
            {
              key: index,
              className: `${
                montserrat.className
              } text-[#333334] font-bold text-[${21 - item.level}px]`,
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
              className={` text-[#333334] text-[18px] font-light leading-[28px]`}
              //className={`${open_Sans.className} text-[#404041] text-[16px] font-light`}
            >
              {item.children.map((child, i) => {
                if (child.type === "link" && child.url) {
                  return (
                    <a
                      key={i}
                      href={child.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700"
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
                      style={{
                        fontWeight: child.bold ? "bold" : "normal",
                        fontStyle: child.italic ? "italic" : "normal",
                        textDecoration: `${
                          child.underline ? "underline" : ""
                        } ${child.strikethrough ? "line-through" : ""}`,
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
            <Image
              key={index}
              src={item.image.formats.large.url}
              alt={item.image.alternativeText || "Imagen de la noticia"}
              width={item.image.width}
              height={item.image.height}
              className="my-4"
            />
          );
        case "list":
          return (
            <ol
              key={index}
              className={`${montserrat.className} list-decimal pl-6 mb-4`}
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
              className="border-l-4 border-gray-500 pl-4 italic text-gray-600 my-4"
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
              className="text-blue-500 underline hover:text-blue-700"
            >
              {item.children[0]?.text || "Enlace"}
            </Link>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {cont.map((post, index) => (
        <div key={index} className="mb-10">
          <PagSec
            Enlaces={enlacesL}
            Titulo={post.titulo}
            Subtitulo={post.subtitulo}
            className="flex flex-col items-center space-y-6"
          >
            <div className="text-base font-medium text-gray-900">
              INEA Ciudad de México | {fechaFun(post.fecha)}
            </div>
            
            <div className="m-auto my-6 rounded-lg">
              <Image
                src={post.imagen || "/placeholder-image.jpg"}
                alt={post.NomImg || "Imagen de artículo"}
                width={1000}
                height={700}
                className="w-full h-[500px] object-cover rounded-lg shadow-none"
                priority
              />
            </div>

            <div className="prose lg:prose-xl mt-12 max-w-3xl text-gray-800 overflow-hidden" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', wordBreak: 'break-word', textAlign: 'justify' }}>
              {renderContenido(post.contenido)}
            </div>
          </PagSec>
        </div>
      ))}
    </div>
  );
}

export default DetalleEnlace;
