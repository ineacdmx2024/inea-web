import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/EnlacesR_Lateral";

function InicioSesion() {
  return (
    <div>
      Inicio de sesion
      <Breadcrumb />
      <Card
        title="Explorando Las Estrellas"
        imageSrc="https://imgs.search.brave.com/RAPyqA9Q7HK7hP22bJsUZyXxmMTP1JhhZXpVMjgfr8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXN0cm9taWEuY29t/L3VuaXZlcnNvL2Zv/dG9zL2xhc2VzdHJl/bGxhcy5qcGc"
        buttonText="Ir al sitio"
        link="https://www.astromia.com/universo/lasestrellas.htm"
      />
      <Card
        title="El Arte Del Minimalismo"
        imageSrc="https://imgs.search.brave.com/2dxg5TJM1uHv9oVLCBw3j3GcOQgbjLXLW4lRK4VoTG0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbGJs/b2dkZWxtaW5pbWFs/aXN0YS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMTEv/Y3VhZHJvLW1vbmRy/aWFuLWFydGUtbWlu/aW1hbGlzdGEtODA0/eDEwMjQuanBn"
        buttonText="Ir al sitio"
        link="https://elblogdelminimalista.com/minimalismo/arte-minimalista-movimiento/"
      />
    </div>
  );
}

export default InicioSesion;
