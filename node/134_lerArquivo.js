const fs = require('fs')

const arquivo = __dirname + '/134_arquivo.json'

// sincrono
const dados = fs.readFileSync(arquivo, 'utf-8')
console.log(dados)

// assincrono
fs.readFile(arquivo, 'utf-8', (e, conteudo) => {
    console.log(JSON.parse(conteudo).db.user)
})

const config = require('./134_arquivo.json')
console.log(config)

fs.readdir(__dirname, (err, arquivos) => {
    console.log(arquivos)
})