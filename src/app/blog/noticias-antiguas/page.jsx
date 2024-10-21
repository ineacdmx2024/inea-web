"use client";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const open_Sans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

const truncateText = (text, maxLetters) => {
  if (text.length > maxLetters) {
    return text.slice(0, maxLetters) + "...";
  }
  return text;
};

function NoticiasAntiguas({ item }) {
  // Implementacion de la API
  const noticias = [
    {
      title: "Explorando las Estrellas",
      image: "/imagePrueba/interes1.jpg",
      link: "https://example.com/article/explorando-las-estrellas",
      caption: "Un viaje por el cosmos",
      date: "2024-01-12",
      description:
        "Sumérgete en los misterios del universo y descubre los secretos de las estrellas.",
    },
    {
      title: "El Arte del Minimalismo",
      image: "/imagePrueba/interes2.jpg",
      link: "https://example.com/article/arte-del-minimalismo",
      caption: "Menos es más",
      date: "2024-03-05",
      description:
        "Descubre cómo el minimalismo puede llevar a una vida más plena al enfocarse en lo que realmente importa.",
    },
    {
      title: "Innovaciones Tecnológicas 2024",
      image: "/imagePrueba/interes3.jpg",
      link: "https://example.com/article/innovaciones-tecnologicas-2024",
      caption: "El futuro está aquí",
      date: "2024-07-19",
      description:
        "Una mirada a los avances tecnológicos más innovadores que moldearán el año que viene.",
    },
  ];

  const [datos, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://inea-web-backend.onrender.com/api/blogs?populate=*&sort[0]=Fecha:desc"
      );
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Llama la función para obtener los datos
  }, []); // El array vacío hace que se ejecute solo una vez al montarse el componente

  const fechaFun = (fechaAPI) => {
    const fechaApi = fechaAPI;

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

    const fecha = new Date(fechaApi);

    const diaSemana = diasSemana[fecha.getDay()];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();

    return `${diaSemana}, ${dia} de ${mes} de ${año}`;
  };

  return (
    <main>
      {/* Barra separadora */}
      <div className="mx-auto mt-44 mb-16 w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px]">
        <h1 className="text-2xl font-medium text-slate-700 mb-2 letras:text-3xl ">
          Noticias Anteriores
        </h1>
        <div className="flex items-center">
          <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="mx-auto mt-20 mb-16 w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px] flex flex-row gap-8">
        {/* Todas las Noticias */}
        <div className="w-2/3 grid grid-cols-2 grid-flow-row gap-4">
          {datos ? (
            datos.map((item, index) => (
              <div key={index} className="px-0">
                <div className="w-full h-auto tablet:h-[450px] rounded-xl border border-slate-300 ">
                  {/* Div de la imagen */}
                  <div className=" m-auto rounded-xl max-h-[392px]">
                    <Image
                      src={
                        item.attributes.Imagen?.data?.attributes?.formats?.small
                          ?.url
                      }
                      alt={
                        item.attributes.Nombre_de_la_Imagen ||
                        "Imagen sin título"
                      }
                      className="w-full h-[208px] rounded-xl"
                      width={350}
                      height={258}
                    />
                  </div>

                  {/* Div del texto */}
                  <article
                    className={`${open_Sans.className} flex flex-col justify-between pt-4 mt-5 tablet:m-0 w-1/2 tablet:w-[390px] px-5 py-2 m-auto arrow:w-[750px]`}
                  >
                    <p className="letras:text-base text-gray-700 text-sm mb-2 ">
                      {item.attributes.Fecha
                        ? fechaFun(item.attributes.Fecha)
                        : "No hay"}
                    </p>
                    <h2 className="letras:text-[23px] text-[20px] leading-tight font-medium mb-4 uppercase">
                      {truncateText(item.attributes.Titulo, 65)}
                    </h2>
                    {/* <p className="letras:text-[17px] text-gray-900 font-light text-[14px] mb-4 uppercase">
                      {truncateText(item.attributes.Subtitulo, 20)}
                    </p> */}

                    <div className="overflow-visible !z-10 w-full h-auto">
                      <button className="m-auto letras:ml-auto bg-[#611232] text-white py-3 px-3 hover:bg-[#8a1b39] rounded-full block">
                        <p className="text-xs letras:text-[14.5px] font-light">
                          Continuar leyendo
                        </p>
                      </button>
                    </div>
                  </article>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Cargando noticias...</p>
          )}
        </div>

        {/* Ligas de interes */}
        <div className="w-1/3 bg-white">
          {/* Barra separadora */}
          <div className="mx-auto mt-2 mb-8 w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-full">
            <h1 className="text-2xl font-medium text-slate-700 mb-2 ">
              Ligas de interes
            </h1>
            <div className="flex items-center">
              <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
          </div>
          <div className="fijas !z-5 w-full mx-auto flex flex-col gap-4 justify-center">
            {noticias.map((noticia, index) => (
              <div key={index} className="px-4 w-full">
                <div className="border border-slate-300 h-[420px] rounded-lg p-8 flex flex-col justify-between">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-60 h-auto object-cover rounded-lg"
                      src={noticia.image}
                      alt={noticia.title}
                    />
                    <h3 className="my-7 px-4 text-center text-[22px] text-slate-500 font-medium capitalize">
                      {noticia.title}
                    </h3>
                  </div>
                  <button className="bg-[#611232] text-white text-xs letras:text-[14.5px] font-light py-3 px-4 rounded-full hover:bg-[#8a1b39] mx-auto block">
                    Ir al sitio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default NoticiasAntiguas;
