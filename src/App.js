import { memo, useCallback, useState } from 'react';
import './App.css';

// function ComponenteHijo() {
//   console.log('Soy el componente hijo y me estoy renderizando');
//   return <h1 style={{ background: 'red'}}>Componente Hijo</h1>
// }

const ComponenteHijo = memo(({ funcion, value }) => {
  console.log('Soy el componente hijo y me estoy renderizando');

  funcion(value);

  return <h1 style={{ background: 'red'}}>Componente Hijo</h1>
})

function App() {
  const [estadoLocal, setEstadoLocal] = useState(0);

  function soyUnaFuncion(valor){ console.log(valor, 'Estoy renderizandome')};

  const functionMemoizada = useCallback(soyUnaFuncion, []);

  return (
    <div style={{ background: 'blue', padding: '1rem'}}>
      <h1 >Estado Local Componente Padre: {estadoLocal}</h1>

      <ComponenteHijo funcion={functionMemoizada} value='hello'/>
      
      <button onClick={() => setEstadoLocal(estadoLocal + 1)}>
        Cambiar Estado del Componente Padre
      </button>
    </div>
  );
}

export default App;
