
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/routes.js')
const app = express()



app.use(bodyParser.json())




app.get('/accounts', (req, res) => {

  routes.getAccounts(req, res)

})
app.post('/accounts', (req, res) => {

  routes.saveAccount(req, res)

})
app.put('/accounts/:id', (req, res) => {

  routes.updateAccount(req, res)
})

app.delete('/accounts/:id', (req, res) => {
  routes.removeAccount(req, res)
})



app.listen(3000)