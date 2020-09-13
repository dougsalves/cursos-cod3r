function temFruta(fruta = ''){
    fruta = fruta.toLocaleLowerCase()

    switch (fruta){
        case 'maçã':{
            console.log(`Desculpe, não vendemos ${fruta} aqui.`)
            break
        }
        case 'kiwi':{
            console.log(`Desculpa, o ${fruta} está em falta.`)
            break
        }
        case 'melancia':{
            console.log(`A ${fruta} está custando R$ 3,00 o kilo.`)
            break
        }
        default:{
            console.log(`Não identificamos a ${fruta} em nosso sistema.`)
        }
    }
}

temFruta('MaÇã')
temFruta('banana')
temFruta('KiWI')
temFruta('uva')
temFruta('meLanCIA')