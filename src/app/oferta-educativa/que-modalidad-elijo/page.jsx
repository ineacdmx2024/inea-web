import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/EnlacesR_Lateral";
import CollapsiblePanel from "@/components/PanelColapsable";
import "../../../../src/app/globals.css";

function Modalidad() {
  return (
    <div className="min-h-screen bg-gray-100 grid p-1">
      {" "}
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

        {/* Carrusel de Cards (visible en pantallas pequeñas) */}
        <div
          className="md:hidden flex justify-center w-full py-4 col-span-1"
          id="carousel-cards"
        >
          <div
            className="flex items-center"
            id="enlaces"
          >
            <div className="flex space-x-4 overflow-x-auto w-full px-4">
              <Card
                title="Explorando Las Estrellas"
                imageSrc="https://imgs.search.brave.com/RAPyqA9Q7HK7hP22bJsUZyXxmMTP1JhhZXpVMjgfr8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXN0cm9taWEuY29t/L3VuaXZlcnNvL2Zv/dG9zL2xhc2VzdHJl/bGxhcy5qcGc"
                buttonText="Ir al sitio"
                link="https://www.astromia.com/universo/lasestrellas.htm"
              />{" "}
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

        {/* Contenido principal en pantallas medianas y grandes */}
        <div
          className="col-span-1 md:col-span-8 md:col-start-2 p-8 ml-auto bg-white content-start justify-end"
          id="contenido-principal"
        >
          {" "}
          <div className="mx-auto w-full">
            <h1 className="text-3xl font-medium text-slate-600 mb-2 letras:text-4xl ">
              ¿Qué opción del INEA me conviene para certificar mi Primaria y/o
              Secundaria?
            </h1>
            <div className="flex items-center">
              <div className="w-12 h-2 bg-[#af8900] mt-1"></div>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
            <br />
            <CollapsiblePanel
              title="¿Quieres estudiar primaria o secundaria con materiales impresos en un lugar fijo o conoces a alguien que quiera aprender a leer y escribir?"
              content={
                <div>
                  <p className="font-semibold">
                    Te conviene el Programa Regular Presencial (Modelo de
                    Educación para la Vida - MEV AprendeINEA)
                  </p>
                  <p className="mt-2">
                    <strong>Descripción:</strong> Opción educativa presencial y
                    gratuita diseñada para personas de 15 años o más con tiempo
                    para dedicar al estudio que buscan alfabetizarse u obtener
                    el certificado de Primaria o Secundaria.
                  </p>
                  <p className="mt-2">
                    <strong>Objetivo:</strong> Brindar una alternativa educativa
                    accesible y de calidad para aquellos que nunca han asistido
                    a la escuela o no han concluido sus estudios.
                  </p>
                  <p className="mt-2">
                    <strong>Modalidad de atención:</strong> Presencial (en una
                    de las 120 Plazas Comunitarias del INEA en Ciudad de
                    México).
                  </p>
                  <p className="mt-2">
                    <strong>Material de estudio:</strong> Módulos impresos.
                  </p>
                  <p className="mt-2">
                    <strong>Estructura curricular:</strong> Cinco módulos
                    básicos y uno diversificado para Primaria; siete módulos
                    básicos y dos diversificados para Secundaria. Incluye áreas
                    como lectura, escritura, matemáticas, ciencias sociales y
                    naturales.
                  </p>
                  <p className="mt-2">
                    <strong>Tiempo estimado de conclusión:</strong> 3 a 6 meses
                    dedicando 4 horas por semana.
                  </p>
                  <p className="mt-2">
                    <strong>Requisitos:</strong> Tener 15 años o más...
                  </p>
                </div>
              }
            />
            <CollapsiblePanel
              title="¿Cuentas con antecedentes escolares y deseas realizar solo un examen por nivel? "
              content={
                <div>
                  <p className="font-semibold">
                    Te conviene el Examen de Reconocimiento de Saberes (Examen
                    Único)
                  </p>
                  <p className="mt-2">
                    <strong>Descripción:</strong> Examen único para evaluar y
                    certificar los conocimientos y habilidades adquiridos por
                    personas de 15 años o más a lo largo de su vida.
                  </p>
                  <p className="mt-2">
                    <strong>Objetivo:</strong> Ofrecer una oportunidad rápida y
                    gratuita para obtener el certificado de Primaria o
                    Secundaria sin necesidad de cursar un programa educativo
                    completo.
                  </p>
                  <p className="mt-2">
                    <strong>Modalidad de atención:</strong>Presencial (una única
                    vez para aplicación del examen). El estudio es autodidacta,
                    con opción de asesorías presenciales o en línea.
                  </p>
                  <p className="mt-2">
                    <strong>Material de estudio:</strong> Guía impresa de
                    preparación para el Examen Único.
                  </p>
                  <p className="mt-2">
                    <strong>Estructura curricular:</strong> Examen con 70
                    preguntas que evalúan áreas como lectura, escritura,
                    matemáticas, ciencias sociales y naturales con diferentes
                    niveles de profundidad según el nivel educativo.
                  </p>
                  <p className="mt-2">
                    <strong>Tiempo estimado de conclusión:</strong> Inmediato
                  </p>
                  <p className="mt-2">
                    <strong>Requisitos:</strong> Tener 15 años o más...
                  </p>
                </div>
              }
            />
            <CollapsiblePanel
              title="¿Deseas estudiar con el uso de dispositivos móviles o computadora desde casa?  "
              content={
                <div>
                  <p className="font-semibold">
                    Te conviene estudiar en AprendeINEA en Línea{" "}
                  </p>
                  <p className="mt-2">
                    <strong>Descripción:</strong>Plataforma educativa en línea
                    diseñada para que los adultos de 15 años o más completen su
                    educación Primaria o Secundaria en línea.
                  </p>
                  <p className="mt-2">
                    <strong>Objetivo:</strong>Proporcionar una vía flexible,
                    conveniente y gratuita para obtener el certificado de
                    Primaria o Secundaria.
                  </p>
                  <p className="mt-2">
                    <strong>Modalidad de atención:</strong>En línea.
                  </p>
                  <p className="mt-2">
                    <strong>Material de estudio:</strong>Materiales digitales
                    disponibles en la plataforma en línea (es necesario contar
                    con teléfono o computadora con acceso a internet).
                  </p>
                  <p className="mt-2">
                    <strong>Estructura curricular:</strong>Un propedéutico y 5
                    módulos para Primaria y un propedéutico y 7 módulos para
                    Secundaria.
                  </p>
                  <p className="mt-2">
                    <strong>Tiempo estimado de conclusión:</strong> 2 a 3
                    semanas por módulo.
                  </p>
                  <p className="mt-2">
                    <strong>Requisitos:</strong> Tener 15 años o más...
                  </p>
                </div>
              }
            />

            <CollapsiblePanel
              title="¿Tienes antecedentes escolares que deseas sean considerados al realizar solo exámenes para concluir tus estudios? "
              content={
                <div>
                  <p className="font-semibold">
                    Te convienen los Exámenes Diagnóstico{" "}
                  </p>
                  <p className="mt-2">
                    <strong>Descripción:</strong>Modalidad para evaluar y
                    certificar conocimientos de personas de 15 años o más,
                    permitiendo acreditar Primaria o Secundaria a través de
                    exámenes divididos en dos módulos, reconociendo
                    progresivamente lo aprendido.
                  </p>
                  <p className="mt-2">
                    <strong>Objetivo:</strong>Certificar conocimientos
                    adquiridos y, si es necesario, ofrecer retroalimentación y
                    orientación en los módulos de estudio requeridos para
                    obtener el certificado de Primario y/o Secundaria.
                  </p>
                  <p className="mt-2">
                    <strong>Modalidad de atención:</strong>Sesiones de estudio
                    presencial y asesoría opcional.
                  </p>
                  <p className="mt-2">
                    <strong>Material de estudio:</strong>Guías de Aprendizaje
                    impresas, organizadas en unidades de aprendizaje.
                  </p>
                  <p className="mt-2">
                    <strong>Estructura curricular:</strong>Dos unidades de
                    aprendizaje que abarcan lengua y comunicación, pensamiento
                    matemático, y vida y comunidad.
                  </p>
                  <p className="mt-2">
                    <strong>Tiempo estimado de conclusión:</strong>2 a 3 meses
                    dedicando 2 horas por semana.
                  </p>
                  <p className="mt-2">
                    <strong>Requisitos:</strong> Tener 15 años o más.
                  </p>
                </div>
              }
            />
          </div>
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

export default Modalidad;
