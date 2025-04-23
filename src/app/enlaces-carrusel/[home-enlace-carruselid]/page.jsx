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

function DetalleEnlace_CarruselBanner(slug) {
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
       `https://inea-web-backend-cg20.onrender.com/api/baner-principals?filters[slug][$eq]=${slug.params["home-enlace-carruselid"]}&populate=*`
      );
      const data = await res.json();
      const enlacesData = data.data.map((item) => ({
        titulo: item.attributes.Titulo,
        subtitulo: item.attributes.Subtitulo, // Verifica si 'Subtitulo' existe
        contenido: item.attributes.Contenido, // Verifica si 'Contenido' existe
        slug: item.attributes.slug, // Asegúrate de que 'slug' esté presente
        fecha: item.attributes?.Fecha,
        imagen: item.attributes.Imagen?.data?.attributes?.formats?.large?.url,
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

         `https://inea-web-backend-cg20.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=true&populate=%2A`
       
      );
      const { data: enlacesPineados } = await resPineados.json();
      if (enlacesPineados.length < 3) {
        const resNoPineados = await fetch(

         `https://inea-web-backend-cg20.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=false&populate=%2A&sort[0]=Fecha:desc`
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
              style={{ fontFamily: "IBM Plex Serif, serif" }}
              className={`font-body text-[#333334] text-[18px] font-thin tracking-wider`}
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
    <div>
      {cont.map((cont, index) => (
        <div key={index}>
          <div className="ml-[26rem] mb-10"></div>
          <PagSec
            Enlaces={enlacesL}
            Titulo={cont.titulo}
            Subtitulo={cont.subtitulo}
          >
            <h1
              className={`${montserrat.className} text-[#333334] text-[18px] font-light`}
            >
              INEA Ciudad de México | {cont.fecha ? fechaFun(cont.fecha) : ""}
            </h1>
            <div className="m-auto my-6 rounded-lg">
              <Image
                src={cont.imagen}
                alt={cont.NomImg || "Imagen sin título"}
                className="w-full rounded-lg"
                width={2880}
                height={700}
              />
            </div>
            <div className={`mb-6 mt-12 leading-7 font-serif font-thin`}>
              {renderContenido(cont.contenido)}
            </div>
          </PagSec>
        </div>
      ))}
    </div>
  );
  // Accede a los parámetros
}

export default DetalleEnlace_CarruselBanner;
