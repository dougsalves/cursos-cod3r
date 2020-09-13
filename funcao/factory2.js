function Produto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(Produto('Caneta', 10))