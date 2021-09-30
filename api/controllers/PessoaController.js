const database = require('../models')
// Caso exista mais de um arquivo na pasta: const database = require('../models/nome_do_arquivo')

class PessoaController {

    // 1. Métodos referentes a tabela Pessoas:

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
            const umaPessoa = await database.Pessoas.findOne({ where: { id: Number(id) }})
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
            const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) }})
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

    // Métodos referentes a tabela Matrículas:

    static async pegaTodasAsMatriculas(req, res){

        try{
            const todasAsMatriculas = await database.Matriculas.findAll()
            return res.status(200).json(todasAsMatriculas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaMatricula(req, res) {

        // Para acessar a tabela Matriculas associada a tabela Pessoas:
        // http://localhost:3000/pessoas/2/matriculas/1
        // http://localhost:3000/pessoas/:estudante_id/matriculas/id

        const { estudante_id, id } = req.params

        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(id),
                    estudante_id: Number(estudante_id)
                }
            })
            return res.status(200).json(umaMatricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarMatricula(req, res) {

        // Para acessar a tabela Matriculas associada a tabela Pessoas:
        // http://localhost:3000/pessoas/2/matriculas
        // http://localhost:3000/pessoas/:estudante_id/matriculas

        const { estudante_id } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudante_id) }
        
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaMatricula(req, res) {

        // Para acessar a tabela Matriculas associada a tabela Pessoas:
        // http://localhost:3000/pessoas/5/matriculas/4
        // http://localhost:3000/pessoas/:estudante_id/matriculas/id

        const { estudante_id, id } = req.params
        const novosDados = req.body

        try {
            await database.Matriculas.update(novosDados, {
                where: {
                    id: Number(id),
                    estudante_id: Number(estudante_id)
                }
            })
            const matriculaAtualizada = await database.Matriculas.findOne({ where: {id: Number(id) }})
            return res.status(200).json(matriculaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaMatricula(req, res) {

        // Para acessar a tabela Matriculas associada a tabela Pessoas:
        // http://localhost:3000/pessoas/5/matriculas/4
        // http://localhost:3000/pessoas/:estudante_id/matriculas/id

        const { estudante_id, id } = req.params

        try {
            await database.Matriculas.destroy({
                // Este WHERE é IMPORTANTE se chamar destroy() vazio vai apaga toda a tabela
                where: {
                    id: Number(id),
                    estudante_id: Number(estudante_id)
                }
            })
            // Tem que fazer algum tratamento pois o SQL executa sem alterar linhas
            // e retorna mensagem de sucesso sem deletar:
            // Exemplo: http://localhost:3000/pessoas/5/matriculas/1
            return res.status(200).json({ mensagem: `ID = ${id} foi deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController