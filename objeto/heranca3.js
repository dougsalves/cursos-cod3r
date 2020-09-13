const pai = { nome: 'Douglas', sexo: 'Masculino', nacionalidade: 'Brasil' }

const filha = Object.create(pai, {
    nome: {value: 'Dandara', writable: false, enumerable: true},
    sexo: {value: 'Feminino', writable: false, enumerable: true}
})

console.log(filha)

for (let chave in filha){
    if (filha.hasOwnProperty(chave)){
        console.log(`Dono: ${chave}`)
    }else{
        console.log(`Herança: ${chave}`)
    }
}