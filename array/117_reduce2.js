const alunos = [
    {nome: "Joao", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedroa", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true}
]

const bolsistas = alunos.map(a => a.bolsista)

const teste1 = bolsistas.reduce(function(total, atual){
    if(total !== atual){
        return false
    }
}, true)

const teste2 = bolsistas.reduce(function(total, atual){
    if(atual){
        return true
    }
})

console.log(bolsistas, teste1, teste2)