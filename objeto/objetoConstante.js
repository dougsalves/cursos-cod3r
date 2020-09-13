// Os objetos apontam para um endereço de memoria
// logo os valores dos seus atributos são guardados em outro endereço
// por isso é possivel alterar atributos de objetos const
// mas não é possivel atribuir um novo objeto após a um const já criado

const pessoa = { nome: 'Johnnys' }
console.log(pessoa)
pessoa.nome = 'Avery'
console.log(pessoa)

//pessoa = {nome:"Raul"}

// a função freeze faz com que o objeto e seus atributos não sejam mais alterados
// mas podem ser acessados normalmente ainda.
Object.freeze(pessoa)
pessoa.nome = 'Ashin'
console.log(pessoa)

const pessoaConst = Object.freeze({nome:"Johnnys Const"})
pessoaConst.nome = "Testando"
console.log(pessoaConst)