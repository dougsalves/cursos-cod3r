function fatorial(numero = 1){
    let loop = numero-1

    while (loop >= 1){
        loop--
        numero += (numero*loop)
    }

    console.log(`O resultado é ${numero}`)
}

fatorial(4)