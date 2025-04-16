import React from "react";
import CarouselBlog from "@/components/CarouselBlog";
import CarouselInicio from "@/components/CarouselInicio";
import CarouselOfertEdu from "@/components/CarouselOfertEdu";
import SeccionLigasInte from "@/components/SeccionLigasInte";
import Ubicacion from "@/components/Ubicacion";
import BannerContingencia from "@/components/BannerContingencia";

function Page() {
  return (
    <main className={`mx-auto bg-white pt-[94px] pb-[100px] w-full overflow-x-hidden`}>
      {/* <img
          src="/Banner_INEA_CDMX_EducacionMovilnueva.webp"
          alt="BannerMovil"
          className="w-full h-auto block medida3:hidden"
        />
        <img
          src="/Banner_INEA_CDMX_Educacion_nueva.webp"
          alt="Banner"
          className="w-full h-auto hidden medida3:block"
        /> */}

      {/* <BannerContingencia />  */}
      <CarouselInicio />

      <div className="mx-auto my-16 w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1142px] text-center">
        <h1 className={`text-[33px] font-bold text-[#333334]`}>
          INEA en la Ciudad de México
        </h1>
        <div className="max-w-[1130px] mx-auto px-4">
          <p className="text-center text-[18px] text-[#333334]">
            El <strong>Instituto Nacional para la Educación de los Adultos en la Ciudad de México</strong> es una Unidad de Operación del Instituto en esta 
            entidad federativa que coordina y brinda servicios de alfabetización, primaria y secundaria para jóvenes y adultos mayores de 15 años. Además, certifica la 
            educación básica y distribuye materiales didácticos para facilitar el aprendizaje a esta población.
          </p>
        </div>
      </div>

      {/* Blog */}
      <div className="w-full px-4 tablet:px-0 my-20">
        <div className="max-w-[1142px] mx-auto">
          <h1 className="patria text-2xl font-medium text-[#333334] mb-2 letras:text-3xl">
            Blog
          </h1>
          <div className="flex items-center mb-6">
            <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          {/* CarouselBlog dentro del contenedor max-w */}
          <CarouselBlog />
        </div>
      </div>


      {/* Oferta educativa */}
      <div className="my-20 mx-auto w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px]">
        <h1 className="patria text-2xl font-medium text-[#333334] mb-2 letras:text-3xl">
          Oferta educativa
        </h1>
        <div className="flex items-center">
          <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>
      <CarouselOfertEdu />

      {/* Enlaces de interés */}
      <div className="my-20 mx-auto w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px]">
        <h1 className="patria text-2xl font-medium text-[#333334] mb-2 letras:text-3xl">
          Enlaces de interés
        </h1>
        <div className="flex items-center">
          <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>
      <SeccionLigasInte />

      {/* Ubicación */}
     <section className="mt-[97px] mb-2 px-4 flex flex-col items-center">
       <div className="mb-6 max-w-[1170px] w-full text-left">
         <h1 className="patria text-left text-2xl font-medium text-[#333334] letras:text-3xl">
           Ubicación
         </h1>
         <div className="flex items-center mt-1">
           <div className="w-9 h-[5px] bg-[#b38e61]"></div>
           <div className="flex-grow h-px bg-gray-300"></div>
         </div>
       </div>
       <Ubicacion />
     </section>
    </main>
  );
}

export default Page;
