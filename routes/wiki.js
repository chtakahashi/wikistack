const express = require('express')
const addPage = require('./../views/addPage')
const router = express.Router()

router.get('/',(req, res) => {
  res.send('hello world')
})

router.post('/', (req, res) => {
  res.send('hello world 2')
})

router.get('/add', (req, res) => {
  res.send(addPage())
})

module.exports = router
