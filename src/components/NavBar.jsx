import Link from "next/link";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="navBar text-white w-full ">
      {/* Contenedor del menú */}
      <div className="w-full ">
        {/* Menú gobierno */}
        <nav className="bg-[#03281A]">
          <div className="flex items-center justify-between py-[1rem] px-4rem ml-[8rem] mr-[8rem]">
            <div className="flex items-center">
              <Link
                href="https://www.gob.mx/sep"
                passHref
              >
                <img
                  src="/LogoEducación.svg"
                  alt="Gobierno de México"
                  className="hover:text-[#8B6C41] p-2 rounded inline-block py-0.3rem mr-1rem leading-relaxed"
                />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                passHref
                className="hover:text-[#8B6C41] p-2 rounded"
              >
                ¿Qué es el INEA?
              </Link>
              <Link
                href="/"
                passHref
                className="hover:text-[#8B6C41] p-2 rounded"
              >
                Contacto
              </Link>
              <Link
                href="/"
                passHref
                className="hover:text-[#8B6C41] p-2 rounded"
              >
                Mapa del sitio
              </Link>
              <Link
                href="https://www.gob.mx/busqueda?utf8=%E2%9C%93"
                passHref
                className="hover:text-[#8B6C41] p-2 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </nav>

        {/* Menú inferior */}
        <nav className="navBarINEA bg-[#0C3022] p-2 w-full">
          <div className="flex items-center justify-between container ml-auto px-4 ">
            <div className="flex items-center">
              <Link
                href="/"
                passHref
              >
                <img
                  src="/LogoINEACDMX_withe.svg"
                  alt="INEA"
                  className="hover:text-[#8B6C41] p-1 rounded inline-block py-0.3rem mr-1rem leading-relaxed"
                />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/inicio"
                passHref
                className="hover:text-[#8B6C41] p-2 rounded columns-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-full m-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <span className="w-full mr-0">Inicio</span>
              </Link>

              {/* Servicios */}
              <div className="group relative">
                <Link
                  href="#"
                  className="hover:text-[#8B6C41] p-2 rounded"
                >
                  Oferta educativa
                </Link>
                <div className="hidden group-hover:block absolute bg-gray-100 mt-2 rounded shadow-lg text-black">
                  <Link
                    href="/oferta-educativa/que-modalidad-elijo"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    ¿Qué modalidad elijo?
                  </Link>
                  <Link
                    href="/oferta-educativa/presencial"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Presencial
                  </Link>
                  <Link
                    href="https://aprendeinea.inea.gob.mx/cursos_2023/index_todos.html"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    En línea / APRENDEINEA
                  </Link>
                  <Link
                    href="http://www.cursosinea.conevyt.org.mx/index.php?option=com_k2&view=item&layout=item&id=658&Itemid=254"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    En línea / MEVyT
                  </Link>
                  <Link
                    href="/oferta-educativa/examen-unico"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Examen Único
                  </Link>
                </div>
              </div>

              {/* Trámites */}
              <div className="group relative">
                <Link
                  href="#"
                  className="hover:text-[#8B6C41] p-2 rounded"
                >
                  Servicios
                </Link>
                <div className="hidden group-hover:block absolute bg-gray-100 text-black mt-2 rounded shadow-lg">
                  <Link
                    href="http://certificacion.inea.gob.mx/DescCertificado.aspx"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Descarga tu certificado
                  </Link>
                  <Link
                    href="/servicios/solicitud-duplicados"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Solicitud de duplicados
                  </Link>
                  <Link
                    href="https://www.gob.mx/curp/"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Consulta tu CURP
                  </Link>
                  <Link
                    href="/servicios/constancia-comipems"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Constancia COMIPEMS
                  </Link>
                  <Link
                    href="/servicios/reposicion-certificados"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Reposición certificados SEP
                  </Link>
                  <Link
                    href="/servicios/guias-aprendizaje"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Guías de aprendizaje
                  </Link>
                  <Link
                    href="/servicios/descargar-modulos"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Descarga de Módulos
                  </Link>
                  <Link
                    href="/servicios/revalidacion-extranjeros"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Revalidación a extranjeros
                  </Link>
                </div>
              </div>

              {/* Ubicación */}
              <div className="group relative">
                <Link
                  href="/ubicacion"
                  className="hover:text-[#8B6C41] p-2 rounded"
                >
                  Ubicación
                </Link>
              </div>

              {/* Control escolar */}
              <div className="group relative">
                <Link
                  href="#"
                  className="hover:text-[#8B6C41] p-2 rounded"
                >
                  Control escolar
                </Link>
                <div className="hidden group-hover:block absolute bg-gray-100 text-black mt-2 rounded shadow-lg">
                  <Link
                    href="http://www.inea.gob.mx/servicios_en_linea/Consulta_avance_academico.html"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Consulta tu avance académico
                  </Link>
                  <Link
                    href="http://siga.inea.gob.mx/PEC/Account/Login?ReturnUrl=%2FPEC%2F"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    SIGA PEC
                  </Link>
                  <Link
                    href="http://siga.inea.gob.mx/figuras/Account/Login?ReturnUrl=%2Ffiguras%2F"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    SIGA FIGURAS
                  </Link>
                  <Link
                    href="http://sael.inea.gob.mx/Login.aspx?ReturnUrl=/&AspxAutoDetectCookieSupport=1"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    SAEL
                  </Link>
                </div>
              </div>

              {/* INTRANET */}
              <div className="group relative">
                <Link
                  href="#"
                  className="hover:text-[#8B6C41] p-2 rounded"
                >
                  INTRANET
                </Link>
                <div className="hidden group-hover:block absolute bg-gray-100 text-black mt-2 rounded shadow-lg">
                  <Link
                    href="http://cdmx.inea.gob.mx/CATN2/login.asp"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Mesa de servicios
                  </Link>
                  <Link
                    href="http://cdmx.inea.gob.mx/gestion/"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Sistema de Gestión
                  </Link>
                  <Link
                    href="http://cdmx.inea.gob.mx/oficios/"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Sistema de Oficios
                  </Link>
                  <Link
                    href="http://cdmx.inea.gob.mx/SIMA/"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    SIMA
                  </Link>
                  <Link
                    href="http://sibiplac.inea.gob.mx/Sibiplac/Login.aspx?ReturnUrl=%2fSibiplac%2fReportes.aspx"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    SIBIPLAC
                  </Link>
                  <Link
                    href="http://plazas.conevyt.org.mx:8080/plazas/"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    SINAPLAC
                  </Link>
                  <Link
                    href="http://cdmx.inea.gob.mx/comipems/login.asp"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Constancias COMIPEMS
                  </Link>
                  <Link
                    href="http://df.sasa.inea.gob.mx/INEAGUI/guiLogin.aspx?ReturnUrl=%2fINEAGUI%2fdefault.aspx"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    SASA
                  </Link>
                  <Link
                    href="http://satic.inea.gob.mx/"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    SATIC
                  </Link>
                </div>
              </div>

              <Link
                href="/"
                passHref
                className="hover:text-[#8B6C41] bg-[#7F4500] rounded-full py-3 px-6 mx-0 my-0"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
