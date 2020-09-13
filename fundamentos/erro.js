function tratarErro(erro) {
    throw new Error('erro')
}

function caixaAlta(obj){
    try{
        console.log(obj.name.toUpperCase() = '!!!')
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log('finally')
    }
}

const obj = {nome: 'Douglas'}

caixaAlta(obj)