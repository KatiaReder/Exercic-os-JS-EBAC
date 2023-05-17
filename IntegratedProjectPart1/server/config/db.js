const mongoose = require('mongoose')

const db = 'mongodb+srv://meuapp:12345@cluster0.lctqesv.mongodb.net/?retryWrites=true&w=majority'

const connection = mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection