import './App.css';
import List from './components/List';
import Title from './components/Title';

function App() {

  return (
    <div>
      <Title contenido='Clase 2' estilosPersonalizados={ { color: 'red' } }/>
      <Title contenido='Bienvenidos' estilosPersonalizados={ { color: 'blue' } }/>
      <List />
    </div>
  );
}

export default App;
