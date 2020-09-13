Array.prototype.flatMap = function (callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const escola = [{
    nome: 'Turma 1',
    alunos: [{
        nome: 'Rebecca',
        nota: 7.9
    }, {
        nome: 'Ana',
        nota: 9.2
    }]
}, {
    nome: 'Turma 2',
    alunos: [{
        nome: 'Jessica',
        nota: 8.5
    }, {
        nome: 'Cibalena',
        nota: 9.9
    }]
}]

const getNotasAlunos = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotasAlunos)

const notas1 = escola.map(getNotasTurma)
console.log(notas1)

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)

