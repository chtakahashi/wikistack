const express = require('express')
const addPage = require('./../views/addPage')
const router = express.Router()
const { Page } = require("../models");

router.post('/', async (req, res, next) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content
    });
    console.log(title)
    console.log(content)

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) { next(error) }
  res.send('hello world 2')
})

router.get('/',(req, res) => {
  res.send('hello world')
})

router.get('/add', (req, res) => {
  res.send(addPage())
})

module.exports = router
