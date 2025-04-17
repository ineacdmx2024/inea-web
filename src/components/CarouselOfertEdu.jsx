"use client"
import { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Link from "next/link"

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} !z-10 before:!content-none`}
      style={{ ...style, display: "block", left: "-45px" }}
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

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} !z-10 before:!content-none`}
      style={{ ...style, display: "block", right: "-35px" }}
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
  )
}

const truncateText = (text, maxLetters) => {
  return text.length > maxLetters ? text.slice(0, maxLetters) + "..." : text
}

function CarouselOfertEdu() {
  const [slidesToShow, setSlidesToShow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 1210 ? 1 : 3)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const modalidades = [
    {
      name: "Alfabetización, primaria y secundaria presencial",
      image: "/presencial.webp",
      url: "/presencial",
    },
    {
      name: "Primaria y secundaria en línea",
      image: "/aprendeenlinea.webp",
      url: "/enlinea",
    },
    {
      name: "Examen único",
      image: "/examenunico.webp",
      url: "/examen-unico",
    },
    {
      name: "¿Qué opción me conviene?",
      image: "/queMeConviene.webp",
      url: "/que-modalidad-elijo",
    },
    {
      name: "Exámenes diagnóstico",
      image: "/examenDiagnostico.webp",
      url: "/examen-diagnostico",
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 1,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dotsClass: "slick-dots custom-dots",
    appendDots: dots => (
      <div className="custom-dots-wrapper">
        <ul className="slick-dots custom-dots">{dots}</ul>
      </div>
    ),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <>
      <style jsx global>{`
        .custom-dots-wrapper {
          margin-top: 0; /* Elimina el margen superior */
          padding: 0;
          position: absolute; /* Cambia a posición absoluta */
          bottom: 0; /* Coloca los puntos justo abajo del carrusel */
          left: 50%; /* Centra horizontalmente */
          transform: translateX(-50%); /* Ajuste fino para centrar */
        }

        .custom-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin: 0; /* Elimina cualquier margen adicional */
          padding: 0;
        }

        .custom-dots li {
          margin: 0 4px;
          display: inline-block;
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

      <div className="p-2 pt-0">
        <div className="carrusel desktop-carousel">
          <Slider
            {...settings}
            className="bg-white border tablet:border-0 border-slate-300 tablet:shadow-none rounded-lg tablet:rounded-none mx-auto !z-5 w-full max-w-[300px] letras:max-w-[360px] ofertaEdu:max-w-[400px] tablet:max-w-[1150px] mt-8 px-4 tablet:px-0"
          >
            {modalidades.map((noticia, index) => (
              <div key={index * 36} className="tablet:h-[450px] pt-4 tablet:pt-0">
                <Link href={`/oferta-educativa${noticia.url}`} className="block h-full">
                  <div className="border-0 tablet:border border-slate-300 tablet:shadow-none rounded-none tablet:rounded-lg h-full p-2 tablet:p-8 flex flex-col carousel-card">
                    <div className="image-container mb-4">
                      <img src={noticia.image || "/placeholder.svg"} alt={noticia.name} />
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                      <h3 className="mt-4 px-2 tablet:px-5 text-center text-[16px] tablet:text-[22px] text-[#333334] font-medium h-[32px]">
                        {truncateText(noticia.name, 37)}
                      </h3>
                      <div className="flex justify-center mt-10 tablet:mt-4">
                        <button className="bg-[#611232] text-white text-xs letras:text-[13.5px] py-2 px-4 rounded-full hover:bg-white hover:text-[#611232] border-2 border-[#611232] font-light">
                          Ir al sitio
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default CarouselOfertEdu
