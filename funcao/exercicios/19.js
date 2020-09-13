function cardapio(item = 0, qtde = 1){
    switch(item){
        case 100:{
            // Cachorro Quente - Valor 3
            console.log(`O valor total é R$ ${(3 * qtde).toFixed(2)}`)
            break
        }
        case 200:{
            // Burger Simples
            console.log(`O valor total é R$ ${(4 * qtde).toFixed(2)}`)
            break
        }
        case 300:{
            // CheeseBurger
            console.log(`O valor total é R$ ${(5.5 * qtde).toFixed(2)}`)
            break
        }
        case 400:{
            // Bauru
            console.log(`O valor total é R$ ${(7.5 * qtde).toFixed(2)}`)
            break
        }
        case 500:{
            // Refrigerante
            console.log(`O valor total é R$ ${(3.5 * qtde).toFixed(2)}`)
            break
        }
        case 600:{
            // Suco
            console.log(`O valor total é R$ ${(2.8 * qtde).toFixed(2)}`)
            break
        }
        default:{
            console.log(`O item ${item} não esta cadastrado em nosso cardápio.`)
        }
    }
}

cardapio(100, 3)
cardapio(200, 9)
cardapio(300, 4)
cardapio(400, 7)
cardapio(500, 1)
cardapio(600, 2)