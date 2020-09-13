const nums = [1,2,3,4,5,6,7,8,9,10]

for (let x in nums){
    if (x == 5){
        break
    }

    console.log(`${x} = ${nums[x]}`)
}

console.log('Fim do Break')
console.log('')

for (let y in nums){
    if (y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log('Fim do Continue')
console.log('')

externo: for (let a in nums){
    for (let b in nums){
        if (a == 2 && b == 3){
            break externo
        }
        console.log(`Valores do Par = [${a},${b}]`)
    }
}

console.log('Fim do Break Rotulado')
console.log('')