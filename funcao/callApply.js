function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 3499,
    desc: 0.1,
    getPreco
}


global.preco = 1499
global.desc = 0.05
console.log(getPreco())
console.log(produto.getPreco())

const iPad = { preco: 3499, desc: 0.2 }

console.log(getPreco.call(iPad))
console.log(getPreco.apply(iPad))

console.log(getPreco.call(iPad, 0.5, '$'))
console.log(getPreco.apply(iPad, [0.5, '$']))