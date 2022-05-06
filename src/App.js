import { useState } from 'react';
import './App.css';
import Contador from './components/Contador';

function App() {

  const [estado, setEstado] = useState('Valor Inicial');

  function actualizarEstado() {
    setEstado('Estado Actualizado');
  }

  return (
    <div>
      <h2>Clase 3</h2>

      <h2>{estado}</h2>
      <button onClick={actualizarEstado}>Actualizar Estado</button>

      <Contador />

    </div>
  );
}

export default App;
