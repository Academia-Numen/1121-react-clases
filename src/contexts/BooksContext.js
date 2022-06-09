import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import bookReducer from "../reducers/bookReducer";

export const BooksContext = createContext();

export default function BooksContextProvider({ children }) {

    const [books, dispatch] = useLocalStorage('books', bookReducer);

    return (
        <BooksContext.Provider value={{ books, dispatch }}>
            { children }
        </BooksContext.Provider>
    )
};