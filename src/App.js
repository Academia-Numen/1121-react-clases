import './App.css';
import Componente1 from './components/Componente1';
import Navbar from './components/Navbar';
import ToggleTheme from './components/ToggleTheme';
import BooksContextProvider from './contexts/BooksContext';
import ThemeContextProvider from './contexts/ThemeContext';


function App() {

  return (
    <div className='App'>
      <ThemeContextProvider>

        <div>
          <Navbar theme='dark' />
        </div>

        <BooksContextProvider>
          <Componente1 />
        </BooksContextProvider>

        <ToggleTheme theme='dark' />

      </ThemeContextProvider>
    </div>
  );
}

export default App;
