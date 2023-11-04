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
// bug - after POST sent, when user refreshes, causes form to be resubmitted with previous submission
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
*/
router.get('/messages/:messageId', messageController.deleteMessage, (req, res) =>{
  console.log('in delete router again:', Boolean(res.locals.deletedMessage.length))

  // database returns data object in an array
  // messageContent selects message in deleted object
  if (!res.locals.deletedMessage.length) {
    return res.render('messages/404');
  } else {
    const messageContent = res.locals.deletedMessage[0].message
    return res.render('messages/viewMsg', { deletedMessage: messageContent});
  // { deletedMessage: res.locals.deletedMessage }
  }
})



module.exports = router
