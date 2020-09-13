const escola = "Cod3r"

console.log(escola)
console.log(escola.charAt(3))
console.log(escola.charAt(6))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('d'))
console.log(escola.substring(1)) // informando 1 parametro, faz copiar a partir desse parametro até o final
console.log(escola.substring(0, 4)) // informando 2, o primeiro diz onde começa e o segundo diz a posição limite(será copiado até a posição anterior a informada)

console.log("Escola ".concat(escola).concat("!"))
console.log("Escola " + escola + "!")

console.log('Ana,Maria,Dandara'.split(',')) // Converte para um array informando o caracter delimitador