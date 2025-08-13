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

function Glosario() {
  //enlaces laterales
  const [enlacesL, setenlacesL] = useState([]);
  const [selectedConcepto, setSelectedConcepto] = useState(null);
  const [filtroLetra, setFiltroLetra] = useState('TODOS');

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

  const conceptos = [
    {
      "concepto": "Alfabetización",
      "significado": "Es un proceso a través del cual las personas educandas desarrollan y fortalecen las habilidades y conocimientos básicos de lectoescritura y operaciones matemáticas básicas en dos vertientes."
    },
    {
      "concepto": "APRENDEINEA",
      "significado": "APRENDEINEA es una plataforma en línea gratuita que permite a personas de 15 años o más completar su educación Primaria o Secundaria a su ritmo, mediante módulos digitales, actividades y evaluaciones. Ofrece materiales electrónicos, asesoría opcional y la posibilidad de mejorar calificaciones, facilitando la obtención del certificado oficial en un tiempo aproximado de 3 a 6 meses con dedicación semanal."
    },
    {
      "concepto": "Asesor Educativo",
      "significado": "Su función es motivar a las y los educandos, facilitar el aprendizaje, promover las actividades educativas, y coordinar el círculo de estudio. También participa en los programas de formación y actualización pedagógica."
    },
    {
      "concepto": "Asesoría educativa",
      "significado": "Proceso de acompañamiento para facilitar el aprendizaje de las personas educandas, desde que se incorporan hasta que completan sus estudios de alfabetización, primaria o secundaria, mediante el diálogo, la reflexión y la retroalimentación durante su proceso educativo. Este servicio se proporciona a través de los IEEA, UO del INEA y Plaza Comunitarias en el exterior."
    },
    {
      "concepto": "Certificación",
      "significado": "Proceso mediante el cual se otorga reconocimiento oficial a la acreditación y conclusión de los estudios realizados por las personas educandas en los niveles de primaria y secundaria, conforme al esquema curricular vigente."
    },
    {
      "concepto": "Certificado de estudios",
      "significado": "Documento oficial válido en los Estados Unidos Mexicanos que no requiere trámites adicionales de legalización, diseñado por la Dirección General de Acreditación, Incorporación y Revalidación de la SEP y que el INEA expiden a personas educandas que concluyeron satisfactoriamente los estudios correspondientes en primaria o secundaria conforme al esquema curricular vigente."
    },
    {
      "concepto": "Círculos de Estudio",
      "significado": "Un círculo de estudio es la unidad operativa básica, conformada por un grupo de educandos que se reúnen en un lugar y horario convenido con el propósito de estudiar, resolver dudas, intercambiar y aportar experiencias, siendo atendidos por uno o varios asesores/as."
    },
    {
      "concepto": "CONAFE",
      "significado": "El Consejo Nacional de Fomento Educativo (CONAFE) es una institución encargada de llevar educación de calidad a niños y jóvenes de comunidades rurales y marginadas, contribuyendo a la igualdad de oportunidades y al desarrollo de estas regiones."
    },
    {
      "concepto": "CONFINTEA",
      "significado": "La Conferencia Internacional sobre Educación de Adultos regula el reconocimiento y la protección de los derechos lingüísticos, esto es, aquellos que garantizan el uso de las lenguas indígenas originarias."
    },
    {
      "concepto": "Constancia de alfabetización",
      "significado": "Documento expedido por el INEA en el cual se reconoce que la persona educanda se encuentra alfabetizada de conformidad con el esquema curricular vigente."
    },
    {
      "concepto": "Coordinación de Zona",
      "significado": "Es una unidad operativa del INEA encargada de promover, organizar y supervisar los servicios educativos para jóvenes y adultos no escolarizados en una región determinada. Administra recursos materiales y humanos, coordina la ejecución de programas para reducir el analfabetismo y el rezago educativo, recopila información sobre necesidades locales y fomenta la colaboración con distintos sectores. También es el espacio donde se realizan trámites relacionados con estos servicios."
    },
    {
      "concepto": "Credencial de Persona Educanda",
      "significado": "Documento de identificación interna que expiden los IEEA o UO del INEA a las personas educandas que se inscriben a los servicios educativos."
    },
    {
      "concepto": "CURP",
      "significado": "La Clave Única de Registro de Población, es un instrumento que sirve para registrar en forma individual a todos los habitantes de México, nacionales y extranjeros, así como a las mexicanas y mexicanos que radican en otros países."
    },
    {
      "concepto": "Educación Básica",
      "significado": "Conjunto de conocimientos y competencias fundamentales que toda persona debe adquirir para mejorar su calidad de vida y participar plenamente en la sociedad. Comprende los niveles de alfabetización, primaria y secundaria, y está dirigida a personas jóvenes y adultas que no han concluido estos estudios en el sistema escolarizado tradicional."
    },
    {
      "concepto": "Educación para personas Adultas",
      "significado": "Considerada una educación a lo largo de la vida y está destinada a la población de quince años o más que no haya cursado o concluido su educación primaria y secundaria. Se presta a través de servicios de alfabetización, educación primaria y secundaria, así como de formación para el trabajo, con las particularidades adecuadas a dicha población. Esta educación se apoyará en la participación y la solidaridad social de conformidad con lo establecido en el artículo 70 de la Ley General de Educación."
    },
    {
      "concepto": "Educando",
      "significado": "Es aquella persona de 15 años o más que se encuentra en rezago educativo y que accede a los servicios que brinda el INEA en alfabetización, primaria y secundaria, a través de los IEEA."
    },
    {
      "concepto": "Ejercicio Diagnóstico",
      "significado": "Instrumento que aplican los IEEA o UO del INEA a las personas interesadas en recibir los servicios educativos de alfabetización para detectar los saberes y conocimientos que poseen sobre lectoescritura y operaciones matemáticas básicas para poder delinear su ruta de aprendizaje."
    },
    {
      "concepto": "Evaluación Diagnóstica",
      "significado": "Proceso de reconocimiento de las habilidades y conocimientos que ha adquirido una persona a lo largo de la vida, con la finalidad de ubicarlo en el nivel educativo que le corresponde y/o acreditar y certificar su primaria o secundaria; se realiza a través de la presentación de exámenes diagnósticos y/o la aplicación de la tabla de equivalencias entre el esquema curricular del INEA y las boletas de grado del sistema escolarizado que la persona educanda presente."
    },
    {
      "concepto": "Evaluación Final",
      "significado": "Permite reconocer si las personas educandas han alcanzado los propósitos educativos correspondientes al estudio de un módulo del esquema curricular vigente; se realiza a través de la presentación de un examen final y la persona educanda podrá mejorar su calificación final presentando las evidencias del proceso educativo correspondiente."
    },
    {
      "concepto": "Examen Único",
      "significado": "Opción de acreditación de los niveles de primaria o secundaria mediante la presentación de un examen general de conocimientos. Las personas educandas podrán mejorar su calificación final presentando antecedentes educativos del INEA, del sistema escolarizado, o constancias de cursos o talleres de capacitación de acuerdo a los criterios establecidos en la normatividad vigente. (ver también PEC)."
    },
    {
      "concepto": "Exámenes Diagnóstico",
      "significado": "Los Exámenes diagnóstico son evaluaciones que permiten identificar el nivel de conocimientos y habilidades en distintas áreas educativas. Su finalidad es certificar a quienes aprueban las materias que conforman el examen, otorgándoles un certificado oficial. En caso de no acreditar alguna materia, el examen diagnóstico también orienta sobre las áreas que se deben reforzar para completar el nivel educativo correspondiente."
    },
    {
      "concepto": "Figura Solidaria",
      "significado": "Persona que voluntariamente apoya las tareas de incorporación de adultos, atención educativa, procesos de formación y gestión educativa, acreditación y de certificación de las/los educandos/as."
    },
    {
      "concepto": "Formación",
      "significado": "Proceso mediante el cual se imparten conocimientos, habilidades y capacidades al personal institucional, personas voluntarias y personas voluntarias beneficiarias del subsidio que participan en la prestación de los servicios educativos para mejorar de su práctica educativa."
    },
    {
      "concepto": "Grupos en situación de vulnerabilidad",
      "significado": "Son aquellos grupos de la población que por diferentes factores o la combinación de ellos, enfrentan situaciones de riesgo o discriminación que les impiden alcanzar mejores niveles de vida, y requieren de la atención e inversión del Gobierno para lograr su bienestar. El INEA atiende a los siguientes: Niñas, niños y adolescentes de 10 a 14 años que no tengan concluida la primaria y por su condición y edad, geográfica, migratoria en la que están en condición de vulnerabilidad de carácter socioeconómico, físico, de identidad cultural, origen étnico o nacional (no son atendidos en el sistema regular), madres jóvenes o jóvenes embarazadas, jornaleros/as agrícolas migrantes y personas con discapacidad, entre otros."
    },
    {
      "concepto": "IME",
      "significado": "Instituto de los Mexicanos en el Exterior (IME) promover estrategias, integrar programas, recoger propuestas y recomendaciones de las comunidades, sus miembros, sus organizaciones y órganos consultivos, tendientes a elevar el nivel de vida de las comunidades mexicanas en el extranjero."
    },
    {
      "concepto": "INEA",
      "significado": "El Instituto Nacional para la Educación de los Adultos (INEA) propone y desarrolla modelos educativos, elabora y distribuye materiales didácticos, realiza investigaciones sobre educación para adultos y aplica sistemas de evaluación del aprendizaje. Además, acredita y certifica la educación básica de jóvenes y adultos de 15 años o más que no cursaron o concluyeron sus estudios, conforme al artículo 43 de la Ley General de Educación."
    },
    {
      "concepto": "Materiales educativos INEA",
      "significado": "Herramientas didácticas en las que se desarrollan actividades y contenidos orientados a la construcción de aprendizajes en alfabetización, primaria y secundaria para uso de las personas educandas y son módulos, libros y guías de estudio en formato impreso y digital, conforme al esquema curricular vigente."
    },
    {
      "concepto": "MEV",
      "significado": "El Modelo de Educación para la Vida (MEV) del INEA es una propuesta educativa orientada a personas jóvenes y adultas que no han completado su educación básica, siguiendo un enfoque andragógico que respeta las particularidades del aprendizaje en estas etapas de la vida. Este modelo, basado en principios humanistas, promueve la autodirección, el reconocimiento de saberes previos y la aplicación práctica inmediata del conocimiento, permitiendo a los educandos integrar lo aprendido en su vida diaria. A través de materiales educativos impresos y el apoyo de asesores, busca fortalecer el tejido social y la autonomía de las comunidades."
    },
    {
      "concepto": "MEVyT",
      "significado": "El Modelo de Educación para la Vida y el Trabajo (MEVyT) busca que jóvenes y adultos desarrollen y utilicen habilidades básicas de lectura, escritura y cálculo como herramientas para resolver situaciones cotidianas y adquirir conocimientos fundamentales que mejoren su vida diaria."
    },
    {
      "concepto": "MIB",
      "significado": "MEV Indígena Bilingüe. Vertiente educativa para atender con pertinencia a las personas originarias de las culturas indígenas, dirigidas tanto a las monolingües como a las bilingües."
    },
    {
      "concepto": "MIR",
      "significado": "La Matriz de Indicadores para Resultados (MIR) es una herramienta de planeación que identifica en forma resumida los objetivos de un programa, incorpora los indicadores de resultados y gestión que miden dichos objetivos, especifica los medios para obtener y verificar la información de los indicadores, e incluye los riesgos y contingencias que pueden afectar el desempeño del programa."
    },
    {
      "concepto": "Módulos Educativos",
      "significado": "Son unidades de aprendizaje estructuradas en torno a temas de interés práctico para las personas, con el fin de desarrollar competencias básicas y específicas en áreas como matemáticas, lengua, comunicación y ciencias. Estos módulos están organizados en tres niveles (Inicial, Intermedio y Avanzado) y pueden presentarse en formatos impresos, electrónicos o en línea, permitiendo a los participantes progresar hacia la certificación de primaria o secundaria de manera flexible y modular, adaptándose a sus intereses y necesidades."
    },
    {
      "concepto": "Nivel Primaria",
      "significado": "Servicio educativo que fortalece y amplía el desarrollo de las capacidades de expresión oral, escrita y de pensamiento matemático y crítico elemental, favoreciendo el auto reconocimiento como una persona en relación con su entorno."
    },
    {
      "concepto": "Nivel Secundaria",
      "significado": "Servicio educativo que desarrolla y consolida nociones y habilidades que facilitan la adquisición de nuevos conocimientos sobre el uso del lenguaje en diversos ámbitos, el análisis de la información y la producción de textos, la expresión y argumentación de opiniones y la creación de textos de diferentes naturalezas comunicativas. Fortalece habilidades para el razonamiento simbólico y la construcción de proyectos de incidencia en diferentes niveles de colectividad a partir de su propio reconocimiento como agente de cambio social de acuerdo con el esquema curricular vigente."
    },
    {
      "concepto": "PEC",
      "significado": "Es lo mismo que el examen único, permite la acreditación de los niveles de primaria o secundaria mediante la presentación de un examen general de conocimientos. Las personas educandas podrán mejorar su calificación final presentando antecedentes educativos del INEA, del sistema escolarizado, o constancias de cursos o talleres de capacitación de acuerdo a los criterios establecidos en la normatividad vigente."
    },
    {
      "concepto": "PEC o Exámen Único",
      "significado": "El Programa Especial de Certificación (PEC) o Examen Único permite a los participantes presentar un examen para certificar su nivel de educación primaria o secundaria sin tener que asistir a clases regulares. El PEC permite que las personas obtengan el reconocimiento oficial de sus habilidades y conocimientos previos."
    },
    {
      "concepto": "Persona educanda (Persona Beneficiaria del Programa)",
      "significado": "Es aquella persona de 15 años o más que se encuentra en rezago educativo y que accede a los servicios que brinda el INEA en alfabetización, primaria y secundaria."
    },
    {
      "concepto": "Persona técnica docente",
      "significado": "Persona responsable de operar y dar seguimiento a los servicios educativos que prestan los IEEA o UO del INEA, en las áreas geográficas que le son asignadas."
    },
    {
      "concepto": "Persona Voluntaria",
      "significado": "Es aquella persona física que de forma individual y voluntaria coadyuva en la atención educativa que ofrecen el INEA, sin recibir apoyo económico."
    },
    {
      "concepto": "Persona Voluntaria (Beneficiaria del Subsidio)",
      "significado": "Es aquella persona física que de forma individual y voluntaria coadyuva en la atención educativa que ofrecen el INEA y que por su participación puede ser susceptible a recibir un apoyo económico (que se registra presupuestalmente en el capítulo 4000)."
    },
    {
      "concepto": "Plaza Comunitaria",
      "significado": "Espacio reconocido de manera institucional por el INEA, fijo o itinerante, que cuenta con mobiliario y conectividad necesaria para desarrollar los procesos de aprendizaje apoyándose en el uso de las tecnologías."
    },
    {
      "concepto": "PVS, Persona Voluntaria con Subsidio",
      "significado": "Es aquella persona física que de forma individual y voluntaria coadyuva en la atención educativa que ofrecen el INEA y que por su participación puede ser susceptible a recibir un apoyo económico (que se registra presupuestalmente en el capítulo 4000) si cumple con los supuestos establecidos en las Reglas de Operación."
    },
    {
      "concepto": "Rezago Educativo",
      "significado": "Personas de 15 años o más que no sabe leer ni escribir o que no ha iniciado o concluido su educación primaria o secundaria."
    },
    {
      "concepto": "SASA",
      "significado": "El Sistema Automatizado de Seguimiento y Acreditación (SASA) es una herramienta del Instituto Nacional para la Educación de los Adultos. Este sistema de control escolar en línea permite gestionar los registros de incorporación, atención, acreditación y certificación de jóvenes y adultos atendidos por el INEA. Es crucial para la toma de decisiones a nivel regional, estatal y nacional, y ayuda a mejorar la calidad y cobertura de los servicios educativos."
    },
    {
      "concepto": "Servicios Educativos",
      "significado": "Comprende la oferta educativa y los procesos de inscripción, atención, acreditación y certificación que ofrece el INEA para atender a las personas que se encuentran en rezago educativo en alfabetización, Primaria y Secundaria."
    },
    {
      "concepto": "Técnico Docente",
      "significado": "Persona responsable de operar y dar seguimiento a los servicios educativos que prestan los IEEA o UO del INEA, en las áreas geográficas que le son asignadas."
    },
    {
      "concepto": "UCN",
      "significado": "Usuario que Concluye Nivel (UCN) es la persona educanda que acredita conocimientos de alfabetización, primaria y secundaria de conformidad con el esquema curricular vigente."
    },
    {
      "concepto": "Unidades de Operación del INEA",
      "significado": "Son las representaciones del INEA, de manera desconcentrada, son los ejecutores del programa y responsables de la operación de los servicios de educación que presta el INEA en Baja California, Ciudad de México, Estado de México, Michoacán, Nuevo León y Querétaro que no han participado en el convenio de Coordinación para la Descentralización de los servicios educativos."
    }
  ];

  const handleConceptoClick = (concepto) => {
    setSelectedConcepto(selectedConcepto === concepto ? null : concepto);
  };

  const handleFiltroLetra = (letra) => {
    setFiltroLetra(letra);
    setSelectedConcepto(null); // Cerrar cualquier concepto abierto al cambiar filtro
  };

  // Filtrar conceptos según la letra seleccionada
  const conceptosFiltrados = filtroLetra === 'TODOS' 
    ? conceptos 
    : conceptos.filter(item => item.concepto.charAt(0).toUpperCase() === filtroLetra);

  // Generar letras del alfabeto que tienen conceptos
  const letrasDisponibles = [...new Set(conceptos.map(item => item.concepto.charAt(0).toUpperCase()))].sort();

  return (
    <div className={notoSans.className}>
      <PagSec Enlaces={enlacesL}>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Glosario de Términos Educativos
            </h1>
            
            {/* Filtros alfabéticos */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Filtrar por letra:</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => handleFiltroLetra('TODOS')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    filtroLetra === 'TODOS'
                      ? 'bg-[#611232] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  TODOS
                </button>
                {letrasDisponibles.map((letra) => (
                  <button
                    key={letra}
                    onClick={() => handleFiltroLetra(letra)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      filtroLetra === letra
                        ? 'bg-[#611232] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {letra}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mostrar cantidad de resultados */}
            <div className="mb-4 text-center text-gray-600">
              {filtroLetra === 'TODOS' 
                ? `Mostrando todos los ${conceptos.length} conceptos`
                : `Mostrando ${conceptosFiltrados.length} concepto${conceptosFiltrados.length !== 1 ? 's' : ''} que inicia${conceptosFiltrados.length === 1 ? '' : 'n'} con "${filtroLetra}"`
              }
            </div>
            
            <div className="space-y-4">
              {conceptosFiltrados.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <button
                    onClick={() => handleConceptoClick(item.concepto)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                  >
                    <span className="font-semibold text-lg text-gray-800">
                      {item.concepto}
                    </span>
                    <span className="text-gray-500">
                      {selectedConcepto === item.concepto ? '−' : '+'}
                    </span>
                  </button>
                  
                  {selectedConcepto === item.concepto && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {item.significado}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600">
                ¿Necesitas más información? Visita nuestras{" "}
                <a href="/ubicacion" className="text-blue-600 hover:text-blue-800 underline">
                  oficinas y centros de zona
                </a>
              </p>
            </div>
          </div>
        </div>
      </PagSec>
    </div>
  );
}

export default Glosario;