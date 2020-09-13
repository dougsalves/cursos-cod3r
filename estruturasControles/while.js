function intRandomico(min, max){
    const valorRet = Math.random() * (max - min) + min
    return Math.floor(valorRet)
}

let inteiro = 0

while (inteiro != -1){
    inteiro = intRandomico(-1,10)
    console.log(`Retornou valor ${inteiro}.`)
}

console.log('Finalizou')