// as funções no JS podem ser criadas de N formas
// podem retornar ou não valores, retonar outras
// funções, podem ser adicionadas a variaveis, 
// arrays, objetos, podem ser explicitas, anonimas

function f1() {}

const f2 = function () {}

const array = [function (a, b){ return a + b }, f1, f2]
console.log(array[0](2,4))

// const objeto = {}
// objeto.falar = function () { return 'Olá Mundo' }
const objeto = {
    falar: function () { return 'Olá Mundo' }
}

console.log(objeto.falar())

function run(funcao) {
    funcao()    
}

run(function () { console.log('Rodando...') })

function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(2,3)(6)
let preSoma = soma(2,3)
preSoma(9)