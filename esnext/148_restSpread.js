// "..." recurso rest(juntar) / spread(espalhar)

const pessoa = { nome: 'douglas', salario: 1234.56 }
const clone = { ativo: true, ...pessoa }
console.log(clone)

const grupo1 = ['douglas', 'daiane', 'dandara']
const grupoF = ['joao', ...grupo1, 'maria']
console.log(grupoF)