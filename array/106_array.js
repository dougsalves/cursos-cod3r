let aprovados = [ 'Bia','Carlos','Ana' ]
let notas = [ 10, 4, 6, 2, 8 ]
notas.sort()

console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Rafael'
aprovados.push('Jose', 'Joao', 'Douglas')
console.log(aprovados)
console.log(aprovados.length)
aprovados[11] = 'Renato'
console.log(aprovados)

aprovados.sort()
console.log(aprovados, notas)

delete aprovados[3]
console.log(aprovados[3] === undefined)

aprovados = [ 'Bia','Carlos','Ana' ]
aprovados.splice(1, 0, 'Teste1', 'Teste2')
console.log(aprovados)