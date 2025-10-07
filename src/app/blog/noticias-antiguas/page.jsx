"use client";
import { Noto_Sans } from "next/font/google";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PagSec from "@/components/PlantillaPagSec";

// Crea la configuración de la fuente Noto Sans con pesos, estilos y subconjuntos
const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

// Función auxiliar que trunca texto si excede un número máximo de letras
const truncateText = (text, maxLetters) => {
  // Si la longitud del texto es mayor al máximo, corta y agrega "..."
  if (text.length > maxLetters) {
    return text.slice(0, maxLetters) + "...";
  }
  // Si no excede, retorna el texto completo
  return text;
};

// Componente principal que muestra noticias antiguas con paginación
function NoticiasAntiguas() {
  // Estado que almacenará los datos (array de noticias)
  const [datos, setDatos] = useState(null);
  // Estado que guarda el total de noticias disponibles (para paginación)
  const [totalNoticias, setTotalNoticias] = useState(0);
  // Estado para la página actual en la paginación
  const [paginaActual, setPaginaActual] = useState(1);
  // Define cuántas noticias mostrar por página
  const noticiasPorPagina = 9;
  // Estado booleano para detectar si está en vista móvil
  const [isMobile, setIsMobile] = useState(false);

  // Función asíncrona para obtener datos desde la API (con paginación)
  const fetchData = async (page = 1) => {
    // Calcula el índice inicial según la página (start para la API)
    const start = (page - 1) * noticiasPorPagina;
    try {
      // Hace fetch a la API con parámetros: populate, sort por fecha desc y paginación
      const response = await fetch(
        `https://inea-web-backend-production.up.railway.app/api/blogs?populate=*&sort[0]=Fecha:desc&pagination[limit]=${noticiasPorPagina}&pagination[start]=${start}`
      );
      // Convierte la respuesta a JSON
      const result = await response.json();
      // Guarda los datos (array de noticias) en el estado 'datos'
      setDatos(result.data);
      // Guarda el total de noticias en 'totalNoticias' usando la metadata de la respuesta
      setTotalNoticias(result.meta.pagination.total);
    } catch (error) {
      // En caso de error, lo registra en consola
      console.error("Error al obtener los datos:", error);
    }
  };

  // useEffect que dispara la carga de datos cada vez que cambia la página actual
  useEffect(() => {
    // Llama a fetchData con la página actual
    fetchData(paginaActual);
  }, [paginaActual]);

  // useEffect para detectar cambios de tamaño de ventana y determinar si es móvil
  useEffect(() => {
    // Función que actualiza isMobile según el ancho de la ventana
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint de Tailwind (640px)
    };
    // Ejecuta la verificación inicial al montar el componente
    handleResize();
    // Agrega el event listener para el cambio de tamaño
    window.addEventListener("resize", handleResize);
    // Limpia el listener cuando el componente se desmonta
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Función para formatear la fecha recibida desde la API a un string legible en español
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
    // Crea un objeto Date a partir del string/fecha proporcionada por la API
    const fecha = new Date(fechaAPI);
    // Devuelve la fecha formateada: "DíaSemana, dd de mes de yyyy"
    return `${diasSemana[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
  };

  // Calcula el total de páginas disponibles (redondeando hacia arriba)
  const totalPaginas = Math.ceil(totalNoticias / noticiasPorPagina);

  // Manejador para avanzar a la siguiente página (si no está en la última)
  const handleNextPage = () => {
    if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1);
  };

  // Manejador para retroceder a la página anterior (si no está en la primera)
  const handlePrevPage = () => {
    if (paginaActual > 1) setPaginaActual(paginaActual - 1);
  };

  return (
    <main>
      {/* Componente de plantilla que envuelve la sección, recibe props Enlaces y mostrarCarrusel */}
      <PagSec Enlaces={[]} mostrarCarrusel={false}>
        <div className="mx-auto w-11/12 medida3:w-4/5 md:w-[1142px] grid grid-cols-1 md:grid-cols-12 gap-4 items-start mt-0">
          <div className="col-span-12">
            <h1
              className={`${notoSans.className} text-[38px] font-semibold text-[#333334] mb-5 leading-tight gap-8 ml-[-20px] md:ml-0.5`}
            >
              Noticias antiguas
            </h1>

            {/* Contenedor que envuelve la lista de noticias */}
            <div className="mb-16 w-full">
              <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {/* Si 'datos' existe, mapea los items; si no, muestra texto de carga */}
                {datos ? (
                  // Recorre el array de noticias y renderiza cada tarjeta
                  datos.map((item, index) => (
                    // Tarjeta individual de noticia
                    <div
                      key={index}
                      className="overflow-hidden w-full max-w-[380px] mx-auto sm:mx-0 rounded-xl border border-slate-300 p-4 flex flex-col justify-between"
                      style={{ height: "474px" }}
                    >
                      <div>
                        {/* Link que envuelve la imagen y dirige al detalle usando el slug */}
                        <Link href={`/blog/noticias-antiguas/${item.attributes.slug}`}>
                          <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden">
                            {/* Imagen optimizada: intenta usar la versión 'medium' y si no existe usa la url original */}
                            <Image
                              src={item.attributes.Imagen?.data?.attributes?.formats?.medium?.url ||
                                   item.attributes.Imagen?.data?.attributes?.url}
                              alt={item.attributes.Nombre_de_la_Imagen || "Imagen sin título"}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, 330px"
                            />
                          </div>
                        </Link>
                        {/* Artículo con la fecha y título */}
                        <article
                          className={`${notoSans.className} mt-4 w-full px-2 sm:px-4 py-1`}
                        >
                          {/* Párrafo que muestra la fecha formateada o un texto alternativo */}
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
                      {/* Contenedor para el botón que lleva al detalle de la noticia */}
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
                  // Mensaje que se muestra mientras 'datos' es null (cargando)
                  <p className="text-center">Cargando noticias...</p>
                )}
              </div>
            </div>

            {/* Botones de navegación (paginación) - solo se muestran si hay noticias */}
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

// Exporta el componente por defecto para que pueda ser importado en otras partes del proyecto
export default NoticiasAntiguas;