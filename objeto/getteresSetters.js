const variavel = {
    _valor: 1,
    get valor(){
        return this._valor
    },
    set valor(valor) {
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(variavel.valor)
variavel.valor = 10
console.log(variavel.valor, variavel.valor)