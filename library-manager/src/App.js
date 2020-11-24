import React from 'react'
import './App.css';
import Books from './components/Books/Books.js'
import AddBook from './components/AddBook/AddBook'

function App() {
  return (
    <div className="App">

            <AddBook></AddBook>

            <Books></Books>  


            {/* Add book */}
                {/* Form with POST */}

            {/* Edit book */}
                {/* Form with UPDATE and DELETE */}

            {/* Add user */}
                {/* Form with POST */}

            {/* Edit user */}
                {/* Form with UPDATE and DELETE */}
    </div>
  );
}

export default App;
