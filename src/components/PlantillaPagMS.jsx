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
    <div className="mt-[8.5vh]">
      <div className="mx-auto w-full medida3:w-4/5 md:w-[1280px] grid grid-cols-1 md:grid-cols-12 gap-8 items-start px-4 md:px-[2.5rem]">
        
        {/* Breadcrumb */}
        <div className="col-span-12">
          <div className="mx-auto py-1 px-0">
            <Breadcrumb />
          </div>
        </div>

        {/* Contenido principal */}
        <div style={{ marginTop: '-20px' }} className="col-span-12 md:col-span-12">
          {Titulo && (
            <h1 className={`${notoSans.className} text-[38px] font-semibold text-[#333334] mb-5 leading-tight`}>
              {Titulo}
            </h1>
          )}
          {children}
        </div>   
      </div>
    </div>
  );
}

export default PagSec;
