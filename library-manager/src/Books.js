import React, { useState, useEffect } from 'react';
import axios from './axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './Books.css';
import Search from './Search'

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
                <Paper className="books">
                    <Table className="books__table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Author</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {books.map(book => (
                            <TableRow key={book.title}>
                            <TableCell align="center">{book.id}</TableCell>
                            <TableCell align="center">{book.title}</TableCell>
                            <TableCell align="center">{book.author}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Paper>
        </div>
    )
}

export default Books;