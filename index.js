const express = require('express')
const app = express()
const port = 4000

app.get('/', (_, res) => {
  res.send('Hello expression')
})

app.listen(port, () => {
  console.log(`Serveur demarrer avec succes 4000`)
})