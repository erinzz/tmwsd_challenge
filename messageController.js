const express = require('express');
const db = require('./models/model');

const messageController = {};

/**
* Retrieves all messages in database
*/
messageController.getMessages = async (req, res, next) => {
  console.log('in get msg')
  const getQuery =`SELECT * FROM Bulletin`;
  try {
    res.locals.messages = (await db.query(getQuery)).rows;
    console.log('getmsg success', res.locals.messages)
    return next();
  } catch (err) {
    console.log('in catch')
    return next({
      log: 'error in getMessages middleware',
      message: {err: 'An error occurred in getMessages middleware'}
    })
  }
}



/**
* Create news message in database
* Returns nothing
*/
messageController.postMessage = async (req, res, next) => {
  console.log('in post msg middleware')
  const { message } = req.body;
  const postQuery = `
    INSERT INTO Bulletin (message)
    VALUES ($1)
    RETURNING _id, message, created_at
  `;
  const postParams = [message];
//
  try {
    res.locals.newMessage = (await db.query(postQuery, postParams)).rows;
    console.log('new record:',res.locals.newMessage)
    return next();
  } catch (err) {
    return next({
      log: 'error in postMessage middleware',
      message: {err: 'An error occurred in postMessage middleware'}
    })
  }
}



/**
* Deletes message with unique id from database
* Returns deleted message
*/
messageController.deleteMessage = async (req, res, next) => {
  console.log('in deleteMsg middleware')
  console.log(req.body, req.params, req.query)
  const messageId = req.params.messageId;
  const delQuery = `
    DELETE FROM Bulletin
    WHERE _id = $1
    RETURNING _id, message, created_at
  `;
  const delParams = [messageId]

  try {
    res.locals.deletedMessage = (await db.query(delQuery, delParams)).rows
    console.log('deleted message:', res.locals.deletedMessage)
    return next();
  } catch (err) {
    return next({
      log: 'error in deleteMessage middleware',
      message: {err: 'An error occurred in deleteMessage middleware'}
    })
  }
}



module.exports = messageController;