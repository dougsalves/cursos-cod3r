// Closure é o escopo criado ao redor de uma função quando a mesma é declarada
// A função guarda a mémoria fisica do local que foi criada, e um escopo é criado
// quando ela é declarada, então o contexto léxico é tudo que está contido dentro
// da função

const x = 'Global'

function fora(){
    const x = 'Local'
    
    function dentro(){
        return x
    }

    return dentro
}

const retorno = fora()

console.log(retorno())