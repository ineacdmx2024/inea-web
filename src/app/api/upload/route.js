import {v2 as cloudinary} from 'cloudinary';

  // Configuration
  cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });


//Enviar archivos imagenes o pdf a cloudinary para que los tome y se envien via correo electronico
export async function POST(request) {

  // Obtener los datos del formulario
  const datas = await request.formData();

  // Recuperar los archivos por sus nombres
  const curpFile = datas.get("Curp");
  const identificacionFile = datas.get("Identificacion");
  const fotografiaFile = datas.get("Fotografia");
  const certificadoFile = datas.get("Certificado");




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