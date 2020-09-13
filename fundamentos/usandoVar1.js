//usando variaveis com VAR
//Escopo global, pode ser acessado pelo metodo Window
{{ var sera = 'Será!!!'}}

console.log(sera)

//Escopo de função, variavel acessivel apenas dentro do escopo da função
function teste(){
    var local = 123
    console.log(local)
}

//console.log(local)