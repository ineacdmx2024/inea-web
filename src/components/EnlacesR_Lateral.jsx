"use client";
import Link from "next/link";

const Card = ({ title, imageSrc, buttonText, link }) => {
  // Componente funcional que recibe `title`, `imageSrc`, `buttonText`, y `link` como props.

  const handleButtonClick = () => {
    // Función para redirigir al usuario al enlace especificado al hacer clic en el botón.
    window.location.href = link;
  };

  return (
    <Link href={link}>
      {/* Componente de enlace envolvente para que toda la tarjeta sea clicable. */}
      <div className="mb-8 border border-slate-300 rounded-lg h-[400px] letras:h-[440px] p-5 pt-8 flex flex-col justify-between">
        {/* Contenedor principal con estilos para diseño, bordes y espaciado. */}
        <div className="flex flex-col items-center h-full">
          {/* Sección superior de la tarjeta, centrada y verticalmente ajustable. */}
          <img
            src={imageSrc}
            alt={title}
            className="w-11/12 h-auto object-cover rounded-lg"
          />
          {/* Imagen con diseño responsivo, cubriendo el espacio disponible y con bordes redondeados. */}
          <h3 className="my-7 px-4 text-center text-[18px] letras:text-[22px] text-[#333334] font-medium">
            {title}
          </h3>
          {/* Título centrado con tamaño de fuente dinámico para diferentes configuraciones (clase `letras`). */}
        </div>
        <button
          onClick={handleButtonClick}
          className="focus:border-[#611232] focus:border-[5px] 
          bg-[#611232] text-white 
          hover:border-[#611232] hover:border-2 hover:bg-white hover:text-[#611232] 
          text-xs 
          letras:text-[13.5px] py-2 px-4 rounded-full mx-auto block"
        >
          {/* Botón estilizado con efectos visuales para estados de foco y hover, 
              centrado horizontalmente dentro de la tarjeta. */}
          {buttonText}
        </button>
      </div>
    </Link>
  );
};

export default Card;