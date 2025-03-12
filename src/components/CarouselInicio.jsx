"use client"
import DetalleEnlace from "@/app/home-enlaces-de-interes/[home-enlace-interesId]/page"
import { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRouter } from "next/navigation"




function CarouselInicio() {
  const [slidesToShow, setSlidesToShow] = useState(3)
  const router = useRouter() // Hook de Next.js para navegación dinámica

  const [isSmallScreen, setIsSmallScreen] = useState(false)



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
      const res = await fetch("http://localhost:1337/api/baner-principals?filters[Fijo][$eq]=true&populate=*") 
     //const res = await fetch("http://localhost:1337/api/i-enlaces?filters[Fijo][$eq]=true&populate=*")
     //const res = await fetch("https://inea-web-backend.onrender.com/api/i-enlaces?filters[Fijo][$eq]=true&populate=*")
      const data = await res.json()
      const enlacesData = data.data.map((item) => ({
        id: item.id,
        contenido: item.attributes.Contenido, // Verifica si 'Contenido' existe
        link: item.attributes.Link,
        slug: item.attributes.slug, // Asegúrate de que 'slug' esté presente
        imagen: item.attributes.Imagen?.data?.attributes?.formats?.large?.url,
      }))
      setFijos(enlacesData)
    }




     const fetchEnlaces = async () => {
      const res = await fetch("http://localhost:1337/api/baner-principals?filters[Fijo][$eq]=false&populate=*")
     //const res = await fetch("http://localhost:1337/api/i-enlaces?filters[Fijo][$eq]=false&populate=*")
     //const res = await fetch("https://inea-web-backend.onrender.com/api/i-enlaces?filters[Fijo][$eq]=false&populate=*")
      const data = await res.json()
      const enlacesData2 = data.data.map((item) => ({
        id: item.id,
        // titulo: item.attributes.Titulo,
        subtitulo: item.attributes.Subtitulo, // Verifica si 'Subtitulo' existe
        contenido: item.attributes.Contenido, // Verifica si 'Contenido' existe
        link: item.attributes.Link,
        slug: item.attributes.slug, // Asegúrate de que 'slug' esté presente
        imagen: item.attributes.Imagen?.data?.attributes?.formats?.large?.url,
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
      <div style={{ bottom: "-25px" }}>
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
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
          color:rgb(99, 189, 51);
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
            height: 0px;
            padding: 1rem;

          }
        }
      `}</style>

      <div>
   

        {/* Mobile fixed links carousel*/}
        <div className="carrusel ">
          <Slider
            {...settings}
           className="bg-white border tablet:border-0 border-slate-300 tablet:shadow-none rounded-lg tablet:rounded-none mx-auto !z-5 w-full max-w-[260px] letras:max-w-[360px] ofertaEdu:max-w-[400px] tablet:max-w-[1150px] mt-8 px-4 tablet:px-0"

            // className="bg-white border tablet:border-0 border-slate-300 tablet:shadow-none rounded-lg tablet:rounded-none mx-auto !z-5 w-full max-w-[260px] letras:max-w-[360px] ofertaEdu:max-w-[400px] tablet:max-w-[1150px] mt-8 px-4 tablet:px-0"
          >
            {fijos.map((fijos, index) => (
              // <div key={index} className={`tablet:h-[450px] ${isSmallScreen ? "pt-4" : ""} tablet:px-8`}>
               <div key={index} >
                <div className="border-0 tablet:border border-slate-300 tablet:shadow-none rounded-none tablet:rounded-lg h-full p-8 flex flex-col justify-between">
                  <div className="flex flex-col items-center w-full h-full">
                  <div className="w-full aspect-[4/3] relative mb-4">
                  <img
                    className="w-full h-full object-cover rounded-lg"
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
        </div>

        {/* Remaining links carousel */}
        <div className="carrusel desktop-carousel">
          <Slider
            {...settings}
             //className="bg-white border tablet:border-0 border-slate-300 tablet:shadow-none rounded-lg tablet:rounded-none mx-auto !z-5 w-full max-w-[260px] letras:max-w-[360px] ofertaEdu:max-w-[400px] tablet:max-w-[1150px] mt-8 px-4 tablet:px-0"
            // className="bg-white border tablet:border-0 border-slate-300 tablet:shadow-none rounded-lg tablet:rounded-none mx-auto !z-5 w-full max-w-[260px] letras:max-w-[360px] ofertaEdu:max-w-[400px] tablet:max-w-[1150px] mt-8 px-4 tablet:px-0"
          >
            {restantes.map((restantes, index) => (
              // <div key={index} className={`tablet:h-[450px] ${isSmallScreen ? "pt-1" : ""}`}>
              <div key={index}>                
               < div className="carousel-card">

                {/* <div className="border-0 tablet:border border-slate-300 tablet:shadow-none rounded-none tablet:rounded-lg h-full p-8 flex flex-col justify-between carousel-card"> */}
                  {/* <div className="flex flex-col items-center w-full h-full"> */}
                   <div className=" ">
                    {/* <div className="w-full aspect-[4/3] relative mb-4"> */}
                    <div>
                      <img
                        // className="w-full h-full object-cover rounded-lg"
                        className="object-cover"
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
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default CarouselInicio