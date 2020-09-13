class classePessoa {
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

function Pessoa (nome){
    this.nome = nome

    this.falar= function (){
        return console.log(`Meu nome é ${this.nome}`)
    }

}

const john = new Pessoa('Johnnys')
john.falar()