import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import BookDetails from "./BookDetails";

export default function BookList() {
    const { books } = useContext(BooksContext);

    return (
        <div>
            <ul>
                { books.map(book => <BookDetails book={book} key={book.id}/>) }
            </ul>
        </div>
    )
};