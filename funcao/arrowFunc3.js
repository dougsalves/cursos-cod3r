let comThis = function (param){
    console.log(this === param)
}

comThis(global)

const objeto = {}
comThis = comThis.bind(objeto)

comThis(global)
comThis(objeto)

let comThisArrow = param => console.log(this === param)

comThisArrow(global)
comThisArrow(module.exports)

comThisArrow = comThisArrow.bind(objeto)
comThisArrow(objeto)