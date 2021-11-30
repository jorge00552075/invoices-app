const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const invoiceRouter = require('./routes/invoiceRoutes');

const app = express();

app.use(cors()); // Enable All CORS Requests
// {
//   "origin": "*",
//   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//   "preflightContinue": false,
//   "optionsSuccessStatus": 204
// }

app.options('*', cors()); // Enable CORS Pre-Flight

app.use(helmet());

if (process.env.NODE_ENV === 'DEVELOPMENT') {
  app.use(morgan('dev'));
}

app.use(express.json());

// ROUTES
app.use('/api/v1/invoices', invoiceRouter);

app.use('*', (req, res, next) => {
  throw Error(`Sorry, the page ${req.originalUrl} could not be found.`);
});

module.exports = app;
