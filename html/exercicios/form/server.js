const express = require('express')
const app = express()
const bp = require('body-parser')

app.use(bp.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Foi</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.body)
    resp.send(`<h1>Foi alterado o ID: ${req.params.id.valueOf()}</h1>`)
})

app.listen(3003)