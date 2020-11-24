import React, { useState, useEffect } from 'react';
import axios from './../../services/axios';
import './Books.css';

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/books');
            setBooks(req.data);
        }
        fetchData();
    }, []);

    return (
        <div className="books">
            <table className="books__table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Author</td>
                    </tr>
                </thead>
                <tbody>
                {books.map(book => (
                    <tr key={book.title}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Books;