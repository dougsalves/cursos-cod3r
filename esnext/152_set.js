const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeias').add('Corinthians')
times.add('Falmengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Lucas', 'Raquel', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)