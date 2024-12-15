"use client";

import { useRouter } from "next/navigation";

function DetalleEnlace() {
  const router = useRouter();
  const { slug, titulo, subtitulo, contenido } = router.query; // Accede a los parámetros

  if (!titulo || !subtitulo || !contenido) {
    return <div>Loading...</div>; // O cualquier UI de carga mientras se obtienen los datos
  }

  return (
    <div>
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
      <p>{contenido}</p>
    </div>
  );
}

export default DetalleEnlace;
