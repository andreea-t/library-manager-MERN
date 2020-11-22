import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
});

export default mongoose.model('books', bookSchema);