import mongoose from 'mongoose';
import AutoIncrement from 'mongoose-sequence'

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
});

const AutoIncrementFactory = AutoIncrement(mongoose);
bookSchema.plugin(AutoIncrementFactory, {inc_field: 'id'});

export default mongoose.model('books', bookSchema);