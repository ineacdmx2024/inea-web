import React from "react";
import PagSec from "@/components/PlantillaPagSec";
import PagMod from "@/components/PlantillaPagModalidad";
const examen = {
  bannerImage: "/Modalidad/examen_unico2024.jpg",
  title: "Examen de Reconocimiento de Saberes ",
  description: "(Examen Único)",
  paragraphs: [
    "La modalidad de Examen de Reconocimiento de Saberes o Examen Único es una iniciativa gratuita que brinda oportunidades educativas a aquellos que no han completado su educación básica en el sistema escolarizado tradicional y desean obtener en poco tiempo su certificado de Primaria o Secundaria. Su objetivo principal es evaluar y certificar mediante un único examen los conocimientos y habilidades adquiridos por personas de 15 años o más a lo largo de su vida, independientemente de si han asistido o no a la escuela. ",
    "El Examen Único evalúa diversas áreas del conocimiento, incluyendo lectura, escritura, matemáticas, ciencias sociales y ciencias naturales con diferente profundidad según se trate del nivel Primaria o Secundaria.  ",
  ],
  time: " Inmediato ",
  requirements: [
    "Tener 15 años o más.",
    "Identificación oficial con fotografía",
    "OPCIONAL: Portafolio de evidencias (reconocimientos, constancias y diplomas)",
    "Dos fotografías tamaño infantil (color o blanco y negro) ",
    "Certificado de Primaria (sólo para quienes harán examen de secundaria).",
  ],
  celdas: [
    {
      id: "1",
      title: "Quienes",
      subtitle:
        "Cuentan con experiencia laboral y antecedentes escolares y desean realizar solo un examen por nivel",
    },
    {
      id: "2",
      title: "Niveles",
      subtitle: ["Primaria: Guia de estudio", "Secundaria: Guia de estudio"],
    },
    {
      id: "3",
      title: "Características",
      subtitle: [
        "Asesoría gratuita opcional",
        "Examen unico para certificar primaria",
        "Examen unico para certificar secundaria",
        "Materiales: Guía para el reconocimiento de saberes ",
      ],
    },
    {
      id: "4",
      title: "Opciones",
      subtitle: [
        "Examen en línea con calificación inmediata",
        "Examen impreso",
      ],
    },
  ],
};

function Examen_unico() {
  const cards = [
    {
      title: "¿Qué modalidad elijo?",
      imageSrc:
        "https://imgs.search.brave.com/RAPyqA9Q7HK7hP22bJsUZyXxmMTP1JhhZXpVMjgfr8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXN0cm9taWEuY29t/L3VuaXZlcnNvL2Zv/dG9zL2xhc2VzdHJl/bGxhcy5qcGc",
      buttonText: "Ir al sitio",
      link: "/oferta-educativa/que-modalidad-elijo",
    },
    {
      title: "Modalidad presencial",
      imageSrc: "/Modalidad/programa_regular2.webp",
      buttonText: "Ir al sitio",
      link: "/oferta-educativa/presencial",
    },
    {
      title: "Modalidad en linea",
      imageSrc: "/Modalidad/aprendeINEAenlinea2.webp",
      buttonText: "Ir al sitio",
      link: "/oferta-educativa/enlinea",
    },
  ];
  return (
    <PagSec Enlaces={cards}>
      <PagMod info={examen}></PagMod>
    </PagSec>
  );
}

export default Examen_unico;
