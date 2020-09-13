function aprovado(nota){
    if (nota >= 7){
        console.log(`Aprovado com nota ${nota}`)
    }
}

aprovado(8.1)
aprovado(5)

function isTrue(valor){
    if (valor){
        console.log(`Valor "${valor}" é verdadeiro`)
    }
}

isTrue()
isTrue(null)
isTrue(undefined)
isTrue(NaN)
isTrue('')
isTrue(0)
isTrue(-1)
isTrue(' ')
isTrue('!')
isTrue([])
isTrue([1, 'teste'])
isTrue({})