import React from "react";
import "./Ubicacion.css";

const Ubicacion = () => {
  return (
    <div
      id="UbicacionDivP"
      className=" container mx-auto px-4 py-8"
    >
      <h2 className="text-3xl font-semibold tracking-wider text-gray-700 ">
        Ubicación
      </h2>
      <hr className="mb-4 border-gray-200 border-t-2"></hr>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-xl text-zinc-800">
          <p>Dirección INEA CDMX:</p>
          <p className="text-xl text-zinc-700">
            Francisco Márquez 160, Colonia Condesa, Cuauhtémoc, 06140 Ciudad de
            México, CDMX
          </p>
          <p>Telefono:</p>
          <p>Horario de atención de 8:00 a 20:00 horas.</p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1at8nJJLYa-9bcZEgHMt-8Nb_cPK8tnI&ehbc=2E312F"
            width="640"
            height="480"
            className="w-full h-64 md:h-96 lg:h-[26rem] border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
