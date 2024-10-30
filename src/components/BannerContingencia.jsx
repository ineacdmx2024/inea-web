"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";

export default function Banner() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://inea-web-backend.onrender.com/api/banner-contingencia?populate=*');
        const json = await res.json();
        console.log("data ", json.data.attributes)
        setData(json.data.attributes); // Ajusta según la estructura de tu respuesta
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar el banner.</p>;


  return (
    <div>
      {data ? (
        <div className='bg-red-700 w-20'>
          {/* <Image
            src={data.Banner.data?.attributes?.formats?.large?.url}
            alt={data.Nombre_de_la_Imagen || "Imagen sin título"}
            className="w-full h-full object-contain rounded-xl "
            width={950}
            height={500}
          /> */}
          {/* Renderiza otros datos que obtengas de la API */}
        </div>
      ) : (
        <p>No se pudo cargar el banner.</p>
      )}
    </div>
  );
}