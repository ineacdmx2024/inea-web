import React from "react";
import { Open_Sans, Montserrat } from "next/font/google";
import CarouselBlog from "@/components/CarouselBlog";

import CarouselInicio from "@/components/CarouselInicio";
import CarouselOfertEdu from "@/components/CarouselOfertEdu";
import SeccionLigasInte from "@/components/SeccionLigasInte";
import Ubicacion from "@/components/Ubicacion";
import BannerContingencia from "@/components/BannerContingencia";

const open_Sans = Open_Sans({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

function Page() {
  return (
    <main className={`mx-auto ${montserrat.className} bg-white pt-[100px]`}>
      <div>
        <img
          src="/Banner_INEA_CDMX_EducacionMovilnueva.webp"
          alt="BannerMovil"
          className="w-full h-auto block medida3:hidden"
        />
        <img
          src="/Banner_INEA_CDMX_Educacion_nueva.webp"
          alt="Banner"
          className="w-full h-auto hidden medida3:block"
        />
      </div>
      {/* <BannerContingencia /> */}
      <CarouselInicio />

      {/* Nuevo texto agregado después del Banner de Contingencia y antes del Blog */}
      <div className="mx-auto mt-8 mb-8 w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px] text-center">
        <h1 className="text-[33px] font-bold text-[#333334] -mt-7">
          INEA en la Ciudad de México
        </h1>
        <p className="text-[18px] text-[#333334] mt-2">
          El <strong>Instituto Nacional para la Educación de los Adultos en la Ciudad de México</strong> es una Unidad de Operación del Instituto en esta entidad 
            federativa que coordina y brinda servicios de alfabetización, primaria y secundaria para jóvenes y adultos mayores de 15 años. Además, certifica la educación básica y 
            distribuye materiales didácticos para facilitar el aprendizaje a esta población.
        </p>
      </div>

      <div className="mx-auto mt-20 mb-16 w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px]">
        <h1 className="text-2xl font-medium text-slate-700 mb-2 letras:text-3xl ">
          Blog
        </h1>
        <div className="flex items-center">
          <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>
      <CarouselBlog />

      <div className="my-20 mx-auto mt-32 mb-16 w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px]">
        <h1 className="text-2xl font-medium text-slate-700 mb-2 letras:text-3xl ">
          Oferta educativa
        </h1>
        <div className="flex items-center">
          <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>
      <CarouselOfertEdu />

      <div className="my-20 mx-auto mt-32 mb-16 w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px]">
        <h1 className="text-2xl font-medium text-slate-700 mb-2 letras:text-3xl ">
          Enlaces de interes
        </h1>
        <div className="flex items-center">
          <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>
      <SeccionLigasInte />

      <div className="my-20 mx-auto mt-32 mb-16 w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px]">
        <h1 className="text-2xl font-medium text-slate-700 mb-2 letras:text-3xl ">
          Ubicación
        </h1>
        <div className="flex items-center">
          <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>

      <Ubicacion />
    </main>
  );
}

export default Page;
