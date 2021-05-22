const express = require('express')
const cors = require('cors')
const app = express()
const route = {
    "adultos": require('./routes/adultos.js'),
    "filmes": require('./routes/filmes.js'),
    "series": require('./routes/series.js'),
    "usuario": require('./routes/usuario.js'),
    "autenticacao": require('./routes/autenticacao.js')
}

app.listen(process.env.PORT || 8080)
app.use(express.json())
app.use(cors())

app.use('/adultos', route.adultos)
app.use('/filmes', route.filmes)
app.use('/series', route.series)
app.use('/usuario', route.usuario)
app.use('/autenticacao', route.autenticacao)