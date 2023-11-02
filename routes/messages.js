const express = require('express')
const router = express.Router()
const messageController = require('../messageController')


router.get('/', messageController.getMessages, (req, res) => {
  // res.render('messages/index', { adjective: 'here' })
  return res.status(200).json(res.locals.messages);
})

router.post('/', messageController.postMessage, (req, res) =>{
  console.log('in post router')
  return res.status(200).json(res.locals.newMessage);
})

router.delete('/:messageId', messageController.deleteMessage, (req, res) =>{
  return res.status(200).json(res.locals.deletedMessage);
})

module.exports = router
