const express = require('express')
const router = express.Router()
var data = require('../models/adultos')
const autenticarToken = require('../util/autenticar');

router.get('/', async (req, res) => {
    try {
        await autenticarToken(res, req.query.userId, req.query.token);

        const limit = parseInt(req.query.limit) || 15;
        const skip = parseInt(req.query.skip) || 0;
        const nomeFilter = req.query.nome;

        const adultos = await data.find(nomeFilter ? { nome: nomeFilter } : {})
            .limit(limit)
            .skip(skip);

        res.json(adultos);
    } catch (err) {
        throw new Error('Erro ao buscar faixa adultos', 500);
    }
})

router.get('/:id', async (req, res) => {
    try {
        await autenticarToken(res, req.query.userId, req.query.token);

        const id = req.params.id;

        const adultos = await data.findById(id);

        return res.json(adultos);
    } catch (err) {
        throw new Error('Faixa adultos não encontrada!', 404);
    }
})

router.post('/', async (req, res) => {
    try {
        await autenticarToken(res, req.query.userId, req.query.token);

        const adultos = new data(req.body);

        await adultos.save();

        return res.json(adultos);
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

        const adultos = await data.findByIdAndUpdate(id, req.body, { new: true });

        return res.json(adultos);
    } catch (err) {
        throw new Error('Faixa adultos não encontrada!', 404);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await autenticarToken(res, req.query.userId, req.query.token);

        const id = req.params.id;

        const adultos = await data.findByIdAndDelete(id);

        return res.json(adultos);
    } catch (err) {
        throw new Error('Faixa adultos não encontrada!', 404);
    }
})

module.exports = router
