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
      style={{ ...style, display: "block", left: "-45px" }}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5} stroke="currentColor"
        className="hidden arrow:block w-8 h-8 text-white bg-gray-700 bg-opacity-60 rounded-full hover:bg-opacity-75 mr-5">
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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5} stroke="currentColor"
        className="hidden arrow:block w-8 h-8 text-white bg-gray-700 bg-opacity-60 rounded-full hover:bg-opacity-75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  )
}

function SeccionLigasInte() {
  const [slidesToShow, setSlidesToShow] = useState(3)
  const router = useRouter()
  const [fijos, setFijos] = useState([])
  const [restantes, setRestantes] = useState([])

  const truncateText = (text, maxLength) =>
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 1210 ? 1 : 3)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const fetchFijos = async () => {
      const res = await fetch("https://inea-web-backend-cg20.onrender.com/api/i-enlaces?filters[Fijo][$eq]=true&populate=*")
      const data = await res.json()
      setFijos(data.data.map(item => ({
        id: item.id,
        titulo: item.attributes.Titulo,
        subtitulo: item.attributes.Subtitulo,
        contenido: item.attributes.Contenido,
        link: item.attributes.Link,
        slug: item.attributes.slug,
        imagen: item.attributes.Imagen?.data?.attributes?.formats?.large?.url,
      })))
    }

    const fetchRestantes = async () => {
      const res = await fetch("https://inea-web-backend-cg20.onrender.com/api/i-enlaces?filters[Fijo][$eq]=false&populate=*")
      const data = await res.json()
      setRestantes(data.data.map(item => ({
        id: item.id,
        titulo: item.attributes.Titulo,
        subtitulo: item.attributes.Subtitulo,
        contenido: item.attributes.Contenido,
        link: item.attributes.Link,
        slug: item.attributes.slug,
        imagen: item.attributes.Imagen?.data?.attributes?.url,
      })))
    }

    fetchFijos()
    fetchRestantes()
  }, [])

  const handleButtonClick = (item) => {
    if (item.link) {
      window.open(item.link, "_blank")
    } else if (item.slug) {
      router.push(`/home-enlaces-de-interes/${item.slug}`)
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dotsClass: "slick-dots custom-dots",
    appendDots: dots => (
      <div className="!mt-0 flex justify-center">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <>
      <style jsx global>{`
        .custom-dots li button:before {
          font-size: 12px;
          color: #aaa;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-dots li.slick-active button:before {
          color: #611232;
          transform: scale(1.3);
        }
        .slick-dots {
          margin: 0 !important;
          padding: 0 !important;
          position: relative !important;
          bottom: 0 !important;
        }
      `}</style>

      <div className="p-2 pt-0">
        {/* Carrusel fijo para desktop */}
        <div className="hidden tablet:flex justify-center items-start w-full max-w-[1150px] mx-auto gap-8">
          {fijos.map((fijo, i) => (
            <div key={i} className="w-1/3 cursor-pointer">
              <Link href={`/home-enlaces-de-interes/${fijo.slug}`} className="block h-full">
                <div className="border border-slate-300 rounded-lg tablet:h-[450px] p-6 flex flex-col justify-between carousel-card">
                  <div>
                    <div className="image-container mb-4">
                      <img src={fijo.imagen || "/placeholder.svg"} alt={fijo.titulo} />
                    </div>
                    <h3 className="mt-2 text-center text-[22px] text-[#333334] font-medium">
                      {truncateText(fijo.titulo, 37)}
                    </h3>
                  </div>
                  <div className="flex justify-center mt-4">
                    <button className="bg-[#611232] text-white text-sm py-2 px-4 rounded-full hover:bg-white hover:text-[#611232] border-2 border-[#611232] font-light">
                      Ir al sitio
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Carrusel para móvil */}
        <div className="tablet:hidden">
          <Slider {...settings}>
            {fijos.map((fijo, i) => (
              <div key={i} className="pt-4 px-4">
                <Link href={`/home-enlaces-de-interes/${fijo.slug}`} className="block h-full">
                  <div className="border border-slate-300 rounded-lg p-4 flex flex-col justify-between h-full carousel-card">
                    <div>
                      <div className="image-container mb-4">
                        <img src={fijo.imagen || "/placeholder.svg"} alt={fijo.titulo} />
                      </div>
                      <h3 className="text-center text-[16px] text-[#333334] font-medium">
                        {truncateText(fijo.titulo, 37)}
                      </h3>
                    </div>
                    <div className="flex justify-center mt-4">
                      <button className="bg-[#611232] text-white text-sm py-2 px-4 rounded-full hover:bg-white hover:text-[#611232] border-2 border-[#611232] font-light">
                        Ir al sitio
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        {/* Carrusel restante */}
        <div className="max-w-[1150px] mx-auto mt-8">
          <Slider {...settings}>
            {restantes.map((item, i) => (
              <div key={i} className="pt-4 px-4">
                <Link href={`/home-enlaces-de-interes/${item.slug}`} className="block h-full">
                  <div className="border border-slate-300 rounded-lg p-4 flex flex-col justify-between h-full tablet:h-[450px] carousel-card">
                    <div>
                      <div className="image-container mb-4">
                        <img src={item.imagen || "/placeholder.svg"} alt={item.titulo} />
                      </div>
                      <h3 className="text-center text-[16px] text-[#333334] font-medium">
                        {truncateText(item.titulo, 37)}
                      </h3>
                    </div>
                    <div className="flex justify-center mt-4">
                      <button className="bg-[#611232] text-white text-sm py-2 px-4 rounded-full hover:bg-white hover:text-[#611232] border-2 border-[#611232] font-light">
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
