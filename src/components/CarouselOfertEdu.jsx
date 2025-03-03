"use client";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !z-10 before:!content-none`}
      style={{
        ...style,
        display: "block",
        left: "-45px",
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </div>
  )
}

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !z-10 before:!content-none`}
      style={{
        ...style,
        display: "block",
        right: "-35px",
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  );
};

const truncateText = (text, maxLetters) => {
  if (text.length > maxLetters) {
    return text.slice(0, maxLetters) + "...";
  }
  return text;
};

function CarouselOfertEdu() {
  const [slidesToShow, setSlidesToShow] = useState(3)

  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    // Esta lógica solo se ejecutará en el cliente.
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 500);
    };

    handleResize(); // Ejecuta una vez para establecer el estado inicial.

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 1210 ? 1 : 3)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const modalidades = [
    {
      name: "Alfabetización, primaria y secundaria presencial",
      image: "/presencial.png",
      url: "/presencial",
    },
    {
      name: "Primaria y secundaria en línea",
      image: "/aprendeenlinea.png",
      url: "/enlinea",
    },
    {
      name: "Examen único",
      image: "/examenUnico.png",
      url: "/examen-unico",
    },
    {
      name: "¿Qué opción me conviene?",
      image: "/queMeConviene.png",
      url: "/que-modalidad-elijo",
    },
    {
      name: "Exámenes diagnóstico",
      image: "/examenDiagnostico.png",
      url: "/examen-diagnostico",
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dotsClass: "slick-dots custom-dots",
    appendDots: (dots) => (
      <div style={{ bottom: "-25px" }}>
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }
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
          color: #611232; // Color rojo para el punto activo
          transform: scale(1.2);
        }

        * Estilos solo para desktop que igualan el gap */
        @media (min-width: 768px) {
          .desktop-carousel .slick-slide {
            padding: 0 16px;  /* Mitad del gap-8 (32px) */
          }
          
          .desktop-carousel .slick-list {
            margin: 0 -16px;  /* Negativo del padding */
          }
          
          /* Aseguramos que la card tiene las mismas dimensiones */
          .desktop-carousel .carousel-card {
            display: flex;
            flex-direction: column;
          }
        .carousel-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }

        .button-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      `}</style>

      <div className="p-2 pt-0">
        <div className="carrusel desktop-carousel">
          <Slider
            {...settings}
            className="bg-white border tablet:border-0 border-slate-300 tablet:shadow-none rounded-lg tablet:rounded-none mx-auto !z-5 w-full max-w-[260px] letras:max-w-[360px] ofertaEdu:max-w-[400px] tablet:max-w-[1150px] mt-8 px-4 tablet:px-0"
          >
            {modalidades.map((noticia, index) => (
              <Link
                href={`/oferta-educativa${noticia.url}`}
                key={index*36}
              >
                <div className="tablet:h-[450px]">
                  <div className={`border-0 tablet:border border-slate-300 tablet:shadow-none rounded-none tablet:rounded-lg h-full ${isSmallScreen ? "p-2" : "p-8"} flex flex-col justify-between carousel-card`}>
                    <div className="flex flex-col items-center w-full">
                      <img
                        className="w-full h-full object-cover rounded-lg"
                        src={noticia.image || "/placeholder.svg"}
                        alt={noticia.name}
                      />
                      <h3
                        className="mb-4 tablet:my-7 px-2 tablet:px-5 text-center text-[16px] tablet:text-[22px] text-[#333334] font-medium"
                      >
                        {truncateText(noticia.name, 25)}
                      </h3>
                    </div>
                    <div className={`button-container ${isSmallScreen ? 'pb-2' : ''}`}>
                      <button
                        className="bg-[#611232] text-white text-xs letras:text-[13.5px] py-2 px-4 rounded-full hover:bg-white hover:text-[#611232] border-2 border-[#611232] font-light"
                      >
                        Ir al sitio
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default CarouselOfertEdu

