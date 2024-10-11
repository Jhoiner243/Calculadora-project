import freeCodeCampLogo from './images/freecodecamp-logo.png'
import './App.css'
import Boton from './components/Boton'
import Pantalla from './components/Pantalla'
import BotonClear from './components/BotonClear'
import { useState } from 'react'

function App(): JSX.Element {
  const [input, setInput] = useState<string>('')

  const agregarInput = (valor: string) => {
    setInput(input + valor)
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor"> 
        <img src={freeCodeCampLogo} className="freecodecamp-logo" alt="Logo freeCodeCamp" />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>=</Boton>
          <BotonClear manejarClic={() => setInput('')}>Clear</BotonClear>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
      </div>
    </div>
  )
}

export default App;
