import './App.css';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import NewBookForm from './components/NewBookForm';
import BooksContextProvider from './contexts/BooksContext';

function App() {

  return (
    <div className='App'>
      <BooksContextProvider>
        
        <Navbar />
        <BookList />
        <NewBookForm />

      </BooksContextProvider>
    </div>
  );
}

export default App;
