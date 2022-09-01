const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const port = 3001;


require('./db.js');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use('/', routes)


app.listen(port, () => {
	console.log(`listening at port: ${port}`);
});

