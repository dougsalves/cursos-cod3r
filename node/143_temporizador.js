const schedule = require('node-schedule')

const job1 = schedule.scheduleJob('*/1 * 9 * * 5', function(){
    console.log(`Job1 executando em ${new Date().getSeconds()}`)
})

setTimeout(function (){
    job1.cancel()
    console.log('Job1 cancelado')
}, 15000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [5]
regra.hour = 9
regra.second = [5, 10, 25, 30]

const job2 = schedule.scheduleJob(regra, function(){
    console.log(`Job2 em ${new Date().getSeconds()}`)
})