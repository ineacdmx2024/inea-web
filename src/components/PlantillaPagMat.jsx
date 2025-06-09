"use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

function PagSec({Titulo, Subtitulo, children, mostrarCarrusel = true }) {
  return (
    <div className="mt-[10.5vh]">
      <div className="mx-auto w-11/12 medida3:w-4/5 md:w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-8 items-start px-4 md:px-[2.5rem]">
        
        {/* Breadcrumb */}
        <div className="col-span-12">
          <div className="mx-auto py-1 px-0">
            <Breadcrumb />
          </div>
        </div>

        {/* Contenido principal (alineado con la derecha) */}
        <div style={{marginTop: '-20px'}} className={`col-span-12 mt- ${mostrarCarrusel ? 'md:col-span-8' : 'md:col-span-12'}`}>
          {Titulo && (
            <h1 className={`${notoSans.className} text-[38px] font-semibold text-[#333334] mb-5 leading-tight`}>
              {Titulo}
            </h1>
          )}
          {Subtitulo && (
            <h2 className={`${notoSans.className} text-[27px] font-light text-[#333334] mb-4 leading-9`}>
              {Subtitulo}
            </h2>
          )}
          {children}
        </div>   
      </div>
    </div>
  );
}

export default PagSec;
