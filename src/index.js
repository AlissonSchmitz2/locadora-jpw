const express = require('express')
const cors = require('cors')
const app = express()
const route = {
    "adultos": require('./routes/adultos.js'),
    "usuario": require('./routes/usuario.js'),
    "autenticacao": require('./routes/autenticacao.js')
}

app.listen(process.env.PORT || 8080)
app.use(express.json())
app.use(cors())

app.use('/adultos', route.adultos)
app.use('/usuario', route.usuario)
app.use('/autenticacao', route.autenticacao)