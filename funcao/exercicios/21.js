function planoSaude(idade = 0){
    const base = 100

    if (idade >= 1 && idade < 10){
        console.log(`O custo da sua faixa etária é de R$ ${(base+80).toFixed(2)}`)
    }else if (idade >= 10 && idade <= 30){
        console.log(`O custo da sua faixa etária é de R$ ${(base+50).toFixed(2)}`)
    }else if (idade >= 31 && idade <= 60){
        console.log(`O custo da sua faixa etária é de R$ ${(base+95).toFixed(2)}`)
    }else{  
        console.log(`O custo da sua faixa etária é de R$ ${(base+130).toFixed(2)}`)
    }
}

planoSaude(8)
planoSaude(18)
planoSaude(33)
planoSaude(67)