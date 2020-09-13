//função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(1,5)
imprimirSoma(4)
imprimirSoma(4,3,2,1)

function soma(a, b = 0){
    return a + b
}

console.log(soma(9, 8))
console.log(soma(7))
console.log(soma())
