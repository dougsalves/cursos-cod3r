function MeuObj() {}

console.log(MeuObj.prototype)

const ob1 = new MeuObj
const ob2 = new MeuObj

MeuObj.prototype.nome = 'Anonimo'
MeuObj.prototype.falar = function() {
    console.log(`Olá, meu nome é ${this.nome}`)
}

ob2.nome = 'Douglas'
ob1.falar()
ob2.falar()