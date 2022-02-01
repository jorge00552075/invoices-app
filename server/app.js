const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");

const AppError = require("./util/appError");
const invoiceRouter = require("./routes/invoiceRoutes");

const app = express();
app.use(compression());

app.use(cors()); // Enable All CORS Requests
// {
//   "origin": "*",
//   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//   "preflightContinue": false,
//   "optionsSuccessStatus": 204
// }

app.options("*", cors()); // Enable CORS Pre-Flight

app.use(helmet());

if (process.env.NODE_ENV === "DEVELOPMENT") app.use(morgan("dev"));

app.use(express.json());

// ROUTES
app.use("/api/v1/invoices", invoiceRouter);

// 404 PAGE NOT FOUND
app.all("*", (req, res, next) => {
  next(new AppError("Sorry, the page could not be found.", 404));
});

// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
});

module.exports = app;
