const mongoose = require('mongoose')
const config = {
    "user": process.env.MONGO_USER || 'alisson',
    "password": process.env.MONGO_PASS || 'xWyyfL1pQBGZJSqW',
    "db": process.env.MONGO_DB || "Cluster0",
    "server": process.env.MONGO_SERVER || "cluster0.dktgt.mongodb.net"
}

mongoose.connect(`mongodb+srv://${config.user}:${config.password}@${config.server}/${config.db}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('connected', function(){
    console.log('Conectado ao banco');
})

mongoose.connection.on('error', function(err){
    console.log('Erro ao conectar ao banco');
})

mongoose.connection.on('disconnected', (() => {
    console.log('Desconectado do banco');
}));

module.exports = mongoose
