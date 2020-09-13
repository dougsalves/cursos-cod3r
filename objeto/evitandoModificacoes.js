const produto = Object.preventExtensions({
    nome: 'Borracha', preco: 1.99, tag: 'promo'
})

console.log(Object.isExtensible(produto))
console.log(produto)
produto.nome = 'Caneta'
produto.descricao = 'Caneta esferográfica'
delete produto.tag
console.log(produto)

const pessoa = {
    nome: 'Juliana',
    idade: 35
}

Object.seal(pessoa)
