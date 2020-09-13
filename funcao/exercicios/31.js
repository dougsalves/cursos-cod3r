function negativos(dados = []){
    let qtde = 0

    for (let i in dados){
        if (dados[i] < 0)
            qtde++
    }

    console.log(`Dentro do vertor existe(m) ${qtde} numero(s) negativo(s)`)
}

negativos([10,5,-1,4,-3,5,3,-20])