function funcoes(a, b, operacao = 0){
    switch(operacao){
        case 1:{
            console.log(`A Soma de ${a} + ${b} = ${a + b}`)
            break
        }
        case 2:{
            console.log(`A Subtração de ${a} - ${b} = ${a - b}`)
            break
        }
        case 3:{
            console.log(`A Multiplicação de ${a} * ${b} = ${a * b}`)
            break
        }
        case 4:{
            console.log(`A Divisão de ${a} / ${b} = ${a / b}`)
            break
        }
        default:{
            console.log(`A Soma de ${a} + ${b} = ${a + b}`)
            console.log(`A Subtração de ${a} - ${b} = ${a - b}`)
            console.log(`A Multiplicação de ${a} * ${b} = ${a * b}`)
            console.log(`A Divisão de ${a} / ${b} = ${a / b}`)
        }
    }
}

funcoes(10, 2, 3)