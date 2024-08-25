"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  //obtiene la ruta en la que se mando a llamar al componente
  const pathname = usePathname();
  //los separa por segmentos cada que encuentre un / y ademas elimina los elementos vacios que queden en el arreglo
  const pathArray = pathname.split("/").filter((path) => path);

  //es un switch case para saber por que cosas debe separar lo que encuentre en la ruta en el breadcrumb
  //segment sera el elemento actual del arreglo en momento en el que se mande a llamar
  const generateBreadcrumbTitle = (segment) => {
    switch (segment) {
      case "oferta-educativa":
        return "Oferta educativa";
      case "enlinea":
        return "En linea";
      case "examen-unico":
        return "Examen único";
      case "presencial":
        return "Presencial";
      case "que-modalidad-elijo":
        return "¿Que modalidad elijo?";

      case "servicios":
        return "Servicios";
      case "solicitud-duplicados":
        return "Solicitud de duplicados";
      case "servicios":
        return "Servicios";
      case "constancia-comipems":
        return "Constancia COMIPEMS";
      case "reposicion-certificados":
        return "Reposicion de certificados";
      case "descargar-material":
        return "Descargar material de estudio";
      case "revalidacion-extranjeros":
        return "Revalidación a extranjeros";

      case "control-escolar":
        return "Control escolar";
      case "departamento-planacion":
        return "Departamento de planacion";

      case "inicio-sesion":
        return "Inicio de sesión";
      default:
        return segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());
    }
  };

  return (
    <nav className="text-sm text-gray-700 mb-4">
      <ol className="list-none p-0 inline-flex">
        <li>
          <Link
            href="/"
            className="flex items-center text-gray-500 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Inicio
          </Link>
        </li>
        {/* con la ruta ya dividida en el arreglo, vamos a recorrerlo con map, segment sera el elemento e index el 'contador' */}
        {pathArray.map((segment, index) => {
          // slice obtiene todos los elementos del arreglo desde el elemento 0 hasta donde nos encontramos +1, esto es solo para poder enviarlos a ese link si dan click en el elemento que desplegamos
          const href = "/" + pathArray.slice(0, index + 1).join("/");
          return (
            <li
              key={index}
              className="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              <Link
                href={href}
                className="text-gray-500 hover:underline"
              >
                {generateBreadcrumbTitle(segment)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
