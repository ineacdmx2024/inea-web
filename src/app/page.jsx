import CarouselBlog from "@/components/CarouselBlog";
import React from "react";

function page() {
  return (
    <main className="py-32 px-[22rem]">
      <div className="mb-14">
        <h1 className="text-4xl font-medium text-slate-600 mb-2  ">Blog</h1>
        <div className="flex items-center">
          <div className="w-14 h-2 bg-[#af8900] mt-1"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
      </div>
      <CarouselBlog />
    </main>
  );
}

export default page;
