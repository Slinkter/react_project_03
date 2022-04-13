import React from "react";

import "../estilos/Boton.css";

function Boton(props) {
  const func_esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <div
      className={`boton-contenedor ${
        func_esOperador(props.children) ? "operador" : " "
      }`.trim()}
    >
      {props.children}
    </div>
  );
}

export default Boton;
