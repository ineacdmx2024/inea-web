"use client"
import Swal from 'sweetalert2'
import React,{ useState,useEffect } from 'react'
import PagSec from "@/components/PlantillaPagSec";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, Controller } from "react-hook-form";
import "./Duplicados.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { format } from "date-fns"; // Para formatear la fecha
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import { es } from 'date-fns/locale/es';
registerLocale('es', es)
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});



function Solicitud_duplicados() {
  const [startDate, setStartDate] = useState(null);
  const [datos, setDatos] = useState([]);
  const [file, setFile] = useState(null);
  const [captcha, setCaptcha] = React.useState("");

 
  function range(start, end, step) {
    const result = [];
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
    return result;
  }

//-----------------------

function generarAnios(inicio, fin) {
  const years = [];
  for (let i = inicio; i <= fin; i++) {
    years.push(i);
  }
  return years;
}

const years = generarAnios(1935, new Date().getFullYear());


const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Ocubre",
  "Noviembre",
  "Diciembre",
];


const day = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Ocubre",
  "Noviembre",
  "Diciembre",
];


//------------------

 //enlaces laterales
  const [enlacesL, setenlacesL] = useState([]);

  useEffect(() => {
    let enlaces = [];
    const fetchEnlacesL = async () => {
      const resPineados = await fetch(
       // `https://inea-web-backend.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=true&populate=%2A`
        `https://inea-web-backend-cg20.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=true&populate=%2A`
      );
      const { data: enlacesPineados } = await resPineados.json();
      if (enlacesPineados.length < 3) {
        const resNoPineados = await fetch(
         // `https://inea-web-backend.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=false&populate=%2A&sort[0]=Fecha:desc`
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


  const [formData, setFormData] = React.useState({
    to: '',//correo
    subject: 'Asunto predeterminado',
    text: '',
  });

  const {register,handleSubmit,watch, control,formState: { errors }} = useForm();

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 100); // Agregar 100 años

  // Calculando la fecha mínima (100 años atrás)
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 100); // Restar 100 años


//Recuperar archivos adjunto
  const handleFileChange = (event) => {

    const selectedFile = event.target.files[0];

    if (selectedFile) {

      setFile(selectedFile);

    }
  };



  const fetchData = async  () => {
    try {

      //const res = await fetch(`https://inea-web-backend-cg20.onrender.com/api/correos?populate=%2A`)
      //const res = await fetch(`https://inea-web-backend.onrender.com/api/correos?populate=%2A`)
      const res = await fetch(`https://inea-web-backend-cg20.onrender.com/api/correos?populate=%2A`)


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
         
          // Formatear la fecha a español
          const formattedDate = format(data.FechaNacimiento, "dd 'de' MMMM 'de' yyyy", { locale: es });



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


      


          //const response = await fetch('https://inea-web-backend.onrender.com/api/correoineas', {
          //const response = await fetch('https://inea-web-backend-cg20.onrender.com/api/correoineas', {
          const response = await fetch('https://inea-web-backend-cg20.onrender.com/api/correoineas', {
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

  <div className={`${notoSans.className}  text-[#333334]  text-start `}>

    <PagSec
        Enlaces={enlacesL}
        Titulo={"Duplicado de certificado de estudios"}
      >


      <div className="container mx-auto flex">
        <div className="w-full md:w-auto">
        <div className="mx-auto mb-4 w-full max-w-full md:max-w-[1140px]">
        <div className="pt-4 leading-7 justify-start text-[#333334] text-[18px] ">
            <p className="text-left font-light">
               Si recibiste tu certificado en formato impreso antes de 2018 y lo has extraviado, completa el siguiente
               formulario con la información correcta. Ésta será enviada a la Unidad de Operación del INEA en la Ciudad
               de México para solicitar un duplicado o la digitalización de tu certificado de primaria o secundaria 
               expedido por esta institución. Si concluiste en el 2018 o en adelante, accede a 
                 <strong>
                   <a className="text-blue-700" href="https://certificacion.inea.gob.mx/DescCertificado.aspx">
                   este sitio para descargar tu certificado.
                   </a>
                </strong>{" "}
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
                  // className={`${notoSans.className} text-[#333334] cursor-no-drop input-personalizado color-gris`}
                  className={`${notoSans.className} cursor-no-drop box-border border border-solid border-[#ccc] rounded p-2 w-full focus:outline-none focus:border-[#496cec] focus:shadow-[0_0_10px_rgba(173,216,230,0.7)] text-[#d3d3d3]`}
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
                <label className="block">Apellido Paterno
                  {/* <spam className="red">  */}
                  <spam className="text-red-600"> 
                    (*)</spam></label>
                <input
       
                  type="text"
                  name="ApellidoPaterno"
                  // className={`${notoSans.className} text-[#333334] cursor-pointer input-personalizado`}
                  className={`${notoSans.className} text-[#333334] cursor-pointer box-border border border-solid border-[#ccc] rounded p-2 w-full focus:outline-none focus:border-[#496cec] focus:shadow-[0_0_10px_rgba(173,216,230,0.7)]`}
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
                  // <p className="AlertaCampo">
                  <p className="text-red-600">
                  Este campo es obligatorio</p>
                )}

                {errors?.ApellidoPaterno && (
                      // <p className="AlertaCampo">
                      <p className="text-red-600">
                        {errors.ApellidoPaterno.message}
                      </p>
                    )}
              </div>

              <div clclassNameass="sm:ml-3">
                <label className="pt-3 sm:pt-0 block">Apellido Materno
                {/* <spam className="red">  */}
                <spam className="text-red-600"> 
                  (*)</spam></label>
                <input
                  type="text"
                  name="ApellidoMaterno"
                  className="box-border border border-solid border-[#ccc] rounded p-2 w-full sm:w-11/12 focus:outline-none focus:border-[#496cec] focus:shadow-[0_0_10px_rgba(173,216,230,0.7)]"
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
                  // <p className="AlertaCampo">
                  <p className="text-red-600">
                  Este campo es obligatorio</p>
                )}

                {errors?.ApellidoMaterno && (
                      // <p className="AlertaCampo">
                      <p className="text-red-600">
                        {errors.ApellidoMaterno.message}
                      </p>
                    )}
              </div>

              <div clclassNameass="sm:ml-3">
                <label className="pt-3 sm:pt-0 block">Nombre(S)
                  {/* <spam className="red">  */}
                  <spam className="text-red-600"> 
                  (*)</spam></label>
                <input
                  id="Nombre"
                  type="text"
                  name="text"
                  // className={`${notoSans.className} text-[#333334] cursor-pointer input-personalizado`}
                  className={`${notoSans.className} text-[#333334] cursor-pointer box-border border border-solid border-[#ccc] rounded p-2 w-full focus:outline-none focus:border-[#496cec] focus:shadow-[0_0_10px_rgba(173,216,230,0.7)]`}
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
                  // <p className="AlertaCampo">
                  <p className="text-red-600">
                  Este campo es obligatorio</p>
                )}

               {errors?.Nombre && (
                      // <p className="AlertaCampo">
                      <p className="text-red-600">
                        {errors.Nombre.message}
                      </p>
                    )}
              </div>
            </div>

            <div className="pt-3  grid grid-cols-1  sm:grid-cols-2">
         <div className="sm:mr-5">
         <label className="block" for="calendarYear">
               Fecha de nacimiento
               {/* <spam className="red">  */}
               <spam className="text-red-600"> 
                (*)</spam>
             </label>
         <Controller
           control={control}  // Se pasa el 'control' para integrar con react-hook-form
           name="FechaNacimiento"
           rules={{ required: "Este campo es obligatorio" }} // Validación obligatoria
           render={({ field }) => (
             <DatePicker
               {...field}  // Pasamos 'field' para manejar el valor y los cambios
               renderCustomHeader={({
                 date,
                 changeYear,
                 changeMonth,
                 decreaseMonth,
                 increaseMonth,
                 prevMonthButtonDisabled,
                 nextMonthButtonDisabled,
               }) => (
                 <div
                   style={{
                     margin: 10,
                     display: "flex",
                     justifyContent: "center",
                   }}
                 >
                   <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                     {"<"}
                   </button>
 
                   <select
                     value={date.getFullYear()}
                     onChange={({ target: { value } }) => changeYear(Number(value))}
                   >
                     {years.map((option) => (
                       <option key={option} value={option}>
                         {option}
                       </option>
                     ))}
                   </select>
 
                   <select
                     value={months[date.getMonth()]}
                     onChange={({ target: { value } }) =>
                       changeMonth(months.indexOf(value))
                     }
                   >
                     {months.map((option) => (
                       <option key={option} value={option}>
                         {option}
                       </option>
                     ))}
                   </select>
 
                   <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                     {">"}
                   </button>
                 </div>
               )}
               selected={field.value} // Aquí tomamos el valor del campo controlado por react-hook-form
               onChange={field.onChange}  // Asegúrate de manejar el cambio usando field.onChange
               dateFormat="dd/MM/yyyy" // Formato de fecha (día, mes, año)
               placeholderText="DD/MM/AAAA" // Texto de marcador
               locale={es} // Configurar el idioma a español
              //  className={`${notoSans.className} text-[#333334] cursor-pointer input-personalizado`}
               className={`${notoSans.className} text-[#333334] cursor-pointer box-border border border-solid border-[#ccc] rounded p-2 w-full focus:outline-none focus:border-[#496cec] focus:shadow-[0_0_10px_rgba(173,216,230,0.7)]`}
      
             />
           )}
         />
 
         {/* Mostrar mensaje de error si no se selecciona la fecha */}
         {errors?.FechaNacimiento && (
          //  <p className="AlertaCampo">
           <p className="text-red-600">
            {errors.FechaNacimiento.message}</p>
         )}
         </div>

              <div className="">
                <label className="pt-3 sm:pt-0 block">
                  Lugar de nacimiento
                  {/* <spam className="red"> (*)</spam> */}
                  <spam className="text-red-600"> (*)</spam>
                </label>
                <select
                  // className={`${notoSans.className} text-[#333334] cursor-pointer input-personalizado`}
                  className={`${notoSans.className} text-[#333334] cursor-pointer box-border border border-solid border-[#ccc] rounded p-2 w-full focus:outline-none focus:border-[#496cec] focus:shadow-[0_0_10px_rgba(173,216,230,0.7)]`}
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
                  // <p className="AlertaCampo">
                  <p className="text-red-600">
                  Este campo es obligatorio</p>
                )}
              </div>

              <div className="pt-3 sm:pt-0 sm:mr-5">
                <label
                  className="pt-0 sm:pt-3 block"
                  for="email"
                  htmlFor="email"
                >
                  Correo
                  {/* <spam className="red"> (*)</spam> */}
                  <spam className="text-red-600"> (*)</spam>
                </label>
                <input
                  id="email"
                  type="email"
                  name="to"
                  // name="email"
                  // className={`${notoSans.className} text-[#333334] cursor-pointer input-personalizado`}
                  className={`${notoSans.className} text-[#333334] cursor-pointer box-border border border-solid border-[#ccc] rounded p-2 w-full focus:outline-none focus:border-[#496cec] focus:shadow-[0_0_10px_rgba(173,216,230,0.7)]`}
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
                  // <p className="AlertaCampo">
                  <p className="text-red-600">
                    {errors.Correo.message}</p>
                )}
              </div>

              <div className="pt-3 sm:pt-0">
                <label className="pt-0 sm:pt-3 block" for="teléfono">
                  Teléfono
                  {/* <spam className="red"> (*)</spam> */}
                  <spam className="text-red-600"> (*)</spam>
                </label>
                <input
                  type="text"
                  // className={`${notoSans.className} text-[#333334] cursor-pointer input-personalizado`}
                  className={`${notoSans.className} text-[#333334] cursor-pointer box-border border border-solid border-[#ccc] rounded p-2 w-full focus:outline-none focus:border-[#496cec] focus:shadow-[0_0_10px_rgba(173,216,230,0.7)]`}
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
                  // <p className="AlertaCampo">
                  <p className="text-red-600">
                    Este campo es obligatorio</p>
                )}

                {errors?.Telefono?.type === "pattern" && (
                  // <p className="AlertaCampo">
                  <p className="text-red-600">
                    {errors.Telefono.message}</p>
                )}
              </div>

              <div className="pt-3 sm:pt-0 sm:mr-5">
                <label className="pt-0 sm:pt-3 block">Confirmar correo
                  {/* <spam className="red"> (*)</spam></label> */}
                  <spam className="text-red-600"> (*)</spam></label>
                <input
                  id="confirmEmail"
                  type="email"
                  // className={`${notoSans.className} text-[#333334] cursor-pointer input-personalizado`}
                  className={`${notoSans.className} text-[#333334] cursor-pointer box-border border border-solid border-[#ccc] rounded p-2 w-full focus:outline-none focus:border-[#496cec] focus:shadow-[0_0_10px_rgba(173,216,230,0.7)]`}
                  placeholder="Correo@correo.com"
                  maxLength={250}  
                  {...register("confirmEmail", {
                    required: "Confirma tu correo",
                    validate: (value) =>
                      value === watch("Correo") || "Los correos no coinciden",
                  })}
                />
                  {errors?.confirmEmail && (
                  // <p className="AlertaCampo">
                  <p className="text-red-600">
                    {errors.confirmEmail.message}</p>
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
                  // className={`${notoSans.className} text-[#333334] cursor-pointer input-personalizado`}
                  className={`${notoSans.className} text-[#333334] cursor-pointer box-border border border-solid border-[#ccc] rounded p-2 w-full focus:outline-none focus:border-[#496cec] focus:shadow-[0_0_10px_rgba(173,216,230,0.7)]`}
                  {...register("Comentarios", { required: false })}
                />
                {errors?.Comentarios?.type === "required" && (
                  // <p className="AlertaCampo">
                  <p className="text-red-600">
                    Este campo es obligatorio</p>
                )}
              </div>

              <div className="pt-3 sm:pt-0 sm:mr-5">
                <label className="pt-0 sm:pt-3  block" for="niveleducativo">
                  Nivel educativo del duplicado
                  {/* <spam className="red"> (*)</spam> */}
                  <spam className="text-red-600"> (*)</spam>
                </label>
                <select
                  id="NivelEducativo"
                  type="text"
                  name="text"
                  // className={`${notoSans.className} text-[#333334] cursor-pointer input-personalizado`}
                  className={`${notoSans.className} text-[#333334] cursor-pointer box-border border border-solid border-[#ccc] rounded p-2 w-full focus:outline-none focus:border-[#496cec] focus:shadow-[0_0_10px_rgba(173,216,230,0.7)]`}
                  {...register("NivelEducativo", { required: true })}
                >
                  <option value="">Seleccione..</option>
                  <option value="Primaria">Primaria</option>
                  <option value="Secundaria">Secundaria</option>
                </select>
                {errors?.NivelEducativo?.type === "required" && (
                  // <p className="AlertaCampo">
                  <p className="text-red-600">
                    Este campo es obligatorio</p>
                )}
              </div>
            </div>

            <div className="pt-3 grid grid-cols-1  sm:grid-cols-2 gap-5">
              <div class="">
                <label class="control-label" htmlFor="curp">
                  Curp:
                  {/* <spam className="red"> (*)</spam> */}
                  <spam className="text-red-600"> (*)</spam>
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
                 {errors?.Curp?.type === "required" && 
                //  <p className="AlertaCampo">
                 <p className="text-red-600">
                  Por favor seleccione un archivo</p>}

              </div>
              <div className="">
                <label className="w-full" for="ine">
                  Identificación oficial INE con fotografía por ambos lados:
                  {/* <spam className="red"> (*)</spam> */}
                  <spam className="text-red-600"> (*)</spam>
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
                 {errors?.Identificacion?.type === "required" && 
                //  <p className="AlertaCampo">
                 <p className="text-red-600">
                  Por favor seleccione un archivo</p>}
              </div>

              <div class="pt-3">
                <label class="control-label" for="fotografia">
                  Fotografía tamaño infantil, con fondo blanco y camisa clara
                  {/* <spam className="red"> (*)</spam> */}
                  <spam className="text-red-600"> (*)</spam>
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
                 {errors?.Fotografia?.type === "required" && 
                //  <p className="AlertaCampo">
                 <p className="text-red-600">
                  Por favor selecione un archivo</p>}
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
              {errors?.Certificado?.type === "required" && 
              // <p className="AlertaCampo">
              <p className="text-red-600">
                Por favor selecione un archivo</p>}
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
                  // className={`${notoSans.className} text-[#333334] cursor-pointer input-personalizado`}
                  className={`${notoSans.className} text-[#333334] cursor-pointer box-border border border-solid border-[#ccc] rounded p-2 w-full focus:outline-none focus:border-[#496cec] focus:shadow-[0_0_10px_rgba(173,216,230,0.7)]`}
                  {...register("Año", { required: false })}
                />
                {errors?.Año?.type === "required" && (
                  // <p className="AlertaCampo">
                  <p className="text-red-600">
                    Este campo es obligatorio</p>
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
                  {/* <spam className="red"> (*)</spam> */}
                  <spam className="text-red-600"> (*)</spam>
                  {errors?.Terminos?.type === "required" && (
                    // <p className="AlertaCampo">
                    <p className="text-red-600">
                      Por favor acepte el manifiesto
                    </p>
                  )}
                </label>
              </div>
              <p class="text-left  text-[12px]"  for="file-01">
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
              // <p className="AlertaCampo">
              <p className="text-red-600">
                Por favor resuelva el recaptcha</p>
            )}
            <div className="pt-3 pb-3">
              <button
                className="m-auto letras:ml-auto bg-[#611232] text-white py-3 px-3 hover:bg-white hover:text-[#611232] rounded-full border-2 border-[#611232] flex w-full justify-center"                type="submit"
                value="Enviar"
              >
                Enviar
              </button>
            </div>

            <div className="pt-4 justify-start text-[#333334] text-[12px]">
              <p className="pt-3 text-left font-light">
                En la cuenta{" "}
                <strong>
                  <a className="text-blue-700" href="mailto:inea@inea.gob.mx">
                    inea@inea.gob.mx
                  </a>
                </strong>{" "}
                puedes enviar cualquier duda o comentario tanto del envío,
                descarga o impresión de tu certificado, como de los servicios que
                te ofrecimos.
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
