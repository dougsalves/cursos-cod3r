function jurosSimples(investimento = 1, taxa = 0, duracao = 1){
    let passou = 1
    let acumulado = 0

    while (passou <= duracao){
        acumulado += investimento
        passou++
    }
    acumulado += (acumulado * taxa) / 100
    
    console.log(`Juros Simples - CI=${investimento} TX=${taxa} DR=${duracao} - R$ ${acumulado.toFixed(2).replace('.',',')}`)
}

function jurosComposto(investimento = 1, taxa = 0, duracao = 1){
    let passou = 1
    let acumulado = 0

    while (passou <= duracao){
        acumulado += investimento
        acumulado += (acumulado * taxa) / 100
        passou++
    }
    
    console.log(`Juros Compostos - CI=${investimento} TX=${taxa} DR=${duracao} - R$ ${acumulado.toFixed(2).replace('.',',')}`)
}

jurosSimples(10, 10, 3)
jurosComposto(10, 10, 3)