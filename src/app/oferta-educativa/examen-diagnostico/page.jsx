"use client";
import React, { useState, useEffect } from "react";
import PagSec from "@/components/PlantillaPagSec";
import PagMod from "@/components/PlantillaPagModalidad";

const examen = {
  bannerImage: "/Modalidad/examenes_diagnostico.jpg",
  title: "Examen Diagnóstico",
  description: "",
  paragraphs: [
    "Los exámenes diagnósticos del INEA son evaluaciones de opción múltiple dirigidas a personas de 15 años o más que desean iniciar, continuar o concluir su educación básica. Cumplen dos funciones principales: certificar y ubicar. Si se aprueban todos los módulos que conforman el examen, se obtiene el certificado oficial de Primaria o Secundaria. En caso de no acreditar alguno, los módulos aprobados se consideran válidos y solo es necesario presentar el examen del módulo no acreditado, con la posibilidad de recibir asesoría adicional.",
    <>
    Esta modalidad incluye el uso de Guías de Aprendizaje impresas, organizadas en dos unidades con ejercicios, explicaciones y autoevaluaciones, que ayudan a preparar al estudiante en tres campos formativos: <em>Lengua y Comunicación, Pensamiento Matemático y Vida y Comunidad.</em></>,
  ],
  time: "2 a 3 meses dedicando 2 horas por semana",
  requirements: [
    " Tener 15 años o más.",
    " Acta de nacimiento",
    "CURP",
    "Certificado Primaria (en caso de comenzar Secundaria)",
    "Documento binacional (para personas provenientes del extranjero).",
    " En caso de haber cursado en grados escolarizados (Primaria o Secundaria) se deben presentar las boletas correspondientes.",
  ],
  Boton: [
    {
      description: "Regístrate en la plataforma APRENDEINEA e inicia tus estudios:",
      buttonLabel: "Quiero que me contacten",
      link: "https://aprendeinea.inea.gob.mx/cursos_2023/index_todos.html",
    },
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
        "Sesiones de estudio presencial y asesoría opcional",
        "2 exámenes de primaria",
        "2 exámenes de secundaria",
        "Materiales: Guías de estudio para el examen diagnóstico",
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
  //enlaces laterales
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
    <PagSec Enlaces={enlacesL}>
      <PagMod info={examen}></PagMod>
    </PagSec>
  );
}

export default Examen_unico;
