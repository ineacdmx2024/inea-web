"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Banner() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://inea-web-backend.onrender.com/api/banner-contingencia?populate=*"
        );
        const json = await res.json();

        setData(json.data.attributes);
      } catch (error) {
        console.error("Error fetching data:", error);
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
      {data?.Encendido ? (
        <div className=" w-full">
          <Image
            src={data.Banner.data[0]?.attributes?.formats?.large?.url}
            alt={data.Nombre_de_la_Imagen || "Imagen sin título"}
            className="w-full h-full object-contain bg-purple-800 "
            width={950}
            height={500}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
