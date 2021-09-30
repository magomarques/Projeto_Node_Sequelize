const { Router } = require('express') // Recurso de ROTAS do Express (acesso aos métodos do Express)
const PessoaController = require('../controllers/PessoaController')
// Caso exista mais de um arquivo na pasta: const PessoaController = require('./controllers/nome_do_arquivo')

const router = Router()

// Rotas da tabela Pessoas:

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)

router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)

router.post('/pessoas', PessoaController.criaPessoa)

router.put('/pessoas/:id', PessoaController.atualizaPessoa)

router.delete('/pessoas/:id', PessoaController.apagaPessoa)

// Rotas da tabela Matriculas (associada a tabela Pessoas):

router.get('/matriculas', PessoaController.pegaTodasAsMatriculas)

router.get('/pessoas/:estudante_id/matriculas/:id', PessoaController.pegaUmaMatricula)

router.post('/pessoas/:estudante_id/matriculas', PessoaController.criarMatricula)

router.put('/pessoas/:estudante_id/matriculas/:id', PessoaController.atualizaMatricula)

router.delete('/pessoas/:estudante_id/matriculas/:id', PessoaController.apagaMatricula)

module.exports = router