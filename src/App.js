import { useState } from 'react';
import './App.css';

function ListItem({ id, contenido, deleteItem }) {

  function eventHandler() {
    deleteItem(id)
  };

  return <li onClick={eventHandler}> {contenido} </li>
}

function App() {

  const [items, setItems] = useState([
    { id: 1, value: 'Regar las plantas' },
    { id: 2, value: 'Salir a correr' },
    { id: 3, value: 'Estudiar React' },
    { id: 4, value: 'Comer sano' },
  ]);

  function eliminarItem(identificador) {
    const listaFiltrada = items.filter(item => item.id !== identificador);
    setItems(listaFiltrada);
  }

  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} contenido={item.value} id={item.id} deleteItem={eliminarItem} />
      ))}
    </ul>
  );
}

export default App;
