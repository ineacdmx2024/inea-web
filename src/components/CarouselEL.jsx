"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "./EnlacesR_Lateral";
import { Carousel } from "flowbite-react";

//recibimos un arreglo de objetos (las cards que se pondran en el carrusel)
const CarouselEL = ({ cards }) => {
  //Controla el index de que tarjeta se muestra
  //setcurrentIndex es lo que suaremos apra cambiar de Card
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = () => {
    setCurrentIndex((currentIndex + 1) % visibleCards.length);
  };
  //Es el intervalo para el cambio cada cierto tiempo
  const [intervalId, setIntervalId] = useState(null);
  //Evitar el cambio automatico con los botones
  const [autoPlay, setAutoPlay] = useState(true);
  //Marcamos que como el maximo de enlaces relacionados en el lateral es de 4 entonces tambien el maximo de cards en el carrusel es de 4
  const maxCards = 4;
  //con .slice sacamos las primeras 4 Cards del arreglo de objetos y las asignamos a visibleCards
  const visibleCards = cards.slice(0, maxCards);
  //incrementamos el contador en 1 y aseguramos que cuando llegue a la 4 Card con visibleCards.length vuelva a 0 para asi ciclarlo
  const handleNext = () => {
    if (autoPlay) {
      setCurrentIndex((currentIndex + 1) % visibleCards.length);
    }
  };
  //Ahora en vez de hacer el ciclo en aumento, lo haremos en decremento
  const handlePrev = () => {
    setAutoPlay(false);
    setCurrentIndex(
      (currentIndex - 1 + visibleCards.length) % visibleCards.length
    );
  };

  // //Cambio segun el intervalo escogido
  // useEffect(() => {
  //   const newIntervalId = setInterval(updateIndex, 5000); //5000 ms = 5seg
  //   setIntervalId(() => newIntervalId);
  //   return () => {
  //     clearInterval(intervalId); // Utilizamos el estado intervalId para limpiar el intervalo
  //   };
  // }, [updateIndex, visibleCards.length, autoPlay]); // Agregamos currentIndex como dependencia para que pueda realizar el cambio

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <button
          id="buttonCarousel"
          onClick={() => handlePrev()}
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
        {/* con visibleCards.map recorreremos el arreglo de objetos */}
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

        <button
          id="buttonCarousel"
          onClick={() => handleNext()}
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
    </div>
  );
};

export default CarouselEL;
