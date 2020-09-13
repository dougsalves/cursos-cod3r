const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c } }

console.log(JSON.stringify(obj))

const obj2 = JSON.parse('{ "a": 1.7, "b": 2, "c": true, "d": {}, "e": [], "f": "teste" }')
console.log(obj2.d)