Array.prototype.reduce2 = function (callback){
    let acumu = this[0]

    for(let i = 1; i < this[i]; i++){
        acumu = callback(acumu, this[i], i, this)
    }

    return acumu
}

const soma = (total, valor) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma, 0))