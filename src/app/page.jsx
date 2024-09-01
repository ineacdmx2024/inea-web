import { Open_Sans } from "next/font/google"
import CarouselBlog from "@/components/CarouselBlog";
import CarouselOfertEdu from "@/components/CarouselOfertEdu";
import SeccionLigasInte from "@/components/SeccionLigasInte";

const open_Sans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

function page() {
  return (
    <main className={`mx-auto ${open_Sans.className} bg-white`}>
      
      <div className="mx-auto mt-32 mb-16 w-full letras:w-1/2 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px]">
        <h1 className="text-3xl font-medium text-slate-600 mb-2 letras:text-4xl ">Blog</h1>
        <div className="flex items-center">
          <div className="w-12 h-2 bg-[#af8900] mt-1"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>
      <CarouselBlog />

      <div className="mx-auto mt-32 mb-16 w-full letras:w-1/2 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px]">
        <h1 className="text-3xl font-medium text-slate-600 mb-2 letras:text-4xl ">Oferta Educativa</h1>
        <div className="flex items-center">
          <div className="w-12 h-2 bg-[#af8900] mt-1"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>
      <CarouselOfertEdu />

      <div className="my-20 mx-auto mt-32 mb-16 w-full letras:w-1/2 medida3:w-4/5 arrow:w-[750px] tablet:w-[1170px]">
        <h1 className="text-3xl font-medium text-slate-600 mb-2 letras:text-4xl ">Ligas de Interes</h1>
        <div className="flex items-center">
          <div className="w-12 h-2 bg-[#af8900] mt-1"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>
      <SeccionLigasInte />
      
    </main>
  );
}

export default page;
