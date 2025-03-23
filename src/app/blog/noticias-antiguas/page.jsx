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
        `http://localhost:1337/api/blogs?populate=*&sort[0]=Fecha:desc&pagination[limit]=${noticiasPorPagina}&pagination[start]=${start}`
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
      <style jsx global>{`
        /* Card styling based on provided images */
        .news-card {
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          transition: transform 0.2s, box-shadow 0.2s;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .news-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .news-card-button {
          background-color: #611232;
          color: white;
          border-radius: 999px;
          padding: 0.75rem 1rem;
          display: inline-block;
          font-weight: 400;
          text-align: center;
          transition: all 0.2s;
          width: auto;
          min-width: 140px;
        }
        
        .news-card-button:hover {
          background-color: #4e0e29;
        }
      `}</style>

      {/* Barra separadora */}
      <div className="mx-auto mt-40 w-11/12 medida3:w-full arrow:w-11/12 tablet:w-[1140px]">
        <div className="ml-0 mb-10">
          <Breadcrumb />
        </div>
        <h1
          className={`${montserrat.className} text-4xl font-semibold text-[#333334] letras:text-[38px] uppercase`}
        >
          Noticias Antiguas
        </h1>
      </div>

      {/* Contenido principal */}
      <div className="mx-auto mt-14 mb-16 w-11/12 medida3:w-11/12 arrow:w-11/12 tablet:w-[1140px]">
        {/* Todas las Noticias */}
        <div className="w-full grid grid-cols-1 gap-6 ofertaEdu:grid-cols-2 arrow:grid-cols-3">
          {datos ? (
            datos.map((item, index) => (
              <div key={index} className="p-1">
                <div className="news-card">
                  <Link href={`/blog/noticias-antiguas/${item.attributes.slug}`}>
                    {/* Imagen */}
                    <div className="w-full">
                      <Image
                        src={
                          item.attributes.Imagen?.data?.attributes?.formats?.small?.url
                        }
                        alt={
                          item.attributes.Nombre_de_la_Imagen || "Imagen sin título"
                        }
                        className="w-full h-[208px] object-cover"
                        width={350}
                        height={208}
                      />
                    </div>
                    
                    {/* Contenido */}
                    <div className={`${open_Sans.className} p-5 flex flex-col flex-grow`}>
                      <p className="text-sm text-gray-700 mb-2">
                        {item.attributes.Fecha
                          ? fechaFun(item.attributes.Fecha)
                          : "No hay"}
                      </p>
                      <h2 className="text-[20px] leading-tight font-medium mb-6 uppercase text-[#333334]">
                        {truncateText(item.attributes.Titulo, 45)}
                      </h2>
                      
                      <div className="mt-auto pt-3 flex justify-center">
                        <span className="news-card-button">
                          <p className="text-xs letras:text-sm font-light">
                            Continuar leyendo
                          </p>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">Cargando noticias...</p>
          )}
        </div>

        {/* Paginación */}
        <div className="flex justify-end mt-8">
          <div>
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
      </div>
    </main>
  );
}

export default NoticiasAntiguas;