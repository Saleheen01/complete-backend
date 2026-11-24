const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
});

const noteModel = mongoose.model('Note', noteSchema); // for easily do the CRUD operations

module.exports = noteModel; 