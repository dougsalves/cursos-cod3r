const ferrari = {
    modelo: 'F40',
    vMax: 324
}

const volvo = {
    modelo:'V40',
    vMax: 280
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)

function MeuObjeto(){}

console.log(MeuObjeto.__proto__, MeuObjeto.prototype)