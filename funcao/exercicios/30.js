function maiorMenor(dados = []){
    let max = dados[0], min = dados[0]

    for (let i in dados){
        if (dados[i] > max){
            max = dados[i]
        }

        if (dados[i] < min){
            min = dados[i]
        }
    }

    console.log(`No vetor o maior é ${max} e o menor é ${min}`)
}

maiorMenor([10,35,3,6,90,100,555,1024])