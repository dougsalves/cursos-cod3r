const valor = 'Global'

function inGlobal(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    inGlobal()
}

exec()