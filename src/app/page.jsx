import CarouselBlog from "@/components/CarouselBlog";
import CarouselOfertEdu from "@/components/CarouselOfertEdu";
import SeccionLigasInte from "@/components/SeccionLigasInte";

function page() {
  return (
    <main className="py-32 px-[22rem]">
      <div className="mb-16">
        <h1 className="text-4xl font-medium text-slate-600 mb-2  ">Blog</h1>
        <div className="flex items-center">
          <div className="w-12 h-2 bg-[#af8900] mt-1"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>
      <CarouselBlog />

      <div className="my-20 mt-36">
        <h1 className="text-4xl font-medium text-slate-600 mb-2  ">Oferta Educativa</h1>
        <div className="flex items-center">
          <div className="w-12 h-2 bg-[#af8900] mt-1"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>
      <CarouselOfertEdu />

      <div className="my-20 mt-36">
        <h1 className="text-4xl font-medium text-slate-600 mb-2  ">Ligas de Interes</h1>
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
