"use client";
import { useState, useEffect, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const truncateText = (text, maxLetters) => {
  if (text.length > maxLetters) {
    return text.slice(0, maxLetters) + "...";
  }
  return text;
};

// Recibimos un arreglo de objetos (las cards que se pondrán en el carrusel)
const CarouselEL = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dotsClass: "slick-dots custom-dots",
    arrows: false,
    centerMode: false,
    centerPadding: "0px",
    adaptiveHeight: true
  };
  
  return (
    <>
      <style jsx global>{`
        .custom-dots {
          bottom: -30px;
          display: flex;
          justify-content: center;
          width: 100%;
          padding: 0;
          margin: 0;
          position: absolute;
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
        
        .image-container {
          width: 100%;
          max-width: 320px;
          height: 256px;
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
          margin: 0 auto;
        }
        
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        @media (max-width: 767px) {
          .image-container {
            width: 100%;
            height: 0;
            padding-bottom: 85%;
            max-width: none;
          }
          
          .image-container img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          
          .slick-slider {
            padding-bottom: 40px;
          }

          .slick-list {
            margin: 0;
          }
        }
      `}</style>
      <div className="md:hidden w-full">
        <div className="border border-slate-300 rounded-lg bg-white mx-auto w-[340px] pb-8 overflow-visible ml-4">
          <Slider {...settings}>
            {cards.map((card, index) => (
              <div key={index} className="pt-6 px-6 outline-none">
                <Link href={card.link} className="block">
                  <div className="flex flex-col items-center">
                    <div className="image-container mb-4">
                      <img
                        src={card.imageSrc}
                        alt={card.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col items-center w-full">
                      <h3 className="text-center text-[18px] text-[#333334] font-medium mt-4 mb-6 w-full">
                        {truncateText(card.title, 37)}
                      </h3>
                      <button className="bg-[#611232] text-white text-sm py-2.5 px-5 rounded-full hover:bg-white hover:text-[#611232] border-2 border-[#611232] font-light">
                        {card.buttonText}
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CarouselEL;
