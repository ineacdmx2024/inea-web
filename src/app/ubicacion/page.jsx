"use client";
import React, { useState } from "react";
import SkewedPages from "@/components/SkewedPages";
import SkewedPagesResponsive from "@/components/SkewedPagesResponsive";
import PagSec from "@/components/PlantillaPagSec";
import Plazas from "@/components/Plazas";
// import "../../../../src/app/globals.css";
import "../../app/globals.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

function Ubicacion() {
  // const [currentPage, setCurrentPage] = useState(1);

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
          alcaldia: "TLAHUAC",
          dir: "Hidalgo # 1, Col. Barrio San Juan, Alcaldía Tláhuac, CP 13060, CDMX",
          atel: "55 5842 1618",
          aemail: "cztlahuac@inea.gob.mx",
          url: "https://maps.app.goo.gl/SCxmZRsNCUyJj4MJA",
        },
        {
          alcaldia: "MILPA ALTA",
          dir: "Av. Chiapas # 2, Col. Barrio de Santa Martha, Alcaldía Milpa Alta, CP 12000,CDMX",
          atel: "55 5844 4886",
          aemail: "czmilpaalta@inea.gob.mX",
          url: "https://maps.app.goo.gl/YVCdzbUGW1w17w2u5",
        },
      ],
    },
    {
      title: "ELENA GARRO",
      nom: "Mitzi Martínez Pérez",
      tel: " 55 25 20 46 76",
      email: "",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=19J4WWcFAKKUoKRAwA5MC_6Nl4y29PUo&ehbc=2E312F"
          className="  md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "TLÁLPAN",
          dir: "Periférico Sur # 5290, Col. Isidro Fabela, Alcaldía Tlalpan, CP 01403, CDMX ",
          atel: "55 56 66 17 50",
          aemail: "cztlalpan@inea.gob.mx",
          url: "https://maps.app.goo.gl/cc5DzfS5bnXHnneM6",
        },
        {
          alcaldia: "CUAJIMALPA",
          dir: "Av. Luis Castillo Ledón # 17, Col. Cuajimalpa, Alcaldía Cuajimalpa, CP 05000, CDMX",
          atel: "55 58 12 35 91",
          aemail: "czcuajimalpa@inea.gob.mx",
          url: "https://maps.app.goo.gl/jUQ8fgfUi3unTXhH8",
        },
      ],
    },
    {
      title: "FERNANDO SOLANA MORALES",
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
          alcaldia: "COYOACÁN / XOCHIMILCO",
          dir: "Pedro Ramírez del Castillo S/N, Colonia Centro de Xochimilco, Alcaldía Xochimilco CP 16000, CDMX",
          atel: "55 56 76 66 60",
          aemail: "czxochimilco@inea.gob.mx",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
      ],
    },
    {
      title: "JUSTO SIERRA",
      nom: "Laura Merlos Sedeño",
      tel: "55 79 46 79 55",
      email: "lmerlos@inea.gob.mx",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1KNGOzsp4CL4BUr69KA3UFsheA_jVG2E&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "ÁLVARO OBREGÓN NORTE",
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
          alcaldia: "MAGDALENA CONTRERAS",
          dir: "Av. México # 985, Col. Héroes de Padierna,  Alcaldía Magdalena Contreras, CP 10700, CDMX",
          atel: "55 56 52 72 87",
          aemail: "czmcontreras@inea.gob.mx",
          url: "https://maps.app.goo.gl/ktTcibPfD4cdxyeq6",
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
          src="https://www.google.com/maps/d/u/1/embed?mid=1GLZ_yu1v0d_ReD9eQTP9S5z5XfOS77M&ehbc=2E312F"
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
          alcaldia: "PILARES La Araña",
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
      ],
    },
    {
      title: "Azcapotzalco",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1OpDsI4wB82GhT1H24u5RPISvOZn7wPc&ehbc=2E312F"
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
          alcaldia: "PILARES XALLI",
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
          src="https://www.google.com/maps/d/u/1/embed?mid=11TxF0-Xr_zMdOm3JohqipE9ULyNeVyE&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "Pilares 8 de Agosto",
          url: "https://maps.app.goo.gl/1Cfncezi5TgAMfp27",
          dir: "Río Becerra, S/N, 8 de Agosto, Benito Juárez, C.P. 03820",
          atel: "",
        },
      ],
    },
    {
      title: "Coyoacán",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1sBBkdZDsa_VAHhVpQHMPNzmD840E_sc&ehbc=2E312F"
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
      ],
    },
    {
      title: "Cuajimalpa",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1pRhCdjAb3bGbYXk59bzElVfrvzxyib4&ehbc=2E312F"
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
      ],
    },
    {
      title: "Cuauhtémoc",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1QeQuu8mT6f2UGhEMEPPzUKpfFpJAD38&ehbc=2E312F"
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
        {
          alcaldia: "PILARES La Equidad",
          url: "",
          dir: "Jesús Carranza, 15, Morelos, Cuauhtémoc, C.P. 6200",
          atel: "",
        },
      ],
    },
    {
      title: "Gustavo A. Madero",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1eCfaAhwI_yQASenCJukusXFzawGqr9I&ehbc=2E312F"
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
      ],
    },
    {
      title: "Iztacalco",
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1Ba0DuI4nZyUHQJeM9ICUqwcBd3goN2s&ehbc=2E312F"
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
      ],
    },
    {
      title: "Iztapalapa",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1hfbIhr2v6I2MUr0OKcH3FAHv7jYZlL4&ehbc=2E312F"
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
        {
          alcaldia: "PILARES Guelatao",
          url: "",
          dir: "Xicotencatl 5-26, Zona Urbana Ejidal Santa María Aztahuacan, Iztapalapa, 09578 Ciudad de México, CDMX",
          atel: "",
        },
      ],
    },
    {
      title: "La Magdalena Contreras",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1lOqAixDT8dKi2x_QV3Ya8prcg3y0Bck&ehbc=2E312F"
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
      ],
    },
    {
      title: "Miguel Hidalgo",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=16fPqTuB8v8TY7fMcTs4xp6CafHTz29g&ehbc=2E312F"
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
      ],
    },

    {
      title: "Milpa Alta",
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1W-f09zlUlMIutaNVR7GYCYlOLuWKN2c&ehbc=2E312F"
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
      ],
    },
    {
      title: "Tláhuac",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=18MvNS2u4wLcz6z9sUDxPeTzEKvZptXA&ehbc=2E312F"
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
      ],
    },
    {
      title: "Tlalpan",
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1_DlpyIry4s8cb6iZnr76O6-uD1T-W4E&ehbc=2E312F"
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
      ],
    },
    {
      title: "Venustiano Carranza",
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1Z-CZEd0zxdnDZWghgIOxlrOaA9wpMf4&ehbc=2E312F"
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
        {
          alcaldia: "PILARES PARQUE ALAMEDA ORIENTE",
          url: "https://maps.app.goo.gl/GhyvQfy5nf9eoDpa9",
          dir: "BORDO DE XOCHIACA, S/N, ARENAL 4A SECCION, VENUSTIANO CARRANZA, C.P. 15640",
          atel: "",
        },
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
          alcaldia: "PILARES muyuguarda",
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
      ],
    },
  ];

  const plazasData = [
    {
      title: "Álvaro Obregón",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1GLZ_yu1v0d_ReD9eQTP9S5z5XfOS77M&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "El Cuernito Centro Comunitario",
          dir: "Av. Chicago, S/N, Reacomodo El Cuernito, Álvaro Obregón, C.P. 01289",
          atel: "55 56152857",
          url: "https://maps.app.goo.gl/Y4sxywUpEAWhQSF69",
        },
        {
          alcaldia: "DIF Jalapa El Grande",
          dir: "Peral, S/N, Jalalpa El Grande, Álvaro Obregón, C.P. 01296",
          atel: "55 25917247",
          url: "https://maps.app.goo.gl/KFzShWkxVpQxVMbu5",
        },
        {
          alcaldia: "La Era",
          dir: "Av. 29 de Octubre, S/N, Lomas de La Era, Álvaro Obregón, C.P. 01860",
          atel: "55 26502684",
          url: "https://maps.app.goo.gl/KDqjDhkbxFyeDKup7",
        },
      ],
    },
    {
      title: "Azcapotzalco",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1OpDsI4wB82GhT1H24u5RPISvOZn7wPc&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "Azcapotzalco Prohogar",
          dir: "Calle 22, 17, Prohogar, Azcapotzalco, C.P. 02600",
          atel: "55 53554230",
          url: "https://maps.app.goo.gl/tEjm5fRX8pYJPo5FA",
        },
        {
          alcaldia: "El Rosario",
          dir: "Av. de las Culturas, S/N, Unidad Habitacional El Rosario, Azcapotzalco, C.P. 02100 ",
          atel: "55 26375579",
          url: "https://maps.app.goo.gl/qLj3puNK1p2YYfxd6",
        },
        {
          alcaldia: "San Antonio",
          dir: "Campo Maluco, S/N, San Antonio, Azcapotzalco, C.P. 02720",
          atel: "",
          url: "https://maps.app.goo.gl/L5rYaD2KXpB6fqnE9",
        },
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
        {
          alcaldia: "Extremadura",
          url: "https://maps.app.goo.gl/2AuWcxxSP8uF2sqz6",
          dir: "Extremadura, 26, Insurgentes Extremadura, Benito Juárez, C.P. 03740",
          atel: "55 25941842",
        },
        {
          alcaldia: "Centro de desarrollo Social 8 de Agosto",
          url: "https://maps.app.goo.gl/fEzoqM79bWDjRrAHA",
          dir: "Cerrada Becerra, S/N, 8 de Agosto, Benito Juárez, C.P. 03820",
          atel: "55 52762183",
        },
      ],
    },
    {
      title: "Coyoacán",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1sBBkdZDsa_VAHhVpQHMPNzmD840E_sc&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "DGOSE-UNAM",
          url: "https://maps.app.goo.gl/f4ApA5z1uPa3nBqeA",
          dir: "Insurgentes Sur, 3000, Ciudad Universitaria, Coyoacán, C.P. 04510 ",
          atel: "",
        },
        {
          alcaldia:
            'Centro de Desarrollo Comunitario "San Francisco Culhuacan"',
          url: "https://maps.app.goo.gl/riorcX1m9UgCPuLg8",
          dir: "Eje 2 Oriente Escuela Naval Militar, 3, San Francisco Culhuacán, Coyoacán, C.P. 04260",
          atel: "55 56072333",
        },
        {
          alcaldia: "C.D.C. Cuauhtemoc",
          url: "https://maps.app.goo.gl/pPkMh7ApLcxPhEr36",
          dir: "Papalotl, S/N, Santo Domingo, Coyoacán, C.P. 04369",
          atel: "55 15177440",
        },
        {
          alcaldia: "2 de Octubre 1968",
          url: "https://maps.app.goo.gl/LHxnRPM4ovuDe6wv6",
          dir: "Avenida Panamericana, 59-A, Villa Panamericana, Coyoacán, C.P. 04700",
          atel: "55 56664778",
        },
      ],
    },
    {
      title: "Cuajimalpa",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1pRhCdjAb3bGbYXk59bzElVfrvzxyib4&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "Centro de desarrollo Chimalpa",
          url: "https://maps.app.goo.gl/QnJhbEn9LgVHmE997",
          dir: "Porfirio Díaz, S/N, San Pablo Chimalpa, Cuajimalpa de Morelos, C.P. 5050",
          atel: "55 / 81643263",
        },
        {
          alcaldia: "Iglesia de San Mateo",
          url: "https://maps.app.goo.gl/VTPpJkG7XVPQ64LZA",
          dir: "S/N, San Mateo Tlaltenango, Cuajimalpa de Morelos, C.P. 3560",
          atel: "55 / 81647867",
        },
        {
          alcaldia: "Contadero",
          url: "https://maps.app.goo.gl/DV4LWp6v7aVmuEFv5",
          dir: "Avenida 16 de Septiembre, S/N, Contadero, Cuajimalpa de Morelos, C.P. 5500",
          atel: "55 / 21634452",
        },
        {
          alcaldia: "San Lorenzo Acopilco",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "Puerto Escondido, 8, Zentlatpatl, Cuajimalpa de Morelos, C.P. 5010",
          atel: "",
        },
      ],
    },
    {
      title: "Cuauhtémoc",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1QeQuu8mT6f2UGhEMEPPzUKpfFpJAD38&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "Centro IMSS Merced",
          url: "https://maps.app.goo.gl/F92LdbxtFcGzjM718",
          dir: "San Pablo, 31, Centro, Cuauhtémoc, C.P. 6020",
          atel: "55 / 54911129",
        },
        {
          alcaldia: "David Alfaro Siqueiros",
          url: "https://maps.app.goo.gl/rzueMSCowwVr9KuA7",
          dir: "Fernando de Alva Ixtlilxóchitl, 185, Tránsito, Cuauhtémoc, C.P. 6820",
          atel: "55 / 21242559",
        },
        {
          alcaldia: "Paulo Freire",
          url: "https://maps.app.goo.gl/N7p3tgLxUYGpXb897",
          dir: "Francisco Márquez, 160, Condesa, Cuauhtémoc, C.P. 6140",
          atel: "55 / 55535052",
        },
        {
          alcaldia: "Biblioteca Jesús Reyes Heroles",
          url: "https://maps.app.goo.gl/R6Z33HhUo6772jW28",
          dir: "Francisco Ayala, 123, Asturias, Cuauhtémoc, C.P. 6850",
          atel: "55 / 57418381",
        },
        {
          alcaldia: "CROC Donceles 28 ",
          url: "https://maps.app.goo.gl/2ZGvNDC9w9M3mGFs8",
          dir: "Donceles, 28, Centro, Cuauhtémoc, C.P. 6010",
          atel: "55 / 21242559",
        },
      ],
    },
    {
      title: "Gustavo A. Madero",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1eCfaAhwI_yQASenCJukusXFzawGqr9I&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia:
            "Cooperativa LF del Centro-Sindicato Mexicano de Electricistas",
          url: "https://maps.app.goo.gl/9YuDKKy8Bq4Z5yKb6",
          dir: "Av. Río de Guadalupe, 54, San Pedro El Chico, Gustavo A. Madero, C.P. 7480",
          atel: "",
        },
        {
          alcaldia: "CSS IMSS Tepeyac",
          url: "https://maps.app.goo.gl/rVAMcxsQx8GiSaCn9",
          dir: "Calzada de Guadalupe, 497, Estrella, Gustavo A. Madero, C.P. 7810",
          atel: "5555371231",
        },
        {
          alcaldia: "CECEM Cuautepec",
          url: "https://maps.app.goo.gl/gyHy7FZzme7wgcfM7",
          dir: "Lomas Cierzo, S/N, Lomas de Cuautepec Barrio Alto, Gustavo A. Madero, C.P. 7110",
          atel: "5518581345",
        },
        {
          alcaldia: "Aquiles Serdán",
          url: "https://maps.app.goo.gl/9hGF2f8CwZRnJ64v9",
          dir: "Puerto Tampico, S/N, Casas Alemán, Gustavo A. Madero, C.P. 7580",
          atel: "5557507338",
        },
      ],
    },
    {
      title: "Iztacalco",
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1Ba0DuI4nZyUHQJeM9ICUqwcBd3goN2s&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "Plaza comunitaria Fortaleza",
          url: "https://maps.app.goo.gl/2uY1SB8gEVwnh8QB9",
          dir: "Oriente 116, S/N, Cuchilla Ramos Millán, Iztacalco, C.P. 8030",
          atel: "55 / 56649475",
        },
      ],
    },
    {
      title: "Iztapalapa",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1hfbIhr2v6I2MUr0OKcH3FAHv7jYZlL4&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "CONALEP Iztapalapa V",
          url: "https://maps.app.goo.gl/1NHQi3WGsRouKFTPA",
          dir: "Ahuehuetes, 1, Unidad Habitacional Solidaridad, Iztapalapa, C.P. 9530",
          atel: "55 / 15528243",
        },
        {
          alcaldia: "Santa Catarina",
          url: "https://maps.app.goo.gl/57yao2aQS2cXiXoJ8",
          dir: "Lázaro Cárdenas, S/N, Ixtlahuacan, Iztapalapa, C.P. 9690",
          atel: "55 / 26353512",
        },
        {
          alcaldia: "Atlalilco",
          url: "https://maps.app.goo.gl/57yao2aQS2cXiXoJ8",
          dir: "Ermita Iztapalapa, 1029, Barrio San Lucas, Iztapalapa, C.P. 9000",
          atel: "55 / 55548903",
        },
        {
          alcaldia: "Vicente Guerrero",
          url: "https://maps.app.goo.gl/rMFAicdEPzGSQJWg9",
          dir: "Super Manzana 6, Edificio B Primer Piso, S/N, Unidad Habitacional Vicente Guerrero, Iztapalapa, C.P. 9200",
          atel: "55 / 26085160",
        },
      ],
    },
    {
      title: "La Magdalena Contreras",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1lOqAixDT8dKi2x_QV3Ya8prcg3y0Bck&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "Escuela de oficios La Malinche",
          url: "https://maps.app.goo.gl/GvezE5X3wwTzcFKfA",
          dir: "Lote 21, La Malinche, Magdalena Contreras, C.P. 10010",
          atel: "55 / 56832692",
        },
      ],
    },
    {
      title: "Miguel Hidalgo",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=16fPqTuB8v8TY7fMcTs4xp6CafHTz29g&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "Faro del Saber Legaria",
          url: "https://maps.app.goo.gl/Ad3RssYeeRrMFaZR6",
          dir: "Abelar Rodríguez, S/N, Francisco I Madero, Miguel Hidalgo, C.P. 11480",
          atel: "55 / 53421953",
        },
      ],
    },

    {
      title: "Milpa Alta",
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1W-f09zlUlMIutaNVR7GYCYlOLuWKN2c&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "Temachtilcalco",
          url: "https://maps.app.goo.gl/7QcyckqLpBnRz66i9",
          dir: "Avenida 5 de Mayo, S/N, San Antonio Tecomitl, Milpa Alta, C.P. 12100",
          atel: "55 / 58477404",
        },
        {
          alcaldia: "C.C. San José-Villa Milpa Alta",
          url: "https://maps.app.goo.gl/vwiw1eBcFdRe3G1JA",
          dir: "Jalisco, S/N, Los Ángeles, Milpa Alta, C.P. 12000",
          atel: "55 / 22115954",
        },
        {
          alcaldia: "San Pablo Oztotepec",
          url: "https://maps.app.goo.gl/ohxDD6zzN15xdQUW6",
          dir: "Guerrero Sur, S/N, Barrio Centro, Milpa Alta, C.P. 12400",
          atel: "55 / 22115540",
        },
      ],
    },
    {
      title: "Tláhuac",

      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=18MvNS2u4wLcz6z9sUDxPeTzEKvZptXA&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        />
      ),
      items: [
        {
          alcaldia: "Del Mar",
          url: "https://maps.app.goo.gl/gK2KYY2GPDaVhojQ7",
          dir: "Calle Gitana, S/N, Del Mar, Tláhuac, C.P. 13270",
          atel: "55 / 58508076",
        },
      ],
    },
    {
      title: "Tlalpan",
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1_DlpyIry4s8cb6iZnr76O6-uD1T-W4E&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),

      items: [
        {
          alcaldia: "Iztapapalotl",
          url: "https://maps.app.goo.gl/xRd1faBjusSVdfUu5",
          dir: "Paseo de las Azucenas, S/N, Mirador I, Tlalpan, C.P. 14449",
          atel: "55 / 54469454",
        },
        {
          alcaldia: "San Pedro Mártir",
          url: "https://maps.app.goo.gl/GRTsvNuPpLUUSULA6",
          dir: "Carretera Federal a Cuernavaca, S/N, San Pedro Mártir, Tlalpan, C.P. 14650",
          atel: "55 / 29760014",
        },
        {
          alcaldia: "Magdalena Petlacalco",
          url: "https://maps.app.goo.gl/3DdRYw3Qqkbd32wd6",
          dir: "Avenida México - Ajusco, S/N, Magdalena Petlacalco, Tlalpan, C.P. 14480",
          atel: "55 / 13159505",
        },
        {
          alcaldia: "Centro comunitario Carrasco",
          url: "https://maps.app.goo.gl/pXoTAyXWohsUxegd6",
          dir: "Carrasco, 67, Toriello Guerra, Tlalpan, C.P. 14050",
          atel: "55 / 51711716",
        },
      ],
    },
    {
      title: "Venustiano Carranza",
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1Z-CZEd0zxdnDZWghgIOxlrOaA9wpMf4&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "TAPO",
          url: "https://maps.app.goo.gl/nku6WGET5jWxQng37",
          dir: "General Ignacio Zaragoza, 200, 10 DE MAYO, Venustiano Carranza, 15290",
          atel: "55 55220595",
        },

        {
          alcaldia: "Casa de cultura Enrique Ramírez y Ramírez",
          url: "https://maps.app.goo.gl/k4bB4CVqsjyQwScX9",
          dir: "Vidal Alcocer, 280, Morelos, Venustiano Carranza, 15270",
          atel: "55 / 26161501",
        },
        {
          alcaldia: "Arenal",
          url: "https://maps.app.goo.gl/V7YNtiZqqkKTR3mF7",
          dir: "Xochistlahuaca, 54, Arenal 4A. Secc., Venustiano Carranza, 15640",
          atel: "55 / 15455230",
        },
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
          alcaldia: "Xochimilco",
          url: "https://maps.app.goo.gl/S6wEWd2ZE8JZ52bQ8",
          dir: "Pedro Ramírez del Castillo, S/N, Barrio de San Antonio, Xochimilco, C.P. 16000",
          atel: "55 / 54897413",
        },
      ],
    },
  ];

  const [isClickCZ, setisClickCZ] = useState(false);
  const [isClickPC, setisClickPC] = useState(false);
  const [isClickP, setisClickP] = useState(false);
  const [opcionSeleccionada, setOpcionSeleccionada] =
    useState("coordinaciones");
  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  return (
    <div className={`${montserrat.className}  text-[#333334]  text-start `}>
      <PagSec
        Enlaces={cards}
        Titulo={"Ubicación de oficinas de trámites y espacios de estudio"}
      >
        <div className="row-span-1">
          <div id="pestañas">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 leading-7">
              <li className="p-0">
                <a
                  aria-current="page"
                  className={`${
                    montserrat.className
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
                    montserrat.className
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
                    montserrat.className
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
              <div className="mx-auto mb-32 w-full grid grid-cols-1 gap-2 row-span-1">
                <div className="mx-auto mb-4 w-full max-w-full md:max-w-[1140px]">
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

                <div className="w-full flex-col">
                  <SkewedPagesResponsive datos={pageData} />
                </div>
              </div>
            )}
            {opcionSeleccionada === "plazas" && (
              <div className="row-span-1">
                <div className="mx-auto mb-4 w-full max-w-full ">
                  <div className="pt-4 leading-7 justify-start text-[#333334] text-[18px]">
                    <strong>
                      Ubica tu plaza comunitaria dependiendo de tu alcaldía.
                    </strong>
                    <p className="font-light">
                      Las Plazas Comunitarias del INEA son espacios educativos
                      abiertos a la comunidad, donde personas de diferentes
                      edades, preferentemente mayores de 15 años, pueden acudir
                      para aprender a leer, escribir, terminar su educación
                      primaria y secundaria, o tomar cursos de capacitación para
                      la vida y el trabajo
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
                      Ubica tu PILARES más cercano dependiendo de tu alcaldía.
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
