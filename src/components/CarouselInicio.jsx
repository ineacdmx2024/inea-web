"use client"
import DetalleEnlace from "@/app/enlaces-carrusel/[home-enlace-carruselid]/page"
import React, { useEffect, useState } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRouter } from "next/navigation"
import Image from "next/image";

function CarouselInicio() {
  const router = useRouter()

  const [restantes, setRestantes] = useState([])

  useEffect(() => {
    const fetchEnlaces = async () => {
     
      const res = await fetch("https://inea-web-backend-cg20.onrender.com/api/baner-principals?populate=*&pagination[limit]=4")
      const data = await res.json()

      const enlacesData2 = data.data.map((item) => ({
        id: item.id,
        titulo: item.attributes.Titulo,
        subtitulo: item.attributes.Subtitulo,
        contenido: item.attributes.Contenido,
        link: item.attributes.Link,
        slug: item.attributes.slug,
        //imagenMovil: item.attributes.Banner_movile?.data?.attributes?.formats?.small?.url,  // Imagen para móvil
        imagenMovil: item.attributes.Banner_movile?.data?.attributes?.url,  // Imagen para móvil
        imagenEscritorio: item.attributes.Imagen?.data?.attributes?.url,
      }))
      setRestantes(enlacesData2)
    }

    fetchEnlaces()
  }, [])

  const handleButtonClick = (item) => {

    console.log("Hola")
    if (item && item.link) {
      window.open(item.link, "_blank") // Abre en una nueva pestaña
    } else if (item && item.slug) {
      ;<DetalleEnlace slug={item.slug} />
      router.push(`/enlaces-carrusel/${item.slug}`)

      console.log(item.slug.toString())
    } else {
      console.log("El objeto 'item' no está bien definido:", item)
    }
  }
    

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Aseguramos que solo se vea un "slide" a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dotsClass: "slick-dots custom-dots",
    appendDots: (dots) => (
      <div style={{ bottom: "-25px" }}>
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,  // Dispositivos pequeños (móviles)
        dots: true,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1, // Aseguramos que solo se vea un "slide" a la vez
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          // arrows: false,
          dotsClass: "slick-dots custom-dots",
          appendDots: (dots) => (
            <div style={{ bottom: "-25px" }}>
              <ul style={{ margin: "0" }}> {dots} </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 1024, // Dispositivos medianos (tabletas y escritorios)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          customPaging: () => (
            <div className="dot-style">
              <span className="dot"></span>
            </div>
          ),
        }
      }
    ]
  }

  return (
    <>
      <div>
        <Slider {...settings}>
          {restantes.map((restante, index) => (
            <div key={index} className="hover:cursor-pointer">
              {/* Imagen para dispositivos de escritorio */}
              {/* <div className="w-full h-full hidden md:block"> */}
              <div className=" hidden md:block relative">
                <Image
                  // className="w-full h-full object-cover cursor-pointer"
                  // className="object-cover w-full h-full"
                   className="h-[2880px] w-[544px] blog:w-full blog:h-full object-cover blog:object-fill"
                  src={restante.imagenEscritorio || "/placeholder.svg"}
                  alt={restante.subtitulo || "Imagen de banner"}

                  width={2880}
                  height={544}
                  quality={100}
                  priority
                  onClick={(e) => {
                    e.stopPropagation();
                    handleButtonClick(restante);
                  }}
                />
              </div>

              

              {/* Imagen para dispositivos móviles */}
              {/* <div className="w-full block md:hidden">
                <Image
                  //className="w-full h-full object-contain"
                  className="h-[460px] w-[544px] blog:w-full blog:h-full object-cover blog:object-fill rounded-xl"
                  src={restante.imagenMovil || "/placeholder.svg"}
                  alt={restante.subtitulo || "Imagen de banner móvil"}
                  width={460}
                  height={544}
                  quality={100}
                  priority
                  onClick={(e) => {
                    e.stopPropagation();
                    handleButtonClick(restante);
                  }}
                />
              </div> */}

<div className="w-full block md:hidden">
  <Image
    // className="h-[460px] w-[544px] blog:w-full blog:h-full object-cover blog:object-fill"
    src={restante.imagenMovil || "/placeholder.svg"}
    alt={restante.subtitulo || "Imagen de banner móvil"}
    width={544} // puedes ajustar esto o quitarlo y usar layout="responsive"
    layout="responsive"
    height={460}
    quality={100}
    priority
    onClick={(e) => {
      e.stopPropagation();
      handleButtonClick(restante);
    }}
  />
</div>


            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default CarouselInicio;