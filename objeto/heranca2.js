const avo = {at1: '1'}
const pai = { __proto__:avo, at2: '2', at3:'B' }
const filho = { __proto__:pai, at3:'3' }

for (let i in filho){
    console.log(filho[i])
}

const carro = {
    vAtual: 0,
    vMax: 200,
    acelarar(delta){
        if(this.vAtual + delta <= this.vMax){
            this.vAtual += delta
        }else{
            this.vAtual = this.vMax
        }
    },
    status(){
        return `${this.vAtual}Km/h de ${this.vMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    vMax: 324
} 

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo} ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari ,carro)
Object.setPrototypeOf(volvo ,carro)

ferrari.acelarar(100)
volvo.acelarar(300)
console.log(ferrari.status())
console.log(volvo.status())