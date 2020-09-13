function aumento(salario = 0, plano = ''){
    plano = plano.toLocaleLowerCase()

    switch (plano) {
        case 'a':{
            console.log(`Pelo plano ${plano}, o salário ${salario} aumenta para ${salario += (salario *= 0.1)}`)
            break
        }
        case 'b':{
            console.log(`Pelo plano ${plano}, o salário ${salario} aumenta para ${salario += (salario *= 0.15)}`)
            break
        }
        case 'c':{
            console.log(`Pelo plano ${plano}, o salário ${salario} aumenta para ${salario += (salario *= 0.2)}`)
            break
        }
        default:{
            console.log(`Plano ${plano} inválido!`)
        }
    }
}

aumento(1000, 'a')
aumento(1000, 'b')
aumento(1000, 'c')
aumento(1000, 'd')