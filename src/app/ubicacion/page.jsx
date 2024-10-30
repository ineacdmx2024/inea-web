// "use client";
import React from "react";
import SkewedPages from "@/components/SkewedPages";
import SkewedPagesResponsive from "@/components/SkewedPagesResponsive";
import PagSec from "@/components/PlantillaPagSec";
import Plazas from "@/components/Plazas";
// import "../../../../src/app/globals.css";
import "../../app/globals.css";
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
      imageSrc: "/Modalidad/Examenunico2.webp",
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

  const plazasData = [
    {
      title: "Álvaro Obregón",

      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1ADndmYvW3k1K5kQU7_icHDSJWItFpMs&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "El Cuernito Centro Comunitario",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "DIF Jalapa El Grande",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "La Era",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Árbol del conocimiento",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Barrio Norte",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Isidro Febela",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES La Araña",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Olivar del Conde",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Rio San Borja",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
      ],
    },
    {
      title: "Azcapotzalco",

      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1ADndmYvW3k1K5kQU7_icHDSJWItFpMs&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "Azcapotzalco Prohogar",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "El Rosario",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Coltongo",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Margarita Maza",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES San Miguel Amantla",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES XALLI",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "San Antonio",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
      ],
    },

    {
      title: "Benito Juárez",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=122hM5GKsgDsm2hophXyiQkdE6I-kzgU&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "Extremadura",
          url: "https://maps.app.goo.gl/SCxmZRsNCUyJj4MJA",
        },
        {
          alcaldia: "Centro de desarrollo Social 8",
          url: "https://maps.app.goo.gl/YVCdzbUGW1w17w2u5",
        },
        {
          alcaldia: "Pilares 8 de Agosto",
          url: "https://maps.app.goo.gl/SCxmZRsNCUyJj4MJA",
        },
        {
          alcaldia: "MILPA ALTA 4",
          url: "https://maps.app.goo.gl/YVCdzbUGW1w17w2u5",
        },
        {
          alcaldia: "TLAHUAC 5",
          url: "https://maps.app.goo.gl/SCxmZRsNCUyJj4MJA",
        },
        {
          alcaldia: "MILPA ALTA 6",
          url: "https://maps.app.goo.gl/YVCdzbUGW1w17w2u5",
        },
        {
          alcaldia: "TLAHUAC 7",
          url: "https://maps.app.goo.gl/SCxmZRsNCUyJj4MJA",
        },
        {
          alcaldia: "MILPA ALTA 8",
          url: "https://maps.app.goo.gl/YVCdzbUGW1w17w2u5",
        },
        {
          alcaldia: "TLAHUAC  9",

          url: "https://maps.app.goo.gl/SCxmZRsNCUyJj4MJA",
        },
        {
          alcaldia: "MILPA ALTA 10",
          url: "https://maps.app.goo.gl/YVCdzbUGW1w17w2u5",
        },
        {
          alcaldia: "TLAHUAC  11",

          url: "https://maps.app.goo.gl/SCxmZRsNCUyJj4MJA",
        },
        {
          alcaldia: "MILPA ALTA  12",

          url: "https://maps.app.goo.gl/YVCdzbUGW1w17w2u5",
        },

        {
          alcaldia: "MILPA ALTA  13",

          url: "https://maps.app.goo.gl/YVCdzbUGW1w17w2u5",
        },

        {
          alcaldia: "MILPA ALTA  14",

          url: "https://maps.app.goo.gl/YVCdzbUGW1w17w2u5",
        },
        {
          alcaldia: "MILPA ALTA 15",
          url: "https://maps.app.goo.gl/YVCdzbUGW1w17w2u5",
        },
        {
          alcaldia: "TLAHUAC  16",

          url: "https://maps.app.goo.gl/SCxmZRsNCUyJj4MJA",
        },
        {
          alcaldia: "MILPA ALTA  17",

          url: "https://maps.app.goo.gl/YVCdzbUGW1w17w2u5",
        },

        {
          alcaldia: "MILPA ALTA  18",

          url: "https://maps.app.goo.gl/YVCdzbUGW1w17w2u5",
        },

        {
          alcaldia: "MILPA ALTA  19",

          url: "https://maps.app.goo.gl/YVCdzbUGW1w17w2u5",
        },

        {
          alcaldia: "MILPA ALTA  20",

          url: "https://maps.app.goo.gl/YVCdzbUGW1w17w2u5",
        },

        {
          alcaldia: "MILPA ALTA  21",

          url: "https://maps.app.goo.gl/YVCdzbUGW1w17w2u5",
        },
      ],
    },
    {
      title: "Coyoacán",

      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1ADndmYvW3k1K5kQU7_icHDSJWItFpMs&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "DGOSE-UNAM",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "Centro de Desarrollo Comuni...",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "C.D.C. Cuauhtemoc",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "2 de Octubre 1968",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Santa Úrsula",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Topiltzin",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
      ],
    },
    {
      title: "Cuajimalpa",

      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1ADndmYvW3k1K5kQU7_icHDSJWItFpMs&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "Centro de desarrollo Chimalpa",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "Iglesia de San Mateo",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "Contadero",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Lic. Benito Juárez",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Cuajimalpa",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Zentlapalt",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "San Lorenzo Acopilco",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
      ],
    },
    {
      title: "Cuauhtémoc",

      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1ADndmYvW3k1K5kQU7_icHDSJWItFpMs&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "Centro IMSS Merced",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "David Alfaro Siqueiros",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "Paulo Freire",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "Biblioteca Jesús Reyes  Heroles",

          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Boleo",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Frida Kahlo",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Parque Abasolo",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Perú",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES La Equidad",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "CROC Donceles 28 ",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
      ],
    },
    {
      title: "Gustavo A. Madero",

      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1ADndmYvW3k1K5kQU7_icHDSJWItFpMs&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "Cooperativa LF del Centro-Si...",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "CSS IMSS Tepeyac",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "CECEM Cuautepec",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES 100 metros",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Benemerito de las... ",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Cuchilla del tes...",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Girasol",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Magdalena de...",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Nueva Atzacoalco",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Revolución",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES 'Richard Wagner'",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Tlalpexco",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES San Felipe II",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Aragon VII",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Vasco de Quiroga",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "Aquiles Serdán",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
      ],
    },
    {
      title: "Iztacalco",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1KNGOzsp4CL4BUr69KA3UFsheA_jVG2E&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Santa Anita",
          url: "https://maps.app.goo.gl/ba9BXgUnybZy12Az7",
        },
        {
          alcaldia: "PILARES TECMA",
          url: "https://maps.app.goo.gl/ba9BXgUnybZy12Az7",
        },
        {
          alcaldia: "PILARES Rojo Gómez",
          url: "https://maps.app.goo.gl/ba9BXgUnybZy12Az7",
        },
        {
          alcaldia: "Plaza comunitaria Fortaleza",
          url: "https://maps.app.goo.gl/ba9BXgUnybZy12Az7",
        },
        {
          alcaldia: "PILARES PAquita Calvo",
          url: "https://maps.app.goo.gl/ba9BXgUnybZy12Az7",
        },
      ],
    },
    {
      title: "Iztapalapa",

      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1ADndmYvW3k1K5kQU7_icHDSJWItFpMs&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Acahualtepec",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES 'Tetecón'",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES 'Villa Cid'",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Valle de Luces",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Tepalcates",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Comunitario 'Pa'",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES San Andrés Tetepilco",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Republica federal",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Palmitas",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Lomas de la Estancia",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES 'Cerro Azul'",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Calmécac mirav",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Banbú",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "CONALEP Iztapalapa",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "Santa Catarina",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "Atlalilco ",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Guelatao",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "Vicente Guerrero",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
      ],
    },
    {
      title: "La Magdalena Contreras",

      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1ADndmYvW3k1K5kQU7_icHDSJWItFpMs&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Parcela",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Huayatla",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "Escuela de oficios La Malinc...",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
      ],
    },
    {
      title: "Miguel Hidalgo",

      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1ADndmYvW3k1K5kQU7_icHDSJWItFpMs&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Tlacopan",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Pensil",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Casa Amarilla",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "Faro del Saber Legaria",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
      ],
    },

    {
      title: "Milpa Alta",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1m7JWJM7KiLjTibY591u_2iTi0T01mTs&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Oztotepec",
          url: "https://maps.app.goo.gl/qm4NSfteMpjrpFDZA",
        },
        {
          alcaldia: "PILARES Miacatlán",
          url: "https://maps.app.goo.gl/AFuMTMiLeQ5ceMB47",
        },
        {
          alcaldia: " Temachtilcalco",
          url: "https://maps.app.goo.gl/D9zKDShpbBGSkwCr9",
        },
        {
          alcaldia: "C.C. San José-Villa Milpa Alta",
          url: "https://maps.app.goo.gl/JSE8nwqGbHf7hBv68",
        },
        {
          alcaldia: "San Pablo Oztotepec",
          url: "https://maps.app.goo.gl/JSE8nwqGbHf7hBv68",
        },
      ],
    },
    {
      title: "Tlalpan",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1jYl_g2AOqdFwlTY8BqtN3JrPofhRaZc&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),

      items: [
        {
          alcaldia: "PILARES San Miguel Topilejo",
          url: "https://maps.app.goo.gl/AHcxE3qhmyRFPb839",
        },
        {
          alcaldia: "PILARES Chicosaén",
          url: "https://maps.app.goo.gl/H2T4d2b4frJ65rTu7",
        },
        {
          alcaldia: "PILARES Bosques",
          url: "https://maps.app.goo.gl/UTa8tyL126a9ua169",
        },

        {
          alcaldia: "Iztapapalotl",
          url: "https://maps.app.goo.gl/UTa8tyL126a9ua169",
        },
        {
          alcaldia: "San Pedro Mártir",
          url: "https://maps.app.goo.gl/UTa8tyL126a9ua169",
        },
        {
          alcaldia: "Magdalena Petlacalco",
          url: "https://maps.app.goo.gl/UTa8tyL126a9ua169",
        },
        {
          alcaldia: "PILARES Belvedere",
          url: "https://maps.app.goo.gl/UTa8tyL126a9ua169",
        },
        {
          alcaldia: "Centro comunitario Carrasco",
          url: "https://maps.app.goo.gl/UTa8tyL126a9ua169",
        },
      ],
    },
    {
      title: "Tláhuac",

      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1C9rsjt3V3drRpnMGa-f3mXlpiUIiPYU&ehbc=2E312F&noprof=1"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        />
      ),
      items: [
        {
          alcaldia: "PILARES Tierra Blanca",
          url: "https://maps.app.goo.gl/JSE8nwqGbHf7hBv68",
        },
        {
          alcaldia: "PILARES García Lorca",
          url: "https://maps.app.goo.gl/EsEhgiroM27usZQz6",
        },
        {
          alcaldia: "PILARES Ana Bolena",
          url: "https://maps.app.goo.gl/KqsuzUAZLsNBBU6K7",
        },
        {
          alcaldia: "Del Mar",
          url: "https://maps.app.goo.gl/JSE8nwqGbHf7hBv68",
        },
      ],
    },
    {
      title: "Venustiano Carranza",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1yJS8ylTeFs_h-AIe7K4RG4dLXXj5Wzo&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES Candelaria",
          url: "https://maps.app.goo.gl/HM4eMth7weetM5X9A",
        },
        {
          alcaldia: "TAPO",
          url: "https://maps.app.goo.gl/Sbn6JDancZimecdL6",
        },

        {
          alcaldia: "CENTRAM Pantitlán",
          url: "https://maps.app.goo.gl/Sbn6JDancZimecdL6",
        },
        {
          alcaldia: "Casa de cultura Enrique",
          url: "https://maps.app.goo.gl/Sbn6JDancZimecdL6",
        },
        {
          alcaldia: "Arenal",
          url: "https://maps.app.goo.gl/Sbn6JDancZimecdL6",
        },
      ],
    },

    {
      title: "Xochimilco",

      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=19J4WWcFAKKUoKRAwA5MC_6Nl4y29PUo&ehbc=2E312F"
          className="  md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "PILARES San Luis Tlaxialte",
          url: "https://maps.app.goo.gl/cc5DzfS5bnXHnneM6",
        },
        {
          alcaldia: "PILARES muyuguarda",
          url: "https://maps.app.goo.gl/jUQ8fgfUi3unTXhH8",
        },
        {
          alcaldia: "PILARES modulo de bienestar",
          url: "https://maps.app.goo.gl/jUQ8fgfUi3unTXhH8",
        },

        {
          alcaldia: "Xochimilco",
          url: "https://maps.app.goo.gl/jUQ8fgfUi3unTXhH8",
        },
      ],
    },
  ];

  return (
    <div>
      <PagSec Enlaces={cards}>
        <div className="mx-auto mb-32 w-full grid grid-cols-1 gap-2 row-span-1">
          <div className="mx-auto mt-2 mb-4 w-full max-w-full md:max-w-[1140px]">
            <h1 className="text-[38px] font-medium uppercase font-sans text-[#404041] mb-2 letras:text-4xl">
              Ubicación de oficinas de trámites y espacios de estudio
            </h1>
            <br />
            <h2 className="text-2xl font-medium text-slate-700 mb-2 letras:text-3xl">
              Coordinaciones de zona
            </h2>
            <div className="flex items-center mb-2">
              <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
            <div className="px-4 pt-4 pb-2 text-lg text-gray-700">
              <strong>
                Ubica tu coordinación de zona dependiendo de tu delegación
              </strong>
              <p>
                Las coordinaciones de zona son unidades geográficas responsables
                de promover, organizar y diagnosticar los servicios de educación
                para jóvenes y adultos no escolarizados. Dentro de las
                coordinaciones de zona podrás realizar tus trámites.
              </p>
            </div>
          </div>

          <div className="hidden md:w-full flex-col md:flex">
            <SkewedPages datos={pageData} />
          </div>
          <div className="md:hidden w-full ">
            <SkewedPagesResponsive datos={pageData} />
          </div>
        </div>
        <div className="row-span-1">
          <div className="mx-auto mt-2 mb-4 w-full max-w-full md:max-w-[1140px]">
            <h2 className="text-2xl font-medium text-slate-700 mb-2 letras:text-3xl">
              Plazas comunitarias
            </h2>
            <div className="flex items-center mb-2">
              <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
            <br />
            <div className="px-4 pt-4 pb-2 text-lg text-gray-700">
              <strong>
                Ubica tu plaza comunitaria dependiendo de tu delegación.
              </strong>
              <p>
                Las Plazas Comunitarias INEA son espacios educativos abiertos a
                la comunidad, donde personas de diferentes edades y niveles de
                educación pueden acudir para aprender a leer, escribir, terminar
                su educación primaria y secundaria, completar su bachillerato o
                tomar cursos de capacitación para la vida y el trabajo.
              </p>
            </div>
          </div>
          <div className="hidden md:w-full flex-col md:flex">
            {/* <SkewedPages
              datos={pageData}
              id="animation"
            /> */}
            <Plazas datos={plazasData}></Plazas>
          </div>
          <div className="md:hidden w-full ">
            <SkewedPagesResponsive datos={pageData} />
          </div>
        </div>
      </PagSec>
    </div>
  );
}

export default Ubicacion;
