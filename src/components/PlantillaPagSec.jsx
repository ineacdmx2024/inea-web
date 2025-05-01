"use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/EnlacesR_Lateral";
import CarouselEL from "@/components/CarouselEL";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

function PagSec({ Enlaces, Titulo, Subtitulo, children, mostrarCarrusel = true }) {
  return (
    <div className="mt-[10.5vh] overflow-x-hidden">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Breadcrumb ajustado */}
        <div className="col-span-12 md:col-start-1 md:col-span-8 mb-4">
          <Breadcrumb />
        </div>

        {/* Contenido principal */}
        <div className="col-span-12 md:col-span-8">
          {Titulo && (
            <h1 className="text-[38px] font-semibold text-[#333334] mb-5 leading-tight">
              {Titulo}
            </h1>
          )}
          {Subtitulo && (
            <h2 className="text-[27px] font-light text-[#333334] mb-4 leading-9">
              {Subtitulo}
            </h2>
          )}
          {children}
        </div>

        {/* Enlaces laterales */}
        <div className="hidden md:block md:col-span-4 self-start md:pl-8">
          <div className="flex flex-col gap-6">
            {Enlaces.map((enlace) => (
              <Card
                key={enlace.title}
                title={enlace.title}
                imageSrc={enlace.imageSrc}
                buttonText={enlace.buttonText}
                link={enlace.link}
                className="w-full h-auto object-contain mx-auto"
              />
            ))}
          </div>
        </div>

        {/* Carrusel en móviles */}
        {mostrarCarrusel && (
          <div className="md:hidden col-span-12 w-full">
            <CarouselEL cards={Enlaces} />
          </div>
        )}
      </div>
    </div>
  );
}


export default PagSec;
