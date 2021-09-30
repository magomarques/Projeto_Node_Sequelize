const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const turmas = require('./turmasRoute')
const niveis = require('./niveisRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(turmas)
    app.use(niveis)
    //app.get('/', (req, res) => res.send('ok'))
}

// Outra maneira:
// module.exports = app => {
//     app.use(
//       bodyParser.json(),
//       bodyParser.urlencoded({ extended: false }),
//       pessoas,
//       niveis,
//       turmas
//       )
//     }