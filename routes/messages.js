const express = require('express')
const router = express.Router()
const messageController = require('../messageController')

router.get('/', (req, res) => {
  res.render('messages/index', { adjective: 'here' })
})

module.exports = router
