const notas = [1,7,4,6,8,9,10,2,3,5]

const baixas1 = []

for (let i in notas){
    if (notas[i] < 7){
        baixas1.push(notas[i])
    }
}

console.log(baixas1)

const baixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(baixas2)

const baixas3 = notas.filter(nota => nota < 7)

console.log(baixas3)