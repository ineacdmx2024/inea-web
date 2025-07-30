"use client";
import React from "react";

export default function RequisitosHorarios() {
    return (
    <div
        className="p-4 mb-4 mt-4 border border-gray-300 rounded-lg text-[#333334]"
        role="alert"
    >
        <h3 className="text-lg font-bold mb-2">
        Requisitos y horarios de atención
        </h3>
        <ul className="ul-sep list-disc ml-8">
        <li>
            Solicitud del trámite:{" "}
        <a
            href="https://www10.aefcm.gob.mx:8006/ugd/rce/"
            className="link-hover"
        >
            https://www10.aefcm.gob.mx:8006/ugd/rce/
        </a>
        </li>
        <li>Copia de Acta de Nacimiento o documento equivalente.</li>
        <li>Constancia de CURP (en caso de contar con ella).</li>
        <li>Comprobante original de pago de derechos.</li>
        <li>Antecedentes escolares o referencia de la escuela.</li>
        <li>Identificación oficial con fotografía (en su caso).</li>
        <li>Tiene un costo de $67 (vigente para el año 2023).</li>
        <li>
            El pago puede hacerse en cualquier institución de crédito autorizada,
            excepto Banco Azteca y Bancoppel.
        </li>
        </ul> <br />
        <p>En un horario de Lunes a viernes de 09:00 a 15:00 hrs.</p>
    </div>
    );
}
