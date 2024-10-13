"use client";
import Image from "next/image";
import Slider from "react-slick";
import { Open_Sans } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import Link from "next/link";

const open_Sans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
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
  const [leftValue, setLeftValue] = useState("20rem");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1850) {
        setLeftValue("20rem");
      } else if (window.innerWidth > 1630) {
        setLeftValue("15rem");
      } else if (window.innerWidth > 1500) {
        setLeftValue("10rem");
      } else if (window.innerWidth > 1330) {
        setLeftValue("5rem");
      } else {
        setLeftValue("1rem");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${className} !z-10 before:!content-none`}
      style={{
        ...style,
        display: "block",
        left: leftValue,
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="hidden arrow:block w-8 h-8 text-white bg-gray-700 bg-opacity-60 rounded-full hover:bg-opacity-75"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
}

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  const [rightValue, setRightValue] = useState("22rem");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1850) {
        setRightValue("22rem");
      } else if (window.innerWidth > 1630) {
        setRightValue("15rem");
      } else if (window.innerWidth > 1500) {
        setRightValue("10rem");
      } else if (window.innerWidth > 1330) {
        setRightValue("5rem");
      } else {
        setRightValue("1rem");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${className} !z-10 before:!content-none`}
      style={{
        ...style,
        display: "block",
        right: rightValue,
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white bg-gray-700 bg-opacity-60 rounded-full hover:bg-opacity-75 hidden arrow:block "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};

const CarouselBlog = ({ item }) => {
  const [datos, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://inea-web-backend.onrender.com/api/blogs?populate=*&pagination[limit]=4&sort[0]=Fecha:desc"
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

  // Configuracion del   carousel
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
          color: #790101; // Color verde para el punto activo
          transform: scale(1.2);
        }
      `}</style>
      <Slider {...settings} className="mx-auto !z-5">
        {datos ? (
          datos.map((item, index) => (
            <div key={index} className="px-4">
              <div className="w-full letras:w-full arrow:w-[750px] medida3:w-4/5 h-auto mx-auto flex flex-col tablet:flex-row tablet:w-[1142px] tablet:h-[390px] justify-between bg-white rounded-xl ">
                {/* Div de la imagen */}
                <div className=" m-auto w-auto arrow:w-[750px] rounded-xl max-h-[392px] overflow-hidden">
                  <Image
                    src={
                      item.attributes.Imagen?.data?.attributes?.formats?.small
                        ?.url
                    }
                    alt={item.attributes.Titulo}
                    className="w-full h-full object-contain rounded-xl "
                    width={750}
                    height={392}
                  />
                </div>

                {/* Div del texto */}
                <article
                  className={`${open_Sans.className} flex flex-col justify-between pt-4 mt-5 tablet:m-0 w-auto tablet:w-[390px] px-5 py-2 m-auto arrow:w-[750px]`}
                >
                  <p className="letras:text-base text-gray-700 text-sm mb-2 ">
                    {item.attributes.Fecha
                      ? fechaFun(item.attributes.Fecha)
                      : "No hay"}
                  </p>
                  <h2 className="letras:text-[28px] text-[20px] leading-tight font-medium mb-4 uppercase">
                    {truncateText(item.attributes.Titulo, 10)}
                  </h2>
                  <p className="letras:text-[17px] text-gray-900 font-light text-[14px] mb-4 uppercase">
                    {truncateText(item.attributes.Subtitulo, 20)}
                  </p>

                  <div className="overflow-visible !z-10">
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
      </Slider>
      <div className="flex justify-end m-auto">
        <Link
          className="mt-20 mr-[1rem] lg:mr-[5rem] xl:mr-[24rem] w-36 text-center bg-[#611232] text-white py-2 px-4 hover:bg-[#8a1b39] rounded-full block letras:text-base text-xs letras:w-44"
          href={"/#"}
        >
          <p className="font-light">Noticias Anteriores</p>
        </Link>
      </div>
    </>
  );
};

export default CarouselBlog;
