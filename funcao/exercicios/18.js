/* function porExtenso(numero = 0){
    switch (numero){
        case 0:{
            console.log(`O numero ${numero} se escreve "ZERO"`)
            break
        }
        case 1:{
            console.log(`O numero ${numero} se escreve "UM"`)
            break
        }
        case 2:{
            console.log(`O numero ${numero} se escreve "DOIS"`)
            break
        }
        case 3:{
            console.log(`O numero ${numero} se escreve "TRES"`)
            break
        }
        case 4:{
            console.log(`O numero ${numero} se escreve "QUATRO"`)
            break
        }
        case 5:{
            console.log(`O numero ${numero} se escreve "CINCO"`)
            break
        }
        case 6:{
            console.log(`O numero ${numero} se escreve "SEIS"`)
            break
        }
        case 7:{
            console.log(`O numero ${numero} se escreve "SETE"`)
            break
        }
        case 8:{
            console.log(`O numero ${numero} se escreve "OITO"`)
            break
        }
        case 9:{
            console.log(`O numero ${numero} se escreve "NOVE"`)
            break
        }
        case 10:{
            console.log(`O numero ${numero} se escreve "DEZ"`)
            break
        }
        default:
            console.log(`Numero ${numero} fora do range`)
    }
} */

function porExtenso(numero = 0){
    const numeros = ['ZERO','UM','DOIS','TRES','QUATRO','CINCO','SEIS','SETE','OITO','NOVE','DEZ']

    if(numero > 10){
        console.log(`Numero ${numero} fora do range`)
    } else {
        console.log(`O numero ${numero} se escreve ${numeros[numero]}`)
    }
}

porExtenso(0)
porExtenso(1)
porExtenso(2)
porExtenso(3)
porExtenso(4)
porExtenso(5)
porExtenso(6)
porExtenso(7)
porExtenso(8)
porExtenso(9)
porExtenso(10)
porExtenso(20)