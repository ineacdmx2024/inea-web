import React from "react";
import "./Ubicacion.css";

const Ubicacion = () => {
  return (
    <div id="UbicacionDivP" className="container w-auto mx-auto px-4 py-0 ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div id="direccion" className="text-s text-zinc-800">
          <br />
          <p>Dirección INEA Ciudad de México:</p>
          <p className="text-s text-zinc-700">
            Francisco Márquez 160 Planta Baja, Col. Condesa, Alcaldía
            Cuauhtémoc, C.P. 06140, Ciudad de México.
          </p>
          <br />
          <p>
            Atención telefónica 800 8906 310, Conmutador 55 5211-0815 / 55
            5211-0824 / 55 5211-0866 / 55 5211-0798 / 55 5211-0912
          </p>
          <br />
          <p>Horario de atención de 9:00 a 16:00 horas.</p>
          <br />

          <a href="/">Detalles de ubicaciones</a>
        </div>
        <div className="relative w-full h-[45vh]  md:h-[45vh]">
          <iframe
            src="https://www.google.com/maps/d/u/1/embed?mid=11LVXyU_3QKH1JkOXIMVba2bEkN8f_iY&ehbc=2E312F&noprof=1"
            className="w-full h-full border-none rounded-lg"
          />
          {/* Div para ocultar la barra superior */}
          {/* <div className="absolute top-[-1vh] left-0 w-full h-[7.8vh] bg-white" /> */}
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
