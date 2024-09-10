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

function CarouselOfertEdu() {
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

  const modalidades = [
    {
      name: "Alfabetización, Primaria Y Secundaria Presencial",
      image: "/Modalidad1.jpg",
    },
    {
      name: "Primaria Y Secundaria En Línea",
      image: "/Modalidad2.jpg",
    },
    {
      name: "Examen Único",
      image: "/Modalidad3.jpg",
    },
    {
      name: "¿Qué opcion me conviene?",
      image: "/Modalidad4.jpg",
    },
  ];

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
      <div className="slider-container">
        <Slider {...settings} className="mx-auto !z-5 w-4/5 tablet:w-[1150px]">
          {modalidades.map((item, index) => (
            <div key={index} className=" px-0">
              <div className="">
                <div className="border border-slate-300 rounded-lg h-[400px] letras:h-[460px] mx-auto flex flex-col w-[260px] letras:w-[320px] ofertaEdu:w-[400px] tablet:w-[350px] tablet:h-[400px] justify-center items-center">
                  <div className="w-44 mobileEdu:w-[216px] letras:w-60 h-[310px] letras:h-[340px]  flex flex-col justify-between items-center ">
                    <img
                      className="w-60 h-auto object-cover rounded-lg"
                      src={item.image}
                      alt={item.name}
                    />
                    <h3 className="text-center text-[18px] letras:text-[22px] text-slate-500 font-medium capitalize">
                      {item.name}
                    </h3>
                    <button className="hover:bg-[#8a1b39] text-white text-xs letras:text-[13.5px] py-2 px-4 rounded-full bg-[#a42145] mx-auto block">
                      Ir al sitio
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default CarouselOfertEdu;
