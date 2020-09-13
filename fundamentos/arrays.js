const valores = [7,8,9,10]
console.log(valores)
valores[4] = 'Teste'

if (valores[4] == undefined) {
    console.log('posição solicita não foi definida')
}else{
    console.log(valores)
}

console.log(valores.length)
valores.push({id: 3}, false, null, 12)

console.log(valores)
console.log(valores.pop())
console.log(valores)
console.log(valores.pop())
console.log(valores)
delete valores[1]
console.log(valores)

console.log(typeof valores)