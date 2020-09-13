function calculadora(a = 0, operacao = '', b = 0){
    operacao = operacao.toLocaleLowerCase()

    switch (operacao) {
        case '+':{
            console.log(`${a} ${operacao} ${b} = ${a + b}`)
            break
        }
        case '-':{
            console.log(`${a} ${operacao} ${b} = ${a - b}`)
            break
        }
        case '*':{
            console.log(`${a} ${operacao} ${b} = ${a * b}`)
            break
        }
        case '/':{
            console.log(`${a} ${operacao} ${b} = ${a / b}`)
            break
        }
        default:{
            console.log(`Operação [ ${operacao} ] não suportada.`)
        }
    }
}

calculadora(9, '+', 3)
calculadora(9, '-', 3)
calculadora(9, '*', 3)
calculadora(9, '/', 3)
calculadora(9, '%', 3)