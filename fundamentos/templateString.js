const nome = 'Rebecca'
const concatencao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!
`
console.log(concatencao, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei.. ${up('cuidado')}!!`)