const express = require('express');
const router = express.Router();
const data = require('../models/autenticacao');

router.post('/', async (req, res) => {
    try {
        req.body.token = Math.random().toString(30).substring(2, 15) + Math.random().toString(30).substring(2, 15);

        const auth = new data(req.body);

        await auth.save();

        return res.json(auth);
    } catch (err) {
        return res.status(422).json({
            'error': 'Invalid fields'
        });
    }
});

module.exports = router;