Array.prototype.map2 = function (callback){
    const novoArray = []

    for (let i = 0; i < this.length; i++){
        novoArray.push(callback(this[i], i, this))
    }

    return novoArray
}

const carrinho = [
    '{"nome":"Borracha", "preco": 3.45}',
    '{"nome":"Caderno", "preco": 13.90}',
    '{"nome":"Kit de Lápis", "preco": 41.22}',
    '{"nome":"Caneta", "preco": 7.50}'
]

let valores = carrinho.map2(function(e){
    let valor = JSON.parse(e)
    return valor.preco
})

console.log(valores)