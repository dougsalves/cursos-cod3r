// Funções novas inseridas no ES2015
const pessoa = {
    nome: 'Douglas',
    idade: 33,
    endereco: {
        logradouro: 'Floro de Oliveira',
        numero: 361
    }
}

const {nome} = pessoa
console.log(nome)

const {idade: i} = pessoa
console.log(i)

const {endereco: {logradouro}} = pessoa
console.log(logradouro)

//const {conta: {agencia, numero}} = pessoa
//console.log(agencia)