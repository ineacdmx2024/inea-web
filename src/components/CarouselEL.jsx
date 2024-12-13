"use client";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

// Recibimos un arreglo de objetos (las cards que se pondrán en el carrusel)
const CarouselEL = ({ cards }) => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 4);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Ejecutar al cargar por primera vez

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar evento
    };
  }, []);

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
      <div className="border border-slate-300 rounded-lg bg-white w-[260px] letras:w-[360px] ofertaEdu:w-[400px] tablet:w-[1150px] block tablet:hidden mx-auto ">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <Link key={index} href={card.link}>
            <div
              key={index}
              className="px-2"
            >
              <div className="h-[400px] letras:h-[440px] p-8 flex flex-col justify-between">
                <div className="flex flex-col items-center w-full">
                  <img
                    className="w-full h-auto object-cover rounded-lg"
                    src={card.imageSrc}
                    alt={card.title}
                  />
                  <h3 className="my-7 px-4 text-center text-[18px] letras:text-[22px] text-slate-500 font-medium">
                    {card.title}
                  </h3>
                </div>
                <button
                  className=" 
                  focus:border-[#611232] focus:bg-[#A57F2C] focus:border-[5px] 
                  bg-[#611232] text-white 
                  hover:border-[#611232] hover:border-2 hover:bg-white hover:text-[#611232] 
                    text-xs  py-2 px-4 rounded-full mx-auto block"
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CarouselEL;