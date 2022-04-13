import "./App.css";
import Boton from "./componentes/Boton";
import BotonClear from "./componentes/BotonClear";
import Pantalla from "./componentes/Pantalla";
import logo from "./imagenes/header.png";

//Hooks
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agrearInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {

    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Ingrese valores')
    }
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={logo} alt="logo" />
      </div>

      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agrearInput}>1</Boton>
          <Boton manejarClic={agrearInput}>2</Boton>
          <Boton manejarClic={agrearInput}>3</Boton>
          <Boton manejarClic={agrearInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agrearInput}>4</Boton>
          <Boton manejarClic={agrearInput}>5</Boton>
          <Boton manejarClic={agrearInput}>6</Boton>
          <Boton manejarClic={agrearInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agrearInput}>7</Boton>
          <Boton manejarClic={agrearInput}>8</Boton>
          <Boton manejarClic={agrearInput}>9</Boton>
          <Boton manejarClic={agrearInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agrearInput}>0</Boton>
          <Boton manejarClic={agrearInput}>.</Boton>
          <Boton manejarClic={agrearInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
