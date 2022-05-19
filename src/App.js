import './App.css';
import { useAxios } from './hooks/useAxios';

function App() {

  const { data, isLoading, error } = useAxios('http://localhost:8000/team');
  const { data: users, isLoading: isLoadingUser, error: errorUser } = useAxios('https://jsonplaceholder.typicode.com/users');

  return (
    <>

      {
        errorUser.isError ? <h4>{errorUser.message}</h4>

          : isLoadingUser ? <h4>Cargando...</h4> :

            users.length !== 0 &&

            <ul>
              {users.map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
      }

      {
        error.isError ? <h4>{error.message}</h4>

          : isLoading ? <h4>Cargando...</h4> :

            data.length !== 0 &&

            <ul>
              {data.matches.map(match => (
                <li key={match.match}>{match.rival}</li>
              ))}
            </ul>
      }
    </>
  );
}

export default App;
