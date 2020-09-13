// Object.values, Objeto.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// melhorias na criação de objetos e classos
const nome = 'Douglas'
const pessoa = {
    nome,
    ola() {
        return ', Olá gente!!'
    }
}

console.log(pessoa.nome, pessoa.ola())

//melhorias na classe
class Animal {}
class Dog extends Animal {
    falar() {
        return 'Au au'
    }
}

console.log(new Dog().falar())