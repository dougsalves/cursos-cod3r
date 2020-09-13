const contA = require('./129_instanciaUnica')
const contB = require('./129_instanciaUnica')

const contC = require('./129_instanciaNova')()
const contD = require('./129_instanciaNova')()

contA.inc()
contA.inc()
console.log(contA.valor, contB.valor)

contC.inc()
contC.inc()
console.log(contC.valor, contD.valor)