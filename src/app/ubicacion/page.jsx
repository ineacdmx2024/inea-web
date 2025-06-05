"use client";
import React, { useState, useEffect } from "react";
import SkewedPagesResponsive from "@/components/SkewedPagesResponsive";
import PagSec from "@/components/PlantillaPagSec";
import Plazas from "@/components/Plazas";
import "../../app/globals.css";

import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

function Ubicacion() {
  // const [currentPage, setCurrentPage] = useState(1);

  //enlaces laterales
  const [enlacesL, setenlacesL] = useState([]);

  useEffect(() => {
    let enlaces = [];
    const fetchEnlacesL = async () => {
      const resPineados = await fetch(
       // `https://inea-web-backend.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=true&populate=%2A`
        `https://inea-web-backend-cg20.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=true&populate=%2A`
      );
      const { data: enlacesPineados } = await resPineados.json();
      if (enlacesPineados.length < 3) {
        const resNoPineados = await fetch(
          //`https://inea-web-backend.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=false&populate=%2A&sort[0]=Fecha:desc`
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

  const pageData = [
    {
      title: "EULALIA GUZMÁN",
      nom: "Nicolas Mario Sánchez y FLores",
      tel: "56 2130 5489/ 55 4043 5310",
      email: "nmsanchez@inea.gob.mx",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=122hM5GKsgDsm2hophXyiQkdE6I-kzgU&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "Tláhuac",
          dir: "Hidalgo # 1, Col. Barrio San Juan, Alcaldía Tláhuac, CP 13060, CDMX",
          atel: "55 5842 1618",
          aemail: "cztlahuac@inea.gob.mx",
          url: "https://maps.app.goo.gl/SCxmZRsNCUyJj4MJA",
        },
        {
          alcaldia: "Milpa Alta",
          dir: "Av. Chiapas # 2, Col. Barrio de Santa Martha, Alcaldía Milpa Alta, CP 12000CDMX",
          atel: "55 5844 4886",
          aemail: "czmilpaalta@inea.gob.mX",
          url: "https://maps.app.goo.gl/YVCdzbUGW1w17w2u5",
        },
      ],
    },
    {
      title: "Elena Garro",
      nom: "Laura Merlos Sedeño",
      tel: " 55 25 20 46 76",
      email: "lmerlos@inea.gob.mx",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=19J4WWcFAKKUoKRAwA5MC_6Nl4y29PUo&ehbc=2E312F"
          className="  md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "Tlálpan",
          dir: "Periférico Sur #5290, Col. Isidro Fabela, Alcaldía Tlalpan, CP 01403, Ciudad de México",
          atel: "55 56 66 17 50",
          aemail: "cztlalpan@inea.gob.mx",
          url: "https://maps.app.goo.gl/vwJfFRAy2GMGM2AUA",
        },
        {
          alcaldia: "Magdalena Contreras",
          dir: "Av. México 985, Héroes de Padierna, Héroes de Padierna, La Magdalena Contreras, CP 10700, Ciudad de México",
          atel: "55 56 52 72 87",
          aemail: "czmcontreras@inea.gob.mx",
          url: "https://maps.app.goo.gl/24F1NmJLczLY4mfo9",
        },
      ],
    },
    {
      title: "Fernando Solana Morales ",
      nom: "Paola Angélica Avalos Jiménez",
      tel: "55 76 06 72 05",
      email: "",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1ADndmYvW3k1K5kQU7_icHDSJWItFpMs&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "Coyoacán / Xochimilco ",
          dir: "Pedro Ramírez del Castillo S/N, Colonia Centro de Xochimilco, Alcaldía Xochimilco CP 16000, CDMX",
          atel: "55 56 76 66 60",
          aemail: "czxochimilco@inea.gob.mx",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
      ],
    },
    {
      title: "Justo Sierra",
      nom: "Wiliber Sánchez Sánchez",
      tel: "55 79 46 79 55",
      email: "wsanchez@inea.gob.mx",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1KNGOzsp4CL4BUr69KA3UFsheA_jVG2E&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "Álvaro Obregón Norte ",
          dir: "Santa Lucía S/N, Col. Molino de Santo Domingo, Alcaldía Álvaro Obregón, CP 01130, CDMX ",
          atel: "55 52 71 14 43 / 55 26 14 02 78",
          aemail: "czobregonn@inea.gob.mx",
          url: "https://maps.app.goo.gl/ba9BXgUnybZy12Az7",
        },
        {
          alcaldia: "ÁLVARO OBREGÓN SUR",
          dir: "Av. Barranca del Muerto # 482, Col. Los Alpes, Alcaldía Álvaro Obregón, CP 01010, CDMX ",
          atel: " 55 55 50 65 33",
          aemail: "czobregons@inea.gob.mx",
          url: "https://maps.app.goo.gl/gxEYgfWfWUkEz4hGA",
        },
        {
          alcaldia: "Cuajimalpa",
          dir: "Av. Luis Castillo Ledón # 17, Col. Cuajimalpa, Alcaldía Cuajimalpa, CP 05000, CDMX",
          atel: "55 58 12 35 91",
          aemail: "czcuajimalpa@inea.gob.mx",
          url: "https://maps.app.goo.gl/SvyTLG8zawHd5zCj6",
        },
      ],
    },
    {
      title: "ROSARIO CASTELLANOS",
      nom: "Miguel Rojas Merino",
      tel: "55 34 27 18 77 ",
      email: "mrojas@inea.gob.mx",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1yJS8ylTeFs_h-AIe7K4RG4dLXXj5Wzo&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "GUSTAVO A. MADERO PONIENTE",
          dir: "Francisco Villa, Esq. Justo Sierra, Col. Zona Escolar, Alcaldía Gustavo A. Madero, CP 07230, CDMX",
          atel: "55 22 27 30 81",
          aemail: "czgamponiente@inea.gob.mx",
          url: "https://maps.app.goo.gl/HM4eMth7weetM5X9A",
        },
        {
          alcaldia: "GUSTAVO A. MADERO ORIENTE",
          dir: "Av. 5 de Febrero, Esq. Vicente Villada (dentro del edificio de la Alcaldía), Col. Aragón Villa, Alcaldía Gustavo A. Madero, CP 07050, CDMX",
          atel: "55 57 81 06 34",
          aemail: "czgamoriente@inea.gob.mx",
          url: "https://maps.app.goo.gl/Sbn6JDancZimecdL6",
        },
      ],
    },
    {
      title: "SOR JUANA INES DE LA CRUZ",
      nom: "Wiliber Sánchez Sánchez",
      tel: "55 24 18 63 42",
      email: "wsanchez@inea.gob.mx",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1jYl_g2AOqdFwlTY8BqtN3JrPofhRaZc&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),

      items: [
        {
          alcaldia: "BENITO JUÁREZ",
          dir: "Extremadura # 26, Col. Insurgentes Mixcoac, Alcaldía Benito Juárez, CP 03920, CDMX",
          atel: "55 56 11 51 01",
          aemail: "czbjuarez@inea.gob.mx ",
          url: "https://maps.app.goo.gl/AHcxE3qhmyRFPb839",
        },
        {
          alcaldia: "IZTACALCO",
          dir: "Coyuya # 10, Esq. Viaducto, Col. La Cruz, Alcaldía Iztacalco, CP 08310, CDMX",
          atel: "56 50 26 45 / 56 50 26 35 ",
          aemail: "cziztacalco@inea.gob.mx",
          url: "https://maps.app.goo.gl/H2T4d2b4frJ65rTu7",
        },
        {
          alcaldia: "VENUSTIANO CARRANZA",
          dir: "Bacum, Esq. Río Bárcenas (a espaldas del Mercado Álvaro Obregón), Col. Magdalena Mixhuca, Alcaldía Venustiano Carranza, CP 15850, CDMX",
          atel: "55 55 52 41 75",
          aemail: "czvcarranza@inea.gob.mx",
          url: "https://maps.app.goo.gl/UTa8tyL126a9ua169",
        },
      ],
    },
    {
      title: "JOSE VASCONCELOS",
      nom: "Rosa Isela Benitez Valle ",
      tel: "56 21 30 54 89",
      email: "",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1C9rsjt3V3drRpnMGa-f3mXlpiUIiPYU&ehbc=2E312F&noprof=1"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        />
      ),
      items: [
        {
          alcaldia: "AZCAPOTZALCO",
          dir: "Calle 22 # 17, Col. Pro-Hogar, Alcaldía Azcapotzalco, CP 02600, CDMX.",
          atel: "55 53 56 30 38/55 53 68 19 13",
          aemail: "czazcapotzalco@inea.gob.mx",
          url: "https://maps.app.goo.gl/JSE8nwqGbHf7hBv68",
        },
        {
          alcaldia: "CUAUHTÉMOC",
          dir: "Mosqueta # 154, Col. Guerrero, Alcaldía Cuauhtémoc, CP 06300, CDMX",
          atel: "55 55 66 70 22",
          aemail: "czcuauhtemoc@inea.gob.mx",
          url: "https://maps.app.goo.gl/EsEhgiroM27usZQz6",
        },
        {
          alcaldia: "MIGUEL HIDALGO",
          dir: "Av. De los Alpes S/N, Esq. Monte Altaí, Col. Lomas de Chapultepec, Alcaldía Miguel Hidalgo, CP 11000, CDMX",
          atel: "55 52 02 65 15 / 55 52 49 35 00 EXT. 5022 / 5023",
          aemail: "czmhidalgo@inea.gob.mx",
          url: "https://maps.app.goo.gl/KqsuzUAZLsNBBU6K7",
        },
      ],
    },
    {
      title: "JAIME TORRES BODET",
      nom: "Gilberto Camacho Herrera",
      tel: "55 11 42 46 91",
      email: "gcamacho@inea.gob.mx",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1m7JWJM7KiLjTibY591u_2iTi0T01mTs&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "IZTAPALAPA CENTRO",
          dir: "Super Manzana 6, Edificio B primer piso, Col. Unidad Vicente Guerrero, Alcaldía Iztapalapa, CP 09200, CDMX",
          atel: " 55 56 42 36 09",
          aemail: "cziztapalapac@inea.gob.mx",
          url: "https://maps.app.goo.gl/qm4NSfteMpjrpFDZA",
        },
        {
          alcaldia: "IZTAPALAPA PONIENTE",
          dir: "Av. Ermita Iztapalapa # 1029, Col. Barrio San Lucas, Alcaldía Iztapalapa, CP 09000, CDMX",
          atel: "55 26 36 13 88",
          aemail: "cziztapalapap@inea.gob.mx",
          url: "https://maps.app.goo.gl/AFuMTMiLeQ5ceMB47",
        },
        {
          alcaldia: "IZTAPALAPA ORIENTE",
          dir: "Lázaro Cárdenas S/N, Col. Ixtlahuacan, Alcaldía Iztapalapa, CP 09690, CDMX",
          atel: "55 26 35 61 42",
          aemail: "ziztapalapao@inea.gob.mx",
          url: "https://maps.app.goo.gl/D9zKDShpbBGSkwCr9",
        },
      ],
    },
  ];

  const pilaresData = [
    {
      title: "Álvaro Obregón",

      map: (
        <iframe
    
          src="https://www.google.com/maps/d/embed?mid=1KUG8-R8CmUpVRp3E-nIXuzz06p1wNlw&ehbc=2E312F&noprof=1"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Árbol del conocimiento",
          dir: "Luis G. Urbina, S/N, Lomas de Becerra, Álvaro Obregón, C.P. 01279",
          atel: "",
          url: "https://maps.app.goo.gl/SCbw6pHVaTs6vHG96",
        },
        {
          alcaldia: "PILARES Barrio Norte",
          dir: "Cerrada Allende, S/N, Barrio Norte, Álvaro Obregón, C.P. 01410",
          atel: "",
          url: "https://maps.app.goo.gl/G5Hz37e1cf1F6BWU6",
        },
        {
          alcaldia: "PILARES Isidro Febela",
          dir: "Antigua Vía La Venta, S/N, Isidro Fabela, Álvaro Obregón, C.P. 01160 ",
          atel: "",
          url: "https://maps.app.goo.gl/DKVsS8E9feSxaRbw7",
        },
        {
          alcaldia: "PILARES la Araña",
          dir: "Prolongación Río Mixcoac, S/N, La Araña, Álvaro Obregón, C.P. 01510 ",
          atel: "",
          url: "https://maps.app.goo.gl/9bA2ekVzkbvwELFg7",
        },
        {
          alcaldia: "PILARES Olivar del Conde",
          dir: "20, S/N, Olivar del Conde 1a Sección, Álvaro Obregón, C.P. 01400 ",
          atel: "",
          url: "https://maps.app.goo.gl/6YMKEcBJn14xyyBZ7",
        },
        {
          alcaldia: "PILARES Rio San Borja",
          dir: "Río San Borja, S/N, Olivar del Conde 2a Sección, Álvaro Obregón, C.P. 01408 ",
          atel: "",
          url: "https://maps.app.goo.gl/f78g83EqNyKSihfU8",
        },
        {  alcaldia: "PILARES  Presidentes", url: "https://maps.app.goo.gl/QchV25hXLStJA2qn7", dir: "Adolfo De La Huerta Num Sn, 0, Col. Presidentes, C.P. 1290, Alcaldía Alvaro Obregon",  atel: "", }, 
        {  alcaldia: "PILARES  El Capulin", url: "https://maps.app.goo.gl/tDVBLe1yprbWVaTG9", dir: "Artificios Num 234, Col. Capulin, C.P. 1110, Alcaldía Alvaro Obregon",  atel: "", }, 
        {  alcaldia: "PILARES  Belen De Las Flores", url: "https://maps.app.goo.gl/h45EqLUP5hSBp21Y8", dir: "Belen De Las Flores Num 11, Col. Belen De Las Flores, C.P. 1110, Alcaldía Alvaro Obregon",  atel: "", }, 
        {  alcaldia: "PILARES  Jalalpa Tepito", url: "https://maps.app.goo.gl/NnH7acRrc4dLickY6", dir: "Encinal, Santa Fe, Jalapa Tepito 2da Ampliación, C.P. 01296, Alcaldía Alvaro Obregon Ciudad De México Cdmx",  atel: "", }, 
        {  alcaldia: "PILARES  Santa Lucia", url: "https://maps.app.goo.gl/JCVWvtgN3twFARdW6", dir: "Santa Lucia Num 281, Col. Colina Del Sur, C.P. 1430, Alcaldía Alvaro Obregon",  atel: "", }, 

        {  alcaldia: "PILARES  Pueblo Santa Fe", url: "https://maps.app.goo.gl/ZVrKM5Mgey7MiG6KA", dir: "Corregidora Num 0, 0, Col. Santa Fe, C.P. 1210, Alcaldía Alvaro Obregon",  atel: "", }, 
        {  alcaldia: "PILARES  La Cuesta", url: "https://maps.app.goo.gl/zq5YHBrTi2CcPZvE6", dir: "Tecalcapa Num 26, S/N, Col. Tcamino Real De Tetelpan, C.P. 1700, Alcaldía Alvaro Obregon",  atel: "", }, 
        {  alcaldia: "PILARES  Lomas De La Era", url: "https://maps.app.goo.gl/jp66fNw3shn9yTfH6", dir: "29 De Octubre Num Sn, Col. Lomas De La Era, C.P. 18600, Alcaldía Alvaro Obregon",  atel: "", }, 
        {  alcaldia: "PILARES  San Bartolo", url: "", dir: "5 De Mayo Num S/N, 0, Col. San Bartolo Ameyalco, C.P. 1800, Alcaldía Alvaro Obregon",  atel: "", }, 
        {  alcaldia: "PILARES  Chamontoya", url: "https://maps.app.goo.gl/TrP6rgWMWyinSsu3A", dir: "Jazmin Num 68, 0, Col. Chamontoya, C.P. 1857, Alcaldía Alvaro Obregon",  atel: "", }, 
        
        {  alcaldia: "PILARES  Las Aguilas", url: "https://maps.app.goo.gl/rwm2qYyEDEBHtdqA9", dir: "Barranca Del Muerto Num S/N, 0, Col. Las Aguilas Seccion Hornos, C.P. 1710, Alcaldía Alvaro Obregon",  atel: "", }, 
        {  alcaldia: "PILARES  Miguel Gaona Armenta", url: "https://maps.app.goo.gl/Sq4m1RTWWZBiuC5z6", dir: "14 De Marzo Num S/N, Col. Santa Lucia, C.P. 1509, Alcaldía Alvaro Obregon",  atel: "", }, 
        {  alcaldia: "PILARES  Gomez Farias", url: "https://maps.app.goo.gl/5B2Hy9URg1kcEYDK7", dir: "Gomez Farias Num S/N, Col. Bejero, C.P. 1310, Alcaldía Alvaro Obregon",  atel: "", }, 
        {  alcaldia: "PILARES  La Conchita", url: "https://maps.app.goo.gl/ghzq88QnZub2TAWz8", dir: "Primero De Noviembre Num S/N, Col. La Conchita, C.P. 1190, Alcaldía Alvaro Obregon",  atel: "", }, 
        {  alcaldia: "PILARES  Tolteca", url: "https://maps.app.goo.gl/nLmLrm81AhaFGZDk7", dir: "Escuadron 201 Num S/N, Col. Tolteca, C.P. 1120, Alcaldía Alvaro Obregon",  atel: "", }, 
        {  alcaldia: "PILARES  Lomas De Becerra", url: "https://maps.app.goo.gl/ybTqZ4b54sgPnpxX7", dir: "Antigua Via A La Venta Num S/N, Col. Lomas De Becerra, C.P. 1200, Alcaldía Alvaro Obregon",  atel: "", }, 
        {  alcaldia: "PILARES  El Bosque", url: "https://maps.app.goo.gl/wv8ynLANoofPTy4G6", dir: "Camino Real A Toluca Num S/N, Col. El Bosque 2a Seccion, Alcaldía Alvaro Obregon",  atel: "", }, 
        {  alcaldia: "PILARES  Jose Saramago", url: "https://maps.app.goo.gl/oR2T5HaCNpJiPhfD8", dir: "Rio Mixcoac Oriente Num 29, S/N, Col. Lomas De Plateros, C.P. 11111, Alcaldía Alvaro Obregon",  atel: "", }, 
        {  alcaldia: "PILARES  Plateros I", url: "https://maps.app.goo.gl/XaAGaFSMnJWvfMYJ9", dir: "Francisco P. Miranda Num S/N, Col. Merced Gomez, C.P. 11111, Alcaldía Alvaro Obregon",  atel: "", }, 
        {  alcaldia: "PILARES  La Comuna", url: "https://maps.app.goo.gl/UnhcZSYebDbA9DxS7", dir: "Ricardo Flores Magon Num Sn, Sn, Col. Olivar Del Conde 1a Seccion, C.P. 1408, Alcaldía Alvaro Obregon",  atel: "", }, 
        {  alcaldia: "PILARES  Piloto", url: "https://maps.app.goo.gl/dpBydtgv9W9iMhc77", dir: "Puerto Mazatlan Num Sn, Sn, Col. Piloto Adolfo Mateos, C.P. 1298, Alcaldía Alvaro Obregon",  atel: "", }, 
        {  alcaldia: "PILARES  Santa Rosa Xochiac", url: "https://maps.app.goo.gl/VbaTefnW4uaRZrCD8", dir: "Rinconada De Jesus Num S/N, Col. Santa Rosa Xochiac, C.P. 1830, Alcaldía Alvaro Obregon",  atel: "", }, 
        


      ],
    },
    {
      title: "Azcapotzalco",

      map: (
        <iframe

          src="https://www.google.com/maps/d/embed?mid=1tvi1UH-veWd6uDbiO3qqnEjuNgnYEtg&ehbc=2E312F&noprof=1"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Coltongo",
          dir: "Bahía Magdalena, S/N, Coltongo, Azcapotzalco, C.P. 02630 ",
          atel: "",
          url: "https://maps.app.goo.gl/RgTUayJKLD5fR7r37",
        },
        {
          alcaldia: "PILARES Margarita Maza de Juárez",
          dir: "Amuzgos, S/N, Tezozómoc, Azcapotzalco, C.P. 02459",
          atel: "",
          url: "https://maps.app.goo.gl/kAyu2QEXpihozyhRA",
        },
        {
          alcaldia: "PILARES San Miguel Amantla",
          dir: "Morelos, 163, San Miguel Amantla, Azcapotzalco, C.P. 02700 ",
          atel: "",
          url: "https://maps.app.goo.gl/4DhvoQZaE6SckpQu7",
        },
        {
          alcaldia: "PILARES Xalli",
          dir: "Aretillo, 184, Arenal, Azcapotzalco, C.P. 02980",
          atel: "",
          url: "https://maps.app.goo.gl/htuXAudzkVR5byjCA",
        },
        {  alcaldia: "PILARES  La Naranja", url: "https://maps.app.goo.gl/Q7UwLGY257XpB1Gw9", dir: "La Naranja Num 1015, Col. San Pedro Xalpa, C.P. 2719, Alcaldía Azcapotzalco",  atel: "", }, 
        {  alcaldia: "PILARES  Xochinahuac", url: "https://maps.app.goo.gl/C89AuTXdBkZjAbfKA", dir: "Benito Juarez Num 124, Col. San Martin Xochinahuac, C.P. 21200, Alcaldía Azcapotzalco",  atel: "", }, 

        {  alcaldia: "PILARES  Electricistas", url: "https://maps.app.goo.gl/LCvjd91buvP2C3JN9", dir: "Rabaul Num 35 A, Sn, Col. Sindicato Mexicano De Electricistas, C.P. 2060, Alcaldía Azcapotzalco",  atel: "", }, 
        {  alcaldia: "PILARES  Prohogar", url: "https://maps.app.goo.gl/CZZeckBsiZtaYaji7", dir: "22 Num S/N, Col. Prohogar, C.P. 2600, Alcaldía Azcapotzalco",  atel: "", }, 
        {  alcaldia: "PILARES  Real De San Martin", url: "https://maps.app.goo.gl/4wJ7UZpoqFbhFqbj7", dir: "Real De San Martin Num 270, Col. Nueva España, C.P. 2129, Alcaldía Azcapotzalco",  atel: "", }, 
        {  alcaldia: "PILARES  Las Salinas", url: "https://maps.app.goo.gl/QMbaX1UQp2Nozvkn8", dir: "Cahuacatzingo Num 10, Col. Las Salinas, C.P. 2360, Alcaldía Azcapotzalco",  atel: "", }, 
        {  alcaldia: "PILARES  Tepantongo", url: "https://maps.app.goo.gl/UY7TDnw9qUy6FJh89", dir: "Tepantongo Num Sn, Col. San Marcos, C.P. 2020, Alcaldía Azcapotzalco",  atel: "", }, 
        {  alcaldia: "PILARES  San Pedro Xalpa", url: "https://maps.app.goo.gl/4w191qBmfgV56RwM8", dir: "Hidalgo Num S/N, Col. San Pedro Xalpa, C.P. 2710, Alcaldía Azcapotzalco",  atel: "", }, 
        

      ],
    },

    {
      title: "Benito Juárez",
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=11TxF0-Xr_zMdOm3JohqipE9ULyNeVyE&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {  alcaldia: "PILARES  Municipio Libre", url: "https://maps.app.goo.gl/vBToUz9UKZpHR65M8", dir: "Municipio Libre Num 48, Col. Portales, C.P. 3300, Alcaldía Benito Juarez",  atel: "", }, 
        {  alcaldia: "PILARES  8 De Agosto", url: "https://maps.app.goo.gl/d7zbQRw6bfLukUPx6", dir: "Becerra Num S/N, Col. 8 De Agosto, C.P. 3820, Alcaldía Benito Juarez",  atel: "", }, 
        {  alcaldia: "PILARES  Portales", url: "https://maps.app.goo.gl/HrHL43vBhQb8JZa36", dir: "7 A Sur Num 52, Col. Portales Sur, C.P. 3300, Alcaldía Benito Juarez",  atel: "", }, 
        
      ],
    },
    {
      title: "Coyoacán",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1ITyGlGxzE2bOtY_Nvn3ZpQuGsIETQh0&ehbc=2E312F&noprof=1"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Santa Úrsula",
          url: "https://maps.app.goo.gl/8LseoFkeTuhsvxct5",
          dir: "San Isauro, Mz. 940, Santa Úrsula Coapa, Coyoacán, C.P. 04600",
          atel: "",
        },
        {
          alcaldia: "PILARES Topiltzin",
          url: "https://maps.app.goo.gl/LsRYLxB8waWjE33H6",
          dir: "Mixtecas, S/N, Ajusco, Coyoacán, C.P. 04300",
          atel: "",
        },
        {  alcaldia: "PILARES  Cantera", url: "https://maps.app.goo.gl/EnoyrUNd6RCCHAyJ9", dir: "Antonio Delfin Madrigal Num 1, Col. Pedregal De Santo Domingo, C.P. 43690, Alcaldía Coyoacan",  atel: "", }, 
        {  alcaldia: "PILARES  Villa Panamericana", url: "https://maps.app.goo.gl/jzvfm3izuJZqqVwJ8", dir: "Panamericana, C.P. 4700, Alcaldía Coyoacan",  atel: "", }, 
        {  alcaldia: "PILARES  Emiliano Zapata", url: "", dir: "Jose Maria Morelos Num 43, Col. Emiliano Zapata, C.P. 4815, Alcaldía Coyoacan",  atel: "", }, 
        {  alcaldia: "PILARES  Francisco J Mujica", url: "https://maps.app.goo.gl/1YTtz41WjpJTSaS88", dir: "Canal Nacional Num S/N, Col. Culhuacan Ctm Viii, Alcaldía Coyoacan",  atel: "", }, 
        {  alcaldia: "PILARES  El Reloj", url: "https://maps.app.goo.gl/xeAk7MysFxo226KZ8", dir: "Corola Num S/N, Col. El Reloj, C.P. 46200, Alcaldía Coyoacan",  atel: "", },         
        {  alcaldia: "PILARES  Taxqueña", url: "https://maps.app.goo.gl/LokRN6rvFcUDGVGp7", dir: "Tlalpan Num 2130, Col. Campestre Churubusco, C.P. 4200, Alcaldía Coyoacan",  atel: "", }, 
        {  alcaldia: "PILARES  Huayamilpas", url: "", dir: "Quinto Callejon Huayamilpas Num 52, Col. Nueva Diaz Ordaz, C.P. 4000, Alcaldía Coyoacan",  atel: "", }, 
        {  alcaldia: "PILARES  Carmen Serdan", url: "https://maps.app.goo.gl/7Fwp3wW1MMW2p3SCA", dir: "De La Virgen Num S/N, Col. Piloto Culhuacan 5, C.P. 4480, Alcaldía Coyoacan",  atel: "", }, 
        {  alcaldia: "PILARES  Santa Ana", url: "https://maps.app.goo.gl/vVgU9TTfynctyjsM6", dir: "Santa Ana Num S/N, Col. Ctm Culhuacan V, Alcaldía Coyoacan",  atel: "", }, 
        {  alcaldia: "PILARES  Parian", url: "https://maps.app.goo.gl/V3WqbgBnCv2Zo4YWA", dir: "Hidalgo Num 128, Col. San Lucas, C.P. 4030, Alcaldía Coyoacan",  atel: "", }, 
        
      
      ],
    },
    {
      title: "Cuajimalpa",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1BwTQcdqppGITq9b3FiZlElmMmrK-DQk&ehbc=2E312F&noprof=1"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Lic. Benito Juárez García (Chamixto)",
          url: "https://maps.app.goo.gl/iofW8kDEDXH2psN36",
          dir: "Leandro Valle, 75, San Lorenzo Acopilco, Cuajimalpa de Morelos, C.P. 5410",
          atel: "55 / 58110518",
        },
        {
          alcaldia: "PILARES Cuajimalpa",
          url: "https://maps.app.goo.gl/pS9aaymQimvurZUG9",
          dir: "Avenida de las Torres 1, Lt. 60, Loma del Padre, Cuajimalpa de Morelos, C.P. 5020",
          atel: "",
        },
        {
          alcaldia: "PILARES Zentlapalt",
          url: "https://maps.app.goo.gl/CVpKaTrQYSZSckPU7",
          dir: "Guillermo Prieto, S/N, Cuajimalpa, Cuajimalpa de Morelos, C.P. 5000",
          atel: "",
        },
        {  alcaldia: "PILARES  San Pablo Chimalpa", url: "https://maps.app.goo.gl/SUGofcKmB1vVnzQV6", dir: "Porfirio Diaz Num S/N, Col. Chimalpa, C.P. 5050, Alcaldía Cuajimalpa De Morelos",  atel: "", }, 
        {  alcaldia: "PILARES  Contadero", url: "https://maps.app.goo.gl/nEVDtgDUv1WDTH4X6", dir: "16 De Septiembre Num S/N, Col. Contadero, C.P. 5500, Alcaldía Cuajimalpa De Morelos",  atel: "", }, 
      ],
    },
    {
      title: "Cuauhtémoc",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1QQ9E05nybLWo3xQ-ghjhRN0v3ltjSdI&ehbc=2E312F&noprof=1"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Boleo",
          url: "https://maps.app.goo.gl/M1PwNpe2YWSPUdcJ6",
          dir: "Ferrocarril Hidalgo, S/N, Valle Gómez, Cuauhtémoc, C.P. 6240",
          atel: "",
        },
        {
          alcaldia: "PILARES Frida Kahlo",
          url: "https://maps.app.goo.gl/VaXbgqrnQFFXHj5SA",
          dir: "Central Lázaro Cárdenas, S/N, Obrera, Cuauhtémoc, C.P. 6800",
          atel: "",
        },
        {
          alcaldia: "PILARES Parque Abasolo",
          url: "https://maps.app.goo.gl/MypAM2PmrwCKYTEaA",
          dir: "Eje 1 Poniente Guerrero, S/N, Buenavista, Cuauhtémoc, C.P. 6350",
          atel: "",
        },
        {
          alcaldia: "PILARES Perú 88",
          url: "https://maps.app.goo.gl/GKWyK81ohjtYtgBfA",
          dir: "República de Perú, 88, Centro, Cuauhtémoc, C.P. 6010",
          atel: "",
        },
        {  alcaldia: "PILARES  Tolnahuac", url: "https://maps.app.goo.gl/A92Wo8NLArUvYL3T8", dir: "Poniente Guerrero Num S/N, Col. San Simon Tolnahuac, Alcaldía Cuauhtemoc",  atel: "", }, 
        {  alcaldia: "PILARES  Zona Rosa", url: "https://maps.app.goo.gl/9QzWqjAJWSfYcEts5", dir: "Londres Num 154, S/N, Col. Juarez, C.P. 6600, Alcaldía Cuauhtemoc",  atel: "", }, 
        {  alcaldia: "PILARES  Tultenco", url: "https://maps.app.goo.gl/2X7T7fiUm2umC5tu5", dir: "San Francisco Tultenco Num 41, Col. Paulino Navarro, Alcaldía Cuauhtemoc",  atel: "", }, 
        {  alcaldia: "PILARES  Glorieta De Insurgentes", url: "https://maps.app.goo.gl/ts7xUHwy9TRfCGeC8", dir: "Glorieta De Los Insurgentes Num S/N, Col. Juarez, C.P. 6700, Alcaldía Cuauhtemoc",  atel: "", }, 
        {  alcaldia: "PILARES  Atlampa", url: "https://maps.app.goo.gl/qwWoPeDDneNknDBt8", dir: "De Cedro Num 561, Col. Atlampa, C.P. 6450, Alcaldía Cuauhtemoc",  atel: "", }, 

        {  alcaldia: "PILARES  Tepito", url: "https://maps.app.goo.gl/5YgPUSqrb1FLX7Kr5", dir: "Del Trabajo Num Sn, S/N, Col. Tepito Morelos, C.P. 6200, Alcaldía Cuauhtemoc",  atel: "", }, 
        {  alcaldia: "PILARES  Monterrey 206", url: "https://maps.app.goo.gl/ZMqpkSE6voG1PwTX7", dir: "Monterrey Num 206, Col. Roma Norte, C.P. 6700, Alcaldía Cuauhtemoc",  atel: "", }, 
        {  alcaldia: "PILARES  Raton Macias", url: "https://maps.app.goo.gl/4verRp4NsurUwCbTA", dir: "Dr Andrade Num 401, Col. Buenos Aires, C.P. 6780, Alcaldía Cuauhtemoc",  atel: "", }, 
        {  alcaldia: "PILARES  Tiber", url: "https://maps.app.goo.gl/z9Aksft6e99rk8Er7", dir: "Rio Tiber Num 22, Col. Cuauhtemoc, C.P. 6500, Alcaldía Cuauhtemoc",  atel: "", }, 
        {  alcaldia: "PILARES  Benito Juarez Monterrey", url: "https://maps.app.goo.gl/ZMqpkSE6voG1PwTX7", dir: "Monterrey Num 206, Col. Roma Norte, C.P. 6700, Alcaldía Cuauhtemoc",  atel: "", }, 
        {  alcaldia: "PILARES  Sepi", url: "https://maps.app.goo.gl/oYF9nZd3iThqoxvv7", dir: "Netzahualcoyotl Num 29, Col. Centro, Alcaldía Cuauhtemoc",  atel: "", }, 
 
        {  alcaldia: "PILARES  El Hijo Del Ahuizote", url: "https://maps.app.goo.gl/GcZjkDxmMXnGRfnQ9", dir: "Republica De Colombia Num 42, Col. Centro, C.P. 6020, Alcaldía Cuauhtemoc",  atel: "", }, 
        {  alcaldia: "PILARES  Chabacano", url: "https://maps.app.goo.gl/5WD8TwTudTByfPbp6", dir: "San Antonio Abad Num 45, Col. Obrera, Alcaldía Cuauhtemoc",  atel: "", }, 

      ],
    },
    {
      title: "Gustavo A. Madero",

      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1lAOkYsB99LTW8e_TOnjY9Scs3o-jjjc&ehbc=2E312F&noprof=1"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES 100 metros",
          url: "https://maps.app.goo.gl/QdCSz819xgdErCN17",
          dir: "Cien Metros y Anillo Periférico, S/N, San José de la Escalera, Gustavo A. Madero, C.P. 7640",
          atel: "",
        },
        {
          alcaldia: "PILARES Benemerito de las Américas",
          url: "https://maps.app.goo.gl/VX8VPwnxRuPpVJsbA",
          dir: "Vicente Riva Palacio, S/N, Benito Juárez, Gustavo A. Madero, C.P. 7259",
          atel: "",
        },
        {
          alcaldia: "PILARES Cuchilla del tesoro",
          url: "https://maps.app.goo.gl/nS2C47MnWd6gsafb6",
          dir: "Norte 1, S/N, Cuchilla del Tesoro, Gustavo A. Madero, C.P. 7909",
          atel: "",
        },
        {
          alcaldia: "PILARES Girasol",
          url: "https://maps.app.goo.gl/ouhYmk1f4Z4c7Q787",
          dir: "Girasol, S/N, Luis Donaldo Colosio, Gustavo A. Madero, C.P. 7164",
          atel: "",
        },
        {
          alcaldia: "PILARES Magdalena de la salinas",
          url: "https://maps.app.goo.gl/MVy7AAAWPq5aCNq87",
          dir: "Poniente 114, S/N, Magdalena de las Salinas, Gustavo A. Madero, C.P. 7760",
          atel: "",
        },
        {
          alcaldia: "PILARES Nueva Atzacoalco",
          url: "https://maps.app.goo.gl/wK1erNd6C1Dwtxtz6",
          dir: "314, S/N, Nueva Atzacoalco, Gustavo A. Madero, C.P. 7420",
          atel: "",
        },
        {
          alcaldia: "PILARES Revolución",
          url: "https://maps.app.goo.gl/Jkw4PZu8R3Xpn7SQ8",
          dir: "Río Rivera, S/N, Guadalupe Victoria, Gustavo A. Madero, C.P. 7239",
          atel: "",
        },
        {
          alcaldia: "PILARES 'Richard Wagner'",
          url: "https://maps.app.goo.gl/UQhDSoWotpc4gDN39",
          dir: "José Anselmo Clave, S/N, Vallejo, Gustavo A. Madero, C.P. 7870",
          atel: "",
        },
        {
          alcaldia: "PILARES Tlalpexco",
          url: "https://maps.app.goo.gl/1Swfrw6uFgHmyZwh6",
          dir: "Sauces, S/N, Tlalpexco, Gustavo A. Madero, C.P. 7188",
          atel: "",
        },
        {
          alcaldia: "PILARES San Felipe II",
          url: "https://maps.app.goo.gl/1k121N1yCF4Hy8uK8",
          dir: "Tamazula, S/N, San Felipe de Jesús, Gustavo A. Madero, C.P. 7510",
          atel: "",
        },
        {
          alcaldia: "PILARES Aragon VII",
          url: "https://maps.app.goo.gl/A9TH2JLEBuXeq7GJ7",
          dir: "414-A, S/N, San Juan de Aragón VII, Gustavo A. Madero, C.P. 7910",
          atel: "",
        },
        {
          alcaldia: "PILARES Vasco de Quiroga",
          url: "https://maps.app.goo.gl/SkZ9poZD7eTbjZhGA",
          dir: "Eje 3 Oriente Ing. Eduardo Molina Enríquez, S/N, Vasco de Quiroga, Gustavo A. Madero, C.P. 7440",
          atel: "",
        },
        {
          alcaldia: "PILARES 333 5 De Mayo",
          url: "",
          dir: "Tecnologico, C.P. 7200",
          atel: "",
        },
        {
          alcaldia: "PILARES Centenario",
          url: "https://maps.app.goo.gl/B4io3VYZNk8cV7Kr8",
          dir: "Centenario Num S/N, Col. Juan Gonzalez Romero, C.P. 7410",
          atel: "",
        },
        {
          alcaldia: "PILARES Benita Galeana",
          url: "https://maps.app.goo.gl/GDuPWHHcRcHtrRKdA",
          dir: "Norte 94 Num S/N, Col. Nueva Tenochtitlan",
          atel: "",
        },
        {
          alcaldia: "PILARES Tixtla",
          url: "https://maps.app.goo.gl/Lg9pXSCraQ2MaKng7",
          dir: "Cabo San Lucas Num Manzana 14, Lote 5, Col. Gabriel Hernandez",
          atel: "",
        },
        {
          alcaldia: "PILARES San Felipe de Jesus 1",
          url: "https://maps.app.goo.gl/d7ReBkVhQRjKediK8",
          dir: "Leon de los Aldama Num S/N, Col. San Felipe De Jesus, C.P. 7510",
          atel: "",
        },
        {
          alcaldia: "PILARES Villa de Aragon",
          url: "https://maps.app.goo.gl/dpwddJvk7HGpZKUg7",
          dir: "412 Num S/N, Col. Villas De Aragon, C.P. 7550",
          atel: "",
        },
        {
          alcaldia: "PILARES Gertrudis Sanchez",
          url: "https://maps.app.goo.gl/Ki7YY6b73RXAW8QN9",
          dir: "Henry Ford Num 4313, Col. Gertrudis Sanchez Ii Segunda Seccion, C.P. 7839",
          atel: "",
        },
        {
          alcaldia: "PILARES Gran Canal",
          url: "https://maps.app.goo.gl/VCQrvNd6AwhAgG5QA",
          dir: "Gran Canal Del Desague Num 6828, Col. Ampliacion Casas Aleman",
          atel: "",
        },
        {
          alcaldia: "PILARES Ejidos San Juan de Aragon",
          url: "https://maps.app.goo.gl/tSAPmWoPxgpNL5iw5",
          dir: "Puerto Kiel Num S/N, Col. San Juan De Aragon",
          atel: "",
        },
        {
          alcaldia: "PILARES el Vivero",
          url: "https://maps.app.goo.gl/FBTXVXY9C9HNiT6M6",
          dir: "Blanca Estela Pavon Num S/N, Col. Forestal, C.P. 7140",
          atel: "",
        },
        {
          alcaldia: "PILARES Compositores Mexicanos",
          url: "https://maps.app.goo.gl/SSuCV1FadiYwvhxr9",
          dir: "Folkloricos Mexicanos Num S/N, Col. Compositores Mexicanos, C.P. 7130",
          atel: "",
        },
        {
          alcaldia: "PILARES  Salvador diaz Mirón",
          url: "https://maps.app.goo.gl/CyYdkWAatYSPuqJr7",
          dir: "Oriente 155 B Num 3418, Col. Salvador Diaz Mirón, C.P. 7400",
          atel: "",
        },
        {
          alcaldia: "PILARES Heroes de Cerro Prieto",
          url: "https://maps.app.goo.gl/uPWroYL3fv6x642NA",
          dir: "Rublos Num 57, Col. Heroes De Cerro Prieto",
          atel: "",
        },
        {
          alcaldia: "PILARES la Muela",
          url: "https://maps.app.goo.gl/9Qx5MuVZSmQvdfFb8",
          dir: "Vrginia Fabregas Num S/N, Col. Arbolillo 2",
          atel: "",
        },
        {
          alcaldia: "PILARES Carrera",
          url: "https://maps.app.goo.gl/d9Wt5mARhEMHHUm88",
          dir: "Francisco Echeverria Num 315, Col. Martin Carrera, C.P. 7070",
          atel: "",
        },
        {
          alcaldia: "PILARES Providencia",
          url: "https://maps.app.goo.gl/EaQa1Mir5oi21Unh6",
          dir: "Estado De Morelos Num 81, Col. Providencia, C.P. 7550",
          atel: "",
        },
        {
          alcaldia: "PILARES Chalma de Guadalupe",
          url: "https://maps.app.goo.gl/c1qS3mo3UwspFDqF8",
          dir: "Morelos Num S/N, Col. Chalma De Guadalupe, C.P. 7160, Alcaldía Gustavo A. Madero",
          atel: "",
        },
        {
          alcaldia: "PILARES Lomas de San Juan Ixhuatepec",
          url: "https://maps.app.goo.gl/gWCnB9GXVFVmgWNi8",
          dir: "Parque Nacional Num S/N, Col. Lomas De San Juan Ixhuantepec, C.P. 7360, Alcaldía Gustavo A. Madero",
          atel: "",
        },
        {
          alcaldia: "PILARES Estrella",
          url: "https://maps.app.goo.gl/3qPmpzB7Ae3ZKtND7",
          dir: "Escuela Num S/N, Col. Estrella, C.P. 7810",
          atel: "",
        },
        {
          alcaldia: "PILARES Loma la Palma",
          url: "https://maps.app.goo.gl/1ZfosS5amN1b7fU56",
          dir: "Tecnologico Num S/N, Col. Loma La Palma, C.P. 7160",
          atel: "",
        },
        {
          alcaldia: "PILARES Mercado Emiliano Zapata",
          url: "",
          dir: "Oriente 97 Num 95, Col. Tablas De San Agustin, C.P. 7860",
          atel: "",
        },
        {
          alcaldia: "PILARES Progreso Nacional",
          url: "https://maps.app.goo.gl/Pd3f3n6iKw8Zk65x6",
          dir: "Rio De Los Remdios Num 330, 336, Col. Progreso Nacional, C.P. 7700",
          atel: "",
        },
        {
          alcaldia: "PILARES Ramon Corona",
          url: "https://maps.app.goo.gl/WGrZxdkXJFjNHpga6",
          dir: "Constancia Num 45, Col. Industrial, C.P. 7800",
          atel: "",
        },
         {
          alcaldia: "PILARES Ali Chumacero",
          url: "https://maps.app.goo.gl/LEvEiKrMbHdVjAXT8",
          dir: "Plan de San Luis Num 50, Col. La Purisima, C.P. 7320",
          atel: "",
        },
        {
          alcaldia: "PILARES Bosques de Aragon",
          url: "https://maps.app.goo.gl/p73ocXHKhaAExdAGA",
          dir: "510 Num S/N, Col. San Juan De Aragon, C.P. 7920",
          atel: "",
        },
        {
          alcaldia: "PILARES Malacates",
          url: "https://maps.app.goo.gl/kD4A5GE2NzAhH8VZ6",
          dir: "La Cañada Num 37, Col. Malacates",
          atel: "",
        },
        {
          alcaldia: "PILARES Candelaria Ticoman",
          url: "https://maps.app.goo.gl/59N7HTRSrJAXkuqA6",
          dir: "Inspectores De La Luz Num 7, 5, Col. Candelaria Ticoman",
          atel: "",
        },
        {
          alcaldia: "PILARES Joya De Nieves",
          url: "https://maps.app.goo.gl/CEFxEVm6qUB3R9qa7",
          dir: "Paseo Del Bosque Num S/N, Col. Arboledas De Cuautepec, C.P. 7145",
          atel: "",
        },
        {
          alcaldia: "PILARES Tres Estrellas",
          url: "https://maps.app.goo.gl/s5v7JDELMNeyLhFJ9",
          dir: "Granito Num S/N, Col. Tres Estrellas, C.P. 7820",
          atel: "",
        },

       
       
      ],
    },
    {
      title: "Iztacalco",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1iLy4t7C7rHAzzMdZNQ2CRV6p7BnYhSg&ehbc=2E312F&noprof=1"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Santa Anita",
          url: "https://maps.app.goo.gl/YWBKUpVY6iwLmFAX8",
          dir: "Congreso de la Unión, S/N, Santa Anita, Iztacalco, C.P. 8300",
          atel: "",
        },
        {
          alcaldia: "PILARES TECMA",
          url: "https://maps.app.goo.gl/gYTx7V2NphSs2fyW8",
          dir: "Canal de Tezontle, S/N, Jardines Tecma, Iztacalco, C.P. 8920",
          atel: "",
        },
        {
          alcaldia: "PILARES Rojo Gómez",
          url: "https://maps.app.goo.gl/HpA69qd8h2F6Y93E9",
          dir: "Eje 5 Oriente Javier Rojo Gómez y Calzada Ignacio Zaragoza, S/N, Agrícola Oriental, Iztacalco, C.P. 8500",
          atel: "",
        },
        {
          alcaldia: "PILARES Paquita Calvo Zapata",
          url: "https://maps.app.goo.gl/jsz4JGA8RQjAKNQC6",
          dir: "Lenguas Indígenas, S/N, Carlos Zapata Vela, Iztacalco, C.P. 8040",
          atel: "",
        },
        {
          alcaldia: "PILARES Agricola Pantitlan",
          url: "https://maps.app.goo.gl/gUYfG61ArhFysRzN9",
          dir: "Uno Num Sn, Col. Pantitlan, C.P. 8100",
          atel: "",
        },
        {
          alcaldia: "PILARES Jose Marti",
          url: "https://maps.app.goo.gl/CroCrA4raCvdRMbW7",
          dir: "Benito Juarez Num Sn, Col. La Asuncion, C.P. 8600",
          atel: "",
        },
        {
          alcaldia: "PILARES Zapata Vela",
          url: "https://maps.app.goo.gl/qPjkmjiruFPMyVNf7",
          dir: "Lenguas Indigenas Num 31, Col. Carlos Zapata Vela, C.P. 8410",
          atel: "",
        },
        {
          alcaldia: "PILARES Tezontle",
          url: "https://maps.app.goo.gl/DN7L5mAznNSsQAiu5",
          dir: "Canal De Tezontle Num S/N, Col. Campamento 2 De Octubre, C.P. 8930",
          atel: "",
        },
        {
          alcaldia: "PILARES Coyuya",
          url: "",
          dir: "Plutarco Elias Calles Num S/N, Col. La Cruz Coyuya, C.P. 8320",
          atel: "",
        },
        {
          alcaldia: "PILARES Pilares Tlaloc",
          url: "https://maps.app.goo.gl/GVZTMLPjv1GzjkKE7",
          dir: "5 Num 425, Col. Agricola Pantitlan, C.P. 8100",
          atel: "",
        },
        {
          alcaldia: "PILARES Iztlaccihuatl",
          url: "https://maps.app.goo.gl/HpBe7Pkv9wY2m8p69",
          dir: "Playa Erizo Num S/N, Col. Reforma Iztlaccihuatl, C.P. 8810",
          atel: "",
        }, 
      ],
    },
    {
      title: "Iztapalapa",

      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1OznqZCbiP9RCZsItgJ4A5VtHJqVn3bY&ehbc=2E312F&noprof=1"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Acahualtepec",
          url: "https://maps.app.goo.gl/n5xLeowtA34EPkja8",
          dir: "Colorín, S/N, 2da Ampliación Santiago Acahualtepec, Iztapalapa, C.P. 9609",
          atel: "",
        },
        {
          alcaldia: 'PILARES "Tetecón"',
          url: "https://maps.app.goo.gl/etHckVacz4yh91P5A",
          dir: "Capulín, Mz.54, Buenavista, Iztapalapa, C.P. 9700",
          atel: "",
        },
        {
          alcaldia: 'PILARES "Villa Cid"',
          url: "https://maps.app.goo.gl/1gM4xqWcjdytH16AA",
          dir: "Villa Cid, S/N, Desarrollo Urbano Quetzalcoatl, Iztapalapa, C.P. 9700",
          atel: "",
        },
        {
          alcaldia: 'PILARES "Valle de Luces"',
          url: "https://maps.app.goo.gl/pfrrEYtsEMs71rEy9",
          dir: "Valle del Paraíso, Lt.18, Valle de Luces, Iztapalapa, C.P. 9800",
          atel: "",
        },
        {
          alcaldia: "PILARES Tepalcates",
          url: "https://maps.app.goo.gl/BcfjdauFDGKdUALb7",
          dir: "Primavera, S/N, Tepalcates, Iztapalapa, C.P. 9210",
          atel: "",
        },
        {
          alcaldia: 'PILARES Comunitario "Paraje San Juan Joya"',
          url: "https://maps.app.goo.gl/DxsDbDhPqfeB6GWEA",
          dir: "Agustín Iturbide, S/N, San Juan Joya, Iztapalapa, C.P. 9839",
          atel: "",
        },
        {
          alcaldia: "PILARES San Andrés Tetepilco",
          url: "https://maps.app.goo.gl/erDdaKGy9SMXSMDb9",
          dir: "1 Oriente, Av. Andrés Molina Enríquez, S/N, San Andrés Tetepilco, Iztapalapa, C.P. 9440",
          atel: "",
        },
        {
          alcaldia: "PILARES Republica federal",
          url: "https://maps.app.goo.gl/ZHgEsMorEE8UqxFm7",
          dir: "República Federal, S/N, Santa María Acatitla Sur, Iztapalapa, C.P. 9530",
          atel: "",
        },
        {
          alcaldia: "PILARES Palmitas",
          url: "https://maps.app.goo.gl/NYULxhZgNg7DEECe8",
          dir: "Nativitas, S/N, Palmitas, Iztapalapa, C.P. 9670",
          atel: "",
        },
        {
          alcaldia: "PILARES Lomas de la Estancia",
          url: "https://maps.app.goo.gl/BNxT1MQ7jsjzeaY66",
          dir: "Camino a las Minas, S/N, Lomas de la Estancia, Iztapalapa, C.P. 9640",
          atel: "",
        },
        {
          alcaldia: 'PILARES "Cerro Azul"',
          url: "https://maps.app.goo.gl/Z4VHGiqejHdHkvok7",
          dir: "Cerro Azul, Lt4 Mz95-C, Buenavista, Iztapalapa, C.P. 9700",
          atel: "",
        },
        {
          alcaldia: "PILARES Calmécac Miravalle",
          url: "https://maps.app.goo.gl/G6zpw9zZ7BV2oJMJ6",
          dir: "Valle de México, S/N, Miravalles, Iztapalapa, C.P. 9696",
          atel: "",
        },
        {
          alcaldia: "PILARES Bambú",
          url: "https://maps.app.goo.gl/MRHut1SEKK9pfnHU8",
          dir: "1, Lt16 Lt101, Lomas de la Estancia, Iztapalapa, C.P. 9640",
          atel: "",
        },
        {  alcaldia: "PILARES  Parque Cuitlahuac", url: "https://maps.app.goo.gl/RLiJHMkuSXB8J2rTA", dir: "Genero Estrada Num S/N, Col. Vicente Guerrero, C.P. 9200, Alcaldía Iztapalapa",  atel: "", }, 
        {  alcaldia: "PILARES  San Miguel Teotongo", url: "https://maps.app.goo.gl/hmomJxCpYWm52oSL8", dir: "Sauce Num S/N, Col. San Miguel Teotongo, C.P. 9630, Alcaldía Iztapalapa",  atel: "", }, 
        {  alcaldia: "PILARES  Yautlica", url: "https://maps.app.goo.gl/mGvrFjUTvWM7Vevm9", dir: "De Las Torres Num S/N, Col. Emilano Zapata, C.P. 9637, Alcaldía Iztapalapa",  atel: "", }, 
        {  alcaldia: "PILARES  Nogal", url: "https://maps.app.goo.gl/484jryiZx22jRYWj6", dir: "Nogal, C.P. 9660, Alcaldía Iztapalapa",  atel: "", }, 
        {  alcaldia: "PILARES  Zaragoza", url: "", dir: "Ermita Iztapalapa Num S/N, Col. Lomas De Zaragoza, C.P. 9620, Alcaldía Iztapalapa",  atel: "", }, 

        {  alcaldia: "PILARES  Central De Abastos", url: "https://maps.app.goo.gl/tAUtNyTodJo3xuoD7", dir: "Canal Rio Churubusco Num S/N, Col. Central De Abastos, C.P. 9440, Alcaldía Iztapalapa",  atel: "", }, 
        {  alcaldia: "PILARES  Purisima", url: "https://maps.app.goo.gl/XH6DWPYBJrv8i6je7", dir: "3 Oriente Num S/N, Col. Purisima Atlazolpa, C.P. 9429, Alcaldía Iztapalapa",  atel: "", }, 
        {  alcaldia: "PILARES  Cerro De La Estrella", url: "https://maps.app.goo.gl/4tZThNpzbDunMEpk6", dir: "Chocolin Num 24, Col. San Juan Cerro, C.P. 9839, Alcaldía Iztapalapa",  atel: "", }, 


        {  alcaldia: "PILARES  Escuadron 201", url: "https://maps.app.goo.gl/eiDtiPBuBrzgRq7h7", dir: "Rio Churubusco Num S/N, Col. Sinatel, C.P. 9410, Alcaldía Iztapalapa",  atel: "", }, 
        {  alcaldia: "PILARES  Facundo Cabral", url: "https://maps.app.goo.gl/qxdf1Kex6VCTxGGe8", dir: "Moctezuma Num S/N, Col. Los Reyes, C.P. 9849, Alcaldía Iztapalapa",  atel: "", }, 

        {  alcaldia: "PILARES  Renovación", url: "https://maps.app.goo.gl/ksLZgrWZ95chd52w5", dir: "9 Num S/N, Col. Renovacion, C.P. 9209, Alcaldía Iztapalapa",  atel: "", }, 
        {  alcaldia: "PILARES  Gabriela Mistral", url: "https://maps.app.goo.gl/2d8cUj754FtGVyph6", dir: "Sur 27 Num 134, Col. Leyes De Reforma 1era Seccion, C.P. 9310, Alcaldía Iztapalapa",  atel: "", }, 
        {  alcaldia: "PILARES  Cooperemos Pueblo", url: "https://maps.app.goo.gl/98vgCkwyTW5XTuGk6", dir: "Cuitlahuac Num 5, Col. Santa Cruz Meyehualco, C.P. 9700, Alcaldía Iztapalapa",  atel: "", }, 
        {  alcaldia: "PILARES  Santa Cruz", url: "https://maps.app.goo.gl/6YPtcEFf1sapx6deA", dir: "Calle 55 Num S/N, Col. Santa Cruz Meyehualco, C.P. 9296, Alcaldía Iztapalapa",  atel: "", }, 
        {  alcaldia: "PILARES  Constitucion De 1917", url: "https://maps.app.goo.gl/sBLTceyoc38zZWvPA", dir: "Ermita Iztapalapa Num S/N, Col. Los Angeles Apanoaya, C.P. 9710, Alcaldía Iztapalapa",  atel: "", }, 

        {  alcaldia: "PILARES  Ejercito De Agua Prieta", url: "", dir: "Circuvalacion Num S/N, Col. Ejercito De Agua Prieta, C.P. 9578, Alcaldía Iztapalapa",  atel: "", }, 
        {  alcaldia: "PILARES  Carlota Botey", url: "https://maps.app.goo.gl/SZEanxZk2PEqTB7MA", dir: "Verbena Num 29, Col. Los Angeles, C.P. 9830, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Yancuic", url: "https://maps.app.goo.gl/Jvq4R9cmZvxAhQH3A", dir: "Ermita Iztapalapa Num S/N, Col. Los Angeles, C.P. 9830, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Parque Nacional", url: "https://maps.app.goo.gl/zjMXUg6oLsJzGvkP7", dir: "Hermanos Lumiere Num S/N, Col. Santa Maria Tomatlan, C.P. 9900, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Progreso Del Sur", url: "https://maps.app.goo.gl/Uyp6tanuGVRtoS7q9", dir: "Ermita Iztapalapa Num S/N, Col. Progreso Delsur, C.P. 9060, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Apatlaco", url: "https://maps.app.goo.gl/BBw3h8akX2tN6web9", dir: "Felipe Angeles Num S/N, Col. Apatlaco, C.P. 9430, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Patolli", url: "https://maps.app.goo.gl/UfWvTiVHqzNTy7bV9", dir: "Oyameles Num 344, Col. Santa Martha Acatitla Norte, C.P. 9140, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Casa Del Pueblo", url: "https://maps.app.goo.gl/gN4dCPmXqPzM5pir9", dir: "Generalisimo Morelos Num S/N, Col. Ermita Zaragoza, C.P. 9180, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Santa Maria Aztahuacan", url: "https://maps.app.goo.gl/3fwesyfQT7kwinFM8", dir: "Aquiles Serdan Num 765, Col. Santa Maria Aztahuacan, C.P. 9570, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Marcelino Buendia", url: "https://maps.app.goo.gl/Uwex373DNoo5brdt7", dir: "Guerra De Reforma Num S/N, Col. Leyes De Reforma Tercera Seccion, C.P. 9310, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Emilio Rosas", url: "https://maps.app.goo.gl/orcdfpS4c1KVEa2q9", dir: "2 Emilio Rosas Num 14, 38, Col. Vicente Guerrero, C.P. 9200, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Alvaro Obregon", url: "https://maps.app.goo.gl/fUifDqddcM5n3tsm6", dir: "Francisco Davila Num S/N, Col. Alvaro Obregon, C.P. 9230, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Carlos Pacheco", url: "https://maps.app.goo.gl/75cCCgVXiQWnDeTG8", dir: "Carlos Pacheco Num S/N, Col. Ejercito De Oriente Zona Peñon, C.P. 9239, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Plaza De Los Jovenes", url: "https://maps.app.goo.gl/di9DY3fyMggEt8G76", dir: "De Las Minas Num S/N, Col. Xalpa, C.P. 9640, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Ejercito Constitucionalista", url: "https://maps.app.goo.gl/7NX35T7g3aTp9HxB6", dir: "De Narcisos Num S/N, Col. Ejercito Constitucionalista, C.P. 9220, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Lomas De San Lorenzo", url: "https://maps.app.goo.gl/8MJpaWW7XLGAHjri6", dir: "Reforma Num S/N, Col. Lomas De San Lorenzo, C.P. 9780, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Santa Maria Tomatlan", url: "https://maps.app.goo.gl/2bVSUYTt6EbU476M7", dir: "Canal Nacional Num S/N, Col. Santa Maria Tomatlan, C.P. 9870, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Reforma Politica", url: "https://maps.app.goo.gl/adNLga5tBanzi2BF6", dir: "Ermita Iztapalapa Num 2955, Col. Reforma Politica, C.P. 9730, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  San Lorenzo Tezonco", url: "https://maps.app.goo.gl/6NGme9EtByC1FFxs5", dir: "Tlahuac Num 5503, Col. San Lorenzo Tezonco, C.P. 9790, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Leyes De Reforma", url: "", dir: "Canal Del Moral Num S/N, Col. Leyes De Reforma 3a Seccion, C.P. 9208, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Indeco Ii", url: "https://maps.app.goo.gl/5YnnNXVr8QxRdtkGA", dir: "Alejandro Espinoza Num S/N, Col. Ejercito De Oriente  Indeco Ii Issste, C.P. 9230, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Comuna", url: "https://maps.app.goo.gl/oCMBkGM5LymaFFpK9", dir: "Villa Jiloca Num 350, Col. Desarrollo Urbano Quetzalcoatl, C.P. 9700, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Presidentes De Mexico", url: "", dir: "Canal Pedro Velez Num S/N, Col. Presidentes De Mexico, C.P. 9740, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Tierra Y Libertad", url: "https://maps.app.goo.gl/5B3jjWt6LTLs3C3V8", dir: "Enrique Rambal Num S/N, Col. Emiliano Zapata, C.P. 9638, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Zacatepec", url: "https://maps.app.goo.gl/ucqEeJv6A7yTmZwc8", dir: "Camino Real Num S/N, Col. Campestre Potreros, C.P. 9737, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Vicente Guerrero", url: "https://maps.app.goo.gl/g2XqJ6nUi4YLYFJDA", dir: "Periferico Num S/N, Col. Parque Lineal Vicente Guerrero, C.P. 9200, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Molino Tezonco", url: "https://maps.app.goo.gl/hrKyDzX3FwTf92tM8", dir: "Cuauhtemoc Num S/N, Col. El Molino Tezonco, C.P. 9960, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Viveros Nezahualcoyotl", url: "https://maps.app.goo.gl/xdwK3tEUezk51Nvq9", dir: "Canal De Chalco Num S/N, Col. Predio El Molino, C.P. 9960, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  El Molino", url: "", dir: "Piraña Num S/N, Col. Predio El Molino, C.P. 9960, Alcaldía Iztapalapa",  atel: "", }, 
{  alcaldia: "PILARES  Ixtlahuacan", url: "https://maps.app.goo.gl/rFXvGSM41ymhSiUC6", dir: "Lazaro Cardenas Num Sn, Col. Ixtlahuacan, Alcaldía Azcapotzalco",  atel: "", }, 


      ],
    },
    {
      title: "La Magdalena Contreras",

      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1ncVqwipRDOxyw_QgeNRzQ6fsqe5vXks&ehbc=2E312F&noprof=1"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Parcela",
          url: "https://maps.app.goo.gl/ABs9rehMMyZW9Ve28",
          dir: "S/N, Lomas de San Bernabé, Magdalena Contreras, C.P. 10350",
          atel: "",
        },
        {
          alcaldia: "PILARES Huayatla",
          url: "https://maps.app.goo.gl/is4FMYMAYRKaYqGw8",
          dir: "13, Pueblo Nuevo Alto, Magdalena Contreras, C.P. 1064",
          atel: "",
        },


        {  alcaldia: "PILARES  La  Malinche", url: "https://maps.app.goo.gl/GxSc4fW2dPLgmEAPA", dir: "Durazno Num 11, Col. La Malinche, C.P. 10010, Alcaldía Magdalena Contreras",  atel: "", }, 
        {  alcaldia: "PILARES  Alfonso Priani O Juventino Rosas", url: "https://maps.app.goo.gl/HQZfC6rBEzBREmso6", dir: "Alfonos Priani Num S/N, Col. La Guadalupe, C.P. 10820, Alcaldía Magdalena Contreras",  atel: "", }, 
        {  alcaldia: "PILARES  Ferrocarril", url: "https://maps.app.goo.gl/cMe6LuGbnS1MhpS6A", dir: "Ferrocarril Num S/N, Col. San Francisco, C.P. 10500, Alcaldía Magdalena Contreras",  atel: "", }, 
        {  alcaldia: "PILARES  Higuera", url: "https://maps.app.goo.gl/Y3HR5qKUaZ3DkTqW9", dir: "Janitzio Num 18 B, Col. Las Cruces, C.P. 10330, Alcaldía Magdalena Contreras",  atel: "", }, 
        {  alcaldia: "PILARES  Cañada", url: "", dir: "Emiliano Zapata Num S/N, 1, Col. La Magadalena, C.P. 10910, Alcaldía Magdalena Contreras",  atel: "", }, 

      ],
    },
    {
      title: "Miguel Hidalgo",

      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1zXfA0ytyAY7vwUiaZ_yoBwBYNe-Tc9s&ehbc=2E312F&noprof=1"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Tlacopan",
          url: "https://maps.app.goo.gl/41yAcankofue6ATs8",
          dir: "México Tacuba, S/N, Tacuba y San Diego Ocoyoacac, Miguel Hidalgo, C.P. 11410",
          atel: "",
        },
        {
          alcaldia: "PILARES Pensil",
          url: "https://maps.app.goo.gl/DKuEQX74B3d8BdWk7",
          dir: "Lago Trasimeno, S/N, Reforma Pensil, Miguel Hidalgo, C.P. 11440 ",
          atel: "",
        },
        {
          alcaldia: "PILARES Casa Amarilla",
          url: "https://maps.app.goo.gl/Xpdhqi7gdEFRFzQg9",
          dir: "Parque Lira, 94, Observatorio, Miguel Hidalgo, C.P. 11860",
          atel: "",
        },

        {  alcaldia: "PILARES  Parque Caneguin", url: "https://maps.app.goo.gl/6ApAAdwAfybvJWu86", dir: "Lago Caneguin Num 130, Col. Argentina Antigua, C.P. 11270, Alcaldía Miguel Hidalgo",  atel: "", }, 
        {  alcaldia: "PILARES   Caneguin", url: "", dir: "Lago Caneguin Num 130, Col. Argentina Antigua, Alcaldía Miguel Hidalgo",  atel: "", }, 
        {  alcaldia: "PILARES  Salesiano", url: "https://maps.app.goo.gl/BKAjFvFxaErXTmy27", dir: "Colegio Salesiano Num S/N, Col. Anahuac I Seccion, C.P. 11320, Alcaldía Miguel Hidalgo",  atel: "", }, 
        {  alcaldia: "PILARES  Tacubaya", url: "https://maps.app.goo.gl/3mcsysvEJzaFzjjW7", dir: "De Becerra Num 88-C, Col. Tacubaya, Alcaldía Miguel Hidalgo",  atel: "", }, 

      ],
    },

    {
      title: "Milpa Alta",
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1IO2-asrRxv8fBvR6vfsQOqjohy2pIIw&ehbc=2E312F&noprof=1"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Oztotepec",
          url: "https://maps.app.goo.gl/sG5SYKfHpa9N7ZW39",
          dir: "Emiliano Zapata, S/N, Chalmita, Milpa Alta, C.P. 12410",
          atel: "",
        },
        {
          alcaldia: "PILARES Miacatlán",
          url: "https://maps.app.goo.gl/PP2CggDQ9W69fV4E7",
          dir: "Bolívar Poniente, S/N, San Jerónimo Miacatlán (Pblo), Milpa Alta, C.P. 12600",
          atel: "",
        },

        {  alcaldia: "PILARES  San Salvador Cuauhtenco", url: "https://maps.app.goo.gl/rv7zhvpZ17R4Hzd68", dir: "Emiliano Zapata Num 12, Col. San Salvador Cuauhtenco, C.P. 12300, Alcaldía Milpa Alta",  atel: "", }, 
        {  alcaldia: "PILARES  San Bartolome", url: "https://maps.app.goo.gl/ZiPDcoVFwmEgRA2h7", dir: "5 De Mayo Oriente Num S/N, Col. San Bartolome Xicomulco, C.P. 12250, Alcaldía Milpa Alta",  atel: "", }, 
        {  alcaldia: "PILARES  San Pedro Atocpan", url: "https://maps.app.goo.gl/ymoEiVMMchjTULUN8", dir: "Atzayacatl Num S/N, Col. San Pedro Atocpan, C.P. 12200, Alcaldía Milpa Alta",  atel: "", }, 
        {  alcaldia: "PILARES  Xaltipac", url: "https://maps.app.goo.gl/Q3TJB4RSgBFNhJau9", dir: "5 De Mayo Num Sn, Col. San Antonio Tecomitl, C.P. 12000, Alcaldía Milpa Alta",  atel: "", }, 
        {  alcaldia: "PILARES  San Pablo Oztotepec", url: "https://maps.app.goo.gl/BPXLFR3hGBNUr4Ut7", dir: "Emiliano Zapata Num 103, Col. San Pablo Oztotepec, C.P. 12400, Alcaldía Milpa Alta",  atel: "", }, 

      ],
    },
    {
      title: "Tláhuac",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1KyEsuAGClb9AJaB_132IGHOkDQTtHww&ehbc=2E312F&noprof=1"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        />
      ),
      items: [
        {
          alcaldia: "PILARES Tierra Blanca",
          url: "https://maps.app.goo.gl/sMjWYNETbjp8qLLa8",
          dir: "Sauces, S/N, Tierra Blanca, Tláhuac, C.P. 13540",
          atel: "",
        },
        {
          alcaldia: "PILARES García Lorca",
          url: "https://maps.app.goo.gl/DUtAP6BXqdwfSryy7",
          dir: "Cecilio Acosta, S/N, San Miguel Zopotitla, Tláhuac, C.P. 13310",
          atel: "",
        },
        {
          alcaldia: "PILARES Ana Bolena",
          url: "https://maps.app.goo.gl/ianTRuSugEQmQXNVA",
          dir: " Ana Bolena, 270, Miguel Hidalgo, Tláhuac, C.P. 13200",
          atel: "",
        },

        {  alcaldia: "PILARES  Rosario Castellanos", url: "https://maps.app.goo.gl/BEHg7rKjtfGVuWkU9", dir: "Tlahuac Num Sn, Col. Santa Cecilia, C.P. 13010, Alcaldía Tlahuac",  atel: "", }, 
        {  alcaldia: "PILARES  Murcielago", url: "https://maps.app.goo.gl/QYvPjk2PtJp2aT638", dir: "Murcielago Num Sn, Col. Agricola Metropolitana, C.P. 13280, Alcaldía Tlahuac",  atel: "", }, 
        {  alcaldia: "PILARES  Miguel Hidalgo", url: "https://maps.app.goo.gl/UvA73ynNqS11DQRw8", dir: "Gioconda Num Sn, Col. Miguel Hidalgo, C.P. 13200, Alcaldía Tlahuac",  atel: "", }, 

        {  alcaldia: "PILARES  Paulo Freire", url: "https://maps.app.goo.gl/qZsnkEqvyAKQSuxp8", dir: "Santa Cruz Num 127, Col. Las Arboledas, C.P. 13319, Alcaldía Tlahuac",  atel: "", }, 

        {  alcaldia: "PILARES  Mixquic", url: "https://maps.app.goo.gl/ghCzxR5Ghbdy7dPF8", dir: "Plutarco Elias Calles Num S/N, Col. Santa Cruz, C.P. 13650, Alcaldía Tlahuac",  atel: "", }, 
        {  alcaldia: "PILARES  Torres Bodet", url: "https://maps.app.goo.gl/Py9xUxsv55bujKtaA", dir: "Educaciión Politecniuca Num 40, Col. Jaime Torres Bodet, C.P. 13530, Alcaldía Tlahuac",  atel: "", }, 
        {  alcaldia: "PILARES  Tetelco", url: "https://maps.app.goo.gl/H2zg2DzMpa5AziYT8", dir: "Emiliano Zapata Num S/N, Col. San Nicolas Tetelco, C.P. 13700, Alcaldía Tlahuac",  atel: "", }, 
        {  alcaldia: "PILARES  San Jose", url: "https://maps.app.goo.gl/AsCifNK6xdVo4a6G6", dir: "Agustin Lara Num S/N, Col. San Jose, C.P. 13020, Alcaldía Tlahuac",  atel: "", }, 
        {  alcaldia: "PILARES  San Juan  Ixtayopan", url: "https://maps.app.goo.gl/qLJ8czf2iNKHxGxcA", dir: "Lazaro Cardenas Num 14, Col. La Asución, C.P. 13000, Alcaldía Tlahuac",  atel: "", }, 
        {  alcaldia: "PILARES  Selene", url: "https://maps.app.goo.gl/aYrazK1N6ABbu22y5", dir: "Estanislao Ramirez Ruiz Num 1, Col. Selene 1a Seccion, C.P. 13420, Alcaldía Tlahuac",  atel: "", }, 
        {  alcaldia: "PILARES  Santa Catarina", url: "https://maps.app.goo.gl/Jdsi2dUuKxDSvZtA7", dir: "Toltcas Num 161, Col. Santa Catarina Yecahuitzotl, C.P. 13120, Alcaldía Tlahuac",  atel: "", }, 
        {  alcaldia: "PILARES  Quetzalcoatl", url: "https://maps.app.goo.gl/DFyaqJgKh2k5NrvTA", dir: "Andres Quintana Roo Num 38-6, Col. Guadalupe Tlaltenco, C.P. 13450, Alcaldía Tlahuac",  atel: "", }, 
        {  alcaldia: "PILARES  Tlaltenco", url: "https://maps.app.goo.gl/aua9zDB3MYEsXaCV7", dir: "Ojo De Agua Num 161, Col. Ojo De Agua, C.P. 13450, Alcaldía Tlahuac",  atel: "", }, 
        {  alcaldia: "PILARES   Nopalera", url: "https://maps.app.goo.gl/4mtsmyqzRsNpNU4AA", dir: "Angelica Paulet Num Sn, Col. Nopalera, C.P. 13250, Alcaldía Tlahuac",  atel: "", }, 
        {  alcaldia: "PILARES  Cocodrilo", url: "https://maps.app.goo.gl/MwTsxUi9CwwcH4gi8", dir: "Cocodrilo Num 5, Col. Olivos, C.P. 13210, Alcaldía Tlahuac",  atel: "", }, 

      ],
    },
    {
      title: "Tlalpan",
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1WMzcmG_cP0QEkJqPQUttqSVSRDo-UR8&ehbc=2E312F&noprof=1"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),

      items: [
        {
          alcaldia: "PILARES San Miguel Topilejo",
          url: "https://maps.app.goo.gl/dQ2tZvLcYvTamVKf7",
          dir: "Independencia, S/N, San Miguel Topilejo, Tlalpan, C.P. 14500",
          atel: "",
        },
        {
          alcaldia: "PILARES Chicosaén",
          url: "https://maps.app.goo.gl/6qtTyGLurXxdZdap6",
          dir: "Chicoasén, S/N, Lomas de Padierna, Tlalpan, C.P. 14240",
          atel: "",
        },
        {
          alcaldia: "PILARES Bosques",
          url: "https://maps.app.goo.gl/oUkeZc52Q7ynbA6V6",
          dir: "Sabino, MZ. 178, Bosques de Pedregal, Tlalpan, C.P. 14738",
          atel: "",
        },
        {
          alcaldia: "PILARES Belvedere",
          url: "https://maps.app.goo.gl/hcwWyBmpF3b2kEkh8",
          dir: "Peloponeso, MZ. 111, Belvedere Ajusco, Tlalpan, C.P. 14720",
          atel: "",
        },

        {  alcaldia: "PILARES  Ecoguardas", url: "", dir: "Picacho Ajusco Km 5.5 Num S/N, Col. Miguel Hidalgo 4° Secc, C.P. 14250, Alcaldía Tlalpan",  atel: "", }, 
        {  alcaldia: "PILARES  Tizimin", url: "https://maps.app.goo.gl/yNZMknL7atVHT4W17", dir: "Tizimin Num 101, Col. Jardines Del Ajusco, C.P. 14200, Alcaldía Tlalpan",  atel: "", }, 
        {  alcaldia: "PILARES  Cuchilla De Padierna", url: "https://maps.app.goo.gl/FAXVrr7FcuBNeFidA", dir: "Chachultun Num Mz 10, L. 1, Col. Cuchilla De Padierna, C.P. 14200, Alcaldía Tlalpan",  atel: "", }, 
        {  alcaldia: "PILARES  La Joya", url: "https://maps.app.goo.gl/FJYDMAgsjCoz2gJCA", dir: "Insurgentes Num 4439, Col. La Joya, C.P. 14090, Alcaldía Tlalpan",  atel: "", }, 

        {  alcaldia: "PILARES  Lomas De Cuilotepec", url: "https://maps.app.goo.gl/nSpb6APoj7BJz1aK8", dir: "Ejidal Esq. Totolapan Num 23, Col. Lomas De Cuilotepec, C.P. 14730, Alcaldía Tlalpan",  atel: "", }, 
        {  alcaldia: "PILARES  Huipulco", url: "", dir: "Tlalpan Num S/N, Col. San Lorenzo Huipulco, C.P. 14370, Alcaldía Tlalpan",  atel: "", }, 
        {  alcaldia: "PILARES  Dif Miguel Hidalgo", url: "", dir: "Jesus Lecuona Num S/N, Col. Miguel Hidalgo 2° Seccion, C.P. 14250, Alcaldía Tlalpan",  atel: "", }, 
        {  alcaldia: "PILARES  Campos Xochitl", url: "", dir: "Niños Heroes Num 10, Col. Miguel Hidalgo 1era Seccion, C.P. 14260, Alcaldía Tlalpan",  atel: "", }, 
        {  alcaldia: "PILARES  Chichicaspatl", url: "https://maps.app.goo.gl/f2c9PEUxw649jtuB7", dir: "Ferrocarril De Cuernavaca Num 46, Col. Pedregal De San Nicolas 4°  Seccion, C.P. 14108, Alcaldía Tlalpan",  atel: "", }, 
        {  alcaldia: "PILARES  San Miguel Ajusco", url: "https://maps.app.goo.gl/SmMGXakEYjY91nuq5", dir: "1era. Cerrada De Mariano Abasolo Num S/N, Col. San Miguel Ajusco, C.P. 14700, Alcaldía Tlalpan",  atel: "", }, 
        {  alcaldia: "PILARES  Plan De Ayala", url: "https://maps.app.goo.gl/pirdx3aLRoDE7T9c7", dir: "Ley De Ciencia Y Tecnologia Num 90, Col. Ampliacion Plan De Ayala, C.P. 14470, Alcaldía Tlalpan",  atel: "", }, 
        {  alcaldia: "PILARES  Framboyanes", url: "", dir: "Balancan Num S/N, Col. Popular Santa Teresa, C.P. 14160, Alcaldía Tlalpan",  atel: "", }, 
        {  alcaldia: "PILARES  Bosques Metropolintano", url: "https://maps.app.goo.gl/KTBo1LchLrjMkoXV6", dir: "Bosques Del Pederegal Num 170, Col. El Zacaton, C.P. 14734, Alcaldía Tlalpan",  atel: "", }, 
        {  alcaldia: "PILARES  Tepeximilpa", url: "https://maps.app.goo.gl/JT1zoQkTXKwPtzaq9", dir: "Tequixtlatecos Num S/N, Col. San Juan Tepeximilpa, C.P. 14427, Alcaldía Tlalpan",  atel: "", }, 
        {  alcaldia: "PILARES  Tlalcoligia", url: "https://maps.app.goo.gl/bUbnuSfNErTAyro36", dir: "Lacandones Num S/N, Col. Tlalcoligia, C.P. 14439, Alcaldía Tlalpan",  atel: "", }, 
        {  alcaldia: "PILARES  Cuicuilco", url: "https://maps.app.goo.gl/aEnWu4ecQu1Uu3aC9", dir: "Zapote Num 159, Col. Zapote, C.P. 14060, Alcaldía Tlalpan",  atel: "", }, 
        {  alcaldia: "PILARES  San Nicolas Ii", url: "https://maps.app.goo.gl/3sVszDCEx2FtRQh47", dir: "Plan De La Maquina Num S/N, Col. San Nicolas Ii, C.P. 14735, Alcaldía Tlalpan",  atel: "", }, 
        

      ],
    },
    {
      title: "Venustiano Carranza",
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1-IH5YXtPfckdLJzkRCoXXVEGmXYIk5s&ehbc=2E312F&noprof=1"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Candelaria",
          url: "https://maps.app.goo.gl/MQqCUkuC6KPd41Yj6",
          dir: "Congreso de la Unión, S/N, 10 DE MAYO, Venustiano Carranza, 15100",
          atel: "",
        },
        
        {  alcaldia: "PILARES  Taller Av. Del Taller", url: "https://maps.app.goo.gl/X1vF4K8sLfZbS99B7", dir: "Av Del Taller Num Sin Num, Col. Jardin Balbuena, C.P. 15000, Alcaldía Venustiano Carranza",  atel: "", }, 
        {  alcaldia: "PILARES  Parque Alameda Oriente", url: "", dir: "Bordo De Xochiaca Num S/N, Col. Arenal, C.P. 15640, Alcaldía Venustiano Carranza",  atel: "", }, 
        {  alcaldia: "PILARES  Chiclera", url: "", dir: "Chiclera Num S/N, Col. Progresista, C.P. 15370, Alcaldía Venustiano Carranza",  atel: "", }, 
        {  alcaldia: "PILARES  Pelon Osuna", url: "https://maps.app.goo.gl/2otwsyyzBaM3XLEc6", dir: "Puerto Aereo Num S/N, Col. Moctezuma 2a Seccion, C.P. 15500, Alcaldía Venustiano Carranza",  atel: "", }, 
        {  alcaldia: "PILARES  20 De Noviembre", url: "https://maps.app.goo.gl/fCybN8AqhzWxzdJeA", dir: "Gran Canal Del Desague Num S/N, Col. 20 De Noviembre, C.P. 15300, Alcaldía Venustiano Carranza",  atel: "", }, 
        {  alcaldia: "PILARES  Dif Adolfo Lopez Mateos", url: "https://maps.app.goo.gl/eCm1hJHg2PzmBucx8", dir: "Eduardo Bustamante Num S/N, Col. Adolfo Lopez Mateos, C.P. 15640, Alcaldía Venustiano Carranza",  atel: "", }, 
        {  alcaldia: "PILARES  Copil", url: "https://maps.app.goo.gl/oK4eCTP5CXTShzd29", dir: "Chimalhuacan Num Sn, Col. Peñon De Los Baños, C.P. 15520, Alcaldía Venustiano Carranza",  atel: "", }, 
        {  alcaldia: "PILARES  Velodromo", url: "https://maps.app.goo.gl/eixj5vTfwyiyLjCx5", dir: "Luis De La Rosa Num S/N, Col. Jardin Balbuena, C.P. 15900, Alcaldía Venustiano Carranza",  atel: "", }, 
        {  alcaldia: "PILARES  Felipe Angeles", url: "https://maps.app.goo.gl/PNAJNecUVNuwfuzCA", dir: "Estaño Num Sn, Col. Felipe Angeles, C.P. 15310, Alcaldía Venustiano Carranza",  atel: "", }, 
        {  alcaldia: "PILARES  Rita Guerrero", url: "https://maps.app.goo.gl/QZozBwKwV6paf2HR7", dir: "Chiclera Num 34, Col. Progresista, C.P. 15370, Alcaldía Venustiano Carranza",  atel: "", }, 
        
      
      
      ],
    },

    {
      title: "Xochimilco",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1gDIObMv2mNjoF5xMGtf6TIhxdEW5qFw&ehbc=2E312F"
          className="  md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES San Luis Tlaxialtemalco",
          url: "https://maps.app.goo.gl/MV3qHmKb3kJ5m5Ux8",
          dir: "San Luis Tlaxialtemalco (Pblo), S/N, San Luis Tlaxialtemalco, Xochimilco, C.P. 16610",
          atel: "",
        },
        {
          alcaldia: "PILARES  Muyuguarda",
          url: "https://maps.app.goo.gl/2zgZwRgMQBvabesg8",
          dir: "Plande Muyuguarda y Canal de la Noria, S/N, Barrio 18, Xochimilco, C.P. 16034",
          atel: "",
        },
        {
          alcaldia: "PILARES modulo de bienestar social Ahualapa",
          url: "https://maps.app.goo.gl/fgXeQRx8m66Wg3TT9",
          dir: "Ahualapa, S/N, Pueblo Santa Cruz Acalpixcla, Xochimilco, C.P. 1653",
          atel: "",
        },

        {  alcaldia: "PILARES  Tepepan", url: "", dir: "16 De Septiembre, C.P. 16020, Alcaldía Xochimilco",  atel: "", }, 
        {  alcaldia: "PILARES  San Gregorio Atlapulco", url: "https://maps.app.goo.gl/iNCdHsXUKkd2AuDT6", dir: "Agustin Melgar Num 1, Col. San Gregorioatlapulco, C.P. 16600, Alcaldía Xochimilco",  atel: "", }, 
        {  alcaldia: "PILARES  San Lucas Xochimanca", url: "https://maps.app.goo.gl/KUmnhs8BQHD6SSqo6", dir: "Mexico Num S/N, Col. San Lucas Xochimanca, C.P. 16300, Alcaldía Xochimilco",  atel: "", }, 
        {  alcaldia: "PILARES  Tepalcatlalpan", url: "https://maps.app.goo.gl/wP853CVe7ViXGo2R8", dir: "De Las Canteras Num S/N/, Col. Santiago Tepalcatlalpan, C.P. 16200, Alcaldía Xochimilco",  atel: "", }, 

        {  alcaldia: "PILARES  Santa Cecilia Tepetlapa", url: "", dir: "Francisco Sarabia, C.P. 16880, Alcaldía Xochimilco",  atel: "", }, 
        {  alcaldia: "PILARES  San Francisco Tlanepantla", url: "", dir: "16 De Septiembre, C.P. 16900, Alcaldía Xochimilco",  atel: "", }, 
        {  alcaldia: "PILARES  Ahualapa", url: "https://maps.app.goo.gl/PbcBzcokUZgKRwFF8", dir: "Ahualapa Num S/N, Col. Santa Cruz Acalpixca, C.P. 16533, Alcaldía Xochimilco",  atel: "", }, 

        {  alcaldia: "PILARES  Acuexcomatl", url: "https://maps.app.goo.gl/A6iXgpqxcWVXbrEQA", dir: "Hermenegildo Galeana Num 142, Col. Quirino Mendoza, C.P. 16610, Alcaldía Xochimilco",  atel: "", }, 
        {  alcaldia: "PILARES  San Juan Tepepan", url: "", dir: "Francisco Villa Num 6, Col. San Juan Tepepan, C.P. 16020, Alcaldía Xochimilco",  atel: "", }, 
        {  alcaldia: "PILARES  San Lorenzo Atemoaya", url: "https://maps.app.goo.gl/HVfSaqtv56rmYyZY8", dir: "Miguel Hidalgo Num 4, Col. San Lorenzo Atemoaya, C.P. 16400, Alcaldía Xochimilco",  atel: "", }, 
        {  alcaldia: "PILARES  Deportiva Xochimilco", url: "https://maps.app.goo.gl/ecGYNx8FCWCWbf3u7", dir: "Francisco Goytia Num S/N, Col. Santiago Tepalcatlalpan, C.P. 16090, Alcaldía Xochimilco",  atel: "", }, 
        {  alcaldia: "PILARES  Ampliacion San Marcos", url: "https://maps.app.goo.gl/cBn6LkyKuAATDFW99", dir: "Olmos Num 135, Col. Ampliacion San Marcos Norte, C.P. 16038, Alcaldía Xochimilco",  atel: "", }, 
        {  alcaldia: "PILARES  Bodoquepa", url: "https://maps.app.goo.gl/JV2KPy2SN9bGo7At6", dir: "2° De Bodoquepa Num Sn, Col. La Asunción, Alcaldía Xochimilco",  atel: "", }, 
        {  alcaldia: "PILARES  16 De Septiembre", url: "https://maps.app.goo.gl/ZdFjLn2jf54FycZE9", dir: "16 De Septiembre Num 2 A, Col. Santa Maria Tepepan, C.P. 16020, Alcaldía Xochimilco",  atel: "", }, 
        {  alcaldia: "PILARES  Xochitepec", url: "https://maps.app.goo.gl/AB1HFBQGEEu6KDnJ8", dir: "Comercio Num S/N, Col. Santa Cruz Xochitepec, C.P. 16100, Alcaldía Xochimilco",  atel: "", }, 

      ],
    },
  ];

  const [opcionSeleccionada, setOpcionSeleccionada] =
    useState("coordinaciones");
  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  return (
    <div className={`${notoSans.className}  text-[#333334]  text-start `}>
      <PagSec
        Enlaces={enlacesL}
        Titulo={"Ubicación de oficinas de trámites y espacios de estudio"}
      >
        <div className="row-span-1">
          <div id="pestañas">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 leading-7">
              <li className="p-0">
                <a
                  aria-current="page"
                  className={`${
                    notoSans.className
                  } inline-block p-4 text-[18px] ${
                    opcionSeleccionada === "coordinaciones"
                      ? "text-[#A57F2C]  font-bold bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-[#A57F2C]"
                      : "text-[#333334] border border-gray-200 rounded-t-lg hover:text-[#611232] hover:font-bold hover:bg-slate-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  }`}
                  onClick={() => handleOpcionSeleccionada("coordinaciones")}
                >
                  Coordinaciones de zona
                </a>
              </li>
              <li className="p-0">
                <a
                  // href="#"
                  className={`${
                    notoSans.className
                  } inline-block p-4 text-[18px] ${
                    opcionSeleccionada === "plazas"
                      ? "text-[#A57F2C]  font-bold bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-[#A57F2C]"
                      : "text-[#333334] border border-gray-200 rounded-t-lg hover:text-[#611232] hover:font-bold hover:bg-slate-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  }`}
                  onClick={() => handleOpcionSeleccionada("plazas")}
                >
                  Plazas comunitarias
                </a>
              </li>
              <li className="p-0">
                <a
                  // href=""
                  className={`${
                    notoSans.className
                  } inline-block p-4 text-[18px] ${
                    opcionSeleccionada === "pilares"
                      ? "text-[#A57F2C] font-bold bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-[#A57F2C] "
                      : "text-[#333334] border border-gray-200 rounded-t-lg hover:text-[#611232] hover:font-bold hover:bg-slate-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  }`}
                  onClick={() => handleOpcionSeleccionada("pilares")}
                >
                  PILARES
                </a>
              </li>
            </ul>
          </div>
          <div id="contenedorUbicacion">
            {opcionSeleccionada === "coordinaciones" && (
              <div className="row-span-1">
                <div className="mx-auto mb-4 w-full max-w-full ">
                  <div className="pt-4 leading-7 justify-start text-[#333334] text-[18px] ">
                    <strong>
                      Ubica tu coordinación de zona dependiendo de tu alcaldía
                    </strong>
                    <p className="font-light">
                      Las coordinaciones de zona son unidades geográficas
                      responsables de promover, organizar y diagnosticar los
                      servicios de educación para jóvenes y adultos no
                      escolarizados. Dentro de las coordinaciones de zona podrás
                      realizar tus trámites.
                    </p>
                  </div>
                </div>

                <div className="w-full flex-col mb-40">
                  <SkewedPagesResponsive datos={pageData} />
                </div>
              </div>
            )}
            {opcionSeleccionada === "plazas" && (
              <div className="row-span-1">
                <div className="mx-auto mb-4 w-full max-w-full ">
                  <div className="pt-4 leading-7 justify-start text-[#333334] text-[18px]">
                    <strong>
                      Ubica tu plaza comunitaria dependiendo de tu alcaldía
                    </strong>
                    <p className="font-light">
                      Las Plazas Comunitarias del INEA son espacios educativos
                      abiertos a la comunidad, donde personas de diferentes
                      edades, preferentemente mayores de 15 años, pueden acudir
                      para aprender a leer, escribir, terminar su educación
                      primaria y secundaria, o tomar cursos de capacitación para
                      la vida y el trabajo.
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col">
                  <Plazas datos={plazasData}></Plazas>
                </div>
              </div>
            )}
            {opcionSeleccionada === "pilares" && (
              // Luego implementamos lo de pulares ahorita puse las plazas
              <div className="row-span-1">
                <div className="mx-auto mb-4 w-full max-w-full ">
                  <div className="pt-4 leading-7 justify-start text-[#333334] text-[18px] ">
                    <strong>
                      Ubica tu PILARES más cercano dependiendo de tu alcaldía
                    </strong>
                    <p className="font-light">
                      Los PILARES (Puntos de Innovación, Libertad, Arte,
                      Educación y Saberes) son espacios creados por el Gobierno
                      de la Ciudad de México donde en conjunto con el INEA se
                      ofrecen servicios educativos gratuitos para jóvenes y
                      adultos que desean concluir su educación básica
                      (alfabetización, primaria o secundaria). En estos centros,
                      las personas pueden recibir asesorías personalizadas,
                      presentar exámenes diagnósticos o finales, y acceder a
                      materiales educativos digitales. Además, integran
                      actividades culturales, deportivas y de formación para el
                      trabajo.
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col">
                  <Plazas datos={pilaresData}></Plazas>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <div className="mx-auto mb-32 w-full grid grid-cols-1 gap-2 row-span-1">
          <div className="mx-auto mt-2 mb-4 w-full max-w-full md:max-w-[1140px]">
            <div className="mx-auto mt-24 mb-16 md:mb-8">
              <h2 className="text-2xl font-medium text-slate-700 mb-2 letras:text-3xl">
                Coordinaciones de zona
              </h2>
              <div className="flex items-center mb-2">
                <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>
            </div>

            <div className="pt-4 text-lg text-gray-700  leading-tight justify-start">
              <strong>
                Ubica tu coordinación de zona dependiendo de tu alcaldía
              </strong>
              <p>
                Las coordinaciones de zona son unidades geográficas responsables
                de promover, organizar y diagnosticar los servicios de educación
                para jóvenes y adultos no escolarizados. Dentro de las
                coordinaciones de zona podrás realizar tus trámites.
              </p>
            </div>
          </div>

          <div className="w-full flex-col">
            <SkewedPagesResponsive datos={pageData} />
          </div>
        </div>
        <div className="row-span-1">
          <div className="mx-auto mt-2 mb-4 w-full max-w-full ">
            <div className="mx-auto mt-24 mb-16 md:mb-8 ">
              <h2 className="text-2xl font-medium text-slate-700 mb-2 letras:text-3xl">
                Plazas comunitarias
              </h2>
              <div className="flex items-center mb-2">
                <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>
            </div>

            <div className="pt-4 text-lg text-gray-700 leading-tight justify-start">
              <strong>
                Ubica tu plaza comunitaria dependiendo de tu alcaldía.
              </strong>
              <p>
                Las Plazas Comunitarias del INEA son espacios educativos
                abiertos a la comunidad, donde personas de diferentes edades,
                preferentemente mayores de 15 años, pueden acudir para aprender
                a leer, escribir, terminar su educación primaria y secundaria, o
                tomar cursos de capacitación para la vida y el trabajo
              </p>
            </div>
          </div>
          <div className="w-full flex-col">
            <Plazas datos={plazasData}></Plazas>
          </div>
        </div> */}
      </PagSec>
    </div>
  );
}

export default Ubicacion;
