const alunos = [
    {nome: "Joao", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedroa", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))

const result = alunos.map(a => a.nota).reduce(function (total, atual){
    return total + atual
}, 0)

console.log(result)