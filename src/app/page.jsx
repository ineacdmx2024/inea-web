import React from "react";
import { Open_Sans, Montserrat } from "@next/font/google";
import CarouselBlog from "@/components/CarouselBlog";
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

function page() {
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

      <BannerContingencia />

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

      <div className="mx-auto mt-24 mb-16 w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px]">
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

      <div
        id="ubicacion"
        className="my-20 mx-auto mt-32 mb-16 w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px]"
      >
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

export default page;
