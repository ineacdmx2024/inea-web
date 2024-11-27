import { Open_Sans } from "next/font/google";
import Breadcrumb from "@/components/Breadcrumb";
import PagSec from "@/components/PlantillaPagSec";
import Image from "next/image";
import React from "react";

const open_Sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

async function loadPost(slug) {
  const res = await fetch(
    `https://inea-web-backend.onrender.com/api/blogs/${slug}?populate=%2A`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache'
      }
    }
  );
  const data = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 3000));
  // console.log("Datos: ", data);
  return data;
}

async function Page({ params }) {
  const post = await loadPost(params.noticiasAntiguasId);

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
    return `${dia + 1} de ${mes} de ${año}`;
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
              className: `${open_Sans.className} font-bold text-[${
                21 - item.level
              }px]`,
            },
            item.children[0]?.text || ""
          );
        case "paragraph":
          const textContent = item.children.map((child) => child.text).join("");
          if (textContent.trim() === "") {
            // Manejo de párrafos vacíos: agrega un salto de línea visual
            return <br key={index} />;
          }
          return (
            <p
              key={index}
              className={`${open_Sans.className} text-[#404041] text-[16px] font-light`}
            >
              {item.children.map((child, i) => (
                <span
                  key={i}
                  style={{
                    fontWeight: child.bold ? "bold" : "normal",
                    fontStyle: child.italic ? "italic" : "normal",
                    textDecoration: `${child.underline ? "underline" : ""} ${
                      child.strikethrough ? "line-through" : ""
                    }`,
                  }}
                >
                  {child.text}
                </span>
              ))}
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
              className="border-l-4 border-gray-500 pl-4 italic text-gray-600 my-4"
            >
              {item.children[0]?.text || ""}
            </blockquote>
          );
        default:
          return null;
      }
    });
  };

  const noticias = [
    {
      title: "Explorando las Estrellas",
      imageSrc: "/imagePrueba/interes1.jpg",
      link: "https://example.com/article/explorando-las-estrellas",
      caption: "Un viaje por el cosmos",
      date: "2024-01-12",
      buttonText: "Ir al sitio",
      description:
        "Sumérgete en los misterios del universo y descubre los secretos de las estrellas.",
    },
    {
      title: "El Arte del Minimalismo",
      imageSrc: "/imagePrueba/interes2.jpg",
      link: "https://example.com/article/arte-del-minimalismo",
      caption: "Menos es más",
      date: "2024-03-05",
      buttonText: "Ir al sitio",
      description:
        "Descubre cómo el minimalismo puede llevar a una vida más plena al enfocarse en lo que realmente importa.",
    },
    {
      title: "Innovaciones Tecnológicas 2024",
      imageSrc: "/imagePrueba/interes3.jpg",
      link: "https://example.com/article/innovaciones-tecnologicas-2024",
      caption: "El futuro está aquí",
      date: "2024-07-19",
      buttonText: "Ir al sitio",
      description:
        "Una mirada a los avances tecnológicos más innovadores que moldearán el año que viene.",
    },
  ];

  return (
    <div>
      <div className="ml-[26rem] mb-10"></div>
      <PagSec
        Enlaces={noticias}
        Titulo={post.data?.attributes?.Titulo}
        Subtitulo={post.data?.attributes?.Subtitulo}
      >
        <h1
          className={`${open_Sans.className} text-[#404041] text-[18px] font-light`}
        >
          INEA Ciudad de México |{" "}
          {post.data?.attributes?.Fecha
            ? fechaFun(post.data?.attributes?.Fecha)
            : ""}
        </h1>
        <div className="m-auto my-6 rounded-lg max-h-[392px]">
          <Image
            src={
              post.data.attributes?.Imagen?.data?.attributes?.formats?.large
                ?.url
            }
            alt={
              post.data.attributes?.Nombre_de_la_Imagen || "Imagen sin título"
            }
            className="w-full rounded-lg"
            width={1000}
            height={700}
          />
        </div>
        <div className="mb-6 mt-12 leading-loose">{renderContenido(contenido)}</div>
      </PagSec>
    </div>
  );
}

export default Page;
