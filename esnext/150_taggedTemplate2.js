function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const custo = [29.9, 11]
console.log(real `A vista é ${custo[0]} ou em 3x de ${custo[1]}`)