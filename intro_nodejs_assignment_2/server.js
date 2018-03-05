const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/index.js')
const app = express()

app.use(bodyParser.json())




app.get('/posts', (req, res) => {

  routes.postsGet(req, res)

})
app.post('/posts', (req, res) => {

  routes.postsPost(req, res)

})
app.put('/posts/:postId', (req, res) => {

  routes.postsPut(req, res)
})

app.delete('/posts/:postId', (req, res) => {
  routes.postsDelete(req, res)
})

app.get('/posts/:postId/comments', (req, res) => {

  routes.commentsGet(req, res)

})
app.post('/posts/:postId/comments', (req, res) => {

  routes.commentsPost(req, res)

})
app.put('/posts/:postId/comments/:commentId', (req, res) => {

  routes.commentsPut(req, res)

})

app.delete('/posts/:postId/comments/:commentId', (req, res) => {
  routes.commentsDelete(req, res)
})

app.listen(3000)