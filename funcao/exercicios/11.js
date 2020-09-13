function eBissexto(ano){
    if ((ano % 4) === 0){
        console.log(`o ano ${ano} é bissexto`)
    } else if ((ano % 400) === 0){
        console.log(`o ano ${ano} é bissexto`)
    } else {
        console.log(`o ano ${ano} não é bissexto`)
    }
}

eBissexto(2016)