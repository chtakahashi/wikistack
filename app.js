const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage
} = require('./views/index')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send(main(''))
})

app.listen(3000)