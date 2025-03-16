"use client";
import React, { useState, useEffect } from "react";
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
  Boton: [
    {
      description: "Regístrate en la modalidad presencial y comienza tus estudios:",
      buttonLabel: "Quiero que me contacten",
      link: "https://inea-web-frontend.vercel.app/servicios/te-contactamos",
    },
  ],
  time: "3 a 6 meses dedicando 4 horas por semana.",
  requirements: [
    "Tener 15 años o más.",
    "Acta de nacimiento",
    "CURP",
    "Certificado de Primaria (en caso de comenzar Secundaria)",
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
        "Alfabetización: Hispano hablante 3 módulos.",
        "Alfabetización: Indígena bilingüe 5 módulos.",
        "Primaria: 6 módulos.",
        "Secundaria: 9 módulos.",
      ],
    },
    {
      id: "3",
      title: "Características",
      subtitle: [
        "Sesiones de estudio presencial con asesoría.",
        "Examen por módulo.",
        "Materiales: Módulos impresos",
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
  //enlaces laterales
  const [enlacesL, setenlacesL] = useState([]);

  useEffect(() => {
    let enlaces = [];
    const fetchEnlacesL = async () => {
      const resPineados = await fetch(
        //`https://inea-web-backend.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=true&populate=%2A`
        `https://104.248.229.55:1337/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=true&populate=%2A`
      );
      const { data: enlacesPineados } = await resPineados.json();
      if (enlacesPineados.length < 3) {
        const resNoPineados = await fetch(
          //`https://inea-web-backend.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=false&populate=%2A&sort[0]=Fecha:desc`
          `https://104.248.229.55:1337/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=false&populate=%2A&sort[0]=Fecha:desc`
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
    <div className="">
      <PagSec Enlaces={enlacesL}>
        <PagMod info={regular}></PagMod>
      </PagSec>
    </div>
  );
}

export default Presencial;
