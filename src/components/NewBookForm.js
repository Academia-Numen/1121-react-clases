import { useContext, useState } from "react";
import { BooksContext } from "../context/BooksContext";

export default function NewBookForm() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const { books, setBooks } = useContext(BooksContext);

    function generateId(books){
        const id = Math.max(0, ...books.map(book => book.id)) + 1;
        return id;
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newBook = { id: generateId(books), title: title, author: author  }

        setBooks(prevState => [...prevState, newBook])

        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Título del Libro"
                required
            />

            <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                type="text"
                placeholder="Autor del Libro" 
                required
            />

            <input type="submit" value="Añadir Libro" />

        </form>
    )
};