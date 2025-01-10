import React from "react";
import PagSec from "@/components/PlantillaPagSec";
import PagMod from "@/components/PlantillaPagModalidad";
const regular = {
  bannerImage: "/Modalidad/programa_regular2.webp",
  title: "Programa regular presencial",
  description: "(Alfabetización, Primaria o Secundaria)",
  paragraphs: [
    "El Programa regular presencial, o Modelo de Educación para la Vida (MEV) AprendeINEA, es una opción educativa gratuita diseñada para personas de 15 años o más que desean alfabetizarse, aprender a leer y escribir, o completar sus estudios de Primaria o Secundaria y obtener el certificado correspondiente. Esta modalidad es la única que ofrece alfabetización, ya que quienes inician este proceso requieren una asesoría más puntual y personalizada.",
    "En este Programa, las personas tienen la oportunidad de estudiar en un lugar fijo, utilizando materiales educativos impresos y recibiendo el apoyo directo de un asesor del INEA, quien los guía a lo largo de su proceso educativo, atendiendo sus necesidades particulares.",
    "La estructura curricular varía según el nivel educativo que se esté cursando. Para alfabetización, se utilizan materiales específicos que enseñan habilidades básicas de lectura y escritura. En el nivel de Primaria, comprende cinco módulos básicos y uno diversificado, mientras que para Secundaria incluye siete módulos básicos y dos diversificados. Estos módulos abarcan temas de lectura, escritura, matemáticas, ciencias sociales y naturales.",
  ],
  time: " 3 a 6 meses dedicando, 4 horas por semana.",
  requirements: [
    "Tener 15 años o más.",
    "Acta de nacimiento",
    "CURP",
    "Certificado de Primaria (en caso de comenzar Secundaria)",
    "Primaria (en caso de comenzar Secundaria)",
    "Documento binacional (para personas provenientes del extranjero).",
    "En caso de haber cursado en grados escolarizados (Primaria o Secundaria) se deben presentar las boletas correspondientes.",
  ],
  celdas: [
    {
      id: "1",
      title: "Quienes",
      subtitle:
        "Quieren aprender a leer y escribir y estudiar primaria o secundaria con materiales impresos en un lugar fijo.",
    },
    {
      id: "2",
      title: "Niveles",
      subtitle: [
        "Alfabetización: Hispano hablante 3 módulos. ",
        "Alfabetización: Indígena bilingüe 5 módulos. ",
        "Primaria: 6 módulos.",
        "Secundaria: 9 módulos.",
      ],
    },
    {
      id: "3",
      title: "Características",
      subtitle: [
        "Sesiones de estudio presencial con asesoría. ",
        "Examen por módulo.",
        "Materiales: Módulos impresos ",
      ],
    },
    {
      id: "4",
      title: "Materiales",
      subtitle: "Libros impresos o electrónicos gratuitos",
    },
  ],
};
function Presencial() {
  const cards = [
    {
      title: "¿Qué modalidad elijo?",
      imageSrc:
        "https://imgs.search.brave.com/RAPyqA9Q7HK7hP22bJsUZyXxmMTP1JhhZXpVMjgfr8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXN0cm9taWEuY29t/L3VuaXZlcnNvL2Zv/dG9zL2xhc2VzdHJl/bGxhcy5qcGc",
      buttonText: "Ir al sitio",
      link: "/oferta-educativa/que-modalidad-elijo",
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
    <div className="">
      <PagSec Enlaces={cards}>
        <PagMod info={regular}></PagMod>
      </PagSec>
    </div>
  );
}

export default Presencial;
