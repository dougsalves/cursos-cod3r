Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const resultado = function(nota){
    if (nota.entre(9, 10)){
        console.log('Honra')
    } else if (nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else {
        console.log('Nota Invalida')
    }
}

resultado(9.5)
resultado(7.5)
resultado(5)
resultado(2)
resultado(-1)
resultado(11)