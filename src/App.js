import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [matches, setMatches] = useState([]);
  const [error, setError] = useState({
    message: '',
    isError: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const [users, setUsers] = useState([]);
  const [errorUser, setErrorUser] = useState({
    message: '',
    isError: false,
  });
  const [isLoadingUser, setIsLoadingUser] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios('http://localhost:800/team')
      .then(res => setMatches(res.data.matches))
      .catch(err => setError({
        message: err.message,
        isError: true,
      }))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      });
  }, []);

  useEffect(() => {
    setIsLoadingUser(true);
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(err => setErrorUser({
        message: err.message,
        isError: true,
      }))
      .finally(() => {
        setTimeout(() => {
          setIsLoadingUser(false);
        }, 1500);
      });
  }, []);

  return (
    <>

      {
        errorUser.isError ? <h4>{errorUser.message}</h4>

          : isLoadingUser ? <h4>Cargando...</h4> :

            <ul>
              {users.map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
      }

      {
        error.isError ? <h4>{error.message}</h4>

          : isLoading ? <h4>Cargando...</h4> :

            <ul>
              {matches.map(match => (
                <li key={match.match}>{match.rival}</li>
              ))}
            </ul>
      }
    </>
  );
}

export default App;
