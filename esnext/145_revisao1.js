// Variaveis declaradas com VAR tem escopo global, 
// com LET tem escopo de bloco
{ 
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)

// Template String usando a "crase" como delimitador
const produto = 'iPad Pro'
console.log(`${produto} é muitoooo caro...`)

// Destructuring
const [l, e, ...tra] = 'Cod3r'
console.log(l, e, tra)

const [x, y] = [1, 5]
console.log(x, y)

const {idade: i, nome} = { nome: 'Dandara', idade:3 }
console.log(nome, i)