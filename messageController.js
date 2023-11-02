const express = require('express');
const db = require('./models/model');

const messageController = {};


messageController.retrieveAllMessages = async (req, res, next) => {
  try {

    next();
  } catch (err) {
    return next({
      log: 'error in retrieveAllMessages middleware'
      // msg:
    })
  }
}



module.exports = messageController;