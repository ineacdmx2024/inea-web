"use client"
import Swal from 'sweetalert2'
import React,{ useState,useEffect } from 'react'
import PagSec from "@/components/PlantillaPagSec";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, Controller } from "react-hook-form";
import "./TeContactamos.css";
import "react-datepicker/dist/react-datepicker.css";

import { Montserrat } from "next/font/google";


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import { es } from 'date-fns/locale/es';
import { format } from "date-fns"; // Para formatear la fecha




registerLocale('es', es)


const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});




const years = [
  1935,
  1936,
  1937,
  1938,
  1939,
  1940,
  1941,
  1942,
  1943,
  1944,
  1945,
  1946,
  1947,
  1948,
  1949,
  1950,
  1951,
  1952,
  1953,
  1954,
  1955,
  1956,
  1957,
  1958,
  1959,
  1960,
  1961,
  1962,
  1963,
  1964,
  1965,
  1966,
  1967,
  1968,
  1969,
  1970,
  1971,
  1972,
  1973,
  1974,
  1975,
  1976,
  1977,
  1978,
  1979,
  1980,
  1981,
  1982,
  1983,
  1984,
  1985,
  1986,
  1987,
  1988,
  1989,
  1990,
  1991,
  1992,
  1993,
  1994,
  1995,
  1996,
  1997,
  1998,
  1999,
  2000,
  2001,
  2002,
  2003,
  2004,
  2005,
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
  2021,
  2022,
  2023,
  ]; // Agrega más años si es necesario
  
  // const years = range(1990, getYear(new Date()) + 1, 1);
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


function Te_Contactamos() {

  const [datos, setDatos] = useState([]);
  const [captcha, setCaptcha] = React.useState("");
  const [enlaces, setEnlaces] = useState([]);

useEffect(() => {
  const fetchEnlaces = async () => {
    try {
      const resPineados = await fetch(
        `https://inea-web-backend-cg20.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=true&populate=*`,
        {
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache",
          },
        }
      );
      const { data: enlacesPineados } = await resPineados.json();

      if (enlacesPineados.length < 3) {
        const resNoPineados = await fetch(
          `https://inea-web-backend-cg20.onrender.com/api/enlaces-de-interes-laterales?filters[Pinear][$eq]=false&populate=*&sort[0]=Fecha:desc`,
          {
            cache: "no-store",
            headers: {
              "Cache-Control": "no-cache",
            },
          }
        );
        const { data: enlacesNoPineados } = await resNoPineados.json();

        const completados = [
          ...enlacesPineados,
          ...enlacesNoPineados.slice(0, 3 - enlacesPineados.length),
        ];
        setEnlaces(formatearEnlaces(completados));
      } else {
        setEnlaces(formatearEnlaces(enlacesPineados));
      }
    } catch (error) {
      console.error("Error al obtener los enlaces:", error);
    }
  };

  const formatearEnlaces = (items) =>
    items.map((item) => ({
      title: item.attributes.Titulo,
      imageSrc: item.attributes.Imagen?.data?.[0]?.attributes?.url || "/placeholder.svg",
      buttonText: "Ir al sitio",
      link: item.attributes.URL_Externo
        ? item.attributes.URL_Externo
        : `/enlaces-de-interes/${item.attributes.slug}`,
    }));

  fetchEnlaces();
}, []);

       

  const [formData, setFormData] = React.useState({
    to: '',//correo
    subject: 'Asunto predeterminado',
    text: '',
  });

  const {register,handleSubmit,watch, control,formState: { errors }} = useForm();





  const fetchData = async  () => {
    try {

      
           //const res = await fetch(`https://inea-web-backend.onrender.com/api/correo-pre-registros?populate=%2A`)
           const res = await fetch(`https://inea-web-backend-cg20.onrender.com/api/correo-pre-registros?populate=%2A`)

        

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


          var emailData='';

          const maxLengthNombre = 70;
          const truncatedName = data.Nombre.length > maxLengthNombre ? `${data.Nombre.substring(0, maxLengthNombre)}` : data.Nombre;
         
          const maxLengthApellidoMaterno = 70;
          const truncatedApellidoMaterno = data.ApellidoMaterno.length > maxLengthApellidoMaterno ? `${data.ApellidoMaterno.substring(0, maxLengthApellidoMaterno)}` : data.ApellidoMaterno;
         
          const maxLengthApellidoPaterno = 70;
          const truncatedApellidoPaterno = data.ApellidoPaterno.length > maxLengthApellidoPaterno ? `${data.ApellidoPaterno.substring(0, maxLengthApellidoPaterno)}` : data.ApellidoPaterno;
         

            // Formatear la fecha a español
            const formattedDate = format(data.FechaNacimiento, "dd 'de' MMMM 'de' yyyy", { locale: es });


          const maxLengthFechaNacimiento = 90;
          const truncatedFechaNacimiento = formattedDate.length > maxLengthFechaNacimiento ? `${formattedDate.substring(0, maxLengthFechaNacimiento)}` : formattedDate;
         
      
          const maxLengthCorreo= 250;
          const truncatedCorreo = data.Correo.length > maxLengthCorreo ? `${data.Correo.substring(0, maxLengthCorreo)}` : data.Correo;
         
          const maxLengthTelefono= 50;
          const truncatedTelefono = data.Telefono.length > maxLengthTelefono ? `${data.Telefono.substring(0, maxLengthTelefono)}` : data.Telefono;
         
          const maxLengthColonia= 250;
          const truncatedColonia = data.Colonia.length > maxLengthColonia ? `${data.Colonia.substring(0, maxLengthColonia)}` : data.Colonia;
         
 

 

    // console.log(truncatedFechaNacimiento)
    //console.log(Obt_Correo_Generico[0])


   
  
        emailData = {
          data: {
              Para: `${Obt_Correo_Generico[0]},${data.Correo}`,
              subject: formData.subject,
              Mensaje: `
                  Nombre: ${truncatedName} <br>
                  Apellido paterno: ${truncatedApellidoPaterno} <br>
                  Apellido materno: ${truncatedApellidoMaterno} <br>
                  Fecha de nacimiento: ${truncatedFechaNacimiento} <br>
                  Lugar de residencia: ${data.LugardeResidencia} <br>
                  Colonia: ${truncatedColonia} <br>
                  Teléfono de contacto: ${truncatedTelefono} <br>
                  Correo: ${truncatedCorreo} <br>
                  Nivel que desea cursar: ${data.NivelEducativo} <br>
                  Oferta educativa: ${data.OfertaEducativa} <br>
              `,


              Para: `${Obt_Correos[0]},${Obt_Correo_Generico[0]},${data.Correo}`
          }
      };

       


      

        //const response = await fetch('https://inea-web-backend.onrender.com/api/historialde-pre-registros', {
         const response = await fetch('https://inea-web-backend-cg20.onrender.com/api/historialde-pre-registros', {
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
        Enlaces={enlaces}
        Titulo={"Te contactamos"}
      >


      <div className="container mx-auto flex">
        <div className="w-full md:w-auto">
        <div className="mx-auto mb-4 w-full max-w-full md:max-w-[1140px]">
        <div className="pt-4 leading-7 justify-start text-[#333334] text-[18px] ">
            <p className="text-left font-light">
            Si estás interesado en aprender o terminar tu educación básica, en el INEA Ciudad de México
             queremos ayudarte. Llena el formulario con tus datos y elige la opción educativa que más te 
             interese. Esto no es un registro, solo una forma para que podamos comunicarnos contigo y
              brindarte información. Una vez que envíes el formulario, alguien del INEA te contactará 
              para explicarte cómo puedes estudiar de manera presencial o en línea, así como las opciones
               de exámenes disponibles. ¡Queremos apoyarte en tu camino educativo!
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
                Lugar de residencia
              </label>
              <div className="border rounded">
                <select
                  className={`${montserrat.className} text-[#333334]  input-personalizado`}
                  name="LugardeResidencia"
                  id="LugardeResidencia"

                  {...register("LugardeResidencia", { required: true })}
     
                >
                  <option value="Álvaro Obreón">Álvaro Obreón</option>
                  <option value="Ázcapotzalco">Azcapotzalco</option>
                  <option value="Benito Juárez">Benito Juárez</option>
                  <option value="Coyoacán">Coyoacán</option>
                  <option value="Cuajimalpa">Cuajimalpa</option>
                  <option value="Cuauhtémoc">Cuauhtémoc</option>
                  <option value="Gustavo A.Madero">Gustavo A.Madero</option>
                  <option value="Iztacalco">Iztacalco</option>
                  <option value="Iztapalapa">Iztapalapa</option>
                  <option value="La Magdalena Contreras">La Magdalena Contreras</option>
                  <option value="Miguel Hidalgo">Miguel Hidalgo</option>
                  <option value="Milpa Alta">Milpa Alta</option>
                  <option value="Tláhuac">Tláhuac</option>
                  <option value="Talpan">Talpan</option>
                  <option value="Venustiano Caranza">Venustiano Caranza</option>
                  <option value="Xochimilco">Xochimilco</option>
                </select>

                {errors?.LugardeResidencia?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}
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
                         className={`${montserrat.className} text-[#333334] cursor-pointer input-personalizado`}
                       />
                     )}
                   />
           
                   {/* Mostrar mensaje de error si no se selecciona la fecha */}
                   {errors?.FechaNacimiento && (
                     <p className="AlertaCampo">{errors.FechaNacimiento.message}</p>
                   )}
                   </div>
              {/* <div className="sm:mr-5">
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
              </div> */}

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
                  Correo
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
                    required: false,
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
                  Teléfono de contacto<spam className="red"> (*)</spam>
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
                <label className="pt-0 sm:pt-3 block">Confirmar correo</label>
                <input
                  id="confirmEmail"
                  type="email"
                  className={`${montserrat.className} text-[#333334] cursor-pointer input-personalizado`}
                  placeholder="Correo@correo.com"
                  maxLength={250}  
                  {...register("confirmEmail", {
                    required: false,
                    validate: (value) =>
                      value === watch("Correo") || "Los correos no coinciden",
                  })
                }
                />
                  {errors?.confirmEmail && (
                  <p className="AlertaCampo">{errors.confirmEmail.message}</p>
                )}
              </div>
              
              <div className="pt-3 sm:pt-0">
                <label className="pt-0 sm:pt-3 block" for="teléfono">
                  Confirmar teléfono de contacto<spam className="red"> (*)</spam>
                </label>
                <input
                  type="text"
                  className={`${montserrat.className} text-[#333334] cursor-pointer input-personalizado`}
                  id="Confirmartelefono"
                  name="Teléfono"
                  placeholder="Teléfono"
                  maxLength={50}  

                  {...register("Confirmartelefono", { 
                    required: true, 
                    validate: (value) =>
                      value === watch("Telefono") || "Los teléfonos no coinciden",
                
                    pattern: {
                      value: /^[0-9]+$/,  // Solo números
                        message: "El Teléfono debe contener solo números"  // Mensaje para el 'pattern'
                    }
               })}


                />
                 {errors?.Confirmartelefono?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}

                {errors?.Confirmartelefono?.type === "pattern" && (
                  <p className="AlertaCampo">{errors.Confirmartelefono.message}</p>
                )}

               {errors?.Confirmartelefono && (
                  <p className="AlertaCampo">{errors.Confirmartelefono.message}</p>
                )}
              </div>

              <div className="pt-3 sm:pt-0 sm:mr-5">
                <label className="pt-0 sm:pt-3  block" for="colonia">
                  Colonia
                </label>
                <input
                  id="colonia"
                  type="text"
                  name="text"
                  placeholder="Colonia"
                  maxLength={450}  
                  className={`${montserrat.className} text-[#333334] cursor-pointer input-personalizado`}
                  {...register("Colonia", { required: true })}
                />
                {errors?.Colonia?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}
              </div>

              <div className="pt-3 sm:pt-0 sm:mr-5">
                <label className="pt-0 sm:pt-3  block" for="niveleducativo">
                 Nivel que desea cursar<spam className="red"> (*)</spam>
                </label>
                <select
                  id="NivelEducativo"
                  type="text"
                  name="text"
                  className={`${montserrat.className} text-[#333334] cursor-pointer input-personalizado`}
                  {...register("NivelEducativo", { required: true })}
                >
                  <option value="">Seleccione..</option>
                  <option value="Alfabetización">Alfabetización</option>
                  <option value="Primaria">Primaria</option>
                  <option value="Secundaria">Secundaria</option>

                </select>
                {errors?.NivelEducativo?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}
              </div>
              <div className="pt-3 sm:pt-0 sm:mr-5">
                <label className="pt-0 sm:pt-3  block" for="niveleducativo">
                   Oferta educativa de interés<spam className="red"> (*)</spam>
                </label>
                <select
                  id="OfertaEducativa"
                  type="text"
                  name="text"
                  className={`${montserrat.className} text-[#333334] cursor-pointer input-personalizado`}
                  {...register("OfertaEducativa", { required: true })}
                >
                  <option value="">Seleccione..</option>
                  <option value="Presencial (Alfabetización, Primaria y Secundaria)">Presencial (Alfabetización, Primaria y Secundaria)</option>
                  <option value="En línea (Primaria y Secundaria)">En línea (Primaria y Secundaria)</option>
                  <option value="Exámenes diagnósticos (Primaria y Secundaria)">Exámenes diagnósticos (Primaria y Secundaria)</option>
                  <option value="Examen único (Primaria y Secundaria)">Examen único (Primaria y Secundaria)</option>
                </select>
                {errors?.OfertaEducativa?.type === "required" && (
                  <p className="AlertaCampo">Este campo es obligatorio</p>
                )}
              </div>
            </div>

            <div class="pt-4 form-group">
              <div class="checkbox">
                  Aceptación uso de datos
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
              <p class="text-left text-[12px]" for="file-01">
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
                Enviar información
              </button>
            </div>

            {/* <div className="pt-4 leading-7 justify-start text-[#333334] text-[12px]"> */}
            <div className="pt-4  justify-start text-[#333334] text-[12px]">
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


export default Te_Contactamos
