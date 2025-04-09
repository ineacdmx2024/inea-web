"use client";
import { Open_Sans, Montserrat } from "next/font/google";
import { useState, useEffect } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

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
    const diaSemana = diasSemana[fecha.getDay() + 1];
    const dia = fecha.getDate() + 1;
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
    return `${diaSemana}, ${dia} de ${mes} de ${año}`;
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
      {/* Barra separadora */}
      <div className="mx-auto mt-40 w-11/12 medida3:w-full arrow:w-11/12 tablet:w-[1140px]">
        <div className="ml-0 mb-10">
          <Breadcrumb />
        </div>
        <h1
          className={`${montserrat.className} text-4xl font-semibold text-[#333334] letras:text-[38px]`}
        >
          Noticias antiguas
        </h1>
      </div>

      {/* Contenido principal */}
      <div className="mx-auto mt-14 mb-16 w-11/12 medida3:w-11/12 arrow:w-11/12 tablet:w-[1140px] flex flex-col justify-center items-center gap-8">
        {/* Todas las Noticias */}
        <div className="w-full grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {datos ? (
            datos.map((item, index) => (
              <div key={index} className="px-0 flex flex-col h-full">
                <div className="overflow-hidden w-full h-full rounded-xl border border-slate-300 p-4 flex flex-col justify-between">
                  <Link href={`/blog/noticias-antiguas/${item.attributes.slug}`}>
                    {/* Div de la imagen */}
                    <div className="rounded-xl max-h-[250px] h-[250px] w-full overflow-hidden">
                      <Image
                        src={
                          item.attributes.Imagen?.data?.attributes?.formats
                            ?.small?.url
                        }
                        alt={
                          item.attributes.Nombre_de_la_Imagen ||
                          "Imagen sin título"
                        }
                        className="object-cover w-full h-full"
                        width={350}
                        height={250}
                      />
                    </div>

                    {/* Div del texto */}
                    <article
                      className={`${open_Sans.className} mt-4 w-full px-4 py-2 flex flex-col justify-between flex-grow`}
                    >
                      <p className="text-sm text-gray-700 mb-2">
                        {item.attributes.Fecha
                          ? fechaFun(item.attributes.Fecha)
                          : "No hay"}
                      </p>
                      <h2 className="text-xl font-medium text-[#333334] mb-4">
                        {truncateText(item.attributes.Titulo, 45)}
                      </h2>
                    </article>
                  </Link>

                  {/* Botón */}
                  <div className="w-full mt-auto">
                    <Link
                      href={`/blog/noticias-antiguas/${item.attributes.slug}`}
                      className="m-auto bg-[#611232] text-white text-center py-3 px-2 w-40 hover:bg-white hover:text-[#611232] border-2 border-[#611232] rounded-full block mb-4"
                    >
                      <p className="text-xs font-light">
                        Continuar leyendo
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Cargando noticias...</p>
          )}
        </div>

        {/* Paginación */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={handlePrevPage}
            disabled={paginaActual === 1}
            className={`rounded-l py-2 px-4 text-lg ${
              paginaActual === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#611232] text-white hover:bg-[#360a1c]"
            }`}
          >
            {"<<"}
          </button>
          {Array.from({ length: totalPaginas }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              disabled={paginaActual === i + 1}
              className={`py-2 px-4 text-lg ${
                paginaActual === i + 1
                  ? "bg-[#360a1c] text-white"
                  : "bg-white hover:bg-gray-200 hover:text-[#360a1c]"
              } border border-slate-300`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={paginaActual === totalPaginas}
            className={`rounded-r py-2 px-4 text-lg ${
              paginaActual === totalPaginas
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#611232] text-white hover:bg-[#360a1c]"
            }`}
          >
            {">>"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default NoticiasAntiguas;
