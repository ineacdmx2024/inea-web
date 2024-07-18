import Link from "next/link";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="navBar text-white w-full ">
      {/* Contenedor del menú */}
      <div className="w-full ">
        {/* Menú gobierno */}
        <nav className="bg-[#03281A]">
          <div className="flex items-center justify-between py-0 px-4rem ml-[8rem] mr-[8rem]">
            <div className="flex items-center">
              <Link
                href="https://www.gob.mx/"
                passHref
              >
                <img
                  src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
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
                Trámites
              </Link>
              <Link
                href="/"
                passHref
                className="hover:text-[#8B6C41] p-2 rounded"
              >
                Gobierno
              </Link>
              <Link
                href="/"
                passHref
                className="hover:text-[#8B6C41] p-2 rounded"
              >
                Contacto
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
        <nav className="navBarINEA bg-[#0C3022] p-4 w-full">
          <div className="flex items-center justify-between container ml-auto px-4 ">
            <div className="flex items-center">
              <Link
                href="/"
                passHref
              >
                <img
                  src="/LogoINEACDMX_withe.svg"
                  alt="INEA"
                  className="hover:text-[#8B6C41] p-2 rounded inline-block py-0.3rem mr-1rem leading-relaxed"
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
                  Servicios
                </Link>
                <div className="hidden group-hover:block absolute bg-gray-100 mt-2 rounded shadow-lg text-black">
                  <Link
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    ¿Qué modalidad elijo?
                  </Link>
                  <Link
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Presencial
                  </Link>
                  <Link
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    En línea / APRENDEINEA
                  </Link>
                  <Link
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    En línea / MEVyT
                  </Link>
                  <Link
                    href="#"
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
                  Trámites
                </Link>
                <div className="hidden group-hover:block absolute bg-gray-100 text-black mt-2 rounded shadow-lg">
                  <Link
                    href="http://certificacion.inea.gob.mx/DescCertificado.aspx"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Descarga tu certificado
                  </Link>
                  <Link
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Solicitud de duplicados
                  </Link>
                  <Link
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Consulta tu CURP
                  </Link>
                </div>
              </div>

              {/* Ubicación */}
              <div className="group relative">
                <Link
                  href="#"
                  className="hover:text-[#8B6C41] p-2 rounded"
                >
                  Ubicación
                </Link>
                <div className="hidden group-hover:block absolute bg-gray-100 text-black mt-2 rounded shadow-lg">
                  <Link
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Plazas comunitarias
                  </Link>
                  <Link
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Coordinaciones de zona
                  </Link>
                </div>
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
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Consulta tu avance académico
                  </Link>
                  <Link
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    SIGA PEC
                  </Link>
                  <Link
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    SIGA FIGURAS
                  </Link>
                  <Link
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    SAEL
                  </Link>
                  <Link
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    FORMACION DE ASESORES
                  </Link>
                  <Link
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    SASA
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
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Mesa de servicios
                  </Link>
                  <Link
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Sistema de Gestión
                  </Link>
                  <Link
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    Sistema de oficios
                  </Link>
                  <Link
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    SIMA
                  </Link>
                  <Link
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    SIBIPLAC
                  </Link>
                  <Link
                    href="#"
                    className="block hover:bg-[#8B6C41] hover:text-white p-2 rounded"
                  >
                    SINAPLAC
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
