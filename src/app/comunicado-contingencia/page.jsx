import React from "react";
import { Open_Sans } from "next/font/google";
import PagSec from "@/components/PlantillaPagSec";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';

const open_Sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

async function loadPost() {
  const res = await fetch(
    `https://inea-web-backend.onrender.com/api/banner-contingencia?populate=%2A`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache'
        }
      }
  );
  const data = await res.json();
  return data;
}

async function ComunicadoContingencia() {
  const post = await loadPost();
  
  const fechaFun = (fechaAPI) => {
    const meses = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
    ];
    const fecha = new Date(fechaAPI);
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
    return `${dia + 1} de ${mes} de ${año}`;
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

  // Componentes personalizados para el Markdown
  const components = {
    h1: ({children}) => (
      <h1 className={`${open_Sans.className} font-bold text-2xl mb-4`}>{children}</h1>
    ),
    h2: ({children}) => (
      <h2 className={`${open_Sans.className} font-bold text-xl mb-3`}>{children}</h2>
    ),
    h3: ({children}) => (
      <h3 className={`${open_Sans.className} font-bold text-lg mb-2`}>{children}</h3>
    ),
    p: ({children}) => {
      // Si es un párrafo que contiene solo una imagen, no lo envolvemos en <p>
      if (React.isValidElement(children) && children.type === 'img') {
        return children;
      }
      return (
        <p className={`${open_Sans.className} text-[#404041] text-[16px] font-light mb-4`}>
          {children}
        </p>
      );
    },
    img: ({src, alt}) => {
    //   console.log("Image src:", src); // Para depuración
      
      if (!src){

        console.log("No hay imagen");
        return null;
      };

      return (
        <div className="my-6">
          <Image
            src={src}
            alt={alt || "Imagen del comunicado"}
            width={1000}
            height={700}
            className="w-full rounded-lg"
            unoptimized // Agregamos esta prop para manejar imágenes de Cloudinary
          />
        </div>
      );
    }
  };

  return (
    <div>
      <div className="mt-40 ml-[26rem] mb-10"></div>
      <PagSec
        Enlaces={noticias}
        Titulo={post.data?.attributes?.Titulo}
        Subtitulo={post.data?.attributes?.Subtitulo}
      >
        <h1 className={`${open_Sans.className} text-[#404041] text-[18px] font-light`}>
          INEA Ciudad de México |{" "}
          {post.data?.attributes?.Fecha
            ? fechaFun(post.data?.attributes?.Fecha)
            : ""}
        </h1>
        
        {/* Banner principal */}
        {post.data.attributes?.Banner?.data?.[0]?.attributes?.url && (
          <div className="m-auto my-6 rounded-lg max-h-[392px]">
            <Image
              src={post.data.attributes.Banner.data[0].attributes.url}
              alt={post.data.attributes?.Nombre_de_la_Imagen || "Imagen del banner"}
              className="w-full rounded-lg"
              width={1000}
              height={700}
              unoptimized
            />
          </div>
        )}

        <div className="mb-6 mt-12 leading-loose">
          <ReactMarkdown components={components}>
            {post.data.attributes.Contenido}
          </ReactMarkdown>
        </div>
      </PagSec>
    </div>
  );
}

export default ComunicadoContingencia;