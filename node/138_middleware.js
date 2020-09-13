const processoA = (ctx, next) => {
    ctx.valorA = 'ProcessoA'
    next()
}

const processoB = (ctx, next) => {
    ctx.valorB = 'ProcessoB'
    next()
}

const processoC = (ctx, next) => {
    ctx.valorC = 'ProcessoC'
    next()
}

//const processoC = ctx => ctx.valorC = 'ProcessoC'

const execProcessos = (ctx, ...processos) => {
    const processo = indice => {
        processos && indice < processos.length &&
            processos[indice](ctx, () => processo(indice+1))
    }

    processo(0)
}

const contexto = {}

execProcessos(contexto, processoA, processoC, processoB)

console.log(contexto)