"use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/EnlacesR_Lateral";
import CarouselEL from "@/components/CarouselEL";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

function PagSec({ Enlaces = [], Titulo, children, mostrarCarrusel = true }) {
  return (
    <div className="mt-[8.5vh]">
      <div className="mx-auto w-full medida3:w-4/5 md:w-[1280px] grid grid-cols-1 md:grid-cols-12 gap-8 items-start px-4 md:px-[2.5rem]">
        {/* Breadcrumb */}
        <div className="col-span-12">
          <div className="mx-auto py-1 px-0">
            <Breadcrumb />
          </div>
        </div>

        {/* Contenido principal (8/12 en md+) */}
        <div
          // style={{ marginTop: "-20px" }}
          className="mt-[-20px] col-span-12 md:col-span-8 text-[18px]"
        >
          {Titulo && (
            <h1
              className={`${notoSans.className} text-[38px] font-semibold text-[#333334] mb-5 leading-tight`}
            >
              {Titulo}
            </h1>
          )}
          {children}
        </div>

        {/* Enlaces laterales (4/12 en md+, oculto en móvil) */}
        <aside className="hidden md:block md:col-span-4 self-start">
          <div className="flex flex-col gap-[2rem] md:pl-4 -mt-4">
            {Enlaces.map((enlace) => (
              <Card
                key={enlace.title}
                title={enlace.title}
                imageSrc={enlace.imageSrc}
                buttonText={enlace.buttonText}
                link={enlace.link}
                className="w-full h-auto object-cover mx-auto"
              />
            ))}
          </div>
        </aside>

        {/* Carrusel de Cards (visible solo en pantallas pequeñas) */}
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
