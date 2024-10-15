import React from "react";
import { Open_Sans } from "@next/font/google";
import CarouselBlog from "@/components/CarouselBlog";
import CarouselOfertEdu from "@/components/CarouselOfertEdu";
import SeccionLigasInte from "@/components/SeccionLigasInte";
import Ubicacion from "@/components/Ubicacion";
const open_Sans = Open_Sans({
  subsets: ["latin"],
});

function page() {
  return (
    <main className={`mx-auto ${open_Sans.className} bg-white pt-[115px]`}>
      <div>
        <img
          src="/Banner_INEA_CDMX.jpg"
          alt="Banner"
          className="w-full h-auto hidden medida3:block"
        />
        <img
          src="/Banner_INEA_CDMX_EducacionMovil.jpg"
          alt="BannerMovil"
          className="w-full h-auto block medida3:hidden"
        />
        <img
          src="/Banner_INEA_CDMX.jpg"
          alt="Banner"
          className="w-full h-auto hidden medida3:block"
        />
        <img
          src="/Banner_INEA_CDMX_EducacionMovil.jpg"
          alt="BannerMovil"
          className="w-full h-auto block medida3:hidden"
        />
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

      <div className="mx-auto mt-32 mb-16 w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px]">
        <h1 className="text-2xl font-medium text-slate-700 mb-2 letras:text-3xl ">
          Oferta Educativa
        </h1>
        <div className="flex items-center">
          <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>
      <CarouselOfertEdu />

      <div className="my-20 mx-auto mt-32 mb-16 w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px]">
        <h1 className="text-2xl font-medium text-slate-700 mb-2 letras:text-3xl ">
          Ligas de Interes
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

export default page;
