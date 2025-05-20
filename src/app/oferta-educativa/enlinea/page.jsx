"use client";
import React, { useEffect, useState } from "react";
import PagSec from "@/components/PlantillaPagSec";
import PagMod from "@/components/PlantillaPagModalidad";

const linea = {
  bannerImage: "/Modalidad/aprendeINEAenlinea2.webp",
  title: "AprendeINEA en línea",
  description: "",
  paragraphs: [
    "Aprende INEA es una plataforma educativa en línea y gratuita, accesible para cualquier persona. Su objetivo principal es proporcionar una vía flexible y conveniente para que los adultos de 15 años o más completen su educación Primaria o Secundaria y obtengan el certificado correspondiente.",
    "Una vez registrado, cada estudiante tiene la libertad de estudiar a su ritmo a través de su teléfono o computadora, sin restricciones de tiempo para completar los módulos. Sin embargo, se espera que mantengan una participación activa en la plataforma. El nivel Primaria comprende cinco módulos, mientras Secundaria consta de nueve módulos.",
    "El proceso de aprendizaje implica estudiar los materiales digitales, realizar actividades y aprobar una evaluación final por módulo con una calificación mínima. Los estudiantes tienen la oportunidad de mejorar sus calificaciones a través de múltiples intentos en las actividades y evaluaciones.",
  ],
  Boton: [
    {
      description: "Regístrate en la plataforma APRENDEINEA e inicia tus estudios:",
      buttonLabel: "Regístrate",
      link: "https://aprendeinea.inea.gob.mx/cursos_2023/index_todos.html",
    },
  ],
  time: " 3 a 6 meses dedicando 4 horas por semana.",
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
        "Desean estudiar con el uso de dispositivos móviles o computadora desde casa; si no cuentas con alguno podrás acudir a nuestras Plazas Comunitarias",
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
        "Modular, diversificado, flexible, abierto e integral",
        "PC, Laptop, tableta o celular con acceso a internet con opción de descarga",
        "Asesoría gratuita opcional (presencial o virtual) ",
        "Evaluación continua y final ",
      ],
    },
    {
      id: "4",
      title: "Materiales",
      subtitle: "Libros electrónicos",
    },
  ],
};

function Aprende_Inea() {
  // Enlaces laterales
  const [enlacesL, setenlacesL] = useState([]);

  useEffect(() => {
    let enlaces = [];
    const fetchEnlacesL = async () => {
      const resPineados = await fetch(
        `https://inea-web-backend-cg20.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=true&populate=%2A`
      );
      const { data: enlacesPineados } = await resPineados.json();
      if (enlacesPineados.length < 3) {
        const resNoPineados = await fetch(
          `https://inea-web-backend-cg20.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=false&populate=%2A&sort[0]=Fecha:desc`
        );
        const { data: enlacesNoPineados } = await resNoPineados.json();

        const enlacesCompletados = [
          ...enlacesPineados,
          ...enlacesNoPineados.slice(0, 3 - enlacesPineados.length),
        ];
        enlaces = enlacesCompletados;
      } else {
        enlaces = enlacesPineados;
      }
      const enlacesLData = enlaces.map((item) => ({
        title: item.attributes.Titulo,
        imageSrc: item.attributes?.Imagen.data[0]?.attributes?.url,
        buttonText: "Ir al sitio",
        link: item.attributes.URL_Externo
          ? item.attributes.URL_Externo
          : `/enlaces-de-interes/${item.attributes.slug}`,
      }));
      setenlacesL(enlacesLData);
    };
    fetchEnlacesL();
  }, []);

  return (
    <div>
      {/* El Breadcrumb ahora solo se muestra dentro del componente PagSec */}
      <PagSec Enlaces={enlacesL}>
        <PagMod info={linea} />
        <p>El archivo se llama "Guía de estudio".</p>
      </PagSec>
    </div>
  );
}

export default Aprende_Inea;
