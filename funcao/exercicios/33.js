const inteiros = [1,2,3,4]
const string = ['a','b','c','d']
const float = [0.1,0.2,0.3,0.4]

function agrupa(){
    let resultado = ['','','','']

    resultado[0] = resultado[0].concat(inteiros[0]).concat(string[0]).concat(float[0])
    resultado[1] = resultado[1].concat(inteiros[1]).concat(string[1]).concat(float[1])
    resultado[2] = resultado[2].concat(inteiros[2]).concat(string[2]).concat(float[2])
    resultado[3] = resultado[3].concat(inteiros[3]).concat(string[3]).concat(float[3])

    console.log(resultado)
}

agrupa()