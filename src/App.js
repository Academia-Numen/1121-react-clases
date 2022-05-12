import axios from 'axios';
import { useEffect, useState } from 'react';
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

  const [users, setUsers] = useState([]);
  const [error, setError] = useState({
    message: '',
    isError: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  function eliminarItem(identificador) {
    const listaFiltrada = items.filter(item => item.id !== identificador);
    setItems(listaFiltrada);
  }

  useEffect(() => {
    setIsLoading(true);
    axios('https://jsonplaceholder.typicode.com/user')
      .then(res => setUsers(res.data))
      .catch(err => setError({
        message: err.message,
        isError: true,
      }))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      });
  }, [items]);

  return (
    <>
      <ul>
        {items.map((item) => (
          <ListItem key={item.id} contenido={item.value} id={item.id} deleteItem={eliminarItem} />
        ))}
      </ul>

      {
        error.isError ? <h4>{error.message}</h4>

          : isLoading ? <h4>Cargando...</h4> :

            <ul>
              {users.map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
      }
    </>
  );
}

export default App;
