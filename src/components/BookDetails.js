import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import { ACTIONS } from "../reducer/bookReducer";

export default function BookDetails({ book }) {

    const { dispatch } = useContext(BooksContext);

    function deleteBook(id) {
        dispatch({ type: ACTIONS.REMOVE_BOOK, payload: id })
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