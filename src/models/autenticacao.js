const mongoose = require('../data');

var autenticacaoSchema = new mongoose.Schema({
    token: String,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    }
}, { timestamps: true });

var autenticacao = mongoose.model('autenticacao', autenticacaoSchema);

module.exports = autenticacao;