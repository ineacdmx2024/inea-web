"use client";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  // Implementacion de la API
  const noticias = [
    {
      title: "Explorando las Estrellas",
      image: "/imagePrueba/interes1.jpg",
      link: "https://example.com/article/explorando-las-estrellas",
      caption: "Un viaje por el cosmos",
      date: "2024-01-12",
      description:
        "Sumérgete en los misterios del universo y descubre los secretos de las estrellas.",
    },
    {
      title: "El Arte del Minimalismo",
      image: "/imagePrueba/interes2.jpg",
      link: "https://example.com/article/arte-del-minimalismo",
      caption: "Menos es más",
      date: "2024-03-05",
      description:
        "Descubre cómo el minimalismo puede llevar a una vida más plena al enfocarse en lo que realmente importa.",
    },
    {
      title: "Innovaciones Tecnológicas 2024",
      image: "/imagePrueba/interes3.jpg",
      link: "https://example.com/article/innovaciones-tecnologicas-2024",
      caption: "El futuro está aquí",
      date: "2024-07-19",
      description:
        "Una mirada a los avances tecnológicos más innovadores que moldearán el año que viene.",
    },
    {
      title: "Alimentación Saludable Simplificada",
      image: "/imagePrueba/interes4.png",
      link: "https://example.com/article/alimentacion-saludable",
      caption: "Nutre tu cuerpo",
      date: "2024-05-23",
      description:
        "Consejos y recetas fáciles para ayudarte a comer mejor sin sacrificar el sabor.",
    },
    {
      title: "Aventuras en la Naturaleza",
      image: "/imagePrueba/interes5.jpg",
      link: "https://example.com/article/aventuras-en-la-naturaleza",
      caption: "Abraza el gran exterior",
      date: "2024-08-10",
      description:
        "Experimenta la emoción de las aventuras al aire libre, desde el senderismo hasta el campamento en la naturaleza intacta.",
    },
    {
      title: "El Auge de la Arquitectura Ecológica",
      image: "/imagePrueba/interes6.jpg",
      link: "https://example.com/article/arquitectura-ecologica",
      caption: "Construyendo un futuro más verde",
      date: "2024-04-14",
      description:
        "Explora cómo la arquitectura sostenible está cambiando el paisaje de nuestras ciudades.",
    },
    {
      title: "Dominando el Arte de la Fotografía",
      image: "/imagePrueba/interes7.jpg",
      link: "https://example.com/article/dominando-la-fotografia",
      caption: "Captura el momento",
      date: "2024-02-22",
      description:
        "Consejos y técnicas de fotógrafos profesionales para ayudarte a tomar fotos impresionantes.",
    },
    // {
    //   title: "Cocina Global: Un Viaje Culinario",
    //   image: "/imagePrueba/interes8.jpg",
    //   link: "https://example.com/article/cocina-global",
    //   caption: "Saborea el mundo",
    //   date: "2024-06-08",
    //   description:
    //     "Emprende una aventura culinaria y explora los diversos sabores de la cocina mundial.",
    // },
    {
      title: "La Psicología de la Felicidad",
      image: "/imagePrueba/interes9.jpg",
      link: "https://example.com/article/psicologia-de-la-felicidad",
      caption: "Descubre los secretos de una vida feliz",
      date: "2024-01-30",
      description:
        "Comprende la ciencia detrás de la felicidad y cómo aplicarla en tu vida diaria.",
    },
    {
      title: "Tendencias de Moda Sostenible",
      image: "/imagePrueba/interes10.jpg",
      link: "https://example.com/article/moda-sostenible",
      caption: "Estilo y sostenibilidad",
      date: "2024-05-18",
      description:
        "Descubre las últimas tendencias en moda ecológica y cómo vestir de manera sostenible.",
    },
    {
      title: "El Futuro de la Inteligencia Artificial",
      image: "/imagePrueba/interes11.jpg",
      link: "https://example.com/article/futuro-inteligencia-artificial",
      caption: "IA en nuestras vidas diarias",
      date: "2024-08-03",
      description:
        "Explora el papel en evolución de la inteligencia artificial en diversas industrias y en la vida cotidiana.",
    },
    {
      title: "Mindfulness y Meditación",
      image: "/imagePrueba/interes12.jpg",
      link: "https://example.com/article/mindfulness-y-meditacion",
      caption: "Encuentra la paz interior",
      date: "2024-03-21",
      description:
        "Aprende cómo el mindfulness y la meditación pueden ayudarte a lograr paz interior y equilibrio.",
    },
    {
      title: "Jardinería Urbana para Principiantes",
      image: "/imagePrueba/interes13.jpg",
      link: "https://example.com/article/jardineria-urbana-principiantes",
      caption: "Cultiva tu espacio verde",
      date: "2024-07-02",
      description:
        "Comienza tu propio jardín en la ciudad con estos sencillos consejos y trucos para la jardinería urbana.",
    },
  ];

  const [fijas, setFijas] = useState([noticias[0], noticias[1], noticias[2]]);
  const [restantes, setRestantes] = useState(
    noticias.filter((n, index) => ![0, 1, 2].includes(index))
  );

  // Configuración del carrusel
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
          {fijas.map((noticia, index) => (
            <div key={index} className="px-4 w-1/3">
              <div className="border border-slate-300 h-[420px] rounded-lg p-8 flex flex-col justify-between">
                <div className="flex flex-col items-center">
                  <img
                    className="w-60 h-auto object-cover rounded-lg"
                    src={noticia.image}
                    alt={noticia.title}
                  />
                  <h3 className="my-7 px-4 text-center text-[22px] text-slate-500 font-medium capitalize">
                    {noticia.title}
                  </h3>
                </div>
                <button className="bg-[#611232] text-white text-xs letras:text-[13.5px] py-2 px-4 rounded-full hover:bg-[#8a1b39] mx-auto block">
                  Ir al sitio
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Div de noticias fijas en carousel */}
        <div className="border border-slate-300 rounded-lg bg-white w-[260px] letras:w-[360px] ofertaEdu:w-[400px] tablet:w-[1150px] block tablet:hidden mx-auto">
          <Slider {...settings}>
            {fijas.map((noticia, index) => (
              <div key={index} className="px-2">
                <div className="h-[400px] letras:h-[440px] p-8 flex flex-col justify-between">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-60 h-auto object-cover rounded-lg"
                      src={noticia.image}
                      alt={noticia.title}
                    />
                    <h3 className="my-7 px-4 text-center text-[18px] letras:text-[22px] text-slate-500 font-medium capitalize">
                      {noticia.title}
                    </h3>
                  </div>
                  <button className="text-xs letras:text-[13.5px] bg-[#611232] text-white py-2 px-4 rounded-full hover:bg-[#8a1b39] mx-auto block">
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
            {restantes.map((noticia, index) => (
              <div key={index} className="px-4">
                <div className="border-0 tablet:border border-slate-300 tablet:shadow-lg rounded-none tablet:rounded-lg h-[400px] letras:h-[440px] p-8 flex flex-col justify-between">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-60 h-auto object-cover rounded-lg"
                      src={noticia.image}
                      alt={noticia.title}
                    />
                    <h3 className="my-7 px-4 text-center text-[18px] letras:text-[22px] text-slate-500 font-medium capitalize">
                      {noticia.title}
                    </h3>
                  </div>
                  <button className="bg-[#611232] text-white text-xs letras:text-[13.5px] py-2 px-4 rounded-full hover:bg-[#8a1b39] mx-auto block">
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
