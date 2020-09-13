const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual

axios.get(url).then(response => {
    let salario = 0
    let novo = []

    novo = response.data.filter(chineses).filter(mulheres).reduce(menorSalario)

    console.log(novo.salario)
    
    /*
    for(let i in response.data){        
        if(response.data[i].genero === 'F' && response.data[i].pais === 'China'){
            if(response.data[i].salario < salario || salario === 0){
                salario = response.data[i].salario
            }
        }
    }
    
    console.log(`O menor salario é ${salario}`)*/
})