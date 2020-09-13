Array.prototype.meuforEach = function(callback){
    //for (let i in this){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Ana', 'Bia', 'Carlos', 'Douglas']

aprovados.meuforEach(function (nome, indice){
    console.log(`${indice}) ${nome}`)
})