"use client";
import React, { useState, useRef } from "react";

// Este es un componente funcional que toma `title` y `content` como props.
const CollapsiblePanel = ({ title, content }) => {
  // `isOpen` es un estado booleano que controla si el panel está abierto o cerrado.
  // `setIsOpen` es la función que actualiza el estado de `isOpen`.
  // Por defecto, el panel está cerrado (isOpen es false).
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px"); // Estado para la altura del contenido
  const contentRef = useRef(null); // Referencia al contenido
  // Función para alternar entre abrir y cerrar el panel
  const togglePanel = () => {
    setIsOpen(!isOpen);
    // Establece la altura del contenido basado en el tamaño real del contenido.
    setHeight(isOpen ? "0px" : `${contentRef.current.scrollHeight}px`);
  };

  return (
    // Este `div` contiene todo el panel.
    // Le damos algo de padding y un ancho completo.
    <div className="w-full p-2">
      {/* 
        Este es el encabezado del panel.
        `flex justify-between` hace que el título y el ícono estén en extremos opuestos.
        `cursor-pointer` hace que el cursor cambie al estilo de "mano" cuando se pasa por encima.
        Al hacer clic en este `div`, `setIsOpen` invierte el valor de `isOpen`.
      */}
      <div
        className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left bg-gray-200 rounded-lg cursor-pointer"
        onClick={togglePanel}
      >
        {/* Mostramos el título del panel */}
        <span>{title}</span>

        {/* 
          Este es el ícono SVG que indica si el panel está abierto o cerrado.
          `transform transition-transform duration-300` maneja la animación de la rotación del ícono.
          `rotate-180` rota el ícono 180 grados si el panel está abierto.
          `rotate-0` mantiene el ícono en su posición original si el panel está cerrado.
        */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {/* 
            Aquí definimos la forma del ícono, que es una simple flecha hacia abajo. 
            La propiedad `rotate-180` hará que parezca que la flecha apunta hacia arriba cuando el panel esté abierto.
          */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12l-7.5-7.5L4.5 12"
          />
        </svg>
      </div>

      {/* Contenedor del contenido colapsable con transición */}
      <div
        ref={contentRef} // Referencia para calcular la altura
        style={{ maxHeight: `${height}`, transition: "max-height 0.8s ease" }} // Establece la transición de altura
        className="overflow-hidden"
      >
        <div className="px-4 pt-4 pb-2 text-lg text-gray-700">{content}</div>
      </div>
    </div>
  );
};

// Exportamos el componente para que pueda ser utilizado en otros archivos.
export default CollapsiblePanel;
