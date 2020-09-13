const pilotos = ['Vettel', 'Alonso', 'Massa']

console.log(pilotos)

pilotos.pop()
console.log(pilotos)

pilotos.push('Raikonen', 'Verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

pilotos.splice(2)
console.log(pilotos)

pilotos.splice(2, 'Senna', 'Massa', 'Barrichello')
console.log(pilotos)

const pilotos1 = pilotos.slice(1)
console.log(pilotos1)

const pilotos2 = pilotos.slice(1,3)
console.log(pilotos2)