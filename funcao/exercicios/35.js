let Pilha = [1,2,3,4,5], Add = [6,7,8,9,10]

function adiciona(dest = [], orig = []){
    for (let i in orig){
        dest.push(orig[i])
    }

    console.log(dest)
}

adiciona(Pilha, Add)