"use client";
import { Noto_Sans } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import PagSec from "@/components/PlantillaPagSec";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

const truncateText = (text, maxLetters) => {
  if (!text) return "";
  if (text.length > maxLetters) {
    return text.slice(0, maxLetters) + "...";
  }
  return text;
};

function Planeacion() {
  const cardsRef = useRef(null);
  const firstMountRef = useRef(true);

  const [datos, setDatos] = useState([]); // datos no-fijos (para la página actual)
  const [fijos, setFijos] = useState([]); // todas las noticias fijas
  const [totalNonFijos, setTotalNonFijos] = useState(0); // total de no-fijos (para paginación)
  const [paginaActual, setPaginaActual] = useState(1);
  const noticiasPorPagina = 4;
  const [isMobile, setIsMobile] = useState(false);

  // Fetch fijos
  const fetchFijos = async () => {
    try {
      const response = await fetch(
        `https://inea-web-backend-production.up.railway.app/api/plannings?filters[Fijo][$eq]=true&populate=*&sort[0]=Orden:asc&pagination[limit]=100`
      );
      const result = await response.json();
      setFijos(result.data || []);
    } catch (error) {
      console.error("Error al obtener los datos fijos:", error);
      setFijos([]);
    }
  };

  // Fetch total de no-fijos (solo la cuenta)
  const fetchCountNonFijos = async () => {
    try {
      const response = await fetch(
        `https://inea-web-backend-production.up.railway.app/api/plannings?filters[$or][0][Fijo][$eq]=false&filters[$or][1][Fijo][$null]=true&pagination[limit]=1`
      );
      const result = await response.json();
      const total = result?.meta?.pagination?.total || 0;
      setTotalNonFijos(total);
    } catch (error) {
      console.error("Error al obtener total no-fijos:", error);
      setTotalNonFijos(0);
    }
  };

  // Fetch datos no-fijos necesarios para la página actual
  const fetchData = async (page = 1) => {
    const startIndexGlobal = (page - 1) * noticiasPorPagina;

    // Cuántos fijos caen en esta página
    let fijosTake = 0;
    if (startIndexGlobal < fijos.length) {
      fijosTake = Math.min(fijos.length - startIndexGlobal, noticiasPorPagina);
      if (fijosTake < 0) fijosTake = 0;
    }

    const startNonFijos = Math.max(0, startIndexGlobal - fijos.length);
    const requiredNonFijos = noticiasPorPagina - fijosTake; // puede ser 0

    if (requiredNonFijos <= 0) {
      // esta página se llena completamente con fijos: no necesitamos pedir no-fijos
      setDatos([]);
      return;
    }

    try {
      const response = await fetch(
        `https://inea-web-backend-production.up.railway.app/api/plannings?filters[$or][0][Fijo][$eq]=false&filters[$or][1][Fijo][$null]=true&populate=*&sort[0]=Fecha:desc&pagination[limit]=${requiredNonFijos}&pagination[start]=${startNonFijos}`
      );
      const result = await response.json();
      setDatos(result.data || []);
      const totalFromMeta = result?.meta?.pagination?.total;
      if (typeof totalFromMeta === "number") setTotalNonFijos(totalFromMeta);
    } catch (error) {
      console.error("Error al obtener los datos no fijos:", error);
      setDatos([]);
    }
  };

  useEffect(() => {
    fetchFijos();
    fetchCountNonFijos();
  }, []);

  useEffect(() => {
    fetchData(paginaActual);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginaActual, fijos]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
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

  // Construye el array final a renderizar para la página actual:
  const todosLosDatos = () => {
    const fijosArray = fijos || [];
    const datosArray = datos || [];

    const startIndexGlobal = (paginaActual - 1) * noticiasPorPagina;

    // Slice de fijos que pertenecen a esta página
    let fijosSlice = [];
    if (startIndexGlobal < fijosArray.length) {
      const start = startIndexGlobal;
      const end = Math.min(fijosArray.length, start + noticiasPorPagina);
      fijosSlice = fijosArray.slice(start, end);
    }

    return [...fijosSlice, ...datosArray];
  };

  const items = todosLosDatos();

  // paginación
  const totalItems = (fijos?.length || 0) + (totalNonFijos || 0);
  const totalPaginas = Math.max(1, Math.ceil(totalItems / noticiasPorPagina));

  // Handlers: solo cambian la página (el scroll lo hago en el useEffect abajo)
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPaginas) return;
    setPaginaActual(newPage);
  };

  const handleNextPage = () => {
    if (paginaActual < totalPaginas) {
      setPaginaActual((p) => p + 1);
    }
  };

  const handlePrevPage = () => {
    if (paginaActual > 1) {
      setPaginaActual((p) => p - 1);
    }
  };

  // SCROLL: cuando cambie paginaActual y los items se actualicen, hago scroll.
  // Evito el primer mount con firstMountRef.
  useEffect(() => {
    if (firstMountRef.current) {
      firstMountRef.current = false;
      return;
    }

    // Pequeña espera para que el DOM se actualice (y los elementos ocupen su espacio).
    const id = window.setTimeout(() => {
      const section = cardsRef.current;
      if (!section) return;

      // Intento detectar un header fijo y restar su altura
      const header =
        document.querySelector("main") ||
        null;
      const headerHeight = header?.offsetHeight || 0;

      const rect = section.getBoundingClientRect();
      const top = rect.top + window.pageYOffset - headerHeight - 1; // 16px margen

      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }, 120); // 120ms suele ser suficiente; ajustar si es necesario

    return () => window.clearTimeout(id);
  }, [paginaActual, items.length]); // items.length para esperar a que cambie el número de cards

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

            <div id="cards-section" ref={cardsRef} className="mb-16 w-full">
              <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {items && items.length > 0 ? (
                  items.map((item, index) => {
                    const key =
                      item?.id ?? item?.attributes?.slug ?? `${paginaActual}-${index}`;
                    const slug = item?.attributes?.slug ?? "#";
                    const imgSrc =
                      item?.attributes?.Imagen?.data?.attributes?.url ||
                      item?.attributes?.Imagen?.data?.attributes?.formats?.large?.url ||
                      item?.attributes?.Imagen?.data?.attributes?.formats?.medium?.url ||
                      "";
                    return (
                      <div
                        key={key}
                        className="overflow-hidden w-full max-w-[380px] mx-auto sm:mx-0 h-full min-h-[474px] rounded-xl border border-slate-300 p-4 flex flex-col justify-between"
                        style={{ height: "474px" }}
                      >
                        <div>
                          <Link href={`/planeacion/${slug}`}>
                            <div className="rounded-xl max-h-[220px] h-[220px] w-full overflow-hidden">
                              {imgSrc ? (
                                <Image
                                  src={imgSrc}
                                  alt={item?.attributes?.Nombre_de_la_Imagen || "Imagen sin título"}
                                  width={300}
                                  height={220}
                                  className="object-cover w-full h-full"
                                  quality={100}
                                  priority={index < 6}
                                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                  <span className="text-sm text-gray-500">Sin imagen</span>
                                </div>
                              )}
                            </div>
                          </Link>
                          <article className={`${notoSans.className} mt-4 w-full px-2 sm:px-4 py-1`}>
                            <p className="text-sm sm:text-base text-gray-700 mb-2">
                              {item?.attributes?.Fecha
                                ? fechaFun(item.attributes.Fecha)
                                : "No hay fecha"}
                            </p>
                            <h2 className="text-base sm:text-lg font-medium text-[#333334] mb-0">
                              {truncateText(item?.attributes?.Titulo ?? "", isMobile ? 85 : 86)}
                            </h2>
                          </article>
                        </div>
                        <div className="flex justify-center">
                          <Link
                            href={`/planeacion/${slug}`}
                            className="bg-[#611432] text-white text-center py-2 px-4 hover:bg-white hover:text-[#611432] border-2 border-[#611432] rounded-full mb-5"
                          >
                            Continuar leyendo
                          </Link>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-center">Cargando planeación...</p>
                )}
              </div>
            </div>

            {/* Paginación */}
            {totalPaginas > 0 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={handlePrevPage}
                  disabled={paginaActual === 1}
                  aria-label="Página anterior"
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
                  aria-label="Página siguiente"
                  className={`px-4 py-2 bg-[#611432] text-white rounded-md ${
                    paginaActual === totalPaginas ? "opacity-50 cursor-not-allowed" : "hover:bg-[#8a1a4a]"
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