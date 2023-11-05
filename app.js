const express = require('express');
const messagesRoute = require('./routes/messages');
const port = 3002;
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true }))

console.log('in app')
app.set('view engine', 'pug');
app.use('/', messagesRoute);

// Serve static files
app.use(express.static(path.join(__dirname, 'assets')));

// Catch all endpoint error handler
app.use('*', (req, res) => res.status(404).send('This page does not exist'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express global error handler caught unknown middleware error',
    status: 500,
    message: {err: 'An error occurred'},
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log)
  return res.status(errorObj.status).json(errorObj.message);
})


app.listen(port, () => {
  console.log(`TMWSD is listening at http://localhost:${port}`)
})
