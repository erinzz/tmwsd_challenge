const express = require('express');
const db = require('./models/model');

const messageController = {};

// gets all messages
messageController.getMessages = async (req, res, next) => {
  const getQuery =`SELECT * FROM Bulletin`;
  try {
    res.locals.messages = (await db.query(getQuery)).rows;
    return next();
  } catch (err) {
    console.log('in catch')
    return next({
      log: 'error in getMessages middleware',
      message: {err: 'An error occurred in getMessages middleware'}
    })
  }
}

// creates new message in database and returns new message (for now)
messageController.postMessage = async (req, res, next) => {
  const { message } = req.body;

  const postQuery = `
    INSERT INTO Bulletin (message)
    VALUES ($1)
    RETURNING _id, message, created_at
  `
  const postParams = [message];

  try {
    res.locals.newMessage = (await db.query(postQuery, postParams)).rows;
    console.log('new record:',res.locals.newMessage)
    return next();
  } catch (err) {
    return next({
      log: 'error in postMessage middleware',
      message: {err: 'An error occurred in postMessages middleware'}
    })
  }
}


// messageController.deleteMessage = async (req, res, next) => {

//   try {

//     return next();
//   } catch (err) {
//     return next({
//       msg: 'error in deleteMessage middleware',
//       err: err
//     })
//   }
// }



module.exports = messageController;