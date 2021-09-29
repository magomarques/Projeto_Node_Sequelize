const database = require('../models')
// Caso exista mais de um arquivo na pasta: const database = require('../models/nome_do_arquivo')

class PessoaController {

    static async pegaTodasAsPessoas(req, res){

        try{
            // SELECT * FROM Pessoas;
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        
    }    

}

module.exports = PessoaController