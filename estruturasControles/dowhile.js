function intRandomico(min, max){
    const valorRet = Math.random() * (max - min) + min
    return Math.floor(valorRet)
}

let inteiro = 0

do {
    inteiro = intRandomico(-1,10)
    console.log(`Retornou valor ${inteiro}.`)
} while (inteiro != -1)

console.log('Finalizou')