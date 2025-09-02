import React from "react";
import CarouselBlog from "@/components/CarouselBlog";
import CarouselInicio from "@/components/CarouselInicio";
import CarouselOfertEdu from "@/components/CarouselOfertEdu";
import SeccionLigasInte from "@/components/SeccionLigasInte";
import Ubicacion from "@/components/Ubicacion";
import BannerContingencia from "@/components/BannerContingencia";
import ScrollLoadSection from "@/components/ScrollLoadSection";


function Page() {
  return (
    <main className="mx-auto bg-white pt-[94px] pb-[100px] w-full overflow-x-hidden">
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

      {/* <BannerContingencia /> */}
      <CarouselInicio />

      {/* INEA en la Ciudad de México */}
      <div className="my-16 w-full text-center px-4 tablet:px-0">
        <h1 className="text-[24px] font-bold text-[#333334] mb-3 whitespace-normal tablet:text-[33px]">
          INEA en la Ciudad de México
        </h1>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-center text-[16px] text-[#333334] tablet:text-[18px]">
            El <strong>Instituto Nacional para la Educación de los Adultos en la Ciudad de México</strong> es una Unidad de Operación del Instituto en esta 
            entidad federativa que coordina y brinda servicios gratuitos de alfabetización, primaria y secundaria para jóvenes y adultos mayores de 15 años. Además, certifica la 
            educación básica y distribuye materiales didácticos para facilitar el aprendizaje a esta población.
          </p>
        </div>
      </div>

      {/* Blog */}
      <div className="my-20 px-4 tablet:px-0">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="patria text-2xl font-medium text-[#333334] mb-2 letras:text-3xl">
            Blog
          </h1>
          <div className="flex items-center mb-6">
            <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <ScrollLoadSection delay={2500}>
            <CarouselBlog />
          </ScrollLoadSection>
        </div>
      </div>

      {/* Oferta educativa */}
      <div className="my-20 px-4 tablet:px-0">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="patria text-2xl font-medium text-[#333334] mb-2 letras:text-3xl">
            Oferta educativa
          </h1>
          <div className="flex items-center">
            <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
        </div>
        <ScrollLoadSection delay={2500}>
          <CarouselOfertEdu />
        </ScrollLoadSection>
      </div>

      {/* Enlaces de interés */}
      <div className="my-20 px-4 tablet:px-0">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="patria text-2xl font-medium text-[#333334] mb-2 letras:text-3xl">
            Enlaces de interés
          </h1>
          <div className="flex items-center">
            <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
        </div>
        <ScrollLoadSection delay={2500}>
          <SeccionLigasInte />
        </ScrollLoadSection>
      </div>

      {/* Ubicación */}
      <section className="mt-[97px] mb-2 px-4 tablet:px-0">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="patria text-left text-2xl font-medium text-[#333334] letras:text-3xl">
            Ubicación
          </h1>
          <div className="flex items-center mt-1">
            <div className="w-9 h-[5px] bg-[#b38e61]"></div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
        </div>
        <ScrollLoadSection delay={2500}>
          <Ubicacion />
        </ScrollLoadSection>
      </section>
    </main>
  );
}

export default Page;
