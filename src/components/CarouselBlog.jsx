"use client";
import Image from "next/image";
import Slider from "react-slick";
import { Open_Sans, Montserrat } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import Link from "next/link";

const open_Sans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

const truncateText = (text, maxWords) => {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }
  return text;
};

function PrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} !z-10 before:!content-none`}
      style={{
        ...style,
        display: "block",
        left: "10px",
        transform: "none",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="arrow:block w-8 h-8 text-white bg-gray-700 bg-opacity-60 rounded-full hover:bg-opacity-75"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} !z-10 before:!content-none`}
      style={{
        ...style,
        display: "block",
        right: "10px",
        transform: "none",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="arrow:block w-8 h-8 text-white bg-gray-700 bg-opacity-60 rounded-full hover:bg-opacity-75"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  );
}

const CarouselBlog = ({ item }) => {
  const [datos, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://inea-web-backend-cg20.onrender.com/api/blogs?populate=*&pagination[limit]=4&sort[0]=Fecha:desc"
      );
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error("Error al obtener los datos");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots custom-dots",
    appendDots: (dots) => (
      <div style={{ bottom: "-25px" }}>
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
  };

  const fechaFun = (fechaAPI) => {
    const diasSemana = [
      "domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado",
    ];
    const meses = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
    ];
    const fecha = new Date(fechaAPI);
    const diaSemana = diasSemana[fecha.getDay()];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();

    return `${diaSemana}, ${dia} de ${mes} de ${año}`;
  };

  return (
    <>
      <style jsx global>{`
        .custom-dots {
          bottom: -30px;
        }
        .custom-dots li {
          margin: 0 4px;
        }
        .custom-dots li button {
          border: none;
          background: none;
          padding: 0;
        }
        .custom-dots li button:before {
          font-size: 12px;
          color: #ccc;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-dots li.slick-active button:before {
          color: #611232;
          transform: scale(1.2);
        }
      `}</style>

      <Slider {...settings} className="mx-auto !z-5">
        {datos ? (
          datos.map((item, index) => (
            <div key={index} className="px-4">
              <div className="w-full letras:w-full arrow:w-[750px] medida3:w-4/5 h-auto mx-auto flex flex-col tablet:flex-row tablet:w-[1142px] tablet:h-[390px] justify-between bg-white rounded-xl ">
                {/* Imagen */}
                <div className="m-auto w-auto arrow:w-[750px] rounded-xl max-h-[200px] blog:max-h-[392px] overflow-hidden">
                  <Link
                    key={index}
                    href={`/blog/noticias-antiguas/${item.attributes.slug}`}
                  >
                    <Image 
                      src={item.attributes.Imagen?.data?.attributes?.url}
                      alt={item.attributes.Nombre_de_la_Imagen || "Imagen sin título"}
                      className="h-[200px] w-[500px] blog:w-full blog:h-full object-cover blog:object-fill rounded-xl"
                      width={950}
                      height={500}
                    />
                  </Link>
                </div>

                {/* Texto */}
                <Link
                  key={index}
                  href={`/blog/noticias-antiguas/${item.attributes.slug}`}
                >
                  <article
                    className={`${montserrat.className} h-auto blog:h-[390px] letras:h-auto flex flex-col justify-between pt-4 mt-5 tablet:m-0 w-auto tablet:w-[390px] tablet:px-5 px-0 py-2 m-auto arrow:w-[750px]`}
                  >
                    <p className="letras:text-base text-gray-700 text-sm mb-2">
                      {item.attributes.Fecha
                        ? fechaFun(item.attributes.Fecha)
                        : "No hay"}
                    </p>
                    <h2 className="letras:text-[28px] text-[20px] leading-tight font-medium mb-4 uppercase">
                      {truncateText(item.attributes.Titulo, 9)}
                    </h2>
                    <p className="letras:text-[17px] text-gray-900 font-light text-[14px] mb-4 uppercase">
                      {truncateText(item.attributes.Subtitulo, 18)}
                    </p>
                    <div className="overflow-visible !z-10">
                      <Link
                        className="text-center m-auto w-44 letras:ml-auto bg-[#611232] text-white py-3 hover:bg-white hover:text-[#611232] rounded-full border-2 border-[#611232] block"
                        href={`/blog/noticias-antiguas/${item.attributes.slug}`}
                      >
                        <p className="text-xs letras:text-[14.5px] font-light">
                          Continuar leyendo
                        </p>
                      </Link>
                    </div>
                  </article>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Cargando noticias...</p>
        )}
      </Slider>

     {/* Botón Noticias Anteriores alineado a la derecha, más cercano al blog */}
      <div className="w-full flex justify-end mt-4 px-4 tablet:px-0 max-w-[1142px] mx-auto">
        <Link
          className="w-40 text-center bg-[#611232] text-white py-2 px-4 hover:bg-white hover:text-[#611232] border-2 border-[#611232] rounded-full block text-sm letras:text-base"
          href={`/blog/noticias-antiguas/`}>
          <p className="font-light">Noticias Anteriores</p>
        </Link>
      </div>
    </>
  );
};

export default CarouselBlog;
