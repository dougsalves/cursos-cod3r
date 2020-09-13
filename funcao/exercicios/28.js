const exibePares = function(vetor = []){
    for (let i in vetor){
        if ((vetor[i] % 2) == 0){
            console.log(vetor[i])
        }
    }
}

exibePares([0,1,2,3,4,5,6,7,8,9,10,20,537,1024])