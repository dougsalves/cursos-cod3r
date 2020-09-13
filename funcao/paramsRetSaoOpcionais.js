function area(larg, alt){
    const retorno = (larg * alt)
    if (retorno > 20){
        console.log(`Valor acima do permitido ${retorno}m2.`)
    } else {
        return retorno
    }
}

console.log(area(2,6))
console.log(area(2))
console.log(area())
console.log(area(2,3,12,34,51))
console.log(area(5,5))
