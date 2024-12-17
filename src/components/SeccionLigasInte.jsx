"use client";
import DetalleEnlace from "@/app/home-enlaces-de-interes/[home-enlace-interesId]/page";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation"; // Importa para redirección dinámica

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !z-10 before:!content-none`}
      style={{
        ...style,
        display: "block",
        left: "-25px",
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
}

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !z-10 before:!content-none`}
      style={{
        ...style,
        display: "block",
        right: "-15px",
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};

function SeccionLigasInte() {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const router = useRouter(); // Hook de Next.js para navegación dinámica

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 1210 ? 1 : 3);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [fijos, setFijos] = useState([]);
  const [restantes, setRestantes] = useState([]);

  useEffect(() => {
    const fetchFijos = async () => {
      const res = await fetch(
        "http://localhost:1337/api/i-enlaces?filters[Fijo][$eq]=true&populate=*"
      );
      const data = await res.json();
      const enlacesData = data.data.map((item) => ({
        id: item.id,
        titulo: item.attributes.Titulo,
        subtitulo: item.attributes.Subtitulo, // Verifica si 'Subtitulo' existe
        contenido: item.attributes.Contenido, // Verifica si 'Contenido' existe
        link: item.attributes.Link,
        slug: item.attributes.slug, // Asegúrate de que 'slug' esté presente
        imagen: item.attributes.Imagen?.data?.attributes?.formats?.large?.url,
      }));
      setFijos(enlacesData);
    };

    const fetchEnlaces = async () => {
      const res = await fetch(
        "http://localhost:1337/api/i-enlaces?filters[Fijo][$eq]=false&populate=*"
      );
      const data = await res.json();
      const enlacesData2 = data.data.map((item) => ({
        id: item.id,
        titulo: item.attributes.Titulo,
        subtitulo: item.attributes.Subtitulo, // Verifica si 'Subtitulo' existe
        contenido: item.attributes.Contenido, // Verifica si 'Contenido' existe
        link: item.attributes.Link,
        slug: item.attributes.slug, // Asegúrate de que 'slug' esté presente
        imagen: item.attributes.Imagen?.data?.attributes?.formats?.large?.url,
      }));
      setRestantes(enlacesData2);
    };

    fetchFijos();
    fetchEnlaces();
  }, []);

  /*const handleButtonClick = (item) => {
    if (item.link) {
      window.open(item.link, "_blank"); // Abre en una nueva pestaña
    } else if (item.slug) {
      router.push(`/home-enlaces-de-interes/${item.slug}`); // Navega internamente
    }
  };*/
  const handleButtonClick = (item) => {
    if (item && item.link) {
      window.open(item.link, "_blank"); // Abre en una nueva pestaña
    } else if (item && item.slug) {
      <DetalleEnlace slug={item.slug} />;
      router.push(`/home-enlaces-de-interes/${item.slug}`);

      console.log(item.slug.toString());
    } else {
      console.log("El objeto 'item' no está bien definido:", item);
    }
  };

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
  };

  return (
    <>
      <style
        jsx
        global
      >{`
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
          color: #790101; // Color verde para el punto activo
          transform: scale(1.2);
        }
      `}</style>

      <div className="p-2">
        {/* Div de noticias fijas */}
        <div className="fijas justify-center items-center !z-5 w-4/5 tablet:w-[1150px] mx-auto hidden tablet:flex">
          {fijos.map((fijos, index) => (
            <div
              key={index}
              className="px-4 w-1/3 cursor-pointer"
              onClick={() => handleButtonClick(fijos)}
            >
              <div className="border border-slate-300 h-[420px] rounded-lg p-8 flex flex-col justify-between">
                <div className="flex flex-col items-center">
                  <img
                    className="w-60 h-auto object-cover rounded-lg"
                    src={fijos.imagen}
                    alt={fijos.titulo}
                  />
                  <h3 className="my-7 px-4 text-center text-[22px] text-slate-500 font-medium capitalize">
                    {fijos.titulo}
                  </h3>
                </div>
                <button
                  className="bg-[#611232] text-white text-xs letras:text-[13.5px] py-2 px-4 rounded-full hover:bg-[#8a1b39] mx-auto block"
                  onClick={() => handleButtonClick(fijos)}
                >
                  Ir al sitio
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Div de noticias fijas en carousel */}
        <div className="border border-slate-300 rounded-lg bg-white w-[260px] letras:w-[360px] ofertaEdu:w-[400px] tablet:w-[1150px] block tablet:hidden mx-auto">
          <Slider {...settings}>
            {fijos.map((fijos, index) => (
              <div
                key={index}
                className="px-2 cursor-pointer"
                onClick={() => handleButtonClick(fijos)}
              >
                <div className="h-[400px] letras:h-[440px] p-8 flex flex-col justify-between">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-60 h-auto object-cover rounded-lg"
                      src={fijos.imagen}
                      alt={fijos.titulo}
                    />
                    <h3 className="my-7 px-4 text-center text-[18px] letras:text-[22px] text-slate-500 font-medium capitalize">
                      {fijos.titulo}
                    </h3>
                  </div>
                  <button
                    onClick={() => handleButtonClick(fijos)}
                    className="text-xs letras:text-[13.5px] bg-[#611232] text-white py-2 px-4 rounded-full hover:bg-white hover:text-[#611232] border-2 border-[#611232] mx-auto block"
                  >
                    Ir al sitio
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Div de noticias restantes */}
        <div className="carrusel">
          <Slider
            {...settings}
            className="bg-white border tablet:border-0 border-slate-300 tablet:shadow-none rounded-lg tablet:rounded-none mx-auto !z-5 w-[260px] letras:w-[360px] ofertaEdu:w-[400px] tablet:w-[1150px] mt-8"
          >
            {restantes.map((restantes, index) => (
              <div
                key={index}
                className="px-4 cursor-pointer"
                onClick={() => handleButtonClick(restantes)}
              >
                <div className="border-0 tablet:border border-slate-300 tablet:shadow-lg rounded-none tablet:rounded-lg h-[400px] letras:h-[440px] p-8 flex flex-col justify-between">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-60 h-auto object-cover rounded-lg"
                      src={restantes.imagen}
                      alt={restantes.titulo}
                    />
                    <h3 className="my-7 px-4 text-center text-[18px] letras:text-[22px] text-slate-500 font-medium capitalize">
                      {restantes.titulo}
                    </h3>
                  </div>
                  <button
                    className="text-xs letras:text-[13.5px] bg-[#611232] text-white py-2 px-4 rounded-full hover:bg-white hover:text-[#611232] border-2 border-[#611232] mx-auto block"
                    onClick={() => handleButtonClick(restantes)}
                  >
                    Ir al sitio
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default SeccionLigasInte;
