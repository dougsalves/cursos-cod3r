const fabricantes = ['Volkswagen','GM','Fiat','Ford','Renault','Peugeots']

function printRes(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(printRes)

console.log('')

fabricantes.forEach(fabricante => console.log(fabricante))

console.log('')

fabricantes.forEach((a,b) => console.log(a))

console.log('')

fabricantes.forEach((nome, indice) => console.log(indice))