"use client";
import React from "react";

export default function RequisitosLiberacion() {
  return (
    <div>
      <div
        id="alert-requisitos-liberacion"
        className="p-4 mb-4 mt-2 border border-[#3a0c1e] rounded-lg bg-yellow-50 text-[#333334]"
        role="alert"
      >
        <div className="flex flex-col gap-4">

          {/* Bloque: Requisitos */}
          <div>
            <h3 className="text-lg font-bold mb-2">Requisitos</h3>
            {/* <ul className="ul-sep"> */}
            <ul className="list-disc ml-[25px]">
              <li className="mb-5 break-words">70% de créditos (licenciatura) o 50% (medio superior).</li>
              <li className="mb-5 break-words">Disponibilidad de 4 horas diarias (entre 9:00 y 18:00 hrs).</li>
            </ul>
          </div>

          {/* Bloque: Documentación */}
          <div>
            <h3 className="text-lg font-bold mb-2">Documentos</h3>
            {/* <ul className="ul-sep"> */}
            <ul className="list-disc ml-[25px]">
              <li className="mb-5 break-words">Carta de presentación de tu escuela.</li>
              <li className="mb-5 break-words">Constancia de créditos y credencial escolar.</li>
              <li className="mb-5 break-words">INE o carta del tutor (si es menor de edad).</li>
              <li className="mb-5 break-words">Acta de nacimiento (si es menor).</li>
              <li className="mb-5 break-words">CURP y comprobante de domicilio (menor a 3 meses).</li>
              <li className="mb-5 break-words">2 fotos tamaño infantil.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
