import { createContext, useState } from "react";

export const BooksContext = createContext();

function BooksContextProvider({ children }) {

  const [libros, setLibros] = useState([
    { id: 1, title: 'Código Da Vinci', author: 'Dan Brown' },
    { id: 2, title: 'Harry Potter', author: 'J. K. Rowling' },
    { id: 3, title: 'El Principito', author: 'Antoine de Saint-Exupéry' }
  ]);

  return (
      <BooksContext.Provider value={libros}>
        { children }
      </BooksContext.Provider>
  );
}

export default BooksContextProvider;
