function vendeCarro(modelo = ''){
    modelo = modelo.toLocaleLowerCase()

    switch (modelo) {
        case 'hatch':{
            console.log(`A compra foi efetuada com sucesso`)
            break
        }
        case 'sedan':{
            console.log(`Tem certeza que não prefere um Hatch ?`)
            break
        }
        case 'motocicleta':{
            console.log(`Tem certeza que não prefere um Hatch ?`)
            break
        }
        case 'caminhonete':{
            console.log(`Tem certeza que não prefere um Hatch ?`)
            break
        }
        default:{
            console.log(`Não trabalhamos com o modelo ${modelo}`)
        }
    }
}

vendeCarro('hatch')
vendeCarro('sedan')
vendeCarro('caminhonete')
vendeCarro('carreta')
vendeCarro('motocicleta')
vendeCarro('minivan')