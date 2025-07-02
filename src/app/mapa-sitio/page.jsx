"use client";
import React from "react";
import PagSec from "@/components/PlantillaPagMS"; 
import Link from "next/link";

export default function MapaDelSitio() {
  return (
    <PagSec Titulo="Mapa del sitio">
      <div className="space-y-6 text-[#333]">
        {/* Sección 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Inicio</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/noticias">Noticias</Link></li>
            <li><Link href="/eventos">Eventos</Link></li>
          </ul>
        </div>

        {/* Sección 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Oferta Educativa</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/alfabetizacion">Alfabetización</Link></li>
            <li><Link href="/primaria">Primaria</Link></li>
            <li><Link href="/secundaria">Secundaria</Link></li>
          </ul>
        </div>

        {/* Sección 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Otros recursos</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/ubicacion">Ubicación</Link></li>
            <li><Link href="/materiales">Materiales</Link></li>
            <li><Link href="/faq">Preguntas frecuentes</Link></li>
          </ul>
        </div>

        {/* Sección 4 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Contacto</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/contacto">Contáctanos</Link></li>
            <li><Link href="/directorio">Directorio</Link></li>
          </ul>
        </div>
      </div>
    </PagSec>
  );
}
