const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)    
    }
}

pessoa.falar()
const fala = pessoa.falar
fala()

const falaDireito = pessoa.falar.bind(pessoa)
falaDireito()