"use client"
import {useState} from'react'
import Swal from 'sweetalert2'
import { useId } from 'react';
import React from 'react'
import PagSec from "@/components/PlantillaPagSec";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from 'react-hook-form';
import "./Duplicados.css";


function Solicitud_duplicados() {

//   // async function loadPost() {
//   //      const res = await fetch(
//   //     `http://localhost:1337/api/solicitud-duplicados?populate=*`
//   //   );
//   //   const data = await res.json();
  
//   //   console.log(data)
//   //   await new Promise((resolve) => setTimeout(resolve, 3000));
//   //   return data;
//   // }
//   // const post =  loadPost();

//   //   console.log("Post ", post.data)
    
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
  const [captcha, setCaptcha] = React.useState("");
  // const [message,setMessage] = useState('');
  // const [apellidoMaterno,setapellidoMaterno] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();


const onSubmit = async(data) =>{
  // event.preventDefault();
  // const data = new FormData(event.target)
console.log(captcha)
if(captcha){

  console.log("ReCAPTCHA verificado")

  const data = new FormData(event.target)

  const response = await  fetch(event.target.action, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    
      })

      const result = await response.json()

      
      if(response.ok)
      {
        Swal.fire({
          title: "Correcto!",
          text: "Correo enviado de forma correcta!",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });

      }
  }else{
    Swal.fire({
      title: 'Ups...!',
      text: '¡por favor capture recaphca!',
      icon: 'error',
      confirmButtonColor: "#3085d6",

    })

  }


}


//   const handleSubmit= async(event) =>{
//     // const AppellidoPaterno = useId();
    
//      event.preventDefault()
//     const data = new FormData(event.target)
//   //   console.log("----------------")
//   //  console.log(AppellidoPaterno)
//   //  console.log("----------------")
//    const response = await  fetch(event.target.action, {
//     method: 'POST',
//     body: data,
//     headers: {
//         'Accept': 'application/json'
//     }

//   })

//   const result = await response.json()
//   if(!response.ok){

//    console.log(result.errors.map(error =>error.message).join(','))

//    return   false
//  }

// }

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
 
    


  
      <form action="https://formspree.io/f/mdkozlqw" id="form1" onSubmit={handleSubmit(onSubmit)} className="pt-3 pb-8 mb-4" role="form">

          <div class="pt-3" >
            <label className="">Estado de la República donde concluyó su primaria y/o secundario</label>
            <div className="border rounded" >
              <select 
                  className="w-full border rounded bg-neutral-200	" 
                  name="Estado de la Republica"
                  id="Estado_Republica"
                  readonly
                  disabled
                  
                  >
                <option   value="Ciudad de Mexico">Ciudad de México</option>
              </select>
            </div>
          </div>



          <div  className="pt-3 grid grid-cols-1  sm:grid-cols-3">
            
            <div className="sm:mr-7">
              <label className="block">Apellido Paterno</label>
              <input 
                type="text"
                name="Apellido Paterno"
                className="border rounded p-2  w-full"
                id="AppellidoPaterno"
                placeholder="Apellido Paterno"
                {...register("ApellidoPaterno",{required:true})}
              />
              {errors?.ApellidoPaterno?.type === "required" && <p className="AlertaCampo">Este campo es obligatorio</p>}
            </div>


            <div clclassNameass="">
              <label className="pt-3 sm:pt-0 block">Apellido Materno</label>
              <input
                  type="text"
                  name="aAellido Materno"
                  className="border rounded p-2 w-full sm:w-11/12"
                  id="title"
                  placeholder="Apellido Materno"
                  {...register("ApellidoMaterno",{required:true})}
                />
                {errors?.ApellidoMaterno?.type === "required" && <p className="AlertaCampo">Este campo es obligatorio</p>}
            </div>

            <div clclassNameass="sm:ml-5">
              <label className="pt-3 sm:pt-0 block">Nombre(s)</label>
              <input 
                  type="text"
                  name="Nombre(S)"
                  className="border rounded p-2 w-full"
                  id="title"
                  placeholder="Nombre(s)"
                  {...register("Nombre",{required:true})}
                />
                {errors?.Nombre?.type === "required" && <p className="AlertaCampo">Este campo es obligatorio</p>}
            </div>
          </div>

          <div className="pt-3  grid grid-cols-1  sm:grid-cols-2">

            <div className="sm:mr-5">
              <label className="block"  for="calendarYear">Fecha de nacimiento</label>
              <input 
              type="text"
              id="calendarYear"
              className="border rounded w-full"
              placeholder="DD/MM/AAAA"
              name="Fecha de nacimiento"
              {...register("FechaNacimiento",{required:true})}
              />
              {errors?.FechaNacimiento?.type === "required" && <p className="AlertaCampo">Este campo es obligatorio</p>}
            </div>

            <div className="">
              <label className="pt-3 sm:pt-0 block">Lugar de nacimiento</label>
            <select  
                className="border rounded  w-full" 
                name="Lugar de nacimiento" 
                id="LugarNacimiento"
                {...register("LugarNacimiento",{required:true})} 
                >
                <option value="">Seleccione..</option>
                  <option value="Aguascalientes">Aguascalientes</option>
                  <option value="Baja California">Baja California</option>
                  <option value="Baja California Sur">Baja California Sur</option>
                  <option value="Campeche">Campeche</option>
                  <option value="Ciudad de México">Ciudad de México</option>
                  <option value="Chiapas">Chiapas</option>
                  <option value="Chihuahua">Chihuahua</option>
                  <option value="Coahuila de Zaragoza">Coahuila de Zaragoza</option>
                  <option value="Colima">Colima</option>
                  <option value="Durango">Durango</option>
                  <option value="Estado de México">Estado de México</option>
                  <option value="Guanajuato">Guanajuato</option>
                  <option value="Guerrero">Guerrero</option>
                  <option value="Hidalgo">Hidalgo</option>
                  <option value="Jalisco">Jalisco</option>
                  <option value="Michuacan de Ocampo">Michuacan de Ocampo</option>
                  <option value="Morelos">Morelos</option>
                </select>
                {errors?.LugarNacimiento?.type === "required" && <p className="AlertaCampo">Este campo es obligatorio</p>}
            </div>
            


            <div className="pt-3 sm:pt-0 sm:mr-5">
              <label className="pt-0 sm:pt-3 block" for="email">Corrreo</label>
              <input 
                id="email" 
                type="email"
                name="Email"
                placeholder="Correo@coreo.com"
                className="border rounded  w-full"
                {...register("Correo",{required:true})}
              />
               {errors?.Correo?.type === "required" && <p className="AlertaCampo">Este campo es obligatorio</p>}
            </div>

            <div className="pt-3 sm:pt-0">
              <label className="pt-0 sm:pt-3 block" for="telefono">Telefono</label>
              <input 
                type="text"
                className="border rounded w-full"
                id="telefono" 
                name="Teléfono"
                placeholder="Teléfono"
                {...register("Telefono",{required:true})}
              />
              {errors?.Telefono?.type === "required" && <p className="AlertaCampo">Este campo es obligatorio</p>}
            </div>

            <div className="pt-3 sm:pt-0 sm:mr-5">
              <label className="pt-0 sm:pt-3  block" for="comentarios">Comentarios(opcional)</label>
              <textarea
                type="text"
                className="border rounded w-full"
                id="comentarios" 
                name="Comentarios"
                placeholder="Coementarios"
              />
              {errors?.Comentarios?.type === "required" && <p className="AlertaCampo">Este campo es obligatorio</p>}
            </div>

            <div className="pt-3 sm:pt-0">
              <label className="pt-0 sm:pt-3  block" for="niveleducativo">Nivel educativo del duplicado</label>
                <select 
                 className="border rounded  w-full" 
                 name="Nivel Educativo"
                 id="NivelEducativo"
                 {...register("NivelEducativo",{required:true})}
                 >
                <option value="">Seleccione..</option>
                  <option value="Primaria">Primaria</option>
                  <option value="Secundaria">Secundaria</option>
                </select>
                {errors?.NivelEducativo?.type === "required" && <p className="AlertaCampo">Este campo es obligatorio</p>}
            </div>
          </div>
            
            <div className="pt-3 grid grid-cols-1  sm:grid-cols-2 gap-5">
            
              <div class="">
                <label class="control-label" for="curp">Curp:</label>
                  <input 
                  id="curp" 
                  type="file"
                  accept="image/jpeg,image/jpg/application/pdf"
                  className="w-full"
                  name="Curp"
                  // {...register("Curp",{required:true})}
                  />
                   {/* {errors?.Curp?.type === "required" && <p className="AlertaCampo">Por favor seleccione un archivo</p>} */}
              </div>
              <div className="">
                <label className="w-full" for="INE">Identificación oficial con fotografía por ambos lados:</label>
                  <input 
                    id="INE" 
                    name="INE"
                    type="file"
                    accept="image/jpeg,image/jpg/application/pdf"
                    className="w-full"
                    // {...register("INE",{required:true})}
                    />
                    {/* {errors?.INE?.type === "required" && <p className="AlertaCampo">Por favor selecione un archivo</p>} */}
              </div>
            
            <div class="pt-3">
                <label class="control-label" for="fotografia">Fotografía tamaño infantil, con fondo blanco y camisa clara</label>
                <input 
                id="fotografia" 
                type="file"
                accept="image/jpeg,image/jpg/application/pdf"
                className="w-full"
                name="Fotografía"
                // {...register("Fotografia",{required:true})}
                />
                {/* {errors?.Fotografia?.type === "required" && <p className="AlertaCampo">Por favor selecione un archivo</p>} */}
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
                    accept="image/jpeg,image/jpg/application/pdf"
                    className="w-full"
                    name="Certificado"
                    // {...register("Certificado",{required:true})}
                    />
                    {/* {errors?.Certificado?.type === "required" && <p className="AlertaCampo">Por favor selecione un archivo</p>} */}
              </div>

              <div class="">
                <label class="control-label" for="año">Año</label>
                  <input
                  id="año"
                  type="text"
                  className="border rounded  w-full"
                  name="Año"
                  placeholder="Año"
                  />
              </div>
            </div>
          
            <div class="pt-4 form-group">
              <div class="checkbox">
                <label>
                  <input 
                     name="Terminos" 
                     type="checkbox"
                     {...register("Terminos",{required:true})}
                     />
                     {errors?.Terminos?.type === "required" && <p className="AlertaCampo">Por favor acepte el manifiesto</p>}
                </label>
              </div>
                <p class="text-justify" for="file-01">Manifiesto bajo protesta de decir verdad que la información y los datos aquí asentados son 
                  verdaderos, reconosco que en caso de faltar a la verdad, estaré incurrriendo en el delito de falsedad de declaración ante
                  una autoridad pública distinta de la judicial, y podría se acreedor(a) a una pena de cuatro a ocho años de prición y de cien a trecientos días multa(art. 247, fracción | del Código Penal Federal), y demás sanciones
                  aplicable.
                </p>
            </div>
            <div className="pt-3 pb-3">
              <button className="m-auto letras:ml-auto bg-[#611232] text-white py-3 px-3 hover:bg-white hover:text-[#611232] rounded-full border-2 border-[#611232] block flex w-full justify-center"  type="submit" value="Enviar">Enviar</button>
            </div>


            <ReCAPTCHA 
             sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} 
             onChange={setCaptcha}
            //  {...register("Recaptcha",{required:true})}
             />
              {/* {errors?.Recaptcha?.type === "required" && <p className="AlertaCampo">Por favor resuelva el recaptcha</p>} */}

            <p className="pt-3 text-justify">
              En la cuenta <strong><a className="text-blue-700" href="mailto:inea@inea.gob.mx">inea@inea.gob.mx</a></strong> puedes enviar cualquier duda o comentario tanto del envío, descarga o impresión de tu certificado, como de los servicios que te ofrecimos.
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