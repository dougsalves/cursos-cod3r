const intervalo = function(dados = []){
    let dentro = 0, fora = 0
    for (let i in dados){
        if (dados[i] >= 10 && dados[i] <= 20){
            dentro++
        }else{
            fora++
        }
    }
    console.log(`No vetor informado temos ${dentro} dentro do parametro e ${fora} fora`)
}

intervalo([10,11,12,40,19,4,5,6,7])