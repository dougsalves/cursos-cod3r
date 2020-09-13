console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Executando', nome)
    }
}

const objeto1 = new Obj('Cadeira')
const objeto2 = new Obj('Mesa')

console.log(objeto1.nome)
console.log(objeto2.nome)

objeto1.exec() 
objeto2.exec()