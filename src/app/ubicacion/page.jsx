// "use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/EnlacesR_Lateral";
import CarouselEL from "@/components/CarouselEL";
import SkewedPages from "@/components/SkewedPages";
import SkewedPagesResponsive from "@/components/SkewedPagesResponsive";
// import "../../../../src/app/globals.css";
import "../../app/globals.css";
function Ubicacion() {
  // const [currentPage, setCurrentPage] = useState(1);

  const cards = [
    {
      title: "Explorando Las Estrellas 1",
      imageSrc:
        "https://imgs.search.brave.com/RAPyqA9Q7HK7hP22bJsUZyXxmMTP1JhhZXpVMjgfr8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXN0cm9taWEuY29t/L3VuaXZlcnNvL2Zv/dG9zL2xhc2VzdHJl/bGxhcy5qcGc",
      buttonText: "Ir al sitio",
      link: "https://www.astromia.com/universo/lasestrellas.htm",
    },
    {
      title: "La Vida en el Espacio 2",
      imageSrc:
        "https://imgs.search.brave.com/RAPyqA9Q7HK7hP22bJsUZyXxmMTP1JhhZXpVMjgfr8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXN0cm9taWEuY29t/L3VuaXZlcnNvL2Zv/dG9zL2xhc2VzdHJl/bGxhcy5qcGc",
      buttonText: "Ir al sitio",
      link: "https://www.astromia.com/universo/lavidaenelpacio.htm",
    },
    {
      title: "La Vida en el Espacio 3",
      imageSrc:
        "https://imgs.search.brave.com/RAPyqA9Q7HK7hP22bJsUZyXxmMTP1JhhZXpVMjgfr8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXN0cm9taWEuY29t/L3VuaXZlcnNvL2Zv/dG9zL2xhc2VzdHJl/bGxhcy5qcGc",
      buttonText: "Ir al sitio",
      link: "https://www.astromia.com/universo/lavidaenelpacio.htm",
    },
    {
      title: "La Vida en el Espacio 4",
      imageSrc:
        "https://imgs.search.brave.com/RAPyqA9Q7HK7hP22bJsUZyXxmMTP1JhhZXpVMjgfr8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXN0cm9taWEuY29t/L3VuaXZlcnNvL2Zv/dG9zL2xhc2VzdHJl/bGxhcy5qcGc",
      buttonText: "Ir al sitio",
      link: "https://www.astromia.com/universo/lavidaenelpacio.htm",
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
        },
        {
          alcaldia: "MILPA ALTA",
          dir: "Av. Chiapas # 2, Col. Barrio de Santa Martha, Alcaldía Milpa Alta, CP 12000,CDMX",
          atel: "55 5844 4886",
          aemail: "czmilpaalta@inea.gob.mX",
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
        },
        {
          alcaldia: "CUAJIMALPA",
          dir: "Av. Luis Castillo Ledón # 17, Col. Cuajimalpa, Alcaldía Cuajimalpa, CP 05000, CDMX",
          atel: "55 58 12 35 91",
          aemail: "czcuajimalpa@inea.gob.mx",
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
        },
        {
          alcaldia: "ÁLVARO OBREGÓN SUR",
          dir: "Av. Barranca del Muerto # 482, Col. Los Alpes, Alcaldía Álvaro Obregón, CP 01010, CDMX ",
          atel: " 55 55 50 65 33",
          aemail: "czobregons@inea.gob.mx",
        },
        {
          alcaldia: "MAGDALENA CONTRERAS",
          dir: "Av. México # 985, Col. Héroes de Padierna,  Alcaldía Magdalena Contreras, CP 10700, CDMX",
          atel: "55 56 52 72 87",
          aemail: "czmcontreras@inea.gob.mx",
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
        },
        {
          alcaldia: "GUSTAVO A. MADERO ORIENTE",
          dir: "Av. 5 de Febrero, Esq. Vicente Villada (dentro del edificio de la Alcaldía), Col. Aragón Villa, Alcaldía Gustavo A. Madero, CP 07050, CDMX",
          atel: "55 57 81 06 34",
          aemail: "czgamoriente@inea.gob.mx",
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
        },
        {
          alcaldia: "IZTACALCO",
          dir: "Coyuya # 10, Esq. Viaducto, Col. La Cruz, Alcaldía Iztacalco, CP 08310, CDMX",
          atel: "56 50 26 45 / 56 50 26 35 ",
          aemail: "cziztacalco@inea.gob.mx",
        },
        {
          alcaldia: "VENUSTIANO CARRANZA",
          dir: "Bacum, Esq. Río Bárcenas (a espaldas del Mercado Álvaro Obregón), Col. Magdalena Mixhuca, Alcaldía Venustiano Carranza, CP 15850, CDMX",
          atel: "55 55 52 41 75",
          aemail: "czvcarranza@inea.gob.mx",
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
          src="https://www.google.com/maps/d/embed?mid=1m7JWJM7KiLjTibY591u_2iTi0T01mTs&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "AZCAPOTZALCO",
          dir: "Calle 22 # 17, Col. Pro-Hogar, Alcaldía Azcapotzalco, CP 02600, CDMX.",
          atel: "55 53 56 30 38/55 53 68 19 13",
          aemail: "czazcapotzalco@inea.gob.mx",
        },
        {
          alcaldia: "CUAUHTÉMOC",
          dir: "Mosqueta # 154, Col. Guerrero, Alcaldía Cuauhtémoc, CP 06300, CDMX",
          atel: "55 55 66 70 22",
          aemail: "czcuauhtemoc@inea.gob.mx",
        },
        {
          alcaldia: "MIGUEL HIDALGO",
          dir: "Av. De los Alpes S/N, Esq. Monte Altaí, Col. Lomas de Chapultepec, Alcaldía Miguel Hidalgo, CP 11000, CDMX",
          atel: "55 52 02 65 15 / 55 52 49 35 00 EXT. 5022 / 5023",
          aemail: "czmhidalgo@inea.gob.mx",
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
        },
        {
          alcaldia: "IZTAPALAPA PONIENTE",
          dir: "Av. Ermita Iztapalapa # 1029, Col. Barrio San Lucas, Alcaldía Iztapalapa, CP 09000, CDMX",
          atel: "55 26 36 13 88",
          aemail: "cziztapalapap@inea.gob.mx",
        },
        {
          alcaldia: "IZTAPALAPA ORIENTE",
          dir: "Lázaro Cárdenas S/N, Col. Ixtlahuacan, Alcaldía Iztapalapa, CP 09690, CDMX",
          atel: "55 26 35 61 42",
          aemail: "ziztapalapao@inea.gob.mx",
        },
      ],
    },
  ];

  return (
    <div
      classname="min-h-screen bg-gray-100 grid p-1"
      id="main-content"
    >
      <br />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-4 ">
        {/* Migajas (Breadcrumb) */}
        <div
          className="col-span-1 md:col-span-10 md:col-start-2 bg-white shadow md:min-w-max"
          id="migajas"
        >
          <div className="mx-auto py-1 px-4 mt-3 sm:px-6 md:px-8">
            <Breadcrumb />
          </div>
        </div>

        {/* contenido princiapal  */}
        <div
          className="col-span-1 md:w-full md:col-span-8 md:col-start-2 md:row-start-2 pt-2 p-8  ml-auto bg-white content-start justify-end grid grid-cols-1"
          id="contenido-principal"
        >
          <div className="mx-auto w-full grid grid-cols-1">
            <div className="hidden md:w-full flex-col md:flex">
              <SkewedPages
                datos={pageData}
              />
            </div>
            <div className="md:hidden w-full ">
              <SkewedPagesResponsive
                datos={pageData}
                
              />
            </div>

          </div>
        </div>

        {/* Carrusel de Cards (visible en pantallas pequeñas) */}
        <div
          className="md:hidden flex justify-center w-full py-4 col-span-1"
          id="carousel-cards"
          data-carousel="slide"
        >
          <CarouselEL cards={cards} />
        </div>

        {/* Cards lateral en pantallas medianas y grandes */}
        <div
          className="hidden md:flex md:col-span-2 md:col-start-10 flex-col mr-auto"
          id="cards-laterales"
        >
          <div
            className="items-start"
            id="enlaces"
          >
            <Card
              title="Explorando Las Estrellas"
              imageSrc="https://imgs.search.brave.com/RAPyqA9Q7HK7hP22bJsUZyXxmMTP1JhhZXpVMjgfr8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXN0cm9taWEuY29t/L3VuaXZlcnNvL2Zv/dG9zL2xhc2VzdHJl/bGxhcy5qcGc"
              buttonText="Ir al sitio"
              link="https://www.astromia.com/universo/lasestrellas.htm"
            />
            <Card
              title="El Arte Del Minimalismo 1"
              imageSrc="https://imgs.search.brave.com/2dxg5TJM1uHv9oVLCBw3j3GcOQgbjLXLW4lRK4VoTG0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbGJs/b2dkZWxtaW5pbWFs/aXN0YS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMTEv/Y3VhZHJvLW1vbmRy/aWFuLWFydGUtbWlu/aW1hbGlzdGEtODA0/eDEwMjQuanBn"
              buttonText="Ir al sitio"
              link="https://elblogdelminimalista.com/minimalismo/arte-minimalista-movimiento/"
            />
            <Card
              title="El Arte Del Minimalismo 2"
              imageSrc="https://imgs.search.brave.com/2dxg5TJM1uHv9oVLCBw3j3GcOQgbjLXLW4lRK4VoTG0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbGJs/b2dkZWxtaW5pbWFs/aXN0YS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMTEv/Y3VhZHJvLW1vbmRy/aWFuLWFydGUtbWlu/aW1hbGlzdGEtODA0/eDEwMjQuanBn"
              buttonText="Ir al sitio"
              link="https://elblogdelminimalista.com/minimalismo/arte-minimalista-movimiento/"
            />
            <Card
              title="El Arte Del Minimalismo 3"
              imageSrc="https://imgs.search.brave.com/2dxg5TJM1uHv9oVLCBw3j3GcOQgbjLXLW4lRK4VoTG0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbGJs/b2dkZWxtaW5pbWFs/aXN0YS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMTEv/Y3VhZHJvLW1vbmRy/aWFuLWFydGUtbWlu/aW1hbGlzdGEtODA0/eDEwMjQuanBn"
              buttonText="Ir al sitio"
              link="https://elblogdelminimalista.com/minimalismo/arte-minimalista-movimiento/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ubicacion;
