// Importar:
const express = require('express')
//const bodyParser = require('body-parser')
const routes = require('./routes')
// Caso exista mais de um arquivo na pasta: const routes = require('./routes/nome_do_arquivo')

const app = express()

// app.use(bodyParser.json())

const port = 3000

routes(app)

// app.get('/teste', (req, res) => res
//     .status(200)
//     .send({mensagem: 'Bem vindo à API'})
// )

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

module.exports = app