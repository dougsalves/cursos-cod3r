const notas = [1,5,6,3,8,13,90,101]

for (let i in notas)
    console.log(`Posição '${i}' = ${notas[i]}`)

console.log('')

const pessoa = {
    nome: 'Douglas',
    sobrenome: 'da Silva',
    peso: '???',
    altura: 1.85
}

for (let atributo in pessoa)
    console.log(`Atributo '${atributo}' = ${pessoa[atributo]}`)