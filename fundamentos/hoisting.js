/* hoisting, a declaração das variaveis com VAR, sofre uma manipulação pelo interpretador
 * do JavaScript, fazendo com que as veriaveis sejam levadas ao topo do bloco, então se
 * consegue acessar uma variavel, mesmo antes de declarar ela.
 * com LET isso não ocorre.
 */
console.log(a)
var a = 2
console.log(a)

console.log(b)
let b = 10
console.log(b)