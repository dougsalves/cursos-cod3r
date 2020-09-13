function situacao(nota){
    if (nota >= 7){
        console.log(`Nota '${nota}' é Aprovado`)
    } else {
        console.log(`Nota '${nota}' é Reprevodo`)
    }
}

situacao(6)
situacao(9.5)
situacao('ERRO')