function diaUtil(dia){
    console.log(dia.getDay()+1)

    switch (dia.getDay()+1) {
        case 1: case 7:
            console.log(`O dia ${dia} é final de semana`)
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log(`o dia ${dia}  é um dia util`)
            break
        default:
            console.log('Nâo sei se isso conta, mas o numero digitado é inválidao')
        
    }
}

diaUtil(new Date())