var numero = 2
{
    let numero = 'Teste'
    console.log('Dentro = ', numero)
}

console.log('Fora = ', numero)

/*
    variavel do tipo LET, segue escopo de bloco
    do menor para o maior, caso a variavel chamado dentro de um bloco
    não existe, o JS procura essa variavel no escopo e acima, e caso
    não exista, vai subindo niveis de blocos existentes.
*/