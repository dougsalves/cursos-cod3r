function soma(){
    let soma = 0
    for (let i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1,45,-5,-20))
console.log(soma(1,2,'teste'))
console.log(soma('a','b','c'))