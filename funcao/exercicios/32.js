function mediaVetor(dados = []){
    if(dados.length >= 1){
        let soma = 0

        for (let i in dados){
            soma += dados[i]
        }

        console.log(`A media para os valores do vetor é ${(soma / dados.length).toFixed(2)}`)
    } else {
        console.log("Informe algum valor para calcular")
    }
}

mediaVetor([1,2,3,4,5,6,7,8])
mediaVetor([10,10,10])