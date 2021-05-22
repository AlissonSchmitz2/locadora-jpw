const mongoose = require('../data')

var filmesSchema = new mongoose.Schema({
    numero: {
        type: Number,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
})

var filmes = mongoose.model('filmes', filmesSchema)

module.exports = filmes