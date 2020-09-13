function jurosComposto(investimento = 1, duracao = 1){
    const taxa = 0.5
    let passou = 1
    let acumulado = 0

    while (passou <= duracao){
        // acumulado += investimento
        acumulado += (acumulado * taxa) / 100
        passou++
    }
    
    return Math.ceil(investimento+acumulado).toFixed(2)
}

function anuidade(mes = 0){
    if(mes > 0 && mes <= 12){
        if (mes > 1){
            console.log(`Anuidade atrasada, valor corrigido = R$ ${jurosComposto(100, mes)}`)
        }else{
            console.log('Anuidade paga no prazo, não tem juros')
        }
    }else{
        console.log('Mês inválido.')
    }
}

anuidade(3)