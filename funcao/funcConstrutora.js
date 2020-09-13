const Carro = function (velocidadeMax = 200, aceleracao = 5) {
    // criando privado dentro do escopo da função, assim mantendo controle total do valor
    let velocidadeAtual = 0

    this.acelerar = function() {
        if (velocidadeAtual+aceleracao < velocidadeMax){
            velocidadeAtual += aceleracao
        }
    }

    this.getvelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()

const ferrari = new Carro(350, 25)
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())