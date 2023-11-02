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
  `;
  const postParams = [message];

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

// deletes message from database
messageController.deleteMessage = async (req, res, next) => {
  const messageId = req.params.messageId;
  const delQuery = `
    DELETE FROM Bulletin
    WHERE _id = $1
    RETURNING _id, message, created_at
  `;
  const delParams = [messageId]
  // console.log("query", req.query)
  // console.log("params", req.params)
  // console.log("body", req.body)
  console.log("messageid", delParams)
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