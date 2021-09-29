const { Router } = require('express') // Recurso de ROTAS do Express (acesso aos métodos do Express)
const PessoaController = require('../controllers/PessoaController')
// Caso exista mais de um arquivo na pasta: const PessoaController = require('./controllers/nome_do_arquivo')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)

router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)

router.post('/pessoas', PessoaController.criaPessoa)

router.put('/pessoas/:id', PessoaController.atualizaPessoa)

router.delete('/pessoas/:id', PessoaController.apagaPessoa)

module.exports = router