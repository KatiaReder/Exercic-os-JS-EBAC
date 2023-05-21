const mongoose = require('mongoose')

const db = 'mongodb+srv://meuapp:kakareder@cluster0.yca8vgd.mongodb.net/properties?retryWrites=true&w=majority';

const connection = mongoose.connect(db, {
    useNewUrlParser: true
})

module.exports = connection