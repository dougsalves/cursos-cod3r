function qtdeNotas(valor = 0){
    if (valor > 0){
        // 100, 50, 10, 5, 1
        let qtde = [0, 0, 0, 0, 0]
        const referencia = valor
        const notas = ['R$ 100', 'R$ 50', 'R$ 10', 'R$ 5', 'R$ 1']

        function calcula(base, indice = 0){
            if (valor > base){
                do{
                    qtde[indice] += 1
                    valor -= base
                }while (valor >= base)
            }
        }

        function retornaArray(valores){            
            let resultado = ''

            for (let i in valores){
                if (valores[i] > 0){
                    resultado = resultado.concat(`${valores[i]} de ${notas[i]}`)
                    if (i < 4){
                        resultado = resultado.concat(', ')
                    }
                }
            }

            return resultado
        }

        calcula(100, 0)
        calcula(50, 1)
        calcula(10, 2)
        calcula(5, 3)
        calcula(1, 4)

        console.log(`O valor ${referencia} é composto por ${retornaArray(qtde)}`)
    }else{
        console.log('Informe um valor maior que "0" ')
    }
}

qtdeNotas(38)
qtdeNotas(359)
qtdeNotas(-34)