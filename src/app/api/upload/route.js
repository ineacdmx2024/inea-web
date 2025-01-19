import { writeFile } from 'fs/promises';
import path from 'path';

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
  const curpBuffer = Buffer.from(curpBytes);
  const curpFilePath = path.join(process.cwd(), "public", curpFile.name);

  await writeFile(curpFilePath, curpBuffer);


  // Convertir el archivo de Identificación a un buffer y guardarlo
  const identificacionBytes = await identificacionFile.arrayBuffer();
  const identificacionBuffer = Buffer.from(identificacionBytes);
  const identificacionFilePath = path.join(process.cwd(), "public", identificacionFile.name);

  await writeFile(identificacionFilePath, identificacionBuffer);



  
  // Convertir el archivo de fotografia a un buffer y guardarlo
  const fotografiaBytes = await fotografiaFile.arrayBuffer();
  const fotografiaBuffer = Buffer.from(fotografiaBytes);
  const fotagrafiaFilePath = path.join(process.cwd(), "public", fotografiaFile.name);

  await writeFile(fotagrafiaFilePath, fotografiaBuffer);


   
 
 
  // Responder con un mensaje de éxito
  return new Response(
    JSON.stringify({
      message: 'Archivos subidos correctamente',
    }),
    { status: 200 }
  );
}