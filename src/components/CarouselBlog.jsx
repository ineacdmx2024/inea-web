"use client";
import Image from "next/image";
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
        left: "-25px"
      }}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
           stroke="currentColor" className="w-8 h-8 text-white bg-black bg-opacity-60 rounded-full hover:bg-opacity-75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
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
        right: "-15px"
      }}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
           stroke="currentColor" className="w-8 h-8 text-white bg-black bg-opacity-60 rounded-full hover:bg-opacity-75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  );
}

const CarouselBlog = () => {

  // Configuracion del carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots custom-dots",
    appendDots: (dots) => (
      <div style={{ bottom: "-25px" }}>
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
  };

  // Aqui se esta consumiendo la API de la noticia 
  const news = [
    {
      image: "/imagePrueba/prueba1.jpg",
      date: "martes, 30 de abril de 2024",
      title:
        "CONVOCATORIA PARA PARTICIPAR COMO PERSONA VOLUNTARIA BENEFICIARIA DEL SUBSIDIO",
      content:
        "Si participaste en la convocatoria de PVBS checa en la liga de tu estado si pasaste la etapa IV para iniciar actividades",
    },
    {
      image: "/imagePrueba/prueba2.jpg",
      date: "jueves, 25 de agosto de 2024",
      title:
        "CONVOCATORIA PARA PARTICIPAR COMO PERSONA VOLUNTARIA BENEFICIARIA DEL SUBSIDIO 234",
      content:
        "Si participaste en la convocatoria de PVBS checa en la liga de tu estado si pasaste la etapa IV para iniciar actividades 34524",
    },
    {
      image: "/imagePrueba/prueba3.jpg",
      date: "viernes, 16 de mayo de 2024",
      title:
        "CONVOCATORIA PARA PARTICIPAR COMO PERSONA VOLUNTARIA BENEFICIARIA DEL SUBSIDIO 452",
      content:
        "Si participaste en la convocatoria de PVBS checa en la liga de tu estado si pasaste la etapa IV para iniciar actividades 32786",
    },
    {
      image: "/imagePrueba/prueba4.jpg",
      date: "martes, 10 de junio de 2024",
      title:
        "CONVOCATORIA PARA PARTICIPAR COMO PERSONA VOLUNTARIA BENEFICIARIA DEL SUBSIDIO 435634",
      content:
        "Si participaste en la convocatoria de PVBS checa en la liga de tu estado si pasaste la etapa IV para iniciar actividades 3456",
    },
  ];

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
          color: #790101;  // Color verde para el punto activo
          transform: scale(1.2);
        }
      `}</style>
    <Slider {...settings} className="w-full">
      {news.map((item, index) => (
        <div key={index} className="px-4">
          <div className="flex md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">

            {/* Div de la imagen */}
            <div className="md:w-3/5">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Div del texto */}
            <div className="md:w-2/5 p-6">
              {/* <div className="bg-green-800 text-white py-1 px-3 inline-block mb-2">
                CONVOCATORIA
              </div> */}
              <p className="text-gray-600 text-base mb-2">{item.date}</p>
              <h2 className="text-3xl font-medium mb-4">{item.title}</h2>
              <p className="text-gray-500 font-light text-lg mb-4 uppercase">{item.content}</p>
              <button className="ml-auto bg-red-700 text-white py-2 px-4 hover:bg-red-800 rounded-full block">
                Continuar leyendo
              </button>
            </div>

          </div>
        </div>
      ))}
    </Slider>
    </>
  );
};

export default CarouselBlog;
