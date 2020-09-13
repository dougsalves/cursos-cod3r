// Armazenando funções em variaveis
const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma(5,1)

// Arrow Function
const soma = (a, b) => {
    return a + b
}
console.log(soma(3,9))

// Retorno implicito com arrow function
const subtracao = (a, b) => a - b
console.log(subtracao(20,2))