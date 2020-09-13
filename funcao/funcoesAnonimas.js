const soma = function (x, y){
    return x + y
}

const subtrai = (x, y) => x - y

const impResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

impResultado(3, 4)
impResultado(10, 4, subtrai)
impResultado(2, 5, function(x, y){ return x * y })
impResultado(25, 7, (x,y) => Math.floor(x / y))

const pessoa = {
    talk(){ console.log('falando') },
    falar: function(){
        console.log('Oba')
    }
}

pessoa.talk()