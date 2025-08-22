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
          className=" md:h-[380px] w-full h-[300px]"
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
          className="  md:h-[380px]  w-[100%]  h-[300px]"
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
          className=" md:h-[380px]  w-[100%]  h-[300px]"
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
          className=" md:h-[380px]  w-[100%]  h-[300px]"
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
          className=" md:h-[380px]  w-[100%]  h-[300px]"
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
          className=" md:h-[380px]  w-[100%]  h-[300px]"
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
          className=" md:h-[380px]  w-[100%]  h-[300px]"
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
          className=" md:h-[380px]  w-[100%]  h-[300px]"
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

  const plazasData = pageData;

  const pilaresData = [
    {
      title: "Álvaro Obregón",

      map: (
        <iframe
    
          src="https://www.google.com/maps/d/u/3/embed?mid=1KUG8-R8CmUpVRp3E-nIXuzz06p1wNlw&ehbc=2E312F&noprof=1"
          className=" md:h-[380px]  w-[100%]  h-[300px]"
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
          alcaldia: "PILARES Lomas De La Era",
          dir: "29 De Octubre Num Sn, Col. Lomas De La Era, C.P. 18600, Alcaldía Alvaro Obregon",
          atel: "",
          url: "https://maps.app.goo.gl/jp66fNw3shn9yTfH6",
        },
        {
          alcaldia: "PILARES Olivar Del Conde",
          dir: "Río San Borja, S/N, Olivar del Conde 2a Sección, Álvaro Obregón, C.P. 01408 ",
          atel: "",
          url: "https://maps.app.goo.gl/f78g83EqNyKSihfU8",
        },
        {
          alcaldia: "PILARES Río San Borja",
          dir: "Av. Rio San Borja MZ-20-LT-54, Olivar del Conde 2da Secc, Álvaro Obregón, 01408",
          atel: "",
          url: "https://maps.app.goo.gl/P1UZ27hWR5WXcpcv8",
        },
      ],
    },
    {
      title: "Azcapotzalco",

      map: (
        <iframe

          src="https://www.google.com/maps/d/u/0/embed?mid=1P4WOrE7ULq-hKgAWUDCKA6dRMAB9xMo&ehbc=2E312F&noprof=1"
          className=" md:h-[380px]  w-[100%]  h-[300px]"
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
      ],
    },

    {
      title: "Benito Juárez",
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1iXbUSmuOj-hyJhtW9lcYimmQO7m1XUk&ehbc=2E312F&noprof=1"
          className=" md:h-[380px]  w-[100%]  h-[300px]"
        ></iframe>
      ),
      items: [
        {  alcaldia: "PILARES  8 De Agosto", url: "https://maps.app.goo.gl/d7zbQRw6bfLukUPx6", dir: "Becerra Num S/N, Col. 8 De Agosto, C.P. 3820, Alcaldía Benito Juarez",  atel: "", },
      ],
    },
    {
      title: "Coyoacán",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1tVjuVrGXnC3ocsTFLZNGQ8b2AcDhPDM&ehbc=2E312F&noprof=1"
          className=" md:h-[380px]  w-[100%]  h-[300px]"
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
          url: "https://maps.app.goo.gl/vbmXFCAe5J2tKHh89",
          dir: "Mixtecas, S/N, Ajusco, Coyoacán, C.P. 04300",
          atel: "",
        },
      ],
    },
    {
      title: "Cuajimalpa",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1uNFMpeEOyiNCRjThsUT5qEATrq9L9gI&ehbc=2E312F&noprof=1"
          className=" md:h-[380px]  w-[100%]  h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES BENITO JUÁREZ",
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
      ],
    },
    {
      title: "Cuauhtémoc",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1vHQf833wZK1JmolYXyYahLvV9QuaA-A&ehbc=2E312F&noprof=1"
          className=" md:h-[380px]  w-[100%]  h-[300px]"
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
        {
          alcaldia: "PILARES Tepito",
          url: "https://maps.app.goo.gl/5YgPUSqrb1FLX7Kr5",
          dir: "JESUS CARRANZA, 15, Tepito, C.P. 6200",
          atel: "",
        },
      ],
    },
    {
      title: "Gustavo A. Madero",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1HbfOxKiEQxw0VmF1FK3jgZ55YsivCME&ehbc=2E312F&noprof=1"
          className=" md:h-[380px]  w-[100%]  h-[300px]"
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
          alcaldia: "PILARES BENEMÉRITO DE LAS AMÉRICAS",
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
          alcaldia: "PILARES SAN FELIPE DE JESÚS",
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
      ],
    },
    {
      title: "Iztacalco",
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1RWgD5ZEvgfDqP-K4LCZ-W6afS76F5Qg&ehbc=2E312F&noprof=1"
          className=" md:h-[380px]  w-[100%]  h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES ROJO GÓMEZ",
          url: "https://maps.app.goo.gl/HpA69qd8h2F6Y93E9",
          dir: "Eje 5 Oriente Javier Rojo Gómez y Calzada Ignacio Zaragoza, S/N, Agrícola Oriental, Iztacalco, C.P. 8500",
          atel: "",
        },
        {
          alcaldia: "PILARES SANTA ANITA",
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
          alcaldia: "PILARES ZAPATA VELA",
          url: "https://maps.app.goo.gl/qPjkmjiruFPMyVNf7",
          dir: "Lenguas Indigenas Num 31, Col. Carlos Zapata Vela, C.P. 8410",
          atel: "",
        }, 
      ],
    },
    {
      title: "Iztapalapa",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1g6Gw-nWoi_N903Wi0eB_j31Q1uObuLM&ehbc=2E312F&noprof=1"
          className=" md:h-[380px]  w-[100%]  h-[300px]"
        ></iframe>
      ),
      items: [
        { alcaldia: "PILARES Bambú", url: "https://maps.app.goo.gl/MRHut1SEKK9pfnHU8", dir: "1, Lt16 Lt101, Lomas de la Estancia, Iztapalapa, C.P. 9640", atel: "" },
        { alcaldia: "PILARES Calmécac", url: "https://maps.app.goo.gl/G6zpw9zZ7BV2oJMJ6", dir: "Valle de México, S/N, Miravalles, Iztapalapa, C.P. 9696", atel: "" },
        { alcaldia: "PILARES Cerro Azul", url: "https://maps.app.goo.gl/Z4VHGiqejHdHkvok7", dir: "Cerro Azul, Lt4 Mz95-C, Buenavista, Iztapalapa, C.P. 9700", atel: "" },
        { alcaldia: "PILARES Ejercito De Agua Prieta (Guelatao)", url: "https://maps.app.goo.gl/UHxNE2jbcPvppVho8", dir: "Circuvalacion Num S/N, Col. Ejercito De Agua Prieta, C.P. 9578, Alcaldía Iztapalapa", atel: "" },
        { alcaldia: "PILARES Lomas de la Estancia", url: "https://maps.app.goo.gl/BNxT1MQ7jsjzeaY66", dir: "Camino a las Minas, S/N, Lomas de la Estancia, Iztapalapa, C.P. 9640", atel: "" },
        { alcaldia: "PILARES Palmitas", url: "https://maps.app.goo.gl/NYULxhZgNg7DEECe8", dir: "Nativitas, S/N, Palmitas, Iztapalapa, C.P. 9670", atel: "" },
        { alcaldia: "PILARES República Federal", url: "https://maps.app.goo.gl/ZHgEsMorEE8UqxFm7", dir: "República Federal, S/N, Santa María Acatitla Sur, Iztapalapa, C.P. 9530", atel: "" },
        { alcaldia: "PILARES San Andrés Tetepilco", url: "https://maps.app.goo.gl/erDdaKGy9SMXSMDb9", dir: "1 Oriente, Av. Andrés Molina Enríquez, S/N, San Andrés Tetepilco, Iztapalapa, C.P. 9440", atel: "" },
        { alcaldia: "PILARES San Juan Joya", url: "https://maps.app.goo.gl/DxsDbDhPqfeB6GWEA", dir: "Agustín Iturbide, S/N, San Juan Joya, Iztapalapa, C.P. 9839", atel: "" },
        { alcaldia: "PILARES Tepalcates", url: "https://maps.app.goo.gl/BcfjdauFDGKdUALb7", dir: "Primavera, S/N, Tepalcates, Iztapalapa, C.P. 9210", atel: "" },
        { alcaldia: "PILARES Valle de Luces", url: "https://maps.app.goo.gl/pfrrEYtsEMs71rEy9", dir: "Valle del Paraíso, Lt.18, Valle de Luces, Iztapalapa, C.P. 9800", atel: "" },
        { alcaldia: "PILARES Villa Cid", url: "https://maps.app.goo.gl/1gM4xqWcjdytH16AA", dir: "Villa Cid, S/N, Desarrollo Urbano Quetzalcoatl, Iztapalapa, C.P. 9700", atel: "" },
        { alcaldia: "PILARES Tetecón", url: "https://maps.app.goo.gl/etHckVacz4yh91P5A", dir: "Capulín, Mz.54, Buenavista, Iztapalapa, C.P. 9700", atel: "" },
        { alcaldia: "PILARES Acahualtepec", url: "https://maps.app.goo.gl/n5xLeowtA34EPkja8", dir: "Colorín, S/N, 2da Ampliación Santiago Acahualtepec, Iztapalapa, C.P. 9609", atel: "" },
      ],
    },
    {
      title: "La Magdalena Contreras",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1j-IipwRhA4n3DjOLOW-qwVtJO_QlQTo&ehbc=2E312F&noprof=1"
          className=" md:h-[380px]  w-[100%]  h-[300px]"
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
      ],
    },
    {
      title: "Miguel Hidalgo",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1ojNbNWeAtEa9F7Oxgy2QIxkN-tnumFw&ehbc=2E312F&noprof=1"
          className=" md:h-[380px]  w-[100%]  h-[300px]"
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

      ],
    },

    {
      title: "Milpa Alta",
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=19X_1K8o_WRXLftyXb45hRLTgY7Rw6ck&ehbc=2E312F&noprof=1"
          className=" md:h-[380px]  w-[100%]  h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Miacatlán",
          url: "https://maps.app.goo.gl/PP2CggDQ9W69fV4E7",
          dir: "Bolívar Poniente, S/N, San Jerónimo Miacatlán (Pblo), Milpa Alta, C.P. 12600",
          atel: "",
        },
        {
          alcaldia: "PILARES San Pablo Oztotepec",
          url: "https://maps.app.goo.gl/BPXLFR3hGBNUr4Ut7",
          dir: "Emiliano Zapata Num 103, Col. San Pablo Oztotepec, C.P. 12400, Alcaldía Milpa Alta",
          atel: "",
        },

      ],
    },
    {
      title: "Tláhuac",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1oLfTOQvxw7JQVZLEUMcC-vScIwavF3g&ehbc=2E312F&noprof=1"
          className=" md:h-[380px]  w-[100%]  h-[300px]"
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
        }
      ],
    },
    {
      title: "Tlalpan",
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1envJgOZv-SpQNBUjLqj3ZJbZIcykP2c&ehbc=2E312F&noprof=1"
          className=" md:h-[380px]  w-[100%]  h-[300px]"
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
      ],
    },
    {
      title: "Venustiano Carranza",
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1XyPBP0g2GhuYLMD2-kdEiH7oHiM6KT4&ehbc=2E312F&noprof=1"
          className=" md:h-[380px]  w-[100%]  h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Candelaria",
          url: "https://maps.app.goo.gl/MQqCUkuC6KPd41Yj6",
          dir: "Congreso de la Unión, S/N, 10 DE MAYO, Venustiano Carranza, 15100",
          atel: "",
        },
        {
          alcaldia: "PILARES Parque alameda oriente",
          url: "https://maps.app.goo.gl/9cmm3u5WQtyheyEH6",
          dir: "Alameda Oriente, Venustiano Carranza, 15640",
          atel: "",
        },
      ],
    },

    {
      title: "Xochimilco",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1Ihs3t8alZ2uC6B4XWla_mOOXnXhXVj4&ehbc=2E312F&noprof=1"
          className="  md:h-[380px]  w-[100%]  h-[300px]"
        ></iframe>
      ),
      items: [
        { alcaldia: "PILARES Ahualapa", url: "https://maps.app.goo.gl/PbcBzcokUZgKRwFF8", dir: "Ahualapa Num S/N, Col. Santa Cruz Acalpixca, C.P. 16533, Alcaldía Xochimilco", atel: "" },
        { alcaldia: "PILARES Muyuguarda", url: "https://maps.app.goo.gl/2zgZwRgMQBvabesg8", dir: "Plande Muyuguarda y Canal de la Noria, S/N, Barrio 18, Xochimilco, C.P. 16034", atel: "" },
        { alcaldia: "PILARES San Luis Tlaxialtemalco", url: "https://maps.app.goo.gl/MV3qHmKb3kJ5m5Ux8", dir: "San Luis Tlaxialtemalco (Pblo), S/N, San Luis Tlaxialtemalco, Xochimilco, C.P. 16610", atel: "" },
  ],
    },
  ];

  const [opcionSeleccionada, setOpcionSeleccionada] =
    useState("coordinaciones");
  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  return (
    // <div className={`${notoSans.className}  text-[#333334]  text-start `}>
    <div className={`font-noto  text-[#333334]  text-start `}>
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
                  // className={`${notoSans.className} inline-block p-4 text-[18px] ${
                  className={`font-noto inline-block p-4 text-[18px] ${
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
                  // className={`${notoSans.className} inline-block p-4 text-[18px] ${
                  className={`font-noto inline-block p-4 text-[18px] ${
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
                  // className={`${notoSans.className} inline-block p-4 text-[18px] ${
                  className={`font-noto inline-block p-4 text-[18px] ${
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
