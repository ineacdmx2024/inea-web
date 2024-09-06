import { Open_Sans } from "next/font/google"
import CarouselBlog from "@/components/CarouselBlog";
import CarouselOfertEdu from "@/components/CarouselOfertEdu";
import SeccionLigasInte from "@/components/SeccionLigasInte";
import Ubicacion from "@/components/Ubicacion";

const open_Sans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

function page() {
  return (
    <main className={`mx-auto ${open_Sans.className} bg-white`}>

      <div>
        <img src="/Banner_INEA_CDMX.jpg" alt="Banner" className="w-full h-auto" />
      </div>

      <div className="mx-auto mt-20 mb-16 w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px]">
        <h1 className="text-2xl font-medium text-slate-700 mb-2 letras:text-3xl ">Blog</h1>
        <div className="flex items-center">
          <div className="w-12 h-2 bg-[#b38e61] mt-2"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>
      <CarouselBlog />

      <div className="mx-auto mt-32 mb-16 w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px]">
        <h1 className="text-2xl font-medium text-slate-700 mb-2 letras:text-3xl ">Oferta Educativa</h1>
        <div className="flex items-center">
          <div className="w-12 h-2 bg-[#b38e61] mt-2"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>
      <CarouselOfertEdu />

      <div className="my-20 mx-auto mt-32 mb-16 w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px]">
        <h1 className="text-2xl font-medium text-slate-700 mb-2 letras:text-3xl ">Ligas de Interes</h1>
        <div className="flex items-center">
          <div className="w-12 h-2 bg-[#b38e61] mt-2"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>
      <SeccionLigasInte />

      <div className="my-20 mx-auto mt-32 mb-16 w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px]">
        <h1 className="text-2xl font-medium text-slate-700 mb-2 letras:text-3xl ">Ubicación</h1>
        <div className="flex items-center">
          <div className="w-12 h-2 bg-[#b38e61] mt-2"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>
      <Ubicacion />

    </main>
  );
}

export default page;
