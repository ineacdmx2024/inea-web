import React from "react";
import PagSec from "@/components/PlantillaPagSec";
import PagMod from "@/components/PlantillaPagModalidad";
const linea = {
  bannerImage: "/Modalidad/aprendeINEAenlinea2.webp",
  title: "AprendeINEA en línea",
  description: "",
  paragraphs: [
    "Aprende INEA es una plataforma educativa en línea y gratuita, accesible para cualquier persona. Su objetivo principal es proporcionar una vía flexible y conveniente para que los adultos de 15 años o más completen su educación Primaria o Secundaria y obtengan el certificado correspondiente.",
    "Una vez registrado, cada estudiante tiene la libertad de estudiar a su ritmo a través de su teléfono o computadora, sin restricciones de tiempo para completar los módulos. Sin embargo, se espera que mantengan una participación activa en la plataforma. El nivel Primaria comprende un propedéutico y cinco módulos. Mientras Secundaria consta de un propedéutico y siete módulos. ",
    "El proceso de aprendizaje implica estudiar los materiales digitales, realizar actividades y aprobar una evaluación final por módulo con una calificación mínima. Los estudiantes tienen la oportunidad de mejorar sus calificaciones a través de múltiples intentos en las actividades y evaluaciones.",
  ],
  time: " 3 a 6 meses dedicando, 4 horas por semana.",
  requirements: [
    "Tener 15 años o más.",
    "Acta de nacimiento",
    "CURP",
    "Certificado",
    "Primaria (en caso de comenzar Secundaria)",
    "Documento binacional (para personas provenientes del extranjero).",
    "En caso de haber cursado en grados escolarizados (Primaria o Secundaria) se deben presentar las boletas correspondientes.",
  ],
  celdas: [
    {
      id: "1",
      title: "Quienes",
      subtitle:
        "Desean estudiar con el uso de dispositivos móviles o computadora desde casa",
    },
    {
      id: "2",
      title: "Niveles",
      subtitle: ["Primaria: 6 módulos.", "Secundaria: 9 módulos."],
    },
    {
      id: "3",
      title: "Características",
      subtitle: [
        "PC, Laptop, tableta o celular con acceso a internet con opción de descarga",
        "Asesoría opcional (presencial o virtual) ",
        "Evaluación continua y final ",
        "Materiales: Educativos digitales  ",
      ],
    },
    {
      id: "4",
      title: "Aprende INEA", // Añadir un título para que se muestre
      subtitle: {
        buttonLabel: "Plataforma",
        link: "https://aprendeinea.inea.gob.mx/cursos_2023/index_todos.html",
      },
    },
  ],
};
function Aprende_Inea() {
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
      title: "Examen único",
      imageSrc: "/Modalidad/Examenunico2.webp",
      buttonText: "Ir al sitio",
      link: "/oferta-educativa/examen-unico",
    },
  ];
  return (
    <div className="">
      <PagSec Enlaces={cards}>
        <PagMod info={linea}></PagMod>
      </PagSec>
    </div>
  );
}

export default Aprende_Inea;
