function falarDepoisDe(frase, segundos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
            //reject('erro ao exibir a frase')
        }, segundos * 1000)
    })
}

falarDepoisDe('Que legal!', 3)
    .then(frase => frase.concat('?!?'))
    .then(novaFrase => console.log(novaFrase))
    .catch(err => console.log(err))