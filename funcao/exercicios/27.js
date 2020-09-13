class Crianca {
    constructor(nome, altura, taxa){
        this.nome = nome
        this.altura = altura
        this.taxa = taxa
    }

    crescer() {
        this.altura += this.taxa
    }
}

maria = new Crianca()
maria.nome = 'Maria'
maria.altura = 1.50
maria.taxa = 0.1

ana = new Crianca()
ana.nome = 'Ana'
ana.altura = 1.40
ana.taxa = 0.12

const validaAltura = function (){
    let ano = 0

    if (maria.altura !== ana.altura && maria.taxa !== ana.taxa){
        if (maria.altura > ana.altura){
            while (maria.altura >= ana.altura) {
                maria.crescer()
                ana.crescer()
                ano++
            }
            console.log(`Em ${ano} a ${ana.nome} será mais alta que a ${maria.nome}`)
            console.log(`${maria.nome} mede ${maria.altura.toFixed(2)} e ${ana.nome} mede ${ana.altura.toFixed(2)}`)
        }
    }
}

validaAltura()