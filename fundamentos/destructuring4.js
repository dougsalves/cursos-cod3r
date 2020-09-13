function randArray([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(randArray([0,10]))
console.log(randArray([50,30]))
console.log(randArray([995]))
console.log(randArray([,5]))
console.log(randArray([]))
console.log(randArray())