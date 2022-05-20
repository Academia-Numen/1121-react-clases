import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import { useAxios } from './hooks/useAxios';

const selectsData = [
  { value: 'Arabia Saudita', label: 'Arabia Saudita' },
  { value: 'México', label: 'México' },
  { value: 'Polonia', label: 'Polonia' },
]

function App() {

  const { data, isLoading, error } = useAxios('http://localhost:8000/team');

  const [option, setOption] = useState('');

  function selectHandler(e) {
    setOption(e.target.value);
  }

  return (
    <>

      <h2>Selección Argentina</h2>

      <form>
        <label htmlFor="matches">Selecciona un Rival: </label>
        <select
          name="matches"
          id="matches"
          onChange={selectHandler}
          defaultValue="">

          <option value="" disabled>Selecciones: </option>

          {
            selectsData.map((item, key) => (
              <option key={key} value={item.value}>
                {item.label}
              </option>
            ))
          }
        </select>
      </form>

      <h2 style={{ marginLeft: 20 }}>Partidos de la Fase de Grupos: </h2>
      {
        error.isError ? <h4>{error.message}</h4>

          : isLoading ? <h4>Cargando...</h4> :

            data.length !== 0 &&

            <ul>
              {data.matches.map(match => {
                  return <Card
                    key={match.match}
                    content={match}             
                    color={match.rival === option ? 'radial-gradient(yellow 0 15%, white 30%)' : 'skyblue'}
                  />
                })
              }
            </ul>
      }
    </>
  );
}

export default App;
