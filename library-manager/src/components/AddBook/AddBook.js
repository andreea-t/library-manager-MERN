import React, { useState, useEffect } from 'react';
import './AddBook.css'
import axios from './../../services/axios';

function AddBook() {
    const [form, setForm] = useState({title: '', author: ''});

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
            <form class="addBook__form" onSubmit={handleSubmit}>
                <div class="addBook__form-group">
                    <div class="addBook__label">
                        <label for="title">Title</label>
                    </div>
                    <input class="addBook__input" type="text" name="title" onChange={handleChange}></input>
                </div>

                <div class="addBook__form-group">
                    <div class="addBook__label">
                        <label for="author">Author</label>
                    </div>
                    <input class="addBook__input" type="text" name="author" onChange={handleChange}></input>
                </div>
                
                <div class="addBook__btn-group">
                    <div class="addBook__btnWrapper">
                        <input class="addBook__submit" type="submit"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddBook;