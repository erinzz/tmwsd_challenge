const express = require('express')
const router = express.Router()
const db = require('../models/model')

router.get('/', function (req, res) {
  res.render('messages/index', { adjective: 'here' })
})

module.exports = router
