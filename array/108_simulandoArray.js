const oArray = { 0: 'Rafa', 1: 'Ana', 2:'Bia' }
console.log(oArray)
Object.defineProperty(oArray, 'toString', {
    value: function(){ return Object.values(this) },
    enumerable: false
})

console.log(oArray[0])
const mArray = [ 'Rafa', 'Ana', 'Bia' ]

console.log(oArray.toString(), mArray)