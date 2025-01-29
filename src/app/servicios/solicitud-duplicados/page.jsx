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
          const res = await fetch(`http://localhost:1337/api/correos?populate=%2A`)

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
      Swal.fire({
        title: '',
        text: '¡Datos capturados correctamente!',
        icon: 'warning',
        showCancelButton: true,  // Muestra el botón de Cancelar
        confirmButtonColor: '#3085d6',  // Color del botón de Confirmar
        cancelButtonColor: '#d33',  // Color del botón de Cancelar
        confirmButtonText: 'OK',  // Texto del botón de Confirmar
        cancelButtonText: 'Cancelar',  // Texto del botón de Cancelar
        allowOutsideClick: false,  // Deshabilitar el clic fuera para cerrar
        allowEscapeKey: false,  // Deshabilitar la tecla Esc para cerrar
      }).then(async (result) => {  // Asegúrate de usar async aquí para poder usar await
      if (result.isConfirmed) {
        // El usuario hizo clic en 'OK'
        console.log('El usuario aceptó.');

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
          console.log(RESDATA);

          var emailData='';

          if(RESDATA.URL_Certificado){
            console.log("true")
            
            emailData = {
              data: {
                  Para: `${Obt_Correo_Generico[0]},${data.Correo}`,
                  subject: formData.subject,
                  Mensaje: `
                      Nombre: ${data.Nombre} <br>
                      Apellido materno: ${data.ApellidoMaterno} <br>
                      Apellido paterno: ${data.ApellidoPaterno} <br>
                      Fecha de nacimiento: ${data.FechaNacimiento} <br>
                      Lugar de nacimiento: ${data.LugarNacimiento} <br>
                      Correo: ${data.Correo} <br>
                      Teléfono: ${data.Telefono} <br>
                      Comentarios: ${data.Comentarios} <br>
                      Nivel del duplicado: ${data.NivelEducativo} <br>
                      Año: ${data.Año} <br>
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
console.log("else")
        
            
        emailData = {
          data: {
              Para: `${Obt_Correo_Generico[0]},${data.Correo}`,
              subject: formData.subject,
              Mensaje: `
                  Nombre: ${data.Nombre} <br>
                  Apellido materno: ${data.ApellidoMaterno} <br>
                  Apellido paterno: ${data.ApellidoPaterno} <br>
                  Fecha de nacimiento: ${data.FechaNacimiento} <br>
                  Lugar de nacimiento: ${data.LugarNacimiento} <br>
                  Correo: ${data.Correo} <br>
                  Teléfono: ${data.Telefono} <br>
                  Comentarios: ${data.Comentarios} <br>
                  Nivel del duplicado: ${data.NivelEducativo} <br>
                  Año: ${data.Año} <br>
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


        

        const response = await fetch('http://localhost:1337/api/correoineas', {
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
      } else if (result.isDismissed) {
        // El usuario hizo clic en 'Cancelar' o cerró el modal
        console.log('El usuario canceló la acción.');
      }
    });

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
          <p className="text-justify">
            La siguiente información será enviada a la Unidad de Operación del INEA
            Ciudad de México para tramitar el duplicado de un certificado de primaria
            o secundaria expedido por es institucióon. Por eso, es importante que llenes
            correctamente los campos que se solicitan.
          </p>

          <label class="pt-3 control-label flex justify-center">
            <strong>
              Todos los servicios que proporciona el INEA son gratuitos.
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
                  className="w-full border rounded bg-neutral-200	"
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
              <div className="sm:mr-7">
                <label className="block">Apellido Paterno<spam className="red"> (*)</spam></label>
                <input
                  type="text"
                  name="ApellidoPaterno"
                  className="border rounded p-2  w-full"
                  id="AppellidoPaterno"
                  placeholder="Apellido Paterno"
                  {...register("ApellidoPaterno", { required: true })}
                />
                {errors?.ApellidoPaterno?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}
              </div>

              <div clclassNameass="">
                <label className="pt-3 sm:pt-0 block">Apellido Materno<spam className="red"> (*)</spam></label>
                <input
                  type="text"
                  name="ApellidoMaterno"
                  className="border rounded p-2 w-full sm:w-11/12"
                  id="title"
                  placeholder="Apellido Materno"
                  {...register("ApellidoMaterno", { required: true })}
                />
                {errors?.ApellidoMaterno?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}
              </div>

              <div clclassNameass="sm:ml-5">
                <label className="pt-3 sm:pt-0 block">Nombre(S)<spam className="red"> (*)</spam></label>
                <input
                  id="Nombre"
                  type="text"
                  name="text"
                  className="border rounded w-full"
                  placeholder="Nombre(S)"
                  {...register("Nombre", { required: true })}
                />
                {errors?.Nombre?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
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
                  className="border rounded w-full"
                  placeholder="DD/MM/AAAA"
                  name="Fecha de nacimiento"
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
                  className="border rounded  w-full"
                  name="Lugar de nacimiento"
                  id="LugarNacimiento"
                  {...register("LugarNacimiento", { required: true })}
                >
                  <option value="">Seleccione..</option>
                  <option value="Aguascalientes">Aguascalientes</option>
                  <option value="Baja California">Baja California</option>
                  <option value="Baja California Sur">
                    Baja California Sur
                  </option>
                  <option value="Campeche">Campeche</option>
                  <option value="Ciudad de México">Ciudad de México</option>
                  <option value="Chiapas">Chiapas</option>
                  <option value="Chihuahua">Chihuahua</option>
                  <option value="Coahuila de Zaragoza">
                    Coahuila de Zaragoza
                  </option>
                  <option value="Colima">Colima</option>
                  <option value="Durango">Durango</option>
                  <option value="Estado de México">Estado de México</option>
                  <option value="Guanajuato">Guanajuato</option>
                  <option value="Guerrero">Guerrero</option>
                  <option value="Hidalgo">Hidalgo</option>
                  <option value="Jalisco">Jalisco</option>
                  <option value="Michuacan de Ocampo">
                    Michuacan de Ocampo
                  </option>
                  <option value="Morelos">Morelos</option>
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
                  className="border rounded  w-full"
                  placeholder="Correo@correo.com"
                  {...register("Correo", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Formato de correo no válido",
                    },
                  })}
                />
                {errors?.Correo?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}
                {errors?.Correo?.type === "pattern" && (
                  <p className="AlertaCampo">{errors.Correo.message}</p>
                )}
              </div>

              <div className="pt-3 sm:pt-0">
                <label className="pt-0 sm:pt-3 block" for="teléfono">
                  Teléfono<spam className="red"> (*)</spam>
                </label>
                <input
                  type="text"
                  className="border rounded w-full"
                  id="telefono"
                  name="Teléfono"
                  placeholder="Teléfono"
                  {...register("Telefono", { required: true })}
                />
                {errors?.Telefono?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}
              </div>

              <div className="pt-3 sm:pt-0 sm:mr-5">
                <label className="pt-0 sm:pt-3 block">Confirmar correo<spam className="red"> (*)</spam></label>
                <input
                  id="confirmEmail"
                  type="email"
                  className="border rounded  w-full"
                  placeholder="Correo@correo.com"
                  {...register("confirmEmail", {
                    required: "Confirma tu correo",
                    validate: (value) =>
                      value === watch("Correo") || "Los correos no coinciden",
                  })}
                />
                {errors?.confirmEmail?.type === "required" && (
                  <p className="AlertaCampo">{errors.confirmEmail.message}</p>
                )}
                {errors?.confirmEmail?.type === "validate" && (
                  <p className="AlertaCampo">{errors.confirmEmail.message}</p>
                )}
              </div>

              <div className="pt-3 sm:pt-0 sm:mr-0">
                <label className="pt-0 sm:pt-3  block" for="comentarios">
                  Comentarios(opcional)
                </label>
                <textarea
                  id="comentarios"
                  type="text"
                  name="text"
                  placeholder="Comentarios"
                  className="border rounded w-full"
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
                  className="border rounded  w-full"
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
                  Certificado
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
                  Año
                </label>
                <input
                  id="anio"
                  type="text"
                  name="text"
                  placeholder="Año"
                  className="border rounded  w-full"
                  {...register("Año", { required: false })}
                />
                {errors?.Año?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}
              </div>
            </div>

            <div class="pt-4 form-group">
              <div class="checkbox">
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
                className="m-auto letras:ml-auto bg-[#611232] text-white py-3 px-3 hover:bg-white hover:text-[#611232] rounded-full border-2 border-[#611232] block flex w-full justify-center"
                type="submit"
                value="Enviar"
              >
                Enviar
              </button>
            </div>
            <p className="pt-3 text-justify">
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
          </form>
        </div>
      </div>
    </PagSec>
  </div>
);

}


export default Solicitud_duplicados