"use client"
import DetalleEnlace from "@/app/home-enlaces-de-interes/[home-enlace-interesId]/page"
import { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRouter } from "next/navigation"
import { Montserrat } from "next/font/google"
import Link from "next/link"
import Image from "next/image"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

function PrevArrow(props) {
  const { className, style, onClick } = props
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
        className="hidden arrow:block w-8 h-8 text-white bg-gray-700 bg-opacity-60 rounded-full hover:bg-opacity-75 mr-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </div>
  )
}

const NextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} !z-10 before:!content-none ml-5`}
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
  )
}

function SeccionLigasInte() {
  const [slidesToShow, setSlidesToShow] = useState(3)
  const router = useRouter()
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "..."
    }
    return text
  }

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 1210 ? 1 : 3)
      setIsSmallScreen(window.innerWidth <= 500)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const [fijos, setFijos] = useState([])
  const [restantes, setRestantes] = useState([])

  useEffect(() => {
    const fetchFijos = async () => {
      const res = await fetch("https://inea-web-backend-cg20.onrender.com/api/i-enlaces?filters[Fijo][$eq]=true&populate=*")
      const data = await res.json()
      const enlacesData = data.data.map((item) => ({
        id: item.id,
        titulo: item.attributes.Titulo,
        subtitulo: item.attributes.Subtitulo,
        contenido: item.attributes.Contenido,
        link: item.attributes.Link,
        slug: item.attributes.slug,
        imagen: item.attributes.Imagen?.data?.attributes?.formats?.large?.url,
      }))
      setFijos(enlacesData)
    }

    const fetchEnlaces = async () => {
      const res = await fetch("https://inea-web-backend-cg20.onrender.com/api/i-enlaces?filters[Fijo][$eq]=false&populate=*")
      const data = await res.json()
      const enlacesData2 = data.data.map((item) => ({
        id: item.id,
        titulo: item.attributes.Titulo,
        subtitulo: item.attributes.Subtitulo,
        contenido: item.attributes.Contenido,
        link: item.attributes.Link,
        slug: item.attributes.slug,
        imagen: item.attributes.Imagen?.data?.attributes?.url,
      }))
      setRestantes(enlacesData2)
    }

    fetchFijos()
    fetchEnlaces()
  }, [])

  const handleButtonClick = (item) => {
    if (item?.link) {
      window.open(item.link, "_blank")
    } else if (item?.slug) {
      router.push(`/home-enlaces-de-interes/${item.slug}`)
    } else {
      console.log("El objeto 'item' no está bien definido:", item)
    }
  }

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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul style={{ margin: "0", padding: "0", display: "flex", justifyContent: "center" }}>{dots}</ul>
      </div>
    ),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <>
      <style jsx global>{`
        .custom-dots {
          bottom: -20px;
          display: flex;
          justify-content: center;
          width: 100%;
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

        @media (min-width: 768px) {
          .desktop-carousel .slick-slide {
            padding: 0 16px;
          }

          .desktop-carousel .slick-list {
            margin: 0 -16px;
          }

          .desktop-carousel .carousel-card {
            height: 450px;
          }
        }

        @media (max-width: 767px) {
          .slick-slider {
            padding-bottom: 30px;
          }

          .custom-dots {
            bottom: -52px;
          }
        }

        .carousel-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          border-radius: 1rem !important;
        }

        .image-container {
          width: 100%;
          max-width: 296px;
          height: 236.8px;
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          margin: 0 auto;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1rem;
        }

        @media (max-width: 767px) {
          .image-container {
            width: 100%;
            height: 0;
            padding-bottom: 80%;
            max-width: none;
          }

          .image-container img {
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      `}</style>

      <div className="p-2 pt-0 mt-12">
        <div className="fijas justify-center items-center !z-5 w-4/5 tablet:w-[1150px] mx-auto hidden tablet:flex gap-8">
          {fijos.map((fijo, index) => (
            <div className="w-1/3 cursor-pointer" key={index}>
              <Link href={`/home-enlaces-de-interes/${fijo.slug}`} target="_self" className="block h-full">
                <div className="border border-slate-300 shadow-none rounded-[1rem] h-[450px] p-2 tablet:p-8 flex flex-col carousel-card">
                  <div className="image-container mb-4">
                    <img src={fijo.imagen || "/placeholder.svg"} alt={fijo.titulo} />
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <h3 className="mt-4 px-2 tablet:px-5 text-center text-[16px] tablet:text-[22px] text-[#333334] font-medium w-[17ch] break-normal h-[32px]">
                      {truncateText(fijo.titulo, 37)}
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
        </div>

        <div className="carrusel tablet:hidden px-4">
          <Slider {...settings} className="mx-auto w-full max-w-sm pb-10">
            {fijos.map((fijo, index) => (
              <div key={index} className="pt-4 tablet:pt-0">
                <Link href={`/home-enlaces-de-interes/${fijo.slug}`} target="_self" className="block h-full">
                  <div className="border border-slate-300 shadow-none rounded-[1rem] h-full p-2 tablet:p-8 flex flex-col carousel-card">
                    <div className="image-container mb-4">
                      <img src={fijo.imagen || "/placeholder.svg"} alt={fijo.titulo} />
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                      <h3 className="mt-4 px-2 tablet:px-5 text-center text-[16px] tablet:text-[22px] text-[#333334] font-medium w-[17ch] break-normal h-[32px]">
                        {truncateText(fijo.titulo, 37)}
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

        <div className="carrusel desktop-carousel">
          <Slider {...settings} className="bg-white border tablet:border-0 border-slate-300 rounded-[1rem] mx-auto !z-5 w-full max-w-[300px] letras:max-w-[360px] ofertaEdu:max-w-[400px] tablet:max-w-[1150px] mt-8 px-4 tablet:px-0">
            {restantes.map((restante, index) => (
              <div key={index} className="tablet:h-[450px] pt-4 tablet:pt-0">
                <Link href={`/home-enlaces-de-interes/${restante.slug}`} target="_self" className="block h-full">
                  <div className="border border-slate-300 shadow-none rounded-[1rem] h-full p-2 tablet:p-8 flex flex-col carousel-card">
                    <div className="image-container mb-4">
                      <img src={restante.imagen || "/placeholder.svg"} alt={restante.titulo} />
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                      <h3 className="mt-4 px-2 tablet:px-5 text-center text-[16px] tablet:text-[22px] text-[#333334] font-medium w-[17ch] break-normal h-[32px]">
                        {truncateText(restante.titulo, 37)}
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

export default SeccionLigasInte
