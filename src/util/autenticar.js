const autenticacao = require('../models/autenticacao');

async function autenticarToken(res, userId, token) {
    return new Promise(async (resolve) => {
        if (!userId || !token) {
            return res.status(401).json({
                err: 'Não autorizado'
            });
        }

        try {
            const auth = await autenticacao.find({ user: userId, token: token });

            if (!auth.length) {
                return res.status(401).json({
                    err: 'Não autorizado'
                });
            }
    
            resolve(true);
        } catch (err) {
            return res.status(401).json({
                err: 'Não autorizado'
            });
        }
    });
}

module.exports = autenticarToken;