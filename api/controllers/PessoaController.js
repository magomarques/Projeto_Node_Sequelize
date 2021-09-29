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

    static async pegaUmaPessoa(req, res) {

        const { id } = req.params

        try {
            // SELECT * FROM Pessoas WHERE id = ?;
            const umaPessoa = await database.Pessoas.findOne( { where: { id: Number(id) }})
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa (req, res) {

        const novaPessoa = req.body

        try {
            // INSERT INTO Pessoas (nome, ativo, email, role, createdAt, updatedAt)
            // VALUES ("mago", true, "mago@mago.com", "docente", now(), now());
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa (req, res) {

        const { id } = req.params
        const novosDados = req.body

        try {
            // UPDATE Pessoas SET email = "mago@mago.com", updatedAt = ? WHERE id = ?
            await database.Pessoas.update(novosDados, { where: { id: Number(id) }})
            
            // OBS.: No Sequelize o método UPDATE retorna 0 ou 1, temos que retornar uma consulta findOne.
            
            // SELECT * FROM Pessoas WHERE id = ?;
            const pessoaAtualizada = await database.Pessoas.findOne( { where: { id: Number(id) }})
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.staus(500).json(error.message)
        }
    }

    static async apagaPessoa(req, res) {

        const { id } = req.params

        try {
            await database.Pessoas.destroy({ where: { id: Number(id) }})
            return res.status(200).json({ mensagem: `ID = ${id} foi deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = PessoaController