const imprimi = function (vezes = 1, texto = 'hello world'){
    let printou = 1

    while (printou <= vezes){
        console.log(`${printou} - ${texto}`)
        printou++
    }
}

imprimi(11)