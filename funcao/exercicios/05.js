function formataMoeda(valor = 0){
    resultado = valor.toFixed(2).replace('.',',')
    console.log(`R$ ${resultado}`)
}

formataMoeda(0.1 + 0.2)