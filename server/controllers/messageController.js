const express = require('express');
const db = require('../models/model');

const messageController = {};

/**
* Retrieves all messages in database
*/
messageController.getMessages = async (req, res, next) => {
  const getQuery =`SELECT * FROM Bulletin`;

  try {
    res.locals.messages = await db.query(getQuery);
    return next();
  } catch (err) {
    return next({
      log: 'error in getMessages middleware',
      message: {err: 'An error occurred in getMessages middleware'}
    });
  }
};


/**
* Create new message in database
* Returns nothing
*/
messageController.postMessage = async (req, res, next) => {
  const { sender, message } = req.body;
  const postQuery = `
    INSERT INTO Bulletin (sender, message)
    VALUES ($1, $2)
  `;
  const postParams = [sender, message];

  try {
    await db.query(postQuery, postParams);
    return next();
  } catch (err) {
    return next({
      log: 'error in postMessage middleware',
      message: {err: 'An error occurred in postMessage middleware'}
    });
  }
};


/**
* Deletes message with unique id from database
* Returns deleted message
*/
messageController.deleteMessage = async (req, res, next) => {
  const messageId = req.params.messageId;
  const delQuery = `
    DELETE FROM Bulletin
    WHERE _id = $1
    RETURNING _id, message, created_at
  `;
  const delParams = [messageId];

  try {
    res.locals.deletedMessage = await db.queryOne(delQuery, delParams);
    return next();
  } catch (err) {
    return next({
      log: 'error in deleteMessage middleware',
      message: {err: 'An error occurred in deleteMessage middleware'}
    });
  }
};



module.exports = messageController;