"use client"
import {useState} from'react'
import React from 'react'
import PagSec from "@/components/PlantillaPagSec";
import ReCAPTCHA from "react-google-recaptcha";


function Solicitud_duplicados() {

  const cards = [
    {
      title: "¿Qué modalidad elijo?",
      imageSrc:
        "https://imgs.search.brave.com/RAPyqA9Q7HK7hP22bJsUZyXxmMTP1JhhZXpVMjgfr8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXN0cm9taWEuY29t/L3VuaXZlcnNvL2Zv/dG9zL2xhc2VzdHJl/bGxhcy5qcGc",
      buttonText: "Ir al sitio",
      link: "/oferta-educativa/que-modalidad-elijo",
    },
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
  ];
  //const [captcha, setCaptcha] = useState<string | null>(null);
  const [message,setMessage] = useState('');

  const handleSubmit= async(event) =>{

 
     event.preventDefault()
    const data = new FormData(event.target)
   console.log(data)
   const response = await  fetch(event.target.action, {
    method: 'POST',
    body: data,
    headers: {
        'Accept': 'application/json'
    }

  })

  const result = await response.json()
  if(!response.ok){

   console.log(result.errors.map(error =>error.message).join(','))

   return   false
}

  }

return (

    <div>Solicitud de duplicados <br />

    
        <PagSec Enlaces={cards}>
        <div className="mx-auto w-full">
            <h1 className="text-3xl font-medium text-[#404041] mb-2 letras:text-4xl ">
            Solicitud de duplicados. 
            </h1>
        </div>
        <div className="flex items-center">
              <div className="w-12 h-2 bg-[#af8900] mt-1"></div>
              <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <br />
    {/* <div className="container ml-auto mr-auto flex"> */}
     <div className="container mx-auto flex">
       <div className="w-full md:w-auto">
          <p className="text-justify">
            La siguinte forma será enviada a la Unidad de Operaciones INEA de la Ciudad de México,
            por eso, es importante que llenes correctamente los campos que se solicitan. Si tiene alguna
            duda sobre el proceso de llenado, le invitamos a ver el siguiente tutorila dando clic en este enlace.Gracias.
          </p>

     <label class="pt-3 control-label flex justify-center"><strong>Todos los servicios que proporciona el INEA son gratuitos.</strong></label>
 
    

    <form action="https://formspree.io/f/mkgnroke" onSubmit={handleSubmit} className="pt-3 pb-8 mb-4" role="form">

      <div class="pt-3">
        <label className="">Estado de la República donde concluyó su primaria y/o secundario</label>
        <div className="border rounded ">
          <select className="w-full border rounded" name="" id="">
            <option value="">Ciudad de México</option>
          </select>
        </div>
      </div>



      <div  className="pt-3 grid grid-cols-1  sm:grid-cols-3">
        
        <div className="sm:mr-7">
          <label className="block">Apellido Paterno</label>
          <input type="text"
            name="apellidoPaterno"
            className="border rounded p-2  w-full"
            id="title"
            placeholder="Apellido Paterno"
          />
        </div>


        <div clclassNameass="">
          <label className="pt-3 sm:pt-0 block">Apellido Materno</label>
          <input type="text"
              name="apellidoMaterno"
              className="border rounded p-2 w-full sm:w-11/12"
              id="title"
              placeholder="Apellido Materno"
            />
        </div>

        <div clclassNameass="sm:ml-5">
          <label className="pt-3 sm:pt-0 block">Nombre(s)</label>
          <input type="text"
              name="nombre"
              className="border rounded p-2 w-full"
              id="title"
             placeholder="Nombre(s)"
            />
        </div>
      </div>

      <div className="pt-3  grid grid-cols-1  sm:grid-cols-2">

        <div className="sm:mr-5">
           <label className="block"  for="calendarYear">Fecha de Nacimiento</label>
           <input type="text"
           id="calendarYear"
           className="border rounded w-full"
           placeholder="DD/MM/AAAA"
           name="fechanacimiento"
           />
        </div>

        <div className="">
           <label className="pt-3 sm:pt-0 block">Lugar de Nacimiento</label>
         <select className="border rounded  w-full" name="" id="">
            <option value="">Seleccione..</option>
              <option value="">Aguascalientes</option>
              <option value="">Baja California</option>
              <option value="">Baja California Sur</option>
              <option value="">Campeche</option>
              <option value="">Ciudad de México</option>
              <option value="">Chiapas</option>
              <option value="">Chihuahua</option>
              <option value="">Coahuila de Zaragoza</option>
              <option value="">Colima</option>
              <option value="">Durango</option>
              <option value="">Estado de México</option>
              <option value="">Guanajuato</option>
              <option value="">Guerrero</option>
              <option value="">Hidalgo</option>
              <option value="">Jalisco</option>
              <option value="">Michuacan de Ocampo</option>
              <option value="">Morelos</option>
            </select>
        </div>

        <div className="pt-3 sm:pt-0 sm:mr-5">
           <label className="pt-0 sm:pt-3 block" for="email-01">Corrreo</label>
           <input 
            id="email-01" 
            type="email"
            name="email"
            className="border rounded  w-full"
           />
        </div>

        <div className="pt-3 sm:pt-0">
           <label className="pt-0 sm:pt-3 block" for="telefono">Telefono</label>
           <input type="text"
           className="border rounded w-full"
           id="telefono" 
           name="telefono"
           />
        </div>

        <div className="pt-3 sm:pt-0 sm:mr-5">
           <label className="pt-0 sm:pt-3  block" for="comentarios">Comentarios(opcional)</label>
           <textarea type="text"
            className="border rounded w-full"
           id="comentarios" 
           name="comentarios"
           />
        </div>

        <div className="pt-3 sm:pt-0">
           <label className="pt-0 sm:pt-3  block" for="niveleducativo">Nivel educativo del duplicado</label>
            <select className="border rounded  w-full" name="" id="">
            <option value="">Seleccione..</option>
              <option value="">Primaria</option>
              <option value="">Secundaria</option>
            </select>
        </div>
      </div>
        
        <div className="pt-3 grid grid-cols-1  sm:grid-cols-2 gap-5">
         
          <div class="">
            <label class="control-label" for="curp">Curp:</label>
              <input 
              id="curp" 
              type="file"
              accept="image/jpeg,image/jpg"
              className="w-full"
              name="curp"
              />
          </div>
          <div className="">
            <label className="w-full" for="ine">Identificación oficial con fotografía por ambos lados:</label>
              <input 
                id="ine" 
                name="ine"
                type="file"
                accept="image/jpeg,image/jpg"
                className="w-full"
                />
          </div>
        
        <div class="pt-3">
            <label class="control-label" for="fotografia">Fotografía tamaño infantil, con fondo blanco y camisa clara</label>
            <input 
            id="fotografia" 
            type="file"
            accept="image/jpeg,image/jpg"
            className="w-full"
            name="fotografia"
            />
        </div>
      </div>
      
        <div className="pt-4">
          <label class="control-"><strong>Si usted cuenta con una copia del certificado, favor de incluirlo o mencione el año en el que terminó su primaria y/o secudnaria</strong></label>
        </div>
       

        <div className="pt-3 grid grid-cols-1  sm:grid-cols-2 gap-5">
         
          <div class="">
            <label class="control-label" for="certificado">Certificado</label>
              <input 
                id="certificado"
                type="file"
                accept="image/jpeg,image/jpg"
                className="w-full"
                name="certificado"
                />
          </div>

          <div class="">
            <label class="control-label" for="file-03">Año</label>
              <input
               id="file-03"
               type="text"
               className="border rounded  w-full"
               name="aaa"
               />
          </div>
        </div>
       
        <div class="pt-4 form-group">
          <div class="checkbox">
            <label>
              <input name="terminos" type="checkbox"/>
            </label>
          </div>
            <p class="text-justify" for="file-01">Manifiesto bajo protesta de decir verdad que la información y los datos aquí asentados son 
              verdaderos, reconosco que en caso de faltar a la verdad, estaré incurrriendo en el delito de falsedad de declaración ante
              una autoridad pública distinta de la judicial, y podría se acreedor(a) a una pena de cuatro a ocho años de prición y de cien a trecientos días multa(art. 247, fracción | del Código Penal Federal), y demás sanciones
              aplicable.
            </p>
        </div>
        <div className="pt-3 pb-3">
           <button className="text-[#611232] hover:text-white border border-[#611232] hover:bg-[#611232] focus:ring-4 focus:outline-none focus:ring-[#A57F2C] focus:bg-[#611232] focus:text-[white] font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2  text-lg flex w-full justify-center"  type="submit" value="Enviar">Enviar</button>
        </div>


        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}/>

        <p className="pt-3 text-justify">
          En la cuenta <strong><a className="text-blue-700" href="mailto:qro_acred@inea.gob.mx">qro_acred@inea.gob.mx</a></strong> puedes enviar cualquier duda o comentario tanto del envío, descarga o impresión de tu certificado, como de los servicios que te ofrecimos.
          <br />
          <br />
          Si te condicionaron o pidieron algo a cambio de la entrega de tu certificado o de cualquier otro servicio, DENÚNCIALO al: <strong><a className="text-blue-700" href="tel:+558000060300"> 800-0060-300.</a></strong> Tu denuncia es confidencial y nos permitirá ofrecerte un mejor servicio.
          <br />  
          <br /> 
          <strong>Aviso de Privacidad:</strong> Los datos personales recabados serán protegidos y serán incorporados y tratados, según corresponda, en los sistemas institucionales del INEA que han sido debidamente inscrito en el Listado de Sistemas de Datos Personales ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI). Los datos recabados en este registro consideran lo establecido en los Artículos 16, 17 y 18 de la Ley General de Protección de Datos Personales en Posesión de sujetos obligados.
        </p>
      </form>
    </div>
    </div>
  </PagSec>
  </div>
  )
  
}


export default Solicitud_duplicados