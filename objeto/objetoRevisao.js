const produto = new Object
produto.nome = 'Geladeira'
produto.marca = 'Generica'
produto.preco = 1000

console.log(produto)

const carro = {
    modelo: 'Fit',
    ano: 2004,
    preco: 17000,
    proprietario: {
        nome: 'Douglas',
        idade: 33,
        endereco: {
            logradouro: 'Floro',
            numero: 361
        }
    },
    condutores: [{
        nome: 'Douglas',
        idade: 33
    },{
        nome: 'Daiane',
        idade: 32
    }],
    calculaSeguro(){
        //
    }
}

console.log(carro)

carro.proprietario.endereco.numero = 521
carro['proprietario']['endereco']['logradouro'] = 'Teste'

console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculaSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)