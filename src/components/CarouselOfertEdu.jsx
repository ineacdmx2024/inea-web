"use client";
import React from "react";
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
        className="w-8 h-8 text-white bg-black bg-opacity-60 rounded-full hover:bg-opacity-75"
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
        className="w-8 h-8 text-white bg-black bg-opacity-60 rounded-full hover:bg-opacity-75"
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

function CarouselOfertEdu() {
  const modalidades = [
    {
        "name": "Alfabetización, Primaria Y Secundaria Presencial",
        "image": "/Modalidad1.jpg"
      },
      {
        "name": "Primaria Y Secundaria En Línea",
        "image": "/Modalidad2.jpg"
      },
      {
        "name": "Examen Único",
        "image": "/Modalidad3.jpg"
      },
      {
        "name": "Exámenes Diagnóstico",
        "image": "/Modalidad4.jpg"
      }
      
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      <div className="slider-container">
        <Slider {...settings} className="w-full px-3">
          {modalidades.map((item, index) => (
            <div
              key={index}
              className="px-2"
            >
              <div className="border-2 border-slate-300 h-[460px] rounded-lg p-12 shadow-lg flex flex-col justify-between">
                <div className="flex flex-col items-center">
                  <img
                    className="max-w-60 w-full h-full object-cover rounded-lg"
                    src={item.image}
                    alt={item.name}
                  />
                  <h3 className="my-7 px-4 text-center text-[22px] text-slate-500 font-medium capitalize">
                    {item.name}
                  </h3>
                </div>
                <button className="bg-red-700 text-white py-2 px-4 rounded-full hover:bg-red-800 mx-auto block">
                  Ir al sitio
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default CarouselOfertEdu;
