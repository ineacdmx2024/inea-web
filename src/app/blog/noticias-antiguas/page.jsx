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
  //const router = useRouter();

  const fetchData = async (page = 1) => {
    const start = (page - 1) * noticiasPorPagina;

    try {
      // Fetch de las noticias paginadas
      const response = await fetch(
        `https://inea-web-backend.onrender.com/api/blogs?populate=*&sort[0]=Fecha:desc&pagination[limit]=${noticiasPorPagina}&pagination[start]=${start}`
      );
      const result = await response.json();
      setDatos(result.data);

      // Fetch del total de noticias
      const total = result.meta.pagination.total;
      setTotalNoticias(total);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    fetchData(paginaActual); // Cargar la página actual
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

  // Cambiar página al hacer clic en un botón
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
      <div className="mx-auto mt-40  w-11/12 medida3:w-full arrow:w-11/12 tablet:w-[1140px]">
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
      <div className="mx-auto mt-14 mb-16 w-11/12 medida3:w-11/12 arrow:w-11/12 tablet:w-[1140px] flex flex-col justify-center items-end gap-8">
        {/* Todas las Noticias */}
        <div className="w-full grid grid-cols-1 grid-flow-row gap-4 arrow:grid-cols-3 ofertaEdu:grid-cols-2 ">
          {datos ? (
            datos.map((item, index) => (
              <div key={index} className="px-0">
                <div className="overflow-hidden w-full h-auto tablet:h-[450px] rounded-xl border border-slate-300 ">
                  <Link
                    rel="stylesheet"
                    href={`/blog/noticias-antiguas/${item.attributes.slug}`}
                  >
                    {/* Div de la imagen */}
                    <div className="m-auto rounded-t-xl max-h-[392px]">
                      <Image
                        src={
                          item.attributes.Imagen?.data?.attributes?.formats
                            ?.small?.url
                        }
                        alt={
                          item.attributes.Nombre_de_la_Imagen ||
                          "Imagen sin título"
                        }
                        className="w-full h-[208px] rounded-t-xl"
                        width={350}
                        height={258}
                      />
                    </div>

                    {/* Div del texto */}
                    <article
                      className={`${open_Sans.className} h-[240px] flex flex-col justify-between letras:mt-0 pt-4 mt-2 tablet:m-0 w-full tablet:w-[375px] px-5 py-2 m-auto arrow:w-full`}
                    >
                      <p className="letras:text-base text-gray-700 text-sm mb-2 ">
                        {item.attributes.Fecha
                          ? fechaFun(item.attributes.Fecha)
                          : "No hay"}
                      </p>
                      <h2 className="letras:text-[21px] text-[20px] leading-tight font-medium mb-4 uppercase arrow:text-[21px] text-[#333334]">
                        {truncateText(item.attributes.Titulo, 45)}
                      </h2>
                      <div className="overflow-visible !z-10 w-full h-auto">
                        <Link
                          href={`/blog/noticias-antiguas/${item.attributes.slug}`}
                          className="m-auto letras:ml-auto bg-[#611232] text-white text-center py-3 px-2 w-40 hover:bg-white hover:text-[#611232] border-2 border-[#611232] rounded-full block"
                        >
                          <p className="text-xs letras:text-[14.5px] font-light">
                            Continuar leyendo
                          </p>
                        </Link>
                      </div>
                    </article>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Cargando noticias...</p>
          )}
        </div>

        {/* Paginación */}
        <div className=" mt-8 ">
          <button
            onClick={handlePrevPage}
            disabled={paginaActual === 1}
            className={`rounded-l py-1 px-1 text-[16px] ${
              paginaActual === 1 ? "bg-white" : "bg-[#ffffff] hover:bg-gray-200"
            } text-lg border border-slate-300 font-light`}
          >
            {"<<"}
          </button>
          {Array.from({ length: totalPaginas }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              disabled={paginaActual === i + 1}
              className={`py-1 px-3  ${
                paginaActual === i + 1
                  ? "bg-[#360a1c] text-white"
                  : "bg-white hover:bg-gray-200 hover:text-[#360a1c] "
              } text-lg border border-slate-300 font-light`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={paginaActual === totalPaginas}
            className={`rounded-r py-1 px-1 text-[18px] ${
              paginaActual === totalPaginas
                ? "bg-white"
                : "bg-white hover:bg-gray-200"
            } text-lg border border-slate-300`}
          >
            {">>"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default NoticiasAntiguas;
