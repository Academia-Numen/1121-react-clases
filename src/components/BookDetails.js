import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

export default function BookDetails({ book }) {

    const { books, setBooks } = useContext(BooksContext);

    function deleteBook(id) {
        const listaFiltrada = books.filter(book => book.id !== id)
        setBooks(listaFiltrada);
    }

    return (
        <li style={{ padding: '1rem' }} onClick={() => deleteBook(book.id)}>
            <div>
                <span style={{ fontWeight: 'bold', marginRight: 10 }}>Libro:</span> 
                <span style={{ fontStyle: 'italic'}}>{book.title}</span>
            </div>
            <div>
                <span style={{ fontWeight: 'bold', marginRight: 10 }}>Autor: </span> 
                <span style={{ fontStyle: 'italic'}}>{book.author}</span>
            </div>
        </li>
    )
};