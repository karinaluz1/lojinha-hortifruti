// aplicação simples em nodejs para escapar do bloqueio de CORS do navegador

const express = require('express')
const request = require('request')
const app = express()

app.get('/api/data', (req, res, next) => {
  request(
    'https://www.fruityvice.com/api/fruit/all',
    function (error, response, body) {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.send(body)
    }
  )
})

const port = 5000

app.listen(port, () => {
  console.log(`ta funcionando eeeeeeeee na porta ${port}`)
})
