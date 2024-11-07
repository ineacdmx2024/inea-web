"use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/EnlacesR_Lateral";
import CarouselEL from "@/components/CarouselEL";
import { Open_Sans } from "next/font/google";
const open_Sans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

function PagSec({ Enlaces, Titulo, Subtitulo, children }) {
  return (
    <div className="mt-[12.5vh]">
      <div className="mx-auto w-11/12 medida3:w-4/5 md:w-[1142px] grid grid-cols-1 md:grid-cols-12 gap-y-[1vh] gap-x-[4vh]">
        <br />
        {/* Breadcrumb */}
        <div className="col-span-1 md:col-span-12 ">
          <div className="mx-auto py-1 px-4 sm:px-6 md:px-8">
            <Breadcrumb />
          </div>
        </div>

        {/* Contenido principal*/}
        <div className="col-span-1 md:col-span-8 ">
          <h1
            className={
              "${open_Sans.className} text-[38px] font-medium uppercase text-[#404041] mb-8 "
            }
          >
            {Titulo}
          </h1>
          <h2
            className={
              "${open_Sans.className} text-[27px] font-medium  text-[#404041] mb-4 "
            }
          >
            {Subtitulo}
          </h2>
          {children}
        </div>

        {/* Enlaces laterales  */}
        <div className="hidden md:block md:col-span-4 ">
          <div className="flex flex-col">
            {Enlaces.map((enlace) => (
              <Card
                key={enlace.title}
                title={enlace.title}
                imageSrc={enlace.imageSrc}
                buttonText={enlace.buttonText}
                link={enlace.link}
              />
            ))}
          </div>
        </div>

        {/* Carrusel de Cards (visible en pantallas pequeñas) */}
        <div className="md:hidden w-full mt-20 ">
          <CarouselEL cards={Enlaces} />
        </div>
      </div>
    </div>
  );
}

export default PagSec;
