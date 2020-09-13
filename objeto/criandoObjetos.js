const obj1 = {}
console.log(obj1)

const obj2 = new Object
console.log(obj2)

function Produto(nome, preco, desc ){
    this.nome = nome

    this.precoDesconto = () => {
        return (preco * (1 - desc)).toFixed(2)
    }
}

const p1 = new Produto('caneta', 7.99, 0.1)
const p2 = new Produto('notebook', 2499.99, 0.15)

console.log(p1.precoDesconto(), p2.precoDesconto())

function novoFunc(nome, salarioBru, faltas){
    return {
        nome,
        salarioBru,
        faltas,
        salarioLiq(){
            return ((salarioBru / 30) * (30 - faltas)).toFixed(2)
        }
    }
}

const fun1 = novoFunc('John', 5000, 2)
const fun2 = novoFunc('Maria', 3500, 0)

console.log(fun1.salarioLiq(), fun2.salarioLiq())

const filha = Object.create(null)
filha.nome = 'Dandara'
console.log(filha.nome)

const fromJSON = JSON.parse('{"info":"Parse JSON"}')
console.log(fromJSON.info)