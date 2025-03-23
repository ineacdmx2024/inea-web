"use client"
import DetalleEnlace from "@/app/home-enlaces-de-interes/[home-enlace-interesId]/page"
import { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRouter } from "next/navigation"

function CarouselInicio() {
  const [slidesToShow, setSlidesToShow] = useState(1)  // Mostrar solo 1 imagen en pantalla pequeña
  const router = useRouter()

  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 1210 ? 1 : 1)  // Ajustar para tamaños grandes
      setIsSmallScreen(window.innerWidth <= 500)  // Detectar pantallas pequeñas
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
      const res = await fetch("https://habitya.life/api/baner-principals?filters[Fijo][$eq]=true&populate=*")
      const data = await res.json()
      const enlacesData = data.data.map((item) => ({
        id: item.id,
        contenido: item.attributes.Contenido,
        link: item.attributes.Link,
        slug: item.attributes.slug,
        imagen: item.attributes.Imagen?.data?.attributes?.formats?.large?.url,
      }))
      setFijos(enlacesData)
    }

    const fetchEnlaces = async () => {
      const res = await fetch("https://habitya.life/api/baner-principals?filters[Fijo][$eq]=false&populate=*")
      const data = await res.json()
      const enlacesData2 = data.data.map((item) => ({
        id: item.id,
        subtitulo: item.attributes.Subtitulo,
        contenido: item.attributes.Contenido,
        link: item.attributes.Link,
        slug: item.attributes.slug,
        imagen: item.attributes.Imagen?.data?.attributes?.formats?.large?.url,
      }))
      setRestantes(enlacesData2)
    }

    fetchFijos()
    fetchEnlaces()
  }, [])

  const handleButtonClick = (item) => {
    if (item && item.link) {
      window.open(item.link, "_blank")
    } else if (item && item.slug) {
      router.push(`/home-enlaces-de-interes/${item.slug}`)
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
      <div style={{ bottom: "-25px" }}>
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
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
    color: #000000;
    opacity: 1;
    transition: all 0.3s ease;
  }
  .custom-dots li.slick-active button:before {
    color: #61232;
    transform: scale(1.2);
  }

  /* Estilos para hacer que las imágenes sean responsivas */
  .carousel-image {
    width: 100%;  /* La imagen ocupa todo el ancho del contenedor */
    height: auto;  /* Ajusta la altura de la imagen proporcionalmente */
    object-fit: cover;  /* Mantiene la proporción y cubre el contenedor */
  }

  /* Asegurar que el contenedor tenga una relación de aspecto */
  .carousel-container {
    width: 100%;
    max-width: 100%;
  }

  /* Opcional: Un contenedor con una relación de aspecto para un estilo específico */
  .aspect-ratio-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect ratio (altura = 56.25% del ancho) */
  }
  .aspect-ratio-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;  /* Asegura que la imagen cubra el contenedor sin distorsión */
  }
`}</style>

      <div className="carousel-container">
        <Slider {...settings} className="w-full">
          {fijos.map((fijos, index) => (
            <div key={index}>
              <div className="h-full p-8 flex flex-col justify-between">
                <div className="flex flex-col items-center w-full h-full">
                  <div className="w-full aspect-[4/3] relative mb-4">
                    <img
                      className="carousel-image"
                      src={fijos.imagen || "/placeholder.svg"}
                      alt={fijos.titulo}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleButtonClick(fijos);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <Slider {...settings} className="w-full">
          {restantes.map((restantes, index) => (
            <div key={index}>
              <div className="carousel-card">
                <div>
                  <img
                    className="carousel-image"
                    src={restantes.imagen || "/placeholder.svg"}
                    alt={restantes.titulo}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleButtonClick(restantes);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default CarouselInicio