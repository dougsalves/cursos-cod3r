const carrinho = [
    '{"nome":"Borracha", "preco": 3.45}',
    '{"nome":"Caderno", "preco": 13.90}',
    '{"nome":"Kit de Lápis", "preco": 41.22}',
    '{"nome":"Caneta", "preco": 7.50}'
]

let valores = carrinho.map(function(e){
    let valor = JSON.parse(e)
    return valor.preco
})

console.log(valores)