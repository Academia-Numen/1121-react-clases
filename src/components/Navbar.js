import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

export default function Navbar() {
    const { books } = useContext(BooksContext);

    return (
        <div>
            <h1>Lista de Lectura</h1>
            <p>Hoy, tu tienes {books.length} libros por leer</p>
        </div>
    )
};