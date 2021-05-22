const mongoose = require('../data')

var seriesSchema = new mongoose.Schema({
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

var series = mongoose.model('series', seriesSchema)

module.exports = series