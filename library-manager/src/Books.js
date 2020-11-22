import React, { useState, useEffect } from 'react';
import axios from './axios';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './Books.css';

function Books() {
    //materialUI

    const styles = theme => ({
        root: {
            width: '100%',
            marginTop: theme.spacing.unit * 3,
            overflowX: 'auto',
        },
        table: {
            minWidth: 700,
        },
    });

    //
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/books');

            setBooks(req.data);
        }

        fetchData();
    }, []);

    console.log(books);

    return (
        <div className="books">
                {/* {books.map((book) => (
                    <div className="book" key={book.title}>
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                    </div>
                ))} */}

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