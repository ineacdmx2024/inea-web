"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          //"https://inea-web-backend-production.up.railway.app/api/banner-contingencia?populate=*"
          "https://inea-web-backend-production.up.railway.app/api/banner-contingencia?populate=*"
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

  const renderTextWithLineBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <p key={index} className="text-center text-gray-700">
        {line.trim()}
      </p>
    ));
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar el banner.</p>;

  return (
    <div>
      {data?.Encendido ? (
        <div className="w-full m-auto">
          <Link href="/comunicado-contingencia">
            <Image
              src={data.Banner.data[0]?.attributes?.url}
              alt={data.Nombre_de_la_Imagen || "Imagen sin título"}
              className="w-full h-full object-contain hidden medida3:block"
              width={2500}
              height={500}
            />
            <Image
              src={data.Banner_moviles.data[0]?.attributes?.url}
              alt={data.Nombre_de_la_Imagen || "Imagen sin título"}
              className="w-full h-full object-contain bg-purple-800 block medida3:hidden"
              width={900}
              height={600}
            />
          </Link>
          {data.Texto && (
            <div className="mt-4 px-4">
              {renderTextWithLineBreaks(data.Texto)}
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
