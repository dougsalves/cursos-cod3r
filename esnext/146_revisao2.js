// arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// contexto lexico do "this"
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

//parametro de função default
function padrao(texto = 'NodeJS'){
    console.log(texto)
}

padrao()
padrao('Sou mais forte')

// operador REST "...numeros"
function totaliza(...numeros){
    let total = 0
    numeros.forEach(numero => total += numero)
    return total
}

console.log(totaliza(1,2,3,4,5))