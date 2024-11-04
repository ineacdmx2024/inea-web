// "use client";
import React from "react";
import SkewedPages from "@/components/SkewedPages";
import SkewedPagesResponsive from "@/components/SkewedPagesResponsive";
import PagSec from "@/components/PlantillaPagSec";
import Plazas from "@/components/Plazas";
// import "../../../../src/app/globals.css";
import "../../app/globals.css";
import { dir } from "console";
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
          src="https://www.google.com/maps/d/u/1/embed?mid=1GLZ_yu1v0d_ReD9eQTP9S5z5XfOS77M&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "El Cuernito Centro Comunitario",
          dir: "Av. Chicago, S/N, Reacomodo El Cuernito, Álvaro Obregón, C.P. 01289",
          atel: "55 56152857",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "DIF Jalapa El Grande",
          dir: "Peral, S/N, Jalalpa El Grande, Álvaro Obregón, C.P. 01296",
          atel: "55 25917247",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "La Era",
          dir: "Av. 29 de Octubre, S/N, Lomas de La Era, Álvaro Obregón, C.P. 01860",
          atel: "55 26502684",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Árbol del conocimiento",
          dir: "Luis G. Urbina, S/N, Lomas de Becerra, Álvaro Obregón, C.P. 01279",
          atel: "",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Barrio Norte",
          dir: "Cerrada Allende, S/N, Barrio Norte, Álvaro Obregón, C.P. 01410",
          atel: "",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Isidro Febela",
          dir: "Antigua Vía La Venta, S/N, Isidro Fabela, Álvaro Obregón, C.P. 01160 ",
          atel: "",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES La Araña",
          dir: "Prolongación Río Mixcoac, S/N, La Araña, Álvaro Obregón, C.P. 01510 ",
          atel: "",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Olivar del Conde",
          dir: "20, S/N, Olivar del Conde 1a Sección, Álvaro Obregón, C.P. 01400 ",
          atel: "",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Rio San Borja",
          dir: "Río San Borja, S/N, Olivar del Conde 2a Sección, Álvaro Obregón, C.P. 01408 ",
          atel: "",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
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
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "El Rosario",
          dir: "Av. de las Culturas, S/N, Unidad Habitacional El Rosario, Azcapotzalco, C.P. 02100 ",
          atel: "55 26375579",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Coltongo",
          dir: "Bahía Magdalena, S/N, Coltongo, Azcapotzalco, C.P. 02630 ",
          atel: "",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES Margarita Maza de Juárez",
          dir: "Amuzgos, S/N, Tezozómoc, Azcapotzalco, C.P. 02459",
          atel: "",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES San Miguel Amantla",
          dir: "Morelos, 163, San Miguel Amantla, Azcapotzalco, C.P. 02700 ",
          atel: "",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "PILARES XALLI",
          dir: "Aretillo, 184, Arenal, Azcapotzalco, C.P. 02980",
          atel: "",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
        },
        {
          alcaldia: "San Antonio",
          dir: "Campo Maluco, S/N, San Antonio, Azcapotzalco, C.P. 02720",
          atel: "",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
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
          url: "https://maps.app.goo.gl/SCxmZRsNCUyJj4MJA",
          dir: "Extremadura, 26, Insurgentes Extremadura, Benito Juárez, C.P. 03740",
          atel: "55 25941842",
        },
        {
          alcaldia: "Centro de desarrollo Social 8 de Agosto",
          url: "https://maps.app.goo.gl/YVCdzbUGW1w17w2u5",
          dir: "Cerrada Becerra, S/N, 8 de Agosto, Benito Juárez, C.P. 03820",
          atel: "55 52762183",
        },
        {
          alcaldia: "Pilares 8 de Agosto",
          url: "https://maps.app.goo.gl/SCxmZRsNCUyJj4MJA",
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
          alcaldia: "DGOSE-UNAM",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "Insurgentes Sur, 3000, Ciudad Universitaria, Coyoacán, C.P. 04510 ",
          atel: "",
        },
        {
          alcaldia:
            'Centro de Desarrollo Comunitario "San Francisco Culhuacan"',
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "Eje 2 Oriente Escuela Naval Militar, 3, San Francisco Culhuacán, Coyoacán, C.P. 04260",
          atel: "55 56072333",
        },
        {
          alcaldia: "C.D.C. Cuauhtemoc",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "Papalotl, S/N, Santo Domingo, Coyoacán, C.P. 04369",
          atel: "55 15177440",
        },
        {
          alcaldia: "2 de Octubre 1968",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "Avenida Panamericana, 59-A, Villa Panamericana, Coyoacán, C.P. 04700",
          atel: "55 56664778",
        },
        {
          alcaldia: "PILARES Santa Úrsula",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "San Isauro, Mz. 940, Santa Úrsula Coapa, Coyoacán, C.P. 04600",
          atel: "",
        },
        {
          alcaldia: "PILARES Topiltzin",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
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
          alcaldia: "Centro de desarrollo Chimalpa",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "Porfirio Díaz, S/N, San Pablo Chimalpa, Cuajimalpa de Morelos, C.P. 5050",
          atel: "55 / 81643263",
        },
        {
          alcaldia: "Iglesia de San Mateo",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "S/N, San Mateo Tlaltenango, Cuajimalpa de Morelos, C.P. 3560",
          atel: "55 / 81647867",
        },
        {
          alcaldia: "Contadero",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "Avenida 16 de Septiembre, S/N, Contadero, Cuajimalpa de Morelos, C.P. 5500",
          atel: "55 / 21634452",
        },
        {
          alcaldia: "PILARES Lic. Benito Juárez García (Chamixto)",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "Leandro Valle, 75, San Lorenzo Acopilco, Cuajimalpa de Morelos, C.P. 5410",
          atel: "55 / 58110518",
        },
        {
          alcaldia: "PILARES Cuajimalpa",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "Avenida de las Torres 1, Lt. 60, Loma del Padre, Cuajimalpa de Morelos, C.P. 5020",
          atel: "",
        },
        {
          alcaldia: "PILARES Zentlapalt",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "Guillermo Prieto, S/N, Cuajimalpa, Cuajimalpa de Morelos, C.P. 5000",
          atel: "",
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
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "San Pablo, 31, Centro, Cuauhtémoc, C.P. 6020",
          atel: "55 / 54911129",
        },
        {
          alcaldia: "David Alfaro Siqueiros",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "Fernando de Alva Ixtlilxóchitl, 185, Tránsito, Cuauhtémoc, C.P. 6820",
          atel: "55 / 21242559",
        },
        {
          alcaldia: "Paulo Freire",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "Francisco Márquez, 160, Condesa, Cuauhtémoc, C.P. 6140",
          atel: "55 / 55535052",
        },
        {
          alcaldia: "Biblioteca Jesús Reyes Heroles",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "Francisco Ayala, 123, Asturias, Cuauhtémoc, C.P. 6850",
          atel: "55 / 57418381",
        },
        {
          alcaldia: "PILARES Boleo",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "Ferrocarril Hidalgo, S/N, Valle Gómez, Cuauhtémoc, C.P. 6240",
          atel: "",
        },
        {
          alcaldia: "PILARES Frida Kahlo",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "Central Lázaro Cárdenas, S/N, Obrera, Cuauhtémoc, C.P. 6800",
          atel: "",
        },
        {
          alcaldia: "PILARES Parque Abasolo",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "Eje 1 Poniente Guerrero, S/N, Buenavista, Cuauhtémoc, C.P. 6350",
          atel: "",
        },
        {
          alcaldia: "PILARES Perú 88",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "República de Perú, 88, Centro, Cuauhtémoc, C.P. 6010",
          atel: "",
        },
        {
          alcaldia: "PILARES La Equidad",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "Jesús Carranza, 15, Morelos, Cuauhtémoc, C.P. 6200",
          atel: "",
        },
        {
          alcaldia: "CROC Donceles 28 ",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
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
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "CSS IMSS Tepeyac",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "CECEM Cuautepec",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES 100 metros",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Benemerito de las Américas",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Cuchilla del tesoro",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Girasol",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Magdalena de la salinas",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Nueva Atzacoalco",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Revolución",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES 'Richard Wagner'",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Tlalpexco",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES San Felipe II",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Aragon VII",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Vasco de Quiroga",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "Aquiles Serdán",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
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
          url: "https://maps.app.goo.gl/ba9BXgUnybZy12Az7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES TECMA",
          url: "https://maps.app.goo.gl/ba9BXgUnybZy12Az7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Rojo Gómez",
          url: "https://maps.app.goo.gl/ba9BXgUnybZy12Az7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "Plaza comunitaria Fortaleza",
          url: "https://maps.app.goo.gl/ba9BXgUnybZy12Az7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Paquita Calvo Zapata",
          url: "https://maps.app.goo.gl/ba9BXgUnybZy12Az7",
          dir: "",
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
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: 'PILARES "Tetecón"',
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: 'PILARES "Villa Cid"',
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: 'PILARES "Valle de Luces"',
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Tepalcates",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: 'PILARES Comunitario "Paraje San Juan Joya"',
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES San Andrés Tetepilco",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Republica federal",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Palmitas",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Lomas de la Estancia",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: 'PILARES "Cerro Azul"',
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Calmécac Miravalle",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Bambú",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "CONALEP Iztapalapa V",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "Santa Catarina",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "Atlalilco",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Guelatao",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "Vicente Guerrero",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
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
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Huayatla",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "Escuela de oficios La Malinche",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
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
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Pensil",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Casa Amarilla",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "Faro del Saber Legaria",
          url: "https://maps.app.goo.gl/SFti4F691teCAEnc7",
          dir: "",
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
          url: "https://maps.app.goo.gl/qm4NSfteMpjrpFDZA",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Miacatlán",
          url: "https://maps.app.goo.gl/AFuMTMiLeQ5ceMB47",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "Temachtilcalco",
          url: "https://maps.app.goo.gl/D9zKDShpbBGSkwCr9",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "C.C. San José-Villa Milpa Alta",
          url: "https://maps.app.goo.gl/JSE8nwqGbHf7hBv68",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "San Pablo Oztotepec",
          url: "https://maps.app.goo.gl/JSE8nwqGbHf7hBv68",
          dir: "",
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
          url: "https://maps.app.goo.gl/JSE8nwqGbHf7hBv68",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES García Lorca",
          url: "https://maps.app.goo.gl/EsEhgiroM27usZQz6",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Ana Bolena",
          url: "https://maps.app.goo.gl/KqsuzUAZLsNBBU6K7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "Del Mar",
          url: "https://maps.app.goo.gl/JSE8nwqGbHf7hBv68",
          dir: "",
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
          url: "https://maps.app.goo.gl/AHcxE3qhmyRFPb839",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Chicosaén",
          url: "https://maps.app.goo.gl/H2T4d2b4frJ65rTu7",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Bosques",
          url: "https://maps.app.goo.gl/UTa8tyL126a9ua169",
          dir: "",
          atel: "",
        },

        {
          alcaldia: "Iztapapalotl",
          url: "https://maps.app.goo.gl/UTa8tyL126a9ua169",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "San Pedro Mártir",
          url: "https://maps.app.goo.gl/UTa8tyL126a9ua169",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "Magdalena Petlacalco",
          url: "https://maps.app.goo.gl/UTa8tyL126a9ua169",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES Belvedere",
          url: "https://maps.app.goo.gl/UTa8tyL126a9ua169",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "Centro comunitario Carrasco",
          url: "https://maps.app.goo.gl/UTa8tyL126a9ua169",
          dir: "",
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
          url: "https://maps.app.goo.gl/HM4eMth7weetM5X9A",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "TAPO",
          url: "https://maps.app.goo.gl/Sbn6JDancZimecdL6",
          dir: "",
          atel: "",
        },

        {
          alcaldia: "CENTRAM Pantitlán",
          url: "https://maps.app.goo.gl/Sbn6JDancZimecdL6",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "Casa de cultura Enrique Ramírez y Ramírez",
          url: "https://maps.app.goo.gl/Sbn6JDancZimecdL6",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "Arenal",
          url: "https://maps.app.goo.gl/Sbn6JDancZimecdL6",
          dir: "",
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
          url: "https://maps.app.goo.gl/cc5DzfS5bnXHnneM6",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES muyuguarda",
          url: "https://maps.app.goo.gl/jUQ8fgfUi3unTXhH8",
          dir: "",
          atel: "",
        },
        {
          alcaldia: "PILARES modulo de bienestar social Ahualapa",
          url: "https://maps.app.goo.gl/jUQ8fgfUi3unTXhH8",
          dir: "",
          atel: "",
        },

        {
          alcaldia: "Xochimilco",
          url: "https://maps.app.goo.gl/jUQ8fgfUi3unTXhH8",
          dir: "",
          atel: "",
        },
      ],
    },
  ];

  return (
    <div>
      <PagSec
        Enlaces={cards}
        Titulo={"Ubicación de oficinas de trámites y espacios de estudio"}
      >
        <div className="mx-auto mb-32 w-full grid grid-cols-1 gap-2 row-span-1">
          <div className="mx-auto mt-2 mb-4 w-full max-w-full md:max-w-[1140px]">
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
            {/* <SkewedPages datos={pageData} /> */}
            <SkewedPagesResponsive datos={pageData} />
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
          <div className="w-full flex-col">
            <Plazas datos={plazasData}></Plazas>
          </div>
        </div>
      </PagSec>
    </div>
  );
}

export default Ubicacion;
