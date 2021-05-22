const mongoose = require('../data')

var adultosSchema = new mongoose.Schema({
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
})

var adultos = mongoose.model('adultos', adultosSchema)

module.exports = adultos
