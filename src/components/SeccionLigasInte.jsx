"use client"
import DetalleEnlace from "@/app/home-enlaces-de-interes/[home-enlace-interesId]/page"
import { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRouter } from "next/navigation"
import { Montserrat } from "next/font/google"
import Link from "next/link"

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
  const router = useRouter() // Hook de Next.js para navegación dinámica

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

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const [fijos, setFijos] = useState([])
  const [restantes, setRestantes] = useState([])

  useEffect(() => {
    const fetchFijos = async () => {
      //const res = await fetch("https://inea-web-backend.onrender.com/api/i-enlaces?filters[Fijo][$eq]=true&populate=*")
      const res = await fetch("https://habitya.life/api/i-enlaces?filters[Fijo][$eq]=true&populate=*")
      const data = await res.json()
      const enlacesData = data.data.map((item) => ({
        id: item.id,
        titulo: item.attributes.Titulo,
        subtitulo: item.attributes.Subtitulo, // Verifica si 'Subtitulo' existe
        contenido: item.attributes.Contenido, // Verifica si 'Contenido' existe
        link: item.attributes.Link,
        slug: item.attributes.slug, // Asegúrate de que 'slug' esté presente
        imagen: item.attributes.Imagen?.data?.attributes?.formats?.large?.url,
      }))
      setFijos(enlacesData)
    }

    const fetchEnlaces = async () => {
      //const res = await fetch("https://inea-web-backend.onrender.com/api/i-enlaces?filters[Fijo][$eq]=false&populate=*")
      const res = await fetch("https://habitya.life/api/i-enlaces?filters[Fijo][$eq]=false&populate=*")
      const data = await res.json()
      const enlacesData2 = data.data.map((item) => ({
        id: item.id,
        titulo: item.attributes.Titulo,
        subtitulo: item.attributes.Subtitulo, // Verifica si 'Subtitulo' existe
        contenido: item.attributes.Contenido, // Verifica si 'Contenido' existe
        link: item.attributes.Link,
        slug: item.attributes.slug, // Asegúrate de que 'slug' esté presente
        imagen: item.attributes.Imagen?.data?.attributes?.url,
      }))
      setRestantes(enlacesData2)
    }

    fetchFijos()
    fetchEnlaces()
  }, [])

  const handleButtonClick = (item) => {
    if (item && item.link) {
      window.open(item.link, "_blank") // Abre en una nueva pestaña
    } else if (item && item.slug) {
      ;<DetalleEnlace slug={item.slug} />
      router.push(`/home-enlaces-de-interes/${item.slug}`)

      console.log(item.slug.toString())
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
      <div style={{ bottom: "-25px", display: "flex", justifyContent: "center" }}>
        <ul style={{ margin: "0", padding: "0", display: "flex", justifyContent: "center" }}> {dots} </ul>
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
          display: flex;
          justify-content: center;
          width: 100%;
          padding: 0;
          margin: 0;
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
        
        /* Estilos solo para desktop que igualan el gap */
        @media (min-width: 768px) {
          .desktop-carousel .slick-slide {
            padding: 0 16px;  /* Mitad del gap-8 (32px) */
          }
          
          .desktop-carousel .slick-list {
            margin: 0 -16px;  /* Negativo del padding */
          }
          
          /* Aseguramos que la card tiene las mismas dimensiones */
          .desktop-carousel .carousel-card {
            height: 450px;
            display: flex;
            flex-direction: column;
          }
          
          /* Dimensiones fijas para imágenes en desktop */
          @media (min-width: 768px) {
            .image-container {
              width: 295.5px;
              height: 221.81px;
              margin: 0 auto;
            }
          }
        }
        
        /* Estilos para mobile */
        @media (max-width: 767px) {
          .slick-slider {
            padding-bottom: 30px;
          }
        }
      `}</style>


      <div className="p-2 pt-0">
        {/* Desktop fixed links */}
        <div className="fijas justify-center items-center !z-5 w-4/5 tablet:w-[1150px] mx-auto hidden tablet:flex gap-8">
          {fijos.map((fijos, index) => (
            <div className="w-1/3 cursor-pointer" key={index}>
              <Link
                href={`/home-enlaces-de-interes/${fijos.slug}`}
                target="_self"
                className="block h-full"
              >
                <div className={`border border-slate-300 shadow-none rounded-lg h-[450px] ${isSmallScreen ? "p-2" : "p-8"} flex flex-col`}>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full aspect-[4/3] relative mb-4 image-container">
                      <img
                        className="w-full h-full object-cover rounded-lg"
                        src={fijos.imagen || "/placeholder.svg"}
                        alt={fijos.titulo}
                      />
                    </div>
                    <h3
                      className={` my-4 px-2 text-center text-[16px] tablet:text-[22px] text-[#333334] font-medium`}
                    >
                      {truncateText(fijos.titulo, 21)}
                    </h3>
                  </div>
                  <button
                    className="bg-[#611232] text-white text-xs letras:text-[13.5px] py-2 px-4 rounded-full hover:bg-white hover:text-[#611232] border-2 border-[#611232] mx-auto block font-light mt-auto"
                  >
                    Ir al sitio
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile fixed links carousel*/}
        <div className="carrusel tablet:hidden">
          <Slider
            {...settings}
            className="bg-white border tablet:border-0 border-slate-300 tablet:shadow-none rounded-lg tablet:rounded-none mx-auto !z-5 w-full max-w-[300px] letras:max-w-[360px] ofertaEdu:max-w-[400px] tablet:max-w-[1150px] mt-8 px-4 tablet:px-0"
          >
            {fijos.map((fijos, index) => (
              <div key={index} className="pt-4 tablet:px-8 tablet:pt-0">
                <Link
                  href={`/home-enlaces-de-interes/${fijos.slug}`}
                  target="_self"
                  className="block h-full"
                >
                  <div className="border-0 tablet:border border-slate-300 tablet:shadow-none rounded-none tablet:rounded-lg h-full p-2 flex flex-col">
                    <div className="w-full aspect-square relative mb-2">
                      <img
                        className="w-full h-full object-cover rounded-lg"
                        src={fijos.imagen || "/placeholder.svg"}
                        alt={fijos.titulo}
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <h3
                        className="mt-4 px-2 tablet:px-5 text-center text-[16px] tablet:text-[22px] text-[#333334] font-medium"
                      >
                        {truncateText(fijos.titulo, 21)}
                      </h3>
                      <div className="flex-grow min-h-[30px]"></div>
                      <button
                        className="bg-[#611232] text-white text-xs letras:text-[13.5px] py-2 px-4 rounded-full hover:bg-white hover:text-[#611232] border-2 border-[#611232] mx-auto block font-light mb-2"
                      >
                        Ir al sitio
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        {/* Remaining links carousel */}
        <div className="carrusel desktop-carousel">
          <Slider
            {...settings}
            className="bg-white border tablet:border-0 border-slate-300 tablet:shadow-none rounded-lg tablet:rounded-none mx-auto !z-5 w-full max-w-[300px] letras:max-w-[360px] ofertaEdu:max-w-[400px] tablet:max-w-[1150px] mt-8 px-4 tablet:px-0"
          >
            {restantes.map((restantes, index) => (
              <div key={index} className="tablet:h-[450px] pt-4 tablet:pt-0">
                <Link
                  href={`/home-enlaces-de-interes/${restantes.slug}`}
                  target="_self"
                  className="block h-full"
                >
                  <div className="border-0 tablet:border border-slate-300 tablet:shadow-none rounded-none tablet:rounded-lg h-full p-2 tablet:p-8 flex flex-col carousel-card">
                    <div className="w-full aspect-square tablet:aspect-[4/3] relative mb-4 image-container">
                      <img
                        className="w-full h-full object-cover rounded-lg"
                        src={restantes.imagen || "/placeholder.svg"}
                        alt={restantes.titulo}
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <h3
                        className="mt-4 px-2 tablet:px-5 text-center text-[16px] tablet:text-[22px] text-[#333334] font-medium"
                      >
                        {truncateText(restantes.titulo, 21)}
                      </h3>
                      <div className="flex-grow min-h-[30px]"></div>
                      <button
                        className="bg-[#611232] text-white text-xs letras:text-[13.5px] py-2 px-4 rounded-full hover:bg-white hover:text-[#611232] border-2 border-[#611232] mx-auto block font-light mb-2"
                      >
                        Ir al sitio
                      </button>
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