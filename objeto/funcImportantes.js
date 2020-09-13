const pessoa = {
    nome: 'Dandara',
    idade: 2
}

Object.defineProperty(pessoa, 'dtNascto', {
    enumerable: true,
    writable: false,
    value: '01/01/2017'
})

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)    
})

const dest = { a: 0 }
const o1 = { b: 3 }
const o2 = { c: 2, a: 4 }
const result = Object.assign(dest, o1, o2)

console.log(result)