"use client";
import { Noto_Sans } from "next/font/google";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PagSec from "@/components/PlantillaPagSec";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

const truncateText = (text, maxLetters) => {
  if (text.length > maxLetters) {
    return text.slice(0, maxLetters) + "...";
  }
  return text;
};

function NoticiasAntiguas() {
  const [datos, setDatos] = useState(null);
  const [totalNoticias, setTotalNoticias] = useState(0);
  const [paginaActual, setPaginaActual] = useState(1);
  const noticiasPorPagina = 9;
  const [isMobile, setIsMobile] = useState(false);

  const fetchData = async (page = 1) => {
    const start = (page - 1) * noticiasPorPagina;
    try {
      const response = await fetch(
        `https://inea-web-backend-production.up.railway.app/api/blogs?populate=*&sort[0]=Fecha:desc&pagination[limit]=${noticiasPorPagina}&pagination[start]=${start}`
      );
      const result = await response.json();
      setDatos(result.data);
      setTotalNoticias(result.meta.pagination.total);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    fetchData(paginaActual);
  }, [paginaActual]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint de Tailwind
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fechaFun = (fechaAPI) => {
    const diasSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const fecha = new Date(fechaAPI);
    return `${diasSemana[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
  };

  const totalPaginas = Math.ceil(totalNoticias / noticiasPorPagina);

  const handleNextPage = () => {
    if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1);
  };

  const handlePrevPage = () => {
    if (paginaActual > 1) setPaginaActual(paginaActual - 1);
  };

  return (
    <main>
      <PagSec Enlaces={[]} mostrarCarrusel={false}>
        <div className="mx-auto w-11/12 medida3:w-4/5 md:w-[1142px] grid grid-cols-1 md:grid-cols-12 gap-4 items-start mt-0">
          <div className="col-span-12">
            <h1
              className={`${notoSans.className} text-[38px] font-semibold text-[#333334] mb-5 leading-tight gap-8 ml-[-20px] md:ml-0.5`}
            >
              Noticias antiguas
            </h1>

            <div className="mb-16 w-full">
              <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {datos ? (
                  datos.map((item, index) => (
                    <div
                      key={index}
                      className="overflow-hidden w-full max-w-[380px] mx-auto sm:mx-0 rounded-xl border border-slate-300 p-4 flex flex-col justify-between"
                      style={{ height: "474px" }}
                    >
                      <div>
                        <Link href={`/blog/noticias-antiguas/${item.attributes.slug}`}>
                          <div className="rounded-xl overflow-hidden" style={{ width: "330.66px", height: "220px" }}>
                            <Image
                              src={
                                item.attributes.Imagen?.data?.attributes?.formats?.medium?.url ||
                                item.attributes.Imagen?.data?.attributes?.url
                              }
                              alt={
                                item.attributes.Nombre_de_la_Imagen || "Imagen sin título"
                              }
                              width={330.66}
                              height={220}
                              className="object-cover"
                              style={{ width: "330.66px", height: "220px" }}
                            />
                          </div>
                        </Link>
                        <article
                          className={`${notoSans.className} mt-4 w-full px-2 sm:px-4 py-1`}
                        >
                          <p className="text-sm sm:text-base text-gray-700 mb-2">
                            {item.attributes.Fecha
                              ? fechaFun(item.attributes.Fecha)
                              : "No hay fecha"}
                          </p>
                          <h2 className="text-base sm:text-lg font-medium text-[#333334] mb-0">
                            {truncateText(item.attributes.Titulo, isMobile ? 85 : 86)}
                          </h2>
                        </article>
                      </div>
                      <div className="flex justify-center">
                        <Link
                          href={`/blog/noticias-antiguas/${item.attributes.slug}`}
                          className="bg-[#611432] text-white text-center py-2 px-4 hover:bg-white hover:text-[#611432] border-2 border-[#611432] rounded-full mb-5"
                        >
                          Continuar leyendo
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center">Cargando noticias...</p>
                )}
              </div>
            </div>

            {/* Botones de navegación */}
            {totalNoticias > 0 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={handlePrevPage}
                  disabled={paginaActual === 1}
                  className={`px-4 py-2 bg-[#611432] text-white rounded-md ${
                    paginaActual === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#8a1a4a]"
                  }`}
                >
                  Anterior
                </button>
                <span className="text-gray-700">
                  Página {paginaActual} de {totalPaginas}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={paginaActual === totalPaginas}
                  className={`px-4 py-2 bg-[#611432] text-white rounded-md ${
                    paginaActual === totalPaginas
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#8a1a4a]"
                  }`}
                >
                  Siguiente
                </button>
              </div>
            )}
          </div>
        </div>
      </PagSec>
    </main>
  );
}

export default NoticiasAntiguas;
