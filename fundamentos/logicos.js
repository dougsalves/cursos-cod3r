function comprar(trabalhoA, trabalhoB ){
    const sorvete = trabalhoA || trabalhoB
    const Tv50 = trabalhoA && trabalhoB
    const Tv32 = trabalhoA != trabalhoB
    const saudavel = !sorvete

    return {sorvete, Tv50, Tv32, saudavel}
}

console.log(comprar(true, true))
console.log(comprar(true, false))
console.log(comprar(false, true))
console.log(comprar(false, false))