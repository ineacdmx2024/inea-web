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

function Planeacion() {
  const [datos, setDatos] = useState(null);
  const [fijos, setFijos] = useState(null);
  const [totalNoticias, setTotalNoticias] = useState(0);
  const [paginaActual, setPaginaActual] = useState(1);
  const noticiasPorPagina = 9;
  const [isMobile, setIsMobile] = useState(false);

  const fetchFijos = async () => {
    try {
      const response = await fetch(
        `https://inea-web-backend-cg20.onrender.com/api/plannings?filters[Fijo][$eq]=true&populate=*&sort[0]=Orden:asc&pagination[limit]=10`
      );
      const result = await response.json();
      console.log("Datos fijos:", result);
      setFijos(result.data);
    } catch (error) {
      console.error("Error al obtener los datos fijos:", error);
    }
  };

  const fetchData = async (page = 1) => {
    const start = (page - 1) * noticiasPorPagina;

    try {
      // Primero intentamos obtener solo los no fijos
      const response = await fetch(
        `https://inea-web-backend-cg20.onrender.com/api/plannings?filters[$or][0][Fijo][$eq]=false&filters[$or][1][Fijo][$null]=true&populate=*&sort[0]=Fecha:desc&pagination[limit]=${noticiasPorPagina}&pagination[start]=${start}`
      );
      const result = await response.json();
      console.log("Datos no fijos:", result);
      
      // Si no hay resultados con el filtro, obtener todos los datos como fallback
      if (!result.data || result.data.length === 0) {
        console.log("No hay datos con filtro, obteniendo todos...");
        const responseAll = await fetch(
          `https://inea-web-backend-cg20.onrender.com/api/plannings?populate=*&sort[0]=Fecha:desc&pagination[limit]=${noticiasPorPagina}&pagination[start]=${start}`
        );
        const resultAll = await responseAll.json();
        console.log("Todos los datos:", resultAll);
        setDatos(resultAll.data);
        setTotalNoticias(resultAll.meta.pagination.total);
      } else {
        setDatos(result.data);
        setTotalNoticias(result.meta.pagination.total);
      }
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      // Como fallback, intentar obtener todos los datos sin filtro
      try {
        const responseFallback = await fetch(
          `https://inea-web-backend-cg20.onrender.com/api/plannings?populate=*&sort[0]=Fecha:desc&pagination[limit]=${noticiasPorPagina}&pagination[start]=${start}`
        );
        const resultFallback = await responseFallback.json();
        console.log("Datos fallback:", resultFallback);
        setDatos(resultFallback.data);
        setTotalNoticias(resultFallback.meta.pagination.total);
      } catch (fallbackError) {
        console.error("Error en fallback:", fallbackError);
      }
    }
  };

  useEffect(() => {
    fetchFijos();
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

  // Combinar datos fijos y no fijos
  const todosLosDatos = () => {
    const fijosArray = fijos || [];
    const datosArray = datos || [];
    
    // Si estamos en la primera página, mostrar fijos + datos
    if (paginaActual === 1) {
      return [...fijosArray, ...datosArray];
    } else {
      // En páginas siguientes, solo mostrar datos no fijos
      return datosArray;
    }
  };

  return (
    <main>
      <PagSec Enlaces={[]} mostrarCarrusel={false}>
        <div className="mx-auto w-11/12 medida3:w-4/5 md:w-[1142px] grid grid-cols-1 md:grid-cols-12 gap-4 items-start mt-0">
          <div className="col-span-12">
            <h1
              className={`${notoSans.className} text-[38px] font-semibold text-[#333334] mb-5 leading-tight gap-8 ml-[-20px] md:ml-0.5`}
            >
             Departamento de Planeación, Seguimiento Operativo y Acreditación
            </h1>

            <div className="mb-16 w-full">
              <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {todosLosDatos().length > 0 ? (
                  todosLosDatos().map((item, index) => (
                    <div
                      key={`${item.attributes.Fijo ? 'fijo' : 'normal'}-${index}`}
                      className="overflow-hidden w-full max-w-[380px] mx-auto sm:mx-0 rounded-xl border border-slate-300 p-4 flex flex-col justify-between"
                      style={{ height: "474px" }}
                    >
                      <div>
                        <Link href={`/planeacion/${item.attributes.slug}`}>
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
                          <p className="text-lg sm:text-base text-gray-700 mb-2">
                            {item.attributes.Fecha
                              ? fechaFun(item.attributes.Fecha)
                              : "No hay fecha"}
                          </p>
                          <h2 className="text-xl sm:text-2xl font-medium text-[#333334] mb-0">
                            {truncateText(item.attributes.Titulo, isMobile ? 77 : 72)}
                          </h2>
                        </article>
                      </div>
                      <div className="flex justify-center">
                        <Link
                          href={`/planeacion/${item.attributes.slug}`}
                          className="bg-[#611232] text-white text-center py-2 px-4 hover:bg-white hover:text-[#611232] border-2 border-[#611232] rounded-full mb-5"
                        >
                          Continuar leyendo
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center">Cargando planeación...</p>
                )}
              </div>
            </div>

            {/* Paginación */}
            {totalNoticias > 0 && (
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
            )}
          </div>
        </div>
      </PagSec>
    </main>
  );
}

export default Planeacion;