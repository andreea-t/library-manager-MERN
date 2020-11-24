import express from 'express';
import mongoose from 'mongoose'
import Cors from 'cors';

import Books from './dbBooks.js'

//App config
const app = express();
const port = process.env.PORT || 8000;
const connection_url = "mongodb+srv://admin:<password>@cluster0.pdng2.mongodb.net/library?retryWrites=true&w=majority";

//Middleware
app.use(express.json());
app.use(Cors());

//DB
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//Endpoints
app.get('/', (req, res) => res.status(200).send("Book manager"));
app.post('/books', (req, res) => {
    const dbBook = req.body;

    Books.create(dbBook, (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
})

app.get('/books', (err, res) => {
    Books.find((err, data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
