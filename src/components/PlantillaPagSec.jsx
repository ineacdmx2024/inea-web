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

function PagSec({ Enlaces, Titulo, Subtitulo, children }) {
  return (
    <div className="mt-[10.5vh]">
      <div className="mx-auto w-11/12 medida3:w-4/5 md:w-[1142px] grid grid-cols-1 md:grid-cols-12  gap-4">
        
        {/* Breadcrumb */}
        <div className="col-span-12">
          <div className="mx-auto py-1 px-0">
            <Breadcrumb />
          </div>
        </div>

        {/* Contenido principal (alineado con la derecha) */}
        <div className="col-span-12 md:col-span-8">
          {Titulo && (
            <h1 className={`${montserrat.className} text-[38px] font-semibold text-[#333334] mb-5 leading-tight`}>
              {Titulo}
            </h1>
          )}
          {Subtitulo && (
            <h2 className={`${montserrat.className} text-[27px] font-light text-[#333334] mb-4 leading-9`}>
              {Subtitulo}
            </h2>
          )}
          {children}
        </div>

        {/* Enlaces laterales */}
        {/* <div className="col-span-12 md:col-span-4 flex flex-col"> */}
        <div className="hidden md:block md:col-span-4 mt-3">
          <div className="flex flex-col">
            {Enlaces.map((enlace) => (
              <Card key={enlace.title} 
              title={enlace.title}
              imageSrc={enlace.imageSrc}
                buttonText={enlace.buttonText} 
                link={enlace.link} 
                className="w-full h-auto object-contain mx-auto"
                />
            ))}
        </div>
        </div>

        {/* Carrusel de Cards (visible en pantallas pequeñas) */}
        <div className="md:hidden w-full">
          <CarouselEL cards={Enlaces} />
        </div>
      </div>
    </div>
  );
}

export default PagSec;
