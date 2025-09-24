"use client";
import React, { useState, useEffect } from "react";
import PagSec from "@/components/PlantillaPagSec";
import PagMod from "@/components/PlantillaPagModalidad";

const examen = {
  bannerImage: "/Modalidad/examen_unico2024.jpg",
  title: "Examen de Reconocimiento de Saberes",
  description: "(Examen Único)",
  paragraphs: [
    "La modalidad de Examen de Reconocimiento de Saberes o Examen Único es una iniciativa gratuita que brinda oportunidades educativas a aquellos que no han completado su educación básica en el sistema escolarizado tradicional y desean obtener en poco tiempo su certificado de Primaria o Secundaria. Su objetivo principal es evaluar y certificar mediante un único examen los conocimientos y habilidades adquiridos por personas de 15 años o más a lo largo de su vida, independientemente de si han asistido o no a la escuela.",
    "El Examen Único evalúa diversas áreas del conocimiento, incluyendo lectura, escritura, matemáticas, ciencias sociales y ciencias naturales con diferente profundidad según se trate del nivel Primaria o Secundaria.",
  ],
  Boton: [
    {
      description:
        "Si deseas obtener más información sobre la modalidad del Examen Único y recibir tu certificado, por favor completa el formulario:",
      buttonLabel: "Quiero que me contacten",
      link: "https://inea-web-frontend.vercel.app/servicios/te-contactamos",
    },
  ],
  time: "Inmediato",
  requirements: [
    "Tener 15 años o más.",
    "Identificación oficial con fotografía.",
    "OPCIONAL: Portafolio de evidencias (reconocimientos, constancias y diplomas).",
    "Dos fotografías tamaño infantil (color o blanco y negro).",
    "Certificado de Primaria (sólo para quienes harán examen de secundaria).",
  ],
  celdas: [
    {
      id: "1",
      title: "Quienes",
      subtitle:
        "Cuentan con experiencia laboral y antecedentes escolares y desean realizar solo un examen por nivel.",
    },
    {
      id: "2",
      title: "Niveles",
      subtitle: ["Primaria: Guía de estudio", "Secundaria: Guía de estudio"],
    },
    {
      id: "3",
      title: "Características",
      subtitle: [
        "Asesoría gratuita opcional.",
        "Examen único para certificar primaria.",
        "Examen único para certificar secundaria.",
        "Materiales: Guía para el reconocimiento de saberes.",
      ],
    },
    {
      id: "4",
      title: "Opciones",
      subtitle: ["Examen en línea con calificación inmediata", "Examen impreso"],
    },
  ],
};

function Examen_unico() {
  // enlaces laterales
  const [enlacesL, setenlacesL] = useState([]);

  useEffect(() => {
    let enlaces = [];
    const fetchEnlacesL = async () => {
      const resPineados = await fetch(
        `https://inea-web-backend-production.up.railway.app/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=true&populate=%2A`
      );
      const { data: enlacesPineados } = await resPineados.json();
      if (enlacesPineados.length < 3) {
        const resNoPineados = await fetch(
          `https://inea-web-backend-production.up.railway.app/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=false&populate=%2A&sort[0]=Fecha:desc`
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
