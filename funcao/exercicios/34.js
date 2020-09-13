function validaString(str1 = '', str2 = ''){
    return str1.toLocaleLowerCase === str2.toLocaleLowerCase
}

console.log(validaString('Teste', 'TESTE'))