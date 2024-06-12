const mongoose = require('mongoose');

//Define the person schema (hamara jo data hai person ka wo ultimately dikhega kesa)
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['chef','waiter','manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    }

})

//Create Person model (this will help to manipulate the data eg performing CRUD )
const Person =  mongoose.model('Person', personSchema);
module.exports = Person;