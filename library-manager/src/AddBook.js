import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import TextField from '@material-ui/core/TextField';
import './AddBook.css'
import axios from './axios';

function AddBook() {
    const [form, setForm] = useState({title: '', author: ''});
    // const [title, setTitle] = useState([]);
    // const [author, setAuthor] = useState([]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const validate = () => {
        let err = {};

        if(!form.title){
            err.title = 'Title is required';
        }
        if(!form.author){
            err.author = 'Author is required';
        }

        return err;
    }

    const showErr  = (errorObj) => {
        let errMsg = '';

        for(let err in errorObj) {
            errMsg += `${errorObj[err]}. `;
        }

        alert(`Error ${errMsg}`);
    }

    const postBook = async (data) => {
        axios.post('/books', form)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();

        if(Object.keys(errs).length === 0){
            await postBook(form);
            setForm({title: '', author: ''});
        }
        else {
            showErr(errs);
        }
    }

    return (
        <div className="addBook">
            
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" onChange={handleChange}></input>
                <input type="text" name="author" onChange={handleChange}></input>

                <input type="submit"></input>
            </form>
        </div>
    )
}

export default AddBook;