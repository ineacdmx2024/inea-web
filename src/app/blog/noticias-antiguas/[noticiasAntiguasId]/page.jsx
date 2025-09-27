import { Noto_Sans } from "next/font/google";
import PagSec from "@/components/PlantillaPagSec";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import "./Noticias.css";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

async function loadPost(slug) {
  const res = await fetch(
    `https://inea-web-backend-production.up.railway.app/api/blogs/${slug}?populate=%2A`,
    {
      cache: "no-store",
      headers: { "Cache-Control": "no-cache" },
    }
  );
  return res.json();
}

async function loadEnlaces() {
  const resPineados = await fetch(
    `https://inea-web-backend-production.up.railway.app/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=true&populate=%2A`,
    {
      cache: "no-store",
      headers: { "Cache-Control": "no-cache" },
    }
  );
  const { data: enlacesPineados } = await resPineados.json();

  if (enlacesPineados.length < 3) {
    const resNoPineados = await fetch(
      `https://inea-web-backend-production.up.railway.app/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=false&populate=%2A&sort[0]=Fecha:desc`,
      {
        cache: "no-store",
        headers: { "Cache-Control": "no-cache" },
      }
    );
    const { data: enlacesNoPineados } = await resNoPineados.json();
    return [
      ...enlacesPineados,
      ...enlacesNoPineados.slice(0, 3 - enlacesPineados.length),
    ];
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
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
    return `${dia} de ${mes} de ${año}`;
  };

  const renderContenido = (contenido) =>
    contenido.map((item, index) => {
      // iframe embebido
      if (
        item.type === "paragraph" &&
        item.children?.length === 1 &&
        item.children[0].text?.includes("<iframe")
      ) {
        return (
          <div
            key={index}
            className="my-6 mx-auto rounded-lg overflow-hidden w-full px-2 sm:px-4 md:px-0 max-w-[720px]"
          >
            <div
              className="relative w-full h-0"
              style={{ paddingBottom: "56.25%" }}
            >
              <div
                className="absolute top-0 left-0 w-full h-full"
                dangerouslySetInnerHTML={{
                  __html: item.children[0].text.replace(
                    /<iframe/g,
                    '<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"'
                  ),
                }}
              />
            </div>
          </div>
        );
      }

      switch (item.type) {
        case "heading":
          return (
            <div
              key={index}
              className="w-full max-w-[720px] mx-auto overflow-hidden"
            >
              {React.createElement(
                `h${item.level}`,
                {
                  className: `${notoSans.className} text-[#333334] font-bold text-[${
                    21 - item.level
                  }px] break-words`,
                  style: { wordWrap: "break-word", overflowWrap: "break-word" },
                },
                item.children[0]?.text || ""
              )}
            </div>
          );

        case "paragraph":
          const textContent = item.children
            .map((child) => (child.type === "text" ? child.text : ""))
            .join("");
          if (textContent.trim() === "") return <br key={index} />;
          return (
            <div
              key={index}
              className="w-full max-w-[720px] mx-auto overflow-hidden"
            >
              <p className="text-[#333334] text-[18px] font-light break-words">
                {item.children.map((child, i) => {
                  if (child.type === "link" && child.url) {
                    return (
                      <a
                        key={i}
                        href={child.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#333334] underline hover:text-[#611432]"
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
                          textAlign: "left",
                          fontWeight: child.bold ? "bold" : "normal",
                          fontStyle: child.italic ? "italic" : "normal",
                          textDecoration: `${child.underline ? "underline" : ""}${
                            child.strikethrough ? " line-through" : ""
                          }`,
                        }}
                      >
                        {child.text}
                      </span>
                    );
                  }
                  return null;
                })}
              </p>
            </div>
          );

        case "image":
          return (
            <div
              key={index}
              className="w-full max-w-[720px] mx-auto my-4 flex justify-center"
            >
              <Image
                src={
                  item.image.url ||
                  item.image.formats?.large?.url ||
                  item.image.formats?.medium?.url
                }
                alt={item.image.alternativeText || "Imagen de la noticia"}
                width={item.image.width}
                height={item.image.height}
                className="w-full h-auto object-contain"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 720px"
              />
            </div>
          );

        case "embed":
          return (
            <div
              key={index}
              className="my-6 mx-auto rounded-lg overflow-hidden w-full max-w-[720px] px-4 sm:px-0"
            >
              <div
                className="embed-container w-full aspect-video"
                dangerouslySetInnerHTML={{ __html: item.embed.html }}
              />
            </div>
          );

        case "list":
          return (
            <ol
              key={index}
              className={`${notoSans.className} list-decimal pl-6 mb-4 max-w-[720px] mx-auto`}
            >
              {item.children.map((li, liIndex) => (
                <li key={liIndex}>{li.children[0]?.text || ""}</li>
              ))}
            </ol>
          );

        case "quote":
          return (
            <blockquote
              key={index}
              className="border-l-4 border-gray-500 pl-4 italic text-[#333334] my-4 max-w-[720px] mx-auto"
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
              className="text-[#333334] underline hover:text-[#611432]"
            >
              {item.children[0]?.text || "Enlace"}
            </Link>
          );

        default:
          return null;
      }
    });

  const noticias = enlaces.map((item) => ({
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
        <div className="w-full max-w-[720px] mx-auto">
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
            src={
              post.data.attributes?.Imagen?.data?.attributes?.url || "/placeholder.png"
            }
            alt={
              post.data.attributes?.Nombre_de_la_Imagen || "Imagen sin título"
            }
            className="w-full h-full object-contain"
            width={1000}
            height={700}
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 720px"
          />
        </div>

        <div className="mb-6 mt-8 leading-7 text-left w-full max-w-[720px] mx-auto">
          {renderContenido(contenido)}
        </div>
      </PagSec>
    </div>
  );
}

export default Page;
