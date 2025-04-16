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
        <ul className="custom-dots-list"> {dots} </ul>
      </div>
    ),
  };
  
  return (
    <>
      <style jsx global>{`
      .custom-dots-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      position: relative;
      }

      .custom-dots-list {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
      }

      .custom-dots {
        display: flex;
        justify-content: center;
        align-items: center;
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
        transition: all 0.3s ease;
      }
      
      .custom-dots li.slick-active button:before {
        color: #611232;
        transform: scale(1.2);
      }

        .custom-dots li.slick-active button:before {
          color: #611232;
          transform: scale(1.2);
        }

        /* Estilo para limitar el texto a una sola línea */
        .card-title {
          display: -webkit-box;
          -webkit-line-clamp: 1; /* Limita a 1 línea */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis; /* Muestra '...' si el texto es largo */
        }
      `}</style>
      <div className="border border-slate-300 rounded-lg bg-white mx-auto w-[613.59px] h-[560.8px] tablet:w-[613.59px] tablet:h-[605.64px] block tablet:hidden">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <Link key={index} href={card.link}>
              <div className="flex flex-col justify-between h-full pb-8">
                <img
                  className="rounded-lg mx-auto max-w-[85%] w-full object-cover mt-8"
                  src={card.imageSrc}
                  alt={card.title}
                />
                <div className="flex flex-col items-center flex-grow">
                  <h3 className="px-7 text-center text-[18px] text-[#333334] font-little h-15 card-title mt-4 mb-2">
                    {card.title}
                  </h3>
                </div>
                <div className="flex justify-center mt-auto mb-5">
                  <button className="focus:border-[#611232] focus:bg-[#ffffff] bg-[#611232] text-white hover:border-[#611232] hover:border-0 hover:bg-white hover:text-[#611232] text-xs py-2 px-4 rounded-full">
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
