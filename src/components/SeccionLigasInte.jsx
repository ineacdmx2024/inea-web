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
      className={`${className} !z-10 before:!content-none ml-5`}
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

const truncateText = (text, maxLetters) =>
  text.length > maxLetters ? text.slice(0, maxLetters) + "..." : text

function SeccionLigasInt() {
  const [slidesToShow, setSlidesToShow] = useState(3)
  const [sliderRef, setSliderRef] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 1210 ? 1 : 3)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const links = [
    { name: "Ministerio de Educación", url: "https://www.mineduc.gob.ec/" },
    { name: "Inscripción Online", url: "https://www.inscripcionesonline.com" },
    { name: "Noticias de Educación", url: "https://www.educacionnoticias.com" },
    { name: "Guía de Estudio", url: "https://www.guiadeestudios.com" }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: dots => <></>, // Evitamos renderizar los dots aquí
    dotsClass: "hidden" // Ocultamos los dots por defecto del slider
  }

  return (
    <>
      <style jsx global>{`
        .custom-dots {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
        }
        .custom-dots li {
          margin: 0 4px;
        }
        .custom-dots li button:before {
          font-size: 12px;
          color: #ccc;
          opacity: 1;
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
            ref={setSliderRef}
            className="bg-white border tablet:border-0 border-slate-300 tablet:shadow-none rounded-lg tablet:rounded-none mx-auto !z-5 w-full max-w-[300px] letras:max-w-[360px] ofertaEdu:max-w-[400px] tablet:max-w-[1150px] mt-8 px-4 tablet:px-0"
          >
            {links.map((link, index) => (
              <div key={index} className="tablet:h-[450px] pt-4 tablet:pt-0">
                <Link href={link.url} className="block h-full">
                  <div className="border-0 tablet:border border-slate-300 tablet:shadow-none rounded-none tablet:rounded-lg h-full p-2 tablet:p-6 flex flex-col justify-between">
                    <h3 className="mt-2 px-2 tablet:px-5 text-center text-[16px] tablet:text-[22px] text-[#333334] font-medium">
                      {truncateText(link.name, 37)}
                    </h3>
                    <div className="flex justify-center mt-4">
                      <button className="bg-[#611232] text-white text-xs letras:text-[13.5px] py-2 px-4 rounded-full hover:bg-white hover:text-[#611232] border-2 border-[#611232] font-light">
                        Ir al sitio
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
          {/* Dots fuera del carrusel */}
          <ul className="custom-dots">
            {links.map((_, i) => (
              <li
                key={i}
                className={`mx-1 ${
                  sliderRef?.innerSlider?.state.currentSlide === i ? "slick-active" : ""
                }`}
                onClick={() => sliderRef?.slickGoTo(i)}
              >
                <button className="w-3 h-3 rounded-full bg-[#ccc]"></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SeccionLigasInt
