import { createContext, useEffect, useReducer } from "react";
import bookReducer from "../reducer/bookReducer";

const bookList = [
    { id: 1, title: 'Código Da Vinci', author: 'Dan Brown' },
    { id: 2, title: 'Harry Potter', author: 'J. K. Rowling' },
    { id: 3, title: 'El Principito', author: 'Antoine de Saint-Exupéry' },
]

export const BooksContext = createContext();

function inicializacionDiferida() {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : bookList;
}

export default function BooksContextProvider({ children }) {

    const [books, dispatch] = useReducer(bookReducer, [], inicializacionDiferida);

    useEffect(() => {
        const stringifiedBooks = JSON.stringify(books);
        localStorage.setItem('books', stringifiedBooks);
    }, [books])

    return (
        <BooksContext.Provider value={{ books, dispatch }}>
            { children }
        </BooksContext.Provider>
    )
};