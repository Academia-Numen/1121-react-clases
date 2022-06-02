import { createContext, useState } from "react";

const bookList = [
    { id: 1, title: 'Código Da Vinci', author: 'Dan Brown' },
    { id: 2, title: 'Harry Potter', author: 'J. K. Rowling' },
    { id: 3, title: 'El Principito', author: 'Antoine de Saint-Exupéry' },
]

export const BooksContext = createContext();

export default function BooksContextProvider({ children }) {

    const [books, setBooks] = useState(bookList);

    return (
        <BooksContext.Provider value={{ books, setBooks }}>
            { children }
        </BooksContext.Provider>
    )
};