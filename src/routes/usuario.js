const express = require('express')
const router = express.Router()
var data = require('../models/usuario')

router.get('/', async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 15;
        const skip = parseInt(req.query.skip) || 0;
        const nomeFilter = req.query.nome;

        const usuarios = await data.find(nomeFilter ? { nome: nomeFilter } : {})
            .limit(limit)
            .skip(skip);

        res.json(usuarios);
    } catch (err) {
        throw new Error('Erro ao buscar listagem de usuários', 500);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const usuarios = await data.findById(id);

        return res.json(usuarios);
    } catch (err) {
        throw new Error('Usuário não encontrado!', 404);
    }
})

router.post('/', async (req, res) => {
    try {
        const usuarios = new data(req.body);

        await usuarios.save();

        return res.json(usuarios);
    } catch (err) {
        return res.status(422).json({
            'error': 'Campos inválidos'
        });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const usuarios = await data.findByIdAndUpdate(id, req.body, { new: true });

        return res.json(usuarios);
    } catch (err) {
        throw new Error('Usuário não encontrado!', 404);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const usuarios = await data.findByIdAndDelete(id);

        return res.json(usuarios);
    } catch (err) {
        throw new Error('Usuário não encontrado!', 404);
    }
})

module.exports = router
