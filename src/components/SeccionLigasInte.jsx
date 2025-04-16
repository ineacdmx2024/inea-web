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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5} stroke="currentColor"
        className="hidden arrow:block w-8 h-8 text-white bg-gray-700 bg-opacity-60 rounded-full hover:bg-opacity-75 mr-5">
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
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) return text.substring(0, maxLength) + "..."
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
    const fetchData = async (url, setter) => {
      const res = await fetch(url)
      const data = await res.json()
      const enlacesData = data.data.map(item => ({
        id: item.id,
        titulo: item.attributes.Titulo,
        subtitulo: item.attributes.Subtitulo,
        contenido: item.attributes.Contenido,
        link: item.attributes.Link,
        slug: item.attributes.slug,
        imagen: item.attributes.Imagen?.data?.attributes?.formats?.large?.url || item.attributes.Imagen?.data?.attributes?.url,
      }))
      setter(enlacesData)
    }

    fetchData("https://inea-web-backend-cg20.onrender.com/api/i-enlaces?filters[Fijo][$eq]=true&populate=*", setFijos)
    fetchData("https://inea-web-backend-cg20.onrender.com/api/i-enlaces?filters[Fijo][$eq]=false&populate=*", setRestantes)
  }, [])

  const handleButtonClick = (item) => {
    if (item?.link) {
      window.open(item.link, "_blank")
    } else if (item?.slug) {
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
    appendDots: dots => <></>,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <>
      <style jsx global>{`
        .custom-dots {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          width: 100%;
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
        }
        .custom-dots li.slick-active button:before {
          color: #611232;
          transform: scale(1.2);
        }
      `}</style>

      <div className="p-2 pt-0">
        <div className="carrusel desktop-carousel">
          <Slider {...settings}>
            {restantes.map((restantes, index) => (
              <div key={index}>
                <Link href={`/home-enlaces-de-interes/${restantes.slug}`} className="block">
                  <div className="carousel-card">
                    <img src={restantes.imagen || "/placeholder.svg"} alt={restantes.titulo} />
                    <h3>{truncateText(restantes.titulo, 37)}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
          <div className="custom-dots-container">
            <ul className="custom-dots"></ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default SeccionLigasInte
