"use client"
import Swal from 'sweetalert2'
import React,{ useState,useEffect } from 'react'
import PagSec from "@/components/PlantillaPagSec";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, Controller } from "react-hook-form";
import "./Duplicados.css";
import "react-datepicker/dist/react-datepicker.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});



function Solicitud_duplicados() {

  const [datos, setDatos] = useState([]);
  const [file, setFile] = useState(null);
  const [captcha, setCaptcha] = React.useState("");

 



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



  const [formData, setFormData] = React.useState({
    to: '',//correo
    subject: 'Asunto predeterminado',
    text: '',
  });

  const {register,handleSubmit,watch, formState: { errors }} = useForm();


//Recuperar archivos adjunto
  const handleFileChange = (event) => {

    const selectedFile = event.target.files[0];

    if (selectedFile) {

      setFile(selectedFile);

    }
  };



  const fetchData = async  () => {
    try {

      //http://localhost:1337/api/correos?populate=%2A
          const res = await fetch(`https://inea-web-backend.onrender.com/api/correos?populate=%2A`)

        

          if(!res.ok){
          throw new Error('Something went wrong')
    }
     const { data } = await res.json()

      setDatos(data);


    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  }


    // useEffect para llamar a `fetchData` una vez que el componente se monta
    useEffect(() => {
      fetchData();
    }, []);


const onSubmit = async(data) =>{


  if (Array.isArray(datos)) {
    const Datos_obtenidos = datos.map(item => {
      // Aseguramos que item.attributes existe y tiene las propiedades 'Correo' y 'Lugar_de_nacimiento'
      return item.attributes ? {
        Correo: item.attributes.Correo,
        Lugar_de_nacimiento: item.attributes.Lugar_de_nacimiento
      } : null;
    });

    // Usamos un array para almacenar los correos de las personas nacidas en ejemplo "Campeche"
    var  Obt_Correos = [];
    var  Obt_Correo_Generico = [];


    // Ahora accedemos a los correos de cada objeto dentro del array
    Datos_obtenidos.forEach(item => {


      if (item) {
     
        if (item.Lugar_de_nacimiento === "Genérico" || item.Lugar_de_nacimiento === "Generico" ) {
            // Si es así, agregamos el correo a la lista de Obt_Correos
            Obt_Correo_Generico.push(item.Correo);
          
        }
      }
    });
  }

   if(captcha)
   {


    // Mostrar el indicador de carga (loading)
      Swal.fire({
        title: 'Cargando...',
        text: 'Estamos procesando tus datos.',
        icon: 'info',
        allowOutsideClick: false,  // Deshabilitar el clic fuera para cerrar
        allowEscapeKey: false,  // Deshabilitar la tecla Esc para cerrar
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();  // Mostrar el spinner de carga
        }
      });

        // Creación del FormData para enviar archivos
        const formData = new FormData();
        formData.append('Curp', data.Curp[0]); // Campo 'Curp'
        formData.append('Identificacion', data.Identificacion[0]); // Campo 'Identificacion'
        formData.append('Fotografia', data.Fotografia[0]); // Campo 'Fotografía'
        formData.append('Certificado', data.Certificado[0]); // Campo 'Certificado'

        try {
          // Enviar los archivos al servidor usando fetch
          const res = await fetch('/api/upload', {
            method: 'POST',
            body: formData,  // FormData se encarga del tipo de contenido automáticamente
          });

          // Verifica si la respuesta fue exitosa
          if (!res.ok) {
            throw new Error('Error al enviar los datos');
          }

          const RESDATA = await res.json();  // Parsear la respuesta JSON

          // Imprimir los resultados de la respuesta
          //console.log(RESDATA);

          var emailData='';

          const maxLengthNombre = 70;
          const truncatedName = data.Nombre.length > maxLengthNombre ? `${data.Nombre.substring(0, maxLengthNombre)}` : data.Nombre;
         
          const maxLengthApellidoMaterno = 70;
          const truncatedApellidoMaterno = data.ApellidoMaterno.length > maxLengthApellidoMaterno ? `${data.ApellidoMaterno.substring(0, maxLengthApellidoMaterno)}` : data.ApellidoMaterno;
         
          const maxLengthApellidoPaterno = 70;
          const truncatedApellidoPaterno = data.ApellidoPaterno.length > maxLengthApellidoPaterno ? `${data.ApellidoPaterno.substring(0, maxLengthApellidoPaterno)}` : data.ApellidoPaterno;
         

          const maxLengthFechaNacimiento = 10;
          const truncatedFechaNacimiento = data.FechaNacimiento.length > maxLengthFechaNacimiento ? `${data.FechaNacimiento.substring(0, maxLengthFechaNacimiento)}` : data.FechaNacimiento;
         
          const maxLengthCorreo= 250;
          const truncatedCorreo = data.Correo.length > maxLengthCorreo ? `${data.Correo.substring(0, maxLengthCorreo)}` : data.Correo;
         
          const maxLengthTelefono= 50;
          const truncatedTelefono = data.Telefono.length > maxLengthTelefono ? `${data.Telefono.substring(0, maxLengthTelefono)}` : data.Telefono;
         
          const maxLengthComentarios= 450;
          const truncatedComentarios = data.Comentarios.length > maxLengthComentarios ? `${data.Comentarios.substring(0, maxLengthComentarios)}` : data.Comentarios;
         
          const maxLengthAño = 5;
          const truncatedAño = data.Año.length > maxLengthAño ? `${data.Año.substring(0, maxLengthAño)}` : data.Año;


          if(RESDATA.URL_Certificado){
   
         
            emailData = {
              data: {
                  Para: `${Obt_Correo_Generico[0]},${data.Correo}`,
                  subject: formData.subject,
                  Mensaje: `
                      Nombre: ${truncatedName} <br>
                      Apellido paterno: ${truncatedApellidoPaterno} <br>
                      Apellido materno: ${truncatedApellidoMaterno} <br>
                      Fecha de nacimiento: ${truncatedFechaNacimiento} <br>
                      Lugar de nacimiento: ${data.LugarNacimiento} <br>
                      Correo: ${truncatedCorreo} <br>
                      Teléfono: ${truncatedTelefono} <br>
                      Comentarios: ${truncatedComentarios} <br>
                      Nivel del duplicado: ${data.NivelEducativo} <br>
                      Año: ${truncatedAño} <br>
                  `,
                
  
                 imagen: [
                    ...(RESDATA.URL_Curp ? [RESDATA.URL_Curp] : []),
                    ...(RESDATA.URL_Identificacion ? [RESDATA.URL_Identificacion] : []),
                    ...(RESDATA.URL_Fotografia ? [RESDATA.URL_Fotografia] : []),
                    ...(RESDATA.URL_Certificado ? [RESDATA.URL_Certificado] : []),
                  ].join('|')  // Unir los nombres de los archivos con una coma
  
              }
          };

       }else{

  
        emailData = {
          data: {
              Para: `${Obt_Correo_Generico[0]},${data.Correo}`,
              subject: formData.subject,
              Mensaje: `
                  Nombre: ${truncatedName} <br>
                  Apellido paterno: ${truncatedApellidoPaterno} <br>
                  Apellido materno: ${truncatedApellidoMaterno} <br>
                  Fecha de nacimiento: ${truncatedFechaNacimiento} <br>
                  Lugar de nacimiento: ${data.LugarNacimiento} <br>
                  Correo: ${truncatedCorreo} <br>
                  Teléfono: ${truncatedTelefono} <br>
                  Comentarios: ${truncatedComentarios} <br>
                  Nivel del duplicado: ${data.NivelEducativo} <br>
                  Año: ${truncatedAño} <br>
              `,

              Para: `${Obt_Correos[0]},${Obt_Correo_Generico[0]},${data.Correo}`,
             imagen: [
                ...(RESDATA.URL_Curp ? [RESDATA.URL_Curp] : []),
                ...(RESDATA.URL_Identificacion ? [RESDATA.URL_Identificacion] : []),
                ...(RESDATA.URL_Fotografia ? [RESDATA.URL_Fotografia] : []),
              ].join('|')  // Unir los nombres de los archivos con una coma

          }
      };

       }


      
//http://localhost:1337/api/correoineas
        const response = await fetch('https://inea-web-backend.onrender.com/api/correoineas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            },
              body: JSON.stringify(emailData),
          });

          const datas = await response.json();

          if(response.ok)
          {
              Swal.fire({
                title: "Correcto!",
                text: "Correo enviado de forma correcta!",
                icon: "success",
                confirmButtonColor: "#3085d6",
                allowOutsideClick: false,  // Deshabilitar el clic fuera para cerrar
                allowEscapeKey: false,  // Deshabilitar la tecla Esc para cerrar
              });

          }else{
            Swal.fire({
              title: 'Ups...!',
              text: `Error al enviar correo: ${datas.error.message || 'Error desconocido'}`,
              icon: 'error',
              confirmButtonColor: "#3085d6",
              allowOutsideClick: false,  // Deshabilitar el clic fuera para cerrar
              allowEscapeKey: false,  // Deshabilitar la tecla Esc para cerrar
            })
          }

        } catch (error) {
          console.error('Error en la solicitud:', error);
        }
      

   }else{
      Swal.fire({
        title: 'Ups...!',
        text: '¡por favor capture recaphca!',
        icon: 'error',
        confirmButtonColor: "#3085d6",
        allowOutsideClick: false,  // Deshabilitar el clic fuera para cerrar
        allowEscapeKey: false,  // Deshabilitar la tecla Esc para cerrar

      })
  }
}




return (

  <div className={`${montserrat.className}  text-[#333334]  text-start `}>

    <PagSec
        Enlaces={cards}
        Titulo={"Duplicado de certificado de estudios"}
      >


      <div className="container mx-auto flex">
        <div className="w-full md:w-auto">
        <div className="mx-auto mb-4 w-full max-w-full md:max-w-[1140px]">
        <div className="pt-4 leading-7 justify-start text-[#333334] text-[18px] ">
            <p className="text-justify font-light">
              La siguiente información será enviada a la Unidad de Operación del INEA
              Ciudad de México para tramitar el duplicado de un certificado de primaria
              o secundaria expedido por esta institución. Por eso, es importante que llenes
              correctamente los campos que se solicitan.
            </p>
          </div>
          </div>

          <label class="pt-3 control-label flex justify-center">
            <strong>
              Todos los servicios que proporciona el INEA son gratuitos
            </strong>
          </label>

          <form
            method="POST"
            id="form1"
            enctype="multipart/form-data"
            onSubmit={handleSubmit(onSubmit)}
            className="pt-3 pb-8 mb-4"
            role="form"
          >
            <div class="pt-3">
              <label className="">
                Estado de la República donde concluyó su primaria y/o secundario
              </label>
              <div className="border rounded">
                <select
                  className={`${montserrat.className} text-[#333334] cursor-no-drop input-personalizado color-gris`}
                  name="Estado de la Republica"
                  id="Estado_Republica"
                  readonly
                  disabled
                >
                  <option value="Ciudad de Mexico">Ciudad de México</option>
                </select>
              </div>
            </div>

            <div className="pt-3 grid grid-cols-1  sm:grid-cols-3">
              <div className="sm:mr-7 " >
                <label className="block">Apellido Paterno<spam className="red"> (*)</spam></label>
                <input
       
                  type="text"
                  name="ApellidoPaterno"
                  className={`${montserrat.className} text-[#333334] cursor-pointer input-personalizado`}
                  id="AppellidoPaterno"
                  placeholder="Apellido Paterno"
                  maxLength={70}  
                  {...register("ApellidoPaterno", { 
                    required: true, 
                    pattern: {
                      value: /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/,  // Solo letras y espacios
                      message: "El apellido solo puede contener letras"
                    }
                  })}
                />
                {errors?.ApellidoPaterno?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}

                {errors?.ApellidoPaterno && (
                      <p className="AlertaCampo">
                        {errors.ApellidoPaterno.message}
                      </p>
                    )}
              </div>

              <div clclassNameass="sm:ml-3">
                <label className="pt-3 sm:pt-0 block">Apellido Materno<spam className="red"> (*)</spam></label>
                <input
                  type="text"
                  name="ApellidoMaterno"
                  className="border rounded p-2 w-full sm:w-11/12 input-apellidopaterno"
                  id="title"
                  placeholder="Apellido Materno"
                  maxLength={70}  

                  {...register("ApellidoMaterno", { 
                    required: true, 
                    pattern: {
                      value: /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/,  // Solo letras y espacios
                      message: "El apellido solo puede contener letras"
                    }
                  })}

                />
                {errors?.ApellidoMaterno?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}

                {errors?.ApellidoMaterno && (
                      <p className="AlertaCampo">
                        {errors.ApellidoMaterno.message}
                      </p>
                    )}
              </div>

              <div clclassNameass="sm:ml-3">
                <label className="pt-3 sm:pt-0 block">Nombre(S)<spam className="red"> (*)</spam></label>
                <input
                  id="Nombre"
                  type="text"
                  name="text"
                  className={`${montserrat.className} text-[#333334] cursor-pointer input-personalizado`}
                  placeholder="Nombre(S)"
                  maxLength={70}  
              
                  {...register("Nombre", { 
                    required: true, 
                    pattern: {
                      value:/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/,  // Solo letras y espacios
                      message: "El apellido solo puede contener letras"
                    }
                  })}
                />
                {errors?.Nombre?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}

               {errors?.Nombre && (
                      <p className="AlertaCampo">
                        {errors.Nombre.message}
                      </p>
                    )}
              </div>
            </div>

            <div className="pt-3  grid grid-cols-1  sm:grid-cols-2">
              <div className="sm:mr-5">
                <label className="block" for="calendarYear">
                  Fecha de nacimiento<spam className="red"> (*)</spam>
                </label>
                <input
                  type="text"
                  id="calendarYear"
                  className={`${montserrat.className} text-[#333334] cursor-pointer input-personalizado`}
                  placeholder="DD/MM/AAAA"
                  name="Fecha de nacimiento"
                  maxLength={10}  
                  {...register("FechaNacimiento", { required: true })}
                />
                {errors?.FechaNacimiento?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}
              </div>

              <div className="">
                <label className="pt-3 sm:pt-0 block">
                  Lugar de nacimiento<spam className="red"> (*)</spam>
                </label>
                <select
                  className={`${montserrat.className} text-[#333334] cursor-pointer input-personalizado`}
                  name="Lugar de nacimiento"
                  id="LugarNacimiento"
                  {...register("LugarNacimiento", { required: true })}
                >
                  <option value="">Seleccione..</option>
                  <option value="Aguascalientes">Aguascalientes</option>
                  <option value="Baja California">Baja California</option>
                  <option value="Baja California Sur">Baja California Sur</option>
                  <option value="Campeche">Campeche</option>
                  <option value="Ciudad de México">Ciudad de México</option>
                  <option value="Chiapas">Chiapas</option>
                  <option value="Chihuahua">Chihuahua</option>
                  <option value="Coahuila de Zaragoza"> Coahuila de Zaragoza</option>
                  <option value="Colima">Colima</option>
                  <option value="Durango">Durango</option>
                  <option value="Estado de México">Estado de México</option>
                  <option value="Guanajuato">Guanajuato</option>
                  <option value="Guerrero">Guerrero</option>
                  <option value="Hidalgo">Hidalgo</option>
                  <option value="Jalisco">Jalisco</option>
                  <option value="Michoacán de Ocampo"> Michoacán de Ocampo</option>
                  <option value="Morelos">Morelos</option>
                  <option value="Nayarit">Nayarit</option>
                  <option value="Nuevo León">Nuevo León</option>
                  <option value="Oaxaca">Oaxaca</option>
                  <option value="Puebla">Puebla</option>
                  <option value="Querétaro">Querétaro</option>
                  <option value="Quintana Roo">Quintana Roo</option>
                  <option value="San luis Potosí">San luis Potosí</option>
                  <option value="Sonora">Sonora</option>
                  <option value="Tabasco">Tabasco</option>
                  <option value="Tamaulipas">Tamaulipas</option>
                  <option value="Tlaxcala">Tlaxcala</option>
                  <option value="Veracruz de Ignacio de la Llave">Veracruz de Ignacio de la Llave</option>
                  <option value="Yucatán">Yucatán</option>
                  <option value="Zacatecas">Zacatecas</option>
                  <option value="Estados Unidos">Estados Unidos</option>
                  <option value="Otro">Otro</option>
                </select>
                {errors?.LugarNacimiento?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}
              </div>

              <div className="pt-3 sm:pt-0 sm:mr-5">
                <label
                  className="pt-0 sm:pt-3 block"
                  for="email"
                  htmlFor="email"
                >
                  Correo<spam className="red"> (*)</spam>
                </label>
                <input
                  id="email"
                  type="email"
                  name="to"
                  // name="email"
                  className={`${montserrat.className} text-[#333334] cursor-pointer input-personalizado`}
                  placeholder="Correo@correo.com"
                  maxLength={250}  
                  {...register("Correo", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Formato de correo no válido",
                    },
                  })}
                />
               {errors?.Correo && (
                  <p className="AlertaCampo">{errors.Correo.message}</p>
                )}
              </div>

              <div className="pt-3 sm:pt-0">
                <label className="pt-0 sm:pt-3 block" for="teléfono">
                  Teléfono<spam className="red"> (*)</spam>
                </label>
                <input
                  type="text"
                  className={`${montserrat.className} text-[#333334] cursor-pointer input-personalizado`}
                  id="telefono"
                  name="Teléfono"
                  placeholder="Teléfono"
                  maxLength={50}  

                  {...register("Telefono", { 
                    required: true, 
                    pattern: {
                      value: /^[0-9]+$/,  // Solo números
                        message: "El Teléfono debe contener solo números"  // Mensaje para el 'pattern'
                    }
                  })}


                />
                {errors?.Telefono?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}

                {errors?.Telefono?.type === "pattern" && (
                  <p className="AlertaCampo">{errors.Telefono.message}</p>
                )}
              </div>

              <div className="pt-3 sm:pt-0 sm:mr-5">
                <label className="pt-0 sm:pt-3 block">Confirmar correo<spam className="red"> (*)</spam></label>
                <input
                  id="confirmEmail"
                  type="email"
                  className={`${montserrat.className} text-[#333334] cursor-pointer input-personalizado`}
                  placeholder="Correo@correo.com"
                  maxLength={250}  
                  {...register("confirmEmail", {
                    required: "Confirma tu correo",
                    validate: (value) =>
                      value === watch("Correo") || "Los correos no coinciden",
                  })}
                />
                  {errors?.confirmEmail && (
                  <p className="AlertaCampo">{errors.confirmEmail.message}</p>
                )}
              </div>

              <div className="pt-3 sm:pt-0 sm:mr-0">
                <label className="pt-0 sm:pt-3  block" for="comentarios">
                  Comentarios (opcional)
                </label>
                <textarea
                  id="comentarios"
                  type="text"
                  name="text"
                  placeholder="Comentarios"
                  maxLength={450}  
                  className={`${montserrat.className} text-[#333334] cursor-pointer input-personalizado`}
                  {...register("Comentarios", { required: false })}
                />
                {errors?.Comentarios?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}
              </div>

              <div className="pt-3 sm:pt-0 sm:mr-5">
                <label className="pt-0 sm:pt-3  block" for="niveleducativo">
                  Nivel educativo del duplicado<spam className="red"> (*)</spam>
                </label>
                <select
                  id="NivelEducativo"
                  type="text"
                  name="text"
                  className={`${montserrat.className} text-[#333334] cursor-pointer input-personalizado`}
                  {...register("NivelEducativo", { required: true })}
                >
                  <option value="">Seleccione..</option>
                  <option value="Primaria">Primaria</option>
                  <option value="Secundaria">Secundaria</option>
                </select>
                {errors?.NivelEducativo?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}
              </div>
            </div>

            <div className="pt-3 grid grid-cols-1  sm:grid-cols-2 gap-5">
              <div class="">
                <label class="control-label" htmlFor="curp">
                  Curp:<spam className="red"> (*)</spam>
                </label>
                <input
                  id="Curp"
                  type="file"
                  accept="image/jpeg,image/jpg,application/pdf"
                  className="w-full"
                  name="file"
                  //onChange={(e) => handleFileChange(e, setFile)}
                  onChange={handleFileChange}
                  {...register("Curp",{required:true})}
                />
               {/* {file && <p>Archivo seleccionado: {file.name}</p>} */}
                 {errors?.Curp?.type === "required" && <p className="AlertaCampo">Por favor seleccione un archivo</p>}

              </div>
              <div className="">
                <label className="w-full" for="ine">
                  Identificación oficial INE con fotografía por ambos lados:<spam className="red"> (*)</spam>
                </label>
                <input
                  id="INE"
                  name="INE"
                  type="file"
                 accept="image/jpeg,image/jpg,application/pdf"
                  className="w-full"
                  onChange={handleFileChange}
                  {...register("Identificacion",{required:true})}
                />
                 {/* {file && <p>Archivo seleccionado: {file.name}</p>}*/}
                 {errors?.Identificacion?.type === "required" && <p className="AlertaCampo">Por favor seleccione un archivo</p>}
              </div>

              <div class="pt-3">
                <label class="control-label" for="fotografia">
                  Fotografía tamaño infantil, con fondo blanco y camisa clara<spam className="red"> (*)</spam>
                </label>
                <input
                  id="foto"
                  name="foto"
                  type="file"
                  accept="image/jpeg,image/jpg,application/pdf"
                  className="w-full"
                  onChange={handleFileChange}
                  {...register("Fotografia",{required:true})}
                />
                 {errors?.Fotografia?.type === "required" && <p className="AlertaCampo">Por favor selecione un archivo</p>}
              </div>
            </div>

            <div className="pt-4">
              <label class="control-">
                <strong>
                  Si usted cuenta con una copia del certificado, favor de
                  incluirlo o mencione el año en el que terminó su primaria y/o
                  secudnaria
                </strong>
              </label>
            </div>

            <div className="pt-3 grid grid-cols-1  sm:grid-cols-2 gap-5">
              <div class="">
                <label class="control-label" for="certificado">
                  Certificado (opcional)
                </label>
                <input
                  id="certi"
                  type="file"
                  accept="image/jpeg,image/jpg,application/pdf"
                  className="w-full"
                  name="certi"
                  onChange={handleFileChange}
                {...register("Certificado",{required:false})}
                />
              </div>
              {errors?.Certificado?.type === "required" && <p className="AlertaCampo">Por favor selecione un archivo</p>}
              <div class="">
                <label class="control-label" for="anio">
                  Año (opcional)
                </label>
                <input
                  id="anio"
                  type="text"
                  name="text"
                  placeholder="Año"
                  maxLength={5}  
                  className={`${montserrat.className} text-[#333334] cursor-pointer input-personalizado`}
                  {...register("Año", { required: false })}
                />
                {errors?.Año?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}
              </div>
            </div>

            <div class="pt-4 form-group">
              <div class="checkbox">
                Acepto términos y condiciones 
                <br />
                <label>
                  <input
                    name="Terminos"
                    type="checkbox"
                    {...register("Terminos", { required: true })}
                  />
                  <spam className="red"> (*)</spam>
                  {errors?.Terminos?.type === "required" && (
                    <p className="AlertaCampo">
                      Por favor acepte el manifiesto
                    </p>
                  )}
                </label>
              </div>
              <p class="text-justify" for="file-01">
                Manifiesto bajo protesta de decir verdad que la información y
                los datos aquí asentados son verdaderos, reconosco que en caso
                de faltar a la verdad, estaré incurrriendo en el delito de
                falsedad de declaración ante una autoridad pública distinta de
                la judicial, y podría se acreedor(a) a una pena de cuatro a ocho
                años de prición y de cien a trecientos días multa(art. 247,
                fracción | del Código Penal Federal), y demás sanciones
                aplicable.
              </p>
            </div>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={setCaptcha}
              //  {...register("Recaptcha",{required:true})}
            />
            {errors?.Recaptcha?.type === "required" && (
              <p className="AlertaCampo">Por favor resuelva el recaptcha</p>
            )}
            <div className="pt-3 pb-3">
              <button
                className="m-auto letras:ml-auto bg-[#611232] text-white py-3 px-3 hover:bg-white hover:text-[#611232] rounded-full border-2 border-[#611232] flex w-full justify-center"
                type="submit"
                value="Enviar"
              >
                Enviar
              </button>
            </div>

            <div className="pt-4 leading-7 justify-start text-[#333334] text-[18px]">
              <p className="pt-3 text-justify font-light">
                En la cuenta{" "}
                <strong>
                  <a className="text-blue-700" href="mailto:inea@inea.gob.mx">
                    inea@inea.gob.mx
                  </a>
                </strong>{" "}
                puedes enviar cualquier duda o comentario tanto del envío,
                descarga o impresión de tu certificado, como de los servicios que
                te ofrecimos.
                <br />
                <br />
                Si te condicionaron o pidieron algo a cambio de la entrega de tu
                certificado o de cualquier otro servicio, DENÚNCIALO al:{" "}
                <strong>
                  <a className="text-blue-700" href="tel:+558000060300">
                    {" "}
                    800-0060-300.
                  </a>
                </strong>{" "}
                Tu denuncia es confidencial y nos permitirá ofrecerte un mejor
                servicio.
                <br />
                <br />
                <strong>Aviso de Privacidad:</strong> Los datos personales
                recabados serán protegidos y serán incorporados y tratados, según
                corresponda, en los sistemas institucionales del INEA que han sido
                debidamente inscrito en el Listado de Sistemas de Datos Personales
                ante el Instituto Nacional de Transparencia, Acceso a la
                Información y Protección de Datos Personales (INAI). Los datos
                recabados en este registro consideran lo establecido en los
                Artículos 16, 17 y 18 de la Ley General de Protección de Datos
                Personales en Posesión de sujetos obligados.
              </p>
            </div>
          </form>
        </div>
      </div>
    </PagSec>
  </div>
);

}


export default Solicitud_duplicados