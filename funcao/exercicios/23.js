function mediaPonderada(aluno, n1, n2, n3){
    let peso = [3, 3, 3]
    let dividendo = 0, divisor = 0, media = 0, situacao = ''
    
    if (n1 > n2 && n1 > n3){
        peso[0] = 4
    } else if (n2 > n1 && n2 > n3) {
        peso[1] = 4
    } else if (n3 > n1 && n3 > n2) {
        peso[2] = 4
    }

    divisor = peso[0]+peso[1]+peso[2]
    dividendo = (n1*peso[0])+(n2*peso[1])+(n3*peso[2])
    media = dividendo/divisor
    situacao = media >= 5 ? 'Aprovado' : 'Reprovado'

    console.log(`O aluno ${aluno}, com notas [ ${n1}, ${n2}, ${n3} ] e média = ${media} está ${situacao}`)
}

mediaPonderada(1, 10, 11, 8)