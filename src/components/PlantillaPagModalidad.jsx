"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CardComponent from "./AnimatedCards";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

function PagMod({ info }) {
  // Asumiendo que `info.bannerImage` es la URL de la imagen que quieres usar
  const [bannerImage, setBannerImage] = useState(info.bannerImage);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const bannerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const scrollPosition = window.pageYOffset;
        const bannerHeight = bannerRef.current.offsetHeight;
        const offset = scrollPosition * 0.5;
        setParallaxOffset(offset > bannerHeight ? bannerHeight : offset);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setBannerImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  if (!info) {
    return <div>No hay información disponible</div>;
  }

  if (!info.paragraphs) {
    return <div>No hay párrafos disponibles</div>;
  }

  return (
    <div className="w-full">
      {/* banner */}
      <div
        ref={bannerRef}
        className="relative w-full overflow-hidden transition-all duration-300 ease-in-out cursor-pointer rounded-lg mb-2"
        style={{
          height: "calc(100vh - 4rem)",
          maxHeight: "400px",
        }}
        role="banner"
        aria-label="Interactive banner"
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-300 ease-in-out"
          style={{
            backgroundImage: `url(${bannerImage})`,
            // transform: `translateY(${parallaxOffset}px)`,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out hover:bg-opacity-20">
          <div className="flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              {info.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl px-4">
              {info.description}
            </p>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className=" py-4 mt-8">
        {info.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`${montserrat.className} text-[18px] font-normal text-[#333334] mb-7 leading-7`}
          >
            {paragraph}
          </p>
        ))}

        {/* Colocar la sección de Tiempo estimado después de los párrafos de texto */}
        <p className="mt-2 text-lg">
          <strong>Tiempo estimado de conclusión:</strong> {info.time}
        </p>
        <br />
        {/* Boton section - mostrar solo si Boton array tiene algo (o sea en linea)  */}
        {info.Boton && info.Boton.length > 0 && (
          <div>
            {info.Boton.map((paragraph, index) => (
              <div
                key={index}
                className="mb-2"
              >
                <p className="text-xl text-center font-bold">
                  {paragraph.description}
                </p>
                <motion.button
                  className="mt-4 px-4 py-2 bg-[#611232] text-white rounded-lg mx-auto block border-2 hover:bg-white hover:text-[#611232] hover:border-[#611232] focus:bg-[#A57F2C]"
                  onClick={() => window.open(paragraph.link, "_blank")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {paragraph.buttonLabel}
                </motion.button>
              </div>
            ))}
            <br />
          </div>
        )}

        {/* Requesitos */}
        <div
          id="alert-additional-content-4"
          className=" p-4 mb-4 mt-2 text-yellow-950 border border-[#A57F2C] rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
          role="alert"
        >
          <div className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <h3 className="text-lg font-medium">
              <strong>Requisitos:</strong>
            </h3>
          </div>
          <div className="mt-2 mb-4">
            <ul className="list-disc ml-8">
              {info.requirements.map((requirements, index) => (
                <li
                  className="text-lg"
                  key={index}
                >
                  {requirements}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="my-2 ">
        <CardComponent items={info.celdas} />
      </div>
    </div>
  );
}

export default PagMod;
