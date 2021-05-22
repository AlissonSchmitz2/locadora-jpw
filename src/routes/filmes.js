const express = require('express')
const router = express.Router()
var data = require('../models/filmes')
const autenticarToken = require('../util/autenticar');

router.get('/', async (req, res) => {
    try {
        await autenticarToken(res, req.query.userId, req.query.token);

        const limit = parseInt(req.query.limit) || 15;
        const skip = parseInt(req.query.skip) || 0;
        const nomeFilter = req.query.nome;

        const filmes = await data.find(nomeFilter ? { nome: nomeFilter } : {})
            .limit(limit)
            .skip(skip);

        res.json(filmes);
    } catch (err) {
        throw new Error('Erro ao buscar filmes', 500);
    }
})

router.get('/:id', async (req, res) => {
    try {
        await autenticarToken(res, req.query.userId, req.query.token);

        const id = req.params.id;

        const filmes = await data.findById(id);

        return res.json(filmes);
    } catch (err) {
        throw new Error('Filme não encontrado!', 404);
    }
})

router.post('/', async (req, res) => {
    try {
        await autenticarToken(res, req.query.userId, req.query.token);

        const filmes = new data(req.body);

        await filmes.save();

        return res.json(filmes);
    } catch (err) {
        return res.status(422).json({
            'error': 'Campos inválidos'
        });
    }
})

router.put('/:id', async (req, res) => {
    try {
        await autenticarToken(res, req.query.userId, req.query.token);

        const id = req.params.id;

        const filmes = await data.findByIdAndUpdate(id, req.body, { new: true });

        return res.json(filmes);
    } catch (err) {
        throw new Error('Filmes não encontrado!', 404);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await autenticarToken(res, req.query.userId, req.query.token);

        const id = req.params.id;

        const filmes = await data.findByIdAndDelete(id);

        return res.json(filmes);
    } catch (err) {
        throw new Error('Filmes não encontrados!', 404);
    }
})

module.exports = router
