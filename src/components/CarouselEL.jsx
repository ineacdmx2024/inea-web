"use client";
import React, { useState, useEffect } from "react";
import Card from "./EnlacesR_Lateral";

// Recibimos un arreglo de objetos (las cards que se pondrán en el carrusel)
const CarouselEL = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Índice de la tarjeta actual
  const [autoPlay, setAutoPlay] = useState(true); // Controla si el carrusel debe reproducirse automáticamente
  const maxCards = 4; // Máximo de tarjetas visibles
  const visibleCards = cards.slice(0, maxCards); // Selecciona las primeras 4 tarjetas

  // Función para avanzar al siguiente índice
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % visibleCards.length);
  };

  // Función para retroceder al índice anterior
  const handlePrev = () => {
    setAutoPlay(false); // Detiene la reproducción automática al interactuar con los botones
    setCurrentIndex(
      (currentIndex - 1 + visibleCards.length) % visibleCards.length
    );
  };

  // Cambia automáticamente las tarjetas cada 5 segundos
  useEffect(() => {
    if (autoPlay) {
      const intervalId = setInterval(() => {
        handleNext();
      }, 5000); // Cambia cada 5 segundos

      return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente o cambiar el estado
    }
  }, [currentIndex, autoPlay, visibleCards.length]);

  return (
    <div className="carousel relative">
      {" "}
      {/* Asegúrate de usar clases de posicionamiento relativas */}
      <div className="carousel-inner">
        {/* Botón anterior */}
        <button
          id="buttonCarousel"
          onClick={handlePrev}
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
        </button>

        {/* Muestra las tarjetas del carrusel */}
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : "hidden"
            }`}
          >
            <Card
              title={card.title}
              imageSrc={card.imageSrc}
              buttonText={card.buttonText}
              link={card.link}
            />
          </div>
        ))}

        {/* Botón siguiente */}
        <button
          id="buttonCarousel"
          onClick={handleNext}
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </button>
      </div>
      {/* Indicadores debajo del carrusel */}
      <div className="flex justify-center space-x-2 absolute bottom-4 sm:bottom-6 xs:mt-8 left-0 right-0">
        {visibleCards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)} // Permite al usuario saltar a una tarjeta específica
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-500" : "bg-gray-300"
            }`}
            aria-label={`Ir a la tarjeta ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselEL;
