import { Open_Sans } from "next/font/google";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";

const open_Sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

async function loadPost(id) {
  const res = await fetch(
    `https://inea-web-backend.onrender.com/api/blogs/${id}?populate=*`
  );
  const data = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return data;
}

async function Page({ params }) {
  const post = await loadPost(params.noticiasAntiguasId);

  //console.log("Post ", post.data)
  const contenido = post.data.attributes.Contenido;
  return (
    <div>
      <div className="mt-40 ml-[26rem] mb-10">
        <Breadcrumb />
      </div>
      <div className="mx-auto mt-20 mb-16 w-11/12 medida3:w-4/5 arrow:w-[750px] tablet:w-[1140px] flex flex-row gap-8">
        {/* noticias */}
        <div className={`${open_Sans.className}  w-2/3 mb-44`}>
          <h1 className="text-[40px] text-[#404041] uppercase font-semibold">
            {post.data.attributes.Titulo}
          </h1>
          <h2 className="text-[30px] text-[#404041] uppercase">
            {post.data.attributes.Subtitulo}
          </h2>
          <h2 className="text-[20px] text-[#404041] my-5">
            {post.data.attributes.Fecha}
          </h2>
          <div className="m-auto rounded-lg max-h-[392px]">
            <Image
              src={
                post.data.attributes.Imagen?.data?.attributes?.formats?.large
                  ?.url
              }
              alt={
                post.data.attributes.Nombre_de_la_Imagen || "Imagen sin título"
              }
              className="w-full rounded-lg"
              width={1000}
              height={700}
            />
          </div>
          {contenido?.map((item, index) => (
            <div key={index} className="p-5 mt-16">
              {item.children.map((child, childIndex) => (
                <p className="text-xl leading-relaxed" key={childIndex}>
                  {child.text}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* noticias mas recientes */}
        <div className="bg-yellow-500 w-1/3">
          <h1>Noticias mas recientes</h1>
        </div>
      </div>
    </div>
  );
}

export default Page;
