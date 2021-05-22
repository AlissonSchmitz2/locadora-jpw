const mongoose = require('../data');

var usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        indexes: { unique: true },
        required: true,
    },
    codigo: {
        type: Number,
        indexes: { unique: true },
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
}, { timestamps: true });

var Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;