const express = require('express');
const db = require('./models/model');

const messageController = {};


messageController.getMessages = async (req, res, next) => {
  const getQuery =`SELECT * FROM message`;
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

// messageController.postMessage = async (req, res, next) => {
//   try {

//     return next();
//   } catch (err) {
//     return next({
//       msg: 'error in postMessage middleware',
//       err: err
//     })
//   }
// }


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