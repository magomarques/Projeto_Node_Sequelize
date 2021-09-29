const { Router } = require('express') // Recurso de ROTAS do Express (acesso aos métodos do Express)
const PessoaController = require('../controllers/PessoaController')
// Caso exista mais de um arquivo na pasta: const PessoaController = require('./controllers/nome_do_arquivo')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)

module.exports = router