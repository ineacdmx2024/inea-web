"use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

function PagSec({ Titulo, children }) {
  return (
    <div className="mt-[10.5vh]">
      <div className="mx-auto w-full medida3:w-4/5 md:w-[1280px] px-4 md:px-[2.5rem]">
        
        {/* Breadcrumb */}
        <div className="py-1 px-0">
          <Breadcrumb />
        </div>

        {/* Título */}
        {Titulo && (
          <h1 className={`${notoSans.className} text-[38px] font-semibold text-[#333334] mb-5 leading-tight`}>
            {Titulo}
          </h1>
        )}

        {/* Contenido */}
        {children}
      </div>
    </div>
  );
}

export default PagSec;
