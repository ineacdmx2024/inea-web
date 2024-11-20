"use client";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="slider-container">
      <Slider
        {...settings}
        className="mx-auto !z-5 w-4/5"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="px-0"
          >
            <div className="border border-slate-300 rounded-lg h-[400px]  mx-auto flex flex-col w-[260px]  justify-center items-center">
              <div className="w-52 h-[310px]  flex flex-col justify-between items-center">
                <img
                  className="w-60 h-auto object-cover rounded-lg"
                  src={card.imageSrc}
                  alt={card.title}
                />
                <h3 className="text-center text-[18px]  text-slate-500 font-medium capitalize">
                  {card.title}
                </h3>
                <button className="hover:bg-[#FFFFFF] hover:text-black  hover:ring-[#611232] hover:ring-4 text-white text-xs  py-2 px-4 rounded-full bg-[#a42145] mx-auto block">
                  {card.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselEL;
