"use client"

import React from 'react';
import { useEffect } from 'react';
import "./Footer.css";

const Footer = () => {

  return (

    <footer className="main-footer relative">
      <div className="container mx-auto text-left ">

      <div className="flex items-center justify-between py-[1rem] px-4rem ml-[2.5rem]  mt-[5rem]">
        <div className="flex flex-wrap justify-center mx-auto">
          {/* Columna 1: Logos */}
          <div className="w-full sm:w-1/4 mb-5  ">
            <img
              src="/LogoEducacion.svg"
              alt="Logo Educación"
              className="mx-auto max-w-[90%] mt-3"
              style={{ marginLeft: '-0px' }}
            />
            <img
              src="/LogoINEACDMX_withe.svg"
              alt="Logo INEACDMX"
              className="mx-auto max-w-[75%] mt-8 p-2 rounded inline-block py-0.3rem mr-1rem leading-relaxed"
              style={{ marginLeft: '-0px' }}
            />
          </div>

          {/* Columna 2: Mapa del Sitio */}
          <div className="w-full sm:w-1/4 mb-5 ml-[3.5rem] ">
          <ul> <h1 className="text-2xl font Monserrat " style={{fontSize:"18px"}}>Mapa del Sitio</h1> </ul>
            <ul className="list-none space-y-3 mt-5 mb-[1rem] text-[14px]">

              <li><a href="https://datos.gob.mx/" className="text-white-600 hover:underline hover:text-[#8B6C41] ]">Trámites y Servicios</a></li>
              <li><a href="https://www.gob.mx/publicaciones" target="_blank" rel="noopener noreferrer" className="text-white-600 hover:underline hover:text-[#8B6C41]">¿Quiénes Somos?</a></li>
              <li><a href="http://www.inea.gob.mx/Transparencia1/transparencia.html" target="_blank" rel="noopener noreferrer" className="text-white-600 hover:underline hover:text-[#8B6C41]">Aviso de privacidad</a></li>
              <li><a href="https://www.infomex.org.mx/gobiernofederal/home.action" target="_blank" rel="noopener noreferrer" className="text-white-600 hover:underline hover:text-[#8B6C41]">Comité de Ética</a></li>
              <li><a href="http://www.inai.org.mx/" target="_blank" rel="noopener noreferrer" className="text-white-600 hover:underline hover:text-[#8B6C41]">Transparencia</a></li>
              <li><a href="http://alertadores.funcionpublica.gob.mx/" target="_blank" rel="noopener noreferrer" className="text-white-600 hover:underline hover:text-[#8B6C41]">Glosario</a></li>
              <li><a href="https://www.gob.mx/inea" target="_blank" rel="noopener noreferrer" className="text-white-600 hover:underline hover:text-[#8B6C41]">INEA Nacional</a></li>
              <li><a href="https://www.gob.mx" target="_blank" rel="noopener noreferrer" className="text-white-600 hover:underline hover:text-[#8B6C41]">Gobierno</a></li>
              <li><a href="http://sidec.funcionpublica.gob.mx/" target="_blank" rel="noopener noreferrer" className="text-white-600 hover:underline hover:text-[#8B6C41]">Créditos</a></li>

            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="w-full sm:w-1/4 mb-5 ml-[1rem]">
          <ul> <h1  className="text-2xl font Monserrat" style={{fontSize:"18px"}}>Contacto</h1></ul>

            <ul className="list-none flex center space-y-6 mt-5 text-[16px] ">

              <li><a href="mailto:atencion_inea@inea.gob.mx" className="text-white-500 hover:underline hover:text-[#8B6C41 ] ">Directorio</a></li>

            </ul>
            <ul className="list-inline flex center space-y-0 mt-0  text-[16px] ">
            <li><a href="mailto:atencion_inea@inea.gob.mx" className="text-light-blue-500 hover:underline hover:text-[#8B6C41] ">correo@inea</a></li>
            </ul>


          </div>



          {/* Columna 4: Redes Sociales */}
        <div className="w-full sm:w-1/4 mb-5 ml-[-8rem] ">
          <div className="flex flex-col items-end">
            <h1  className="text-2xl font Monserrat" style={{fontSize:"18px"}}>Síguenos en</h1>

            <ul className="list-inline flex space-x-5 mt-5">

              <li>
                <a href="https://www.facebook.com/gobmexico" target="_blank" rel="noopener noreferrer" title="Facebook">
                  <img src="https://framework-gb.cdn.gob.mx/landing/img/facebook.png" alt="Facebook" className="w-8 h-8 " />
                </a>
              </li>


              <li>
                <a href="https://twitter.com/GobiernoMX" target="_blank" rel="noopener noreferrer" title="Twitter">
                  <img src="https://framework-gb.cdn.gob.mx/landing/img/twitter.png" alt="Twitter" className="w-8 h-8" />
                </a>
              </li>

              <li>
                <a href="https://www.youtube.com/gobmexico" target="_blank" rel="noopener noreferrer" title="YouTube">
                  <img src="/tutublogo.svg" alt="YouTube" className="w-9 h-9" style={{ marginLeft: '0px', marginTop: '0px' }} />
                </a>
              </li>

            </ul>

          </div>
          </div>
        </div>

        </div>

      </div>

      <img src="/Pleca_footer.svg" alt="plecabnj" className="w-full h-auto"/>

    </footer>

  );
};

export default Footer;