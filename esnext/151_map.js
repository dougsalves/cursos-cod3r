const tecnos = new Map()

// função "set" adiciona/atualiza uma chave:valor dentro do MAP
tecnos.set('react', { framework: false })
tecnos.set('angular', { framework: true })

console.log(tecnos)

const maps = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, '123']
])

// função "has" busca uma chave dentro do MAP e retorna true ou false
console.log(maps.has(123))
maps.delete(123)
console.log(maps.has(123))

maps.set(123, '123')
maps.set(123, '456')
maps.set(456, '456')
console.log(maps, maps.size)