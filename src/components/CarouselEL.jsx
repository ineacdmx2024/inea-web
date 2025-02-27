"use client";
import { useState, useEffect, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

// Recibimos un arreglo de objetos (las cards que se pondrán en el carrusel)
const CarouselEL = ({ cards }) => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Usar useCallback para memorizar la función
  const handleResize = useCallback(() => {
    setSlidesToShow(window.innerWidth < 768 ? 1 : 4);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Ejecutar al cargar por primera vez

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar evento
    };
  }, [handleResize]);

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
      <div className="custom-dots-container">
        <ul className="m-0"> {dots} </ul>
      </div>
    ),
  };

  return (
    <>
      <style jsx global>{`
        .custom-dots-container {
          bottom: -25px;
        }

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
          color: #611232; // Color verde para el punto activo
          transform: scale(1.2);
        }
      `}</style>
      <div className="border border-slate-300 rounded-lg bg-white w-[320px] letras:w-[420px] ofertaEdu:w-[500px] tablet:w-[1100px] block tablet:hidden mx-auto">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <Link key={index} href={card.link}>
              <div className="flex flex-col items-center min-h-[350px] justify-between pb-8">
                <img
                  className="rounded-lg mx-auto max-w-[85%] w-full object-cover mt-8"
                  src={card.imageSrc}
                  alt={card.title}
                />
                <div className="flex flex-col items-center flex-grow">
                  <h3 className="px-6 text-center text-[18px] text-[#333334] font-little h-15 overflow-hidden">
                    {card.title}
                  </h3>
                </div>
                <button className="focus:border-[#611232] focus:bg-[#ffffff] bg-[#611232] text-white hover:border-[#611232] hover:border-0 hover:bg-white hover:text-[#611232] text-xs py-2 px-4 rounded-full mt-5">
                  {card.buttonText}
                </button>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CarouselEL;
