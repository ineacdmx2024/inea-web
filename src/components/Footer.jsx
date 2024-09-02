"use client"

// Footer.js
import React from 'react';
import "./Footer.css";

// Este es un componente funcional de React para el pie de página.
const Footer = () => {
  return (


    <footer className="main-footer">
      <div className="container mx-auto text-left ">




      <div className="flex items-center justify-between py-[1rem] px-4rem ml-[8rem] mr-[8rem] my-[5rem] "> 
        <div className="flex flex-wrap center">
          {/* Columna 1: Logos */}
          <div className="w-full sm:w-1/4 mb-5 ml-[3rem] ">
            <img
              src="/LogoEducación.svg"
              alt="Logo Educación"
              className="mx-auto max-w-[90%] mt-3"
              style={{ marginLeft: '-30px' }}
            />
            <img
              src="/LogoINEACDMX_withe.svg"
              alt="Logo INEACDMX"
              className="mx-auto max-w-[75%] mt-8 p-2 rounded inline-block py-0.3rem mr-1rem leading-relaxed"
              style={{ marginLeft: '-30px' }}
            />
          </div>
          
          {/* Columna 2: Mapa del Sitio */}
          <div className="w-full sm:w-1/4 mb-5 ml-[3rem] ">
            <h1 className="text-2xl font Monserrat " style={{fontSize:"25px"}}>Mapa del Sitio</h1> 
            <ul className="list-none space-y-4 mt-2 mb-[1rem]">

              <li><a href="https://datos.gob.mx/" className="text-white-600 hover:underline hover:text-[#8B6C41]">Trámites y Servicios</a></li>
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
          <div className="w-full sm:w-1/4 mb-5 ml-[3rem]">
          <ul> <h1  className="text-2xl font Monserrat" style={{fontSize:"25px"}}>Contacto</h1></ul> 
        
            <ul className="list-inline flex center space-y-6 mt-5  ">
    
              <li><a href="mailto:atencion_inea@inea.gob.mx" className="text-white-500 hover:underline hover:text-[#8B6C41]">Directorio</a></li>
              
            </ul>
            <ul className="list-inline flex center space-y-0 mt-300  ">
            <li><a href="mailto:atencion_inea@inea.gob.mx" className="text-light-blue-500 hover:underline hover:text-[#8B6C41]">correo@inea</a></li>
            </ul>

       
          </div>

          {/* Columna 4: Redes Sociales */}
          <div className=" w-full sm:w-1/4 py-200 px-100">
            <h1  className="text-2xl font Monserrat" style={{fontSize:"25px"}}>Síguenos en</h1>

            <ul className="list-inline flex center space-x-6 mt-5">

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
                  <img src="/images/tutublogo.svg" alt="YouTube" className="w-9 h-9" style={{ marginLeft: '0px', marginTop: '0px' }} />
                </a>
              </li>

            </ul>

          </div>
        </div>


     





        </div>



 <div className=" p-6 footer-pleca flex justify-start w-full lg:w-[calc(100vw - 14rem)] lg:absolute lg:left-0">
 
      </div>






      </div>


    


    </footer>






  );
};

export default Footer;


//
//
// <img src="/images/pleca_footer.svg" className="container-fluid  mb-[-6rem]   w-[100%] flex  leading-relaxed" style={{  borderRadius:'10%'}}></img>

//https://docs.strapi.io/dev-docs/quick-start#:~:text=Step%201%3A%20Log%20in%20to%20the%20admin%20panel,Publish%20the%20content%20Step%206%3A%20Use%20the%20API
//