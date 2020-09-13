const texto = 'cod3r'

for (let letra of texto){
    console.log(letra)
}

const assuntos = ['Map', 'Set', 'Promise']

for (let i in assuntos){
    console.log(i)
}

for (let assunto of assuntos){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap){
    console.log(assunto)
}

for (let assunto of assuntosMap.keys()){
    console.log(assunto)
}

for (let assunto of assuntosMap.values()){
    console.log(assunto)
}

for (let[cv, vl] of assuntosMap.entries()){
    console.log(cv, vl)
}

const letras = new Set(['a','b','c'])

for (letra of letras){
    console.log(letra)
}