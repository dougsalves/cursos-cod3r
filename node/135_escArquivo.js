const fs = require('fs')

const produto = {
    nome: "Celular",
    preco: 1249
}

fs.writeFile(__dirname+'/135_arquivoGerado.json', JSON.stringify(produto), (err) => {
    console.log(err || 'Arquivo Gerado!')
})