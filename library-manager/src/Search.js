import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

function Search() {
    // const [books, setBooks] = useState([]);

    // useEffect(() => {
    //     async function fetchData(){
    //         const req = await axios.get('/books');

    //         setBooks(req.data);
    //     }

    //     fetchData();
    // }, []);

    return (
        <div className="Search">
            <div>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <SearchIcon />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Search book, author, etc." />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Search;