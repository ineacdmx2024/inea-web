import React from "react";
import PagSec from "@/components/PlantillaPagSec";
import PagMod from "@/components/PlantillaPagModalidad";
const examen = {
  bannerImage: "/Modalidad/examenes_diagnostico.jpg",
  title: "Examen Diagnóstico",
  description: "",
  paragraphs: [
    "La modalidad de Examen Diagnóstico con Guías de Aprendizaje ofrece una opción educativa flexible y gratuita para todas las personas de 15 años o más que desean iniciar, continuar o concluir sus estudios de Primaria o Secundaria. ",
    "La Guía de Aprendizaje es un material impreso que está organizada en dos unidades de aprendizaje que incluyen ejercicios y explicaciones de los contenidos relevantes en tres campos formativos: lengua y comunicación, pensamiento matemático, y vida y comunidad. Al final de cada unidad, se presentan ejercicios de autoevaluación para que la persona pueda identificar sus logros y áreas que necesitan refuerzo antes de presentar un examen. Al presentar satisfactoriamente los dos exámenes (uno al concluir cada unidad), se obtendrá el certificado de Primaria o Secundaria. Si por alguna razón la persona no logra acreditar el nivel deseado, tendrá la oportunidad de seguir preparándose y presentar nuevamente el examen. ",
  ],
  time: "2 a 3 meses dedicando 2 horas por semana",
  requirements: [
    " Tener 15 años o más.",
    " Acta de nacimiento ",
    "CURP",
    "Certificado Primaria (en caso de comenzar Secundaria)",
    "Documento binacional (para personas provenientes del extranjero).",
    " En caso de haber cursado en grados escolarizados (Primaria o Secundaria) se deben presentar las boletas correspondientes.",
  ],
  celdas: [
    {
      id: "1",
      title: "Quienes",
      subtitle:
        "Tienen antecedentes escolares y desean realizar sólo exámenes para concluir sus estudios",
    },
    {
      id: "2",
      title: "Niveles",
      subtitle: ["Primaria", "Secundaria"],
    },
    {
      id: "3",
      title: "Características",
      subtitle: [
        "Sesiones de estudio presencial y asesoría opcional ",
        "2 exámenes de primaria ",
        "2 exámenes de secundaria ",
        "Materiales: Guías de estudio para el examen diagnóstico ",
      ],
    },
    {
      id: "4",
      title: "Opciones",
      subtitle: [
        "2 Exámenes de primaria correspondientes a las materias de Español, Matemáticas, Ciencias naturales y sociales",
        "2 Exámenes de secundaria correspondientes a las materias de Español, Matemáticas, Ciencias naturales y sociales",
      ],
    },
  ],
};

function Examen_unico() {
  const cards = [
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
    {
      title: "Examen único",
      imageSrc: "/Modalidad/examen_unico2024.jpg",
      buttonText: "Ir al sitio",
      link: "/oferta-educativa/examen-unico",
    },
  ];
  return (
    <PagSec Enlaces={cards}>
      <PagMod info={examen}></PagMod>
    </PagSec>
  );
}

export default Examen_unico;
