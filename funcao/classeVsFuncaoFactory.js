class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const joao = new Pessoa('João')
joao.falar()

function criarPessoa (nome){
    return {
        falar() {
            console.log(`Meu nome é ${nome}`)
        }
    }
}

const jose = criarPessoa('José')
jose.falar()