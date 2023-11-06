const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

/**
* Handles GET req endpoint
* Retrieves all existing messages
*/
router.get('/messages', messageController.getMessages, (req, res) => {
  const data = res.locals.messages;
  return res.status(200).render('messages/index', { data: data });
});

/**
* Handles POST req endpoint
* Creates new message in database
* Gets all existing messages including new message and updates homepage
*/
router.post('/messages', messageController.postMessage, messageController.getMessages, (req, res) =>{
  const data = res.locals.messages;
  return res.status(200).render('messages/index', { data: data });
});

/**
* Handles DELETE req endpoint
* Deletes message at unique id in database
* Opens up message in new page
*/
router.get('/messages/:messageId', messageController.deleteMessage, (req, res) =>{
  if (!res.locals.deletedMessage) {
    return res.render('messages/404');
  } else {
    const messageContent = res.locals.deletedMessage.message;
    return res.status(200).render('messages/viewMsg', { deletedMessage: messageContent });
  }
});

module.exports = router;
