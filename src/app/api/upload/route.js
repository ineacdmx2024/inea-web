// Importa la versión 2 del SDK de Cloudinary y la renombra como "cloudinary"
import {v2 as cloudinary} from 'cloudinary';

  // Configuration Configuración de Cloudinary usando variables de entorno para mantener seguras las credenciales
  cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Nombre de la nube de Cloudinary
    api_key: process.env.CLOUDINARY_API_KEY,       // Clave de la API de Cloudinary
    api_secret: process.env.CLOUDINARY_API_SECRET  // Secreto de la API de Cloudinary
  });

// Exporta una función asíncrona tipo POST que maneja la subida de archivos a Cloudinary
// Esta función recibirá la petición con los archivos enviados desde un formulario
//Enviar archivos imagenes o pdf a cloudinary para que los tome y se envien via correo electronico
export async function POST(request) {

  // Obtener los datos del formulario
  // Obtiene los datos enviados desde el formulario (formData)
  const datas = await request.formData();

  // Recuperar los archivos por sus nombres
  const curpFile = datas.get("Curp");
  const identificacionFile = datas.get("Identificacion");
  const fotografiaFile = datas.get("Fotografia");
  const certificadoFile = datas.get("Certificado");



  // Verifica si los archivos obligatorios fueron enviados
  // Si falta alguno de los tres (Curp, Identificación o Fotografía), retorna un error 400
  // Verificar si ambos archivos fueron enviados
  if (!curpFile || !identificacionFile || !fotografiaFile) {
    return new Response(
      JSON.stringify({ message: 'Faltan archivos' }),
      { status: 400 }
    );
  }

  // Convertir el archivo CURP a un buffer y guardarlo
  const curpBytes = await curpFile.arrayBuffer();
  const Curp_Buffer = Buffer.from(curpBytes);

// Sube el archivo CURP a Cloudinary usando upload_stream (flujo de carga)
// Retorna una promesa que se resuelve con la respuesta de Cloudinary (URL, info, etc.)
const Response_Curp = await new Promise((resolve, rejects)=>{
  cloudinary.uploader.upload_stream({

    folder: 'SOLICITUD_DUPLICADO_CERTIFICADO',  // Especifica el nombre de la carpeta aquí

  },(err,result) =>{

    if(err){
        rejects(err)
    }
        resolve(result)
  } ).end(Curp_Buffer)
  
 });

  // Convertir el archivo de Identificación a un buffer y guardarlo
  const identificacionBytes = await identificacionFile.arrayBuffer();
  const identificacionBuffer = Buffer.from(identificacionBytes);
  
  const Response_Identificacion = await new Promise((resolve, rejects)=>{
    cloudinary.uploader.upload_stream({

      folder: 'SOLICITUD_DUPLICADO_CERTIFICADO',  // Especifica el nombre de la carpeta aquí

    },(err,result) =>{
  
      if(err){
          rejects(err)
      }
          resolve(result)
    } ).end(identificacionBuffer)
    
   });
  
  
  // Convertir el archivo de fotografia a un buffer y guardarlo
  const fotografiaBytes = await fotografiaFile.arrayBuffer();
  const fotografiaBuffer = Buffer.from(fotografiaBytes);


  const Response_Fotografia = await new Promise((resolve, rejects)=>{
    cloudinary.uploader.upload_stream({

      folder: 'SOLICITUD_DUPLICADO_CERTIFICADO',  // Especifica el nombre de la carpeta aquí

    },(err,result) =>{
  
      if(err){
          rejects(err)
      }
          resolve(result)
    } ).end(fotografiaBuffer)
    
   });
  
   var Response_Certificado='';


 if(certificadoFile == "undefined"){

  //No hace nada

 }else{

  const certificadofiaBytes = await certificadoFile.arrayBuffer();
  const certificadoBuffer = Buffer.from(certificadofiaBytes);

  Response_Certificado = await new Promise((resolve, rejects)=>{
   cloudinary.uploader.upload_stream({

     folder: 'SOLICITUD_DUPLICADO_CERTIFICADO',  // Especifica el nombre de la carpeta aquí

   },(err,result) =>{
 
     if(err){
         rejects(err)
     }
         resolve(result)
   } ).end(certificadoBuffer)
   
  });
 }


if(certificadoFile == "undefined"){

    // Responder con un mensaje de éxito
    return new Response(

      JSON.stringify({
        message: 'Archivos subidos correctamente',
        URL_Curp:Response_Curp.secure_url,
        URL_Identificacion:Response_Identificacion.secure_url,
        URL_Fotografia:Response_Fotografia.secure_url,
      }),
      { status: 200 }
    );
  

}else{

    // Responder con un mensaje de éxito
    return new Response(
      JSON.stringify({
        message: 'Archivos subidos correctamente',
        URL_Curp:Response_Curp.secure_url,
        URL_Identificacion:Response_Identificacion.secure_url,
        URL_Fotografia:Response_Fotografia.secure_url,
        URL_Certificado:Response_Certificado.secure_url
      }),
      { status: 200 }
    );

}


}