const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const port = 3001;


require('./db.js');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin','http://localhost'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

app.use('/', routes)

// This is a middleware function that will catch any errors that are thrown in the application. 
// It will log the error to the console, and send a 500 status code and the error message to the client.
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

app.listen(port, () => {
	console.log(`listening at port: ${port}`);
});

