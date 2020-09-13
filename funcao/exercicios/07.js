const calculaDelta = (a, b, c) => ((b * b) - (4 * a * c))

function baskara(a = 0, b = 0, c = 0){
    let x1
    let x2
    let delta = calculaDelta(a,b,c)

    if (delta >= 0){
        delta = Math.sqrt(delta)
        x1 = (-b + delta) / (2 * a)
        x2 = (-b - delta) / (2 * a)

        console.log(`Para ${a}, ${b}, ${c} x1 = ${x1.toFixed(2)} e x2 = ${x2.toFixed(2)}`)
    } else {
        console.log('Delta negativo')
    }
}

baskara(2, 1, -15)
baskara(3, 5, 2)