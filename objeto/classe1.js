class Lancamento {
    constructor(nome = 'Default', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class Financas {
    constructor(ano = 0, mes = 0){
        this.ano = ano
        this.mes = mes
        this.lancamentos = []
    }

    addLanc(...lancamentos){
        lancamentos.forEach(l => {
            this.lancamentos.push(l)
        })
    }

    sumario(){
        let total = 0
        this.lancamentos.forEach(l => {
            total += l.valor
        })

        return total
    }
}

const salario = new Lancamento('Salario', 4500)
const agua = new Lancamento('Agua', -43)
const luz = new Lancamento('AgLuzua', -200)
const internet = new Lancamento('Internet', -69.9)

const contas = new Financas(2020, 05)
contas.addLanc(salario, agua, luz, internet)
console.log(contas.sumario())