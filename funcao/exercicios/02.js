function triangulos(a,b,c){
    if (a === b && b === c) {
        console.log('Equilatero')
    } else if ((a === b && b !== c) || (a === c && c !== b)) {
        console.log('Isoceles')
    } else {
        console.log('Escaleno')
    }
}

const equi = triangulos(5,5,5)
const iso1 = triangulos(5,5,4)
const iso2 = triangulos(5,4,5)
const esca = triangulos(4,5,6)