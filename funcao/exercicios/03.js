function potencia(base = 1, expoente = 1){
    let i = 1
    let res = base

    while (i <  expoente){
        res *= base

        i++
    }

    console.log(`O numero ${base} elevado a potencia ${expoente} é igual a ${res}`)
}

potencia(2,6)