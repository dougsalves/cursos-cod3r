function Aula(nome, id){
    this.nome = nome, 
    this.id = id
}

const aula1 = new Aula('Primeira aula', 12)
const aula2 = new Aula('Segunda aula', 34)
console.log(aula1, aula2)

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Primeira aula', 12)
const aula4 = novo(Aula, 'Segunda aula', 34)
console.log(aula3, aula4)