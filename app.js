const express = require('express');
const messagesRoute = require('./routes/messages');
const port = 3000;

const app = express();
app.use(express.json());

console.log('in app')
app.use('/', messagesRoute);
app.set('view engine', 'pug');


// error handlers
app.use('*', (req, res) => res.status(404).send('This page does not exist'));

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
