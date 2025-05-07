"use client";
import { Open_Sans, Montserrat } from "next/font/google";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PagSec from "@/components/PlantillaPagSec"; // Nuevo componente importado

const open_Sans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
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

function NoticiasAntiguas({ item }) {
  const [datos, setDatos] = useState(null);
  const [totalNoticias, setTotalNoticias] = useState(0);
  const [paginaActual, setPaginaActual] = useState(1);
  const noticiasPorPagina = 9;

  const fetchData = async (page = 1) => {
    const start = (page - 1) * noticiasPorPagina;

    try {
      const response = await fetch(
        `https://inea-web-backend-cg20.onrender.com/api/blogs?populate=*&sort[0]=Fecha:desc&pagination[limit]=${noticiasPorPagina}&pagination[start]=${start}`
        //`https://inea-web-backend.onrender.com/api/blogs?populate=*&sort[0]=Fecha:desc&pagination[limit]=${noticiasPorPagina}&pagination[start]=${start}`
      );
      const result = await response.json();
      setDatos(result.data);
      const total = result.meta.pagination.total;
      setTotalNoticias(total);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    fetchData(paginaActual);
  }, [paginaActual]);

  const fechaFun = (fechaAPI) => {
    const diasSemana = [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
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

  const handlePageChange = (newPage) => {
    setPaginaActual(newPage);
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
      <PagSec Enlaces={[]} mostrarCarrusel={false}> {/* Deshabilitamos el carrusel */}
        <div className="mx-auto w-11/12 medida3:w-4/5 md:w-[1142px] grid grid-cols-1 md:grid-cols-12 gap-4 items-start mt-0"> {/* Ajuste del margen superior */}
          <div className="col-span-12 md:col-span-8">
            <h1
              className={`${montserrat.className} text-[38px] font-semibold text-[#333334] mb-5 leading-tight`}
            >
              Noticias antiguas
            </h1>

            <div className="mb-16 flex flex-col justify-center items-center gap-8">
              <div className="w-full grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {datos ? (
                  datos.map((item, index) => (
                    <div key={index} className="px-0 flex flex-col h-full">
                      <div className="overflow-hidden w-full h-full rounded-xl border border-slate-300 p-4 flex flex-col justify-between">
                        <Link href={`/blog/noticias-antiguas/${item.attributes.slug}`}>
                          <div className="rounded-xl max-h-[250px] h-[250px] w-full overflow-hidden">
                            <Image
                              src={
                                item.attributes.Imagen?.data?.attributes?.formats?.medium
                                  ?.url || item.attributes.Imagen?.data?.attributes?.url
                              }
                              alt={
                                item.attributes.Nombre_de_la_Imagen || "Imagen sin título"
                              }
                              className="object-cover w-full h-full"
                              width={350}
                              height={250}
                            />
                          </div>

                          <article
                            className={`${open_Sans.className} mt-4 w-full px-4 py-2 flex flex-col justify-between flex-grow`}
                          >
                            <p className="text-sm text-gray-700 mb-2">
                              {item.attributes.Fecha
                                ? fechaFun(item.attributes.Fecha)
                                : "No hay fecha"}
                            </p>
                            <h2 className="text-xl font-medium text-[#333334] mb-4">
                              {truncateText(item.attributes.Titulo, 45)}
                            </h2>
                          </article>
                        </Link>

                        <div className="w-full mt-auto">
                          <Link
                            href={`/blog/noticias-antiguas/${item.attributes.slug}`}
                            className="m-auto bg-[#611232] text-white text-center py-3 px-2 w-40 hover:bg-white hover:text-[#611232] border-2 border-[#611232] rounded-full block mb-4"
                          >
                            <p className="text-xs font-light">Continuar leyendo</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center">Cargando noticias...</p>
                )}
              </div>

              {/* Botones de navegación */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={handlePrevPage}
                  disabled={paginaActual === 1}
                  className={`px-4 py-2 bg-[#611232] text-white rounded-md ${
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
                  className={`px-4 py-2 bg-[#611232] text-white rounded-md ${
                    paginaActual === totalPaginas
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#8a1a4a]"
                  }`}
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      </PagSec>
    </main>
  );
}

export default NoticiasAntiguas;