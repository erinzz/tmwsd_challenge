const express = require('express')
const router = express.Router()
const messageController = require('../messageController')



/**
* Handles GET req endpoint
* Retrieves all existing messages
*/
router.get('/messages', messageController.getMessages, (req, res) => {
  console.log('in get router')
  return res.render('messages/index', { message: res.locals.messages })
  // return res.status(200).json(res.locals.messages);
})


/**
* Handles POST req endpoint
* Creates new message in database
* Gets all existing messages including new message and updates homepage
*/
router.post('/messages', messageController.postMessage, messageController.getMessages, (req, res) =>{
  console.log('in post router')
  return res.render('messages/index', { message: res.locals.messages })
  // return res.status(200).json(res.locals.newMessage);
})


/**
* Handles DELETE req endpoint
* Deletes message at unique id in database
* Opens up message in new page
* Gets all existing messages excluding deleted message and updates homepage
*/
router.get('/messages/:messageId', (req, res, next) => {
  console.log('in delete router', req.body, req.params, req.query)
  return next();
}, messageController.deleteMessage, (req, res) =>{
  console.log('in delete router again')
  // renders message page
  return res.render('messages/viewMsg', { deletedMessage: res.locals.deletedMessage});
  // { deletedMessage: res.locals.deletedMessage }
})



module.exports = router
