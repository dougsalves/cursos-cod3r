function avaliaPontuacao(pontos){
    let melhor = pontos[0]
    let vzrec = 0
    let pior = pontos[0]
    let idxpior = 0

    for (let i in pontos){
        if (pontos[i] > melhor){
            melhor = pontos[i]
            vzrec++            
        }
            
        if (pontos[i] < pior){
            pior = pontos[i]
            idxpior = i
        }
    }

    console.log(`${vzrec}, ${++idxpior}`)
}

console.log(avaliaPontuacao([10, 20, 20, 8, 25, 3, 0, 30, 1]))