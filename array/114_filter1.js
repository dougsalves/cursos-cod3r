const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo Plástico', preco: 18.99, fragil: false}
]

const proCaro = p => p.preco >= 2400
const proFragil = p => p.fragil

console.log(produtos.filter(proCaro).filter(proFragil))