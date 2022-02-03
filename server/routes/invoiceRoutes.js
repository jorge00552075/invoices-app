const express = require("express");
const invoiceController = require("./../controllers/invoiceController");

const router = express.Router();

// https://invoice-api-00552075.herokuapp.com/api/v1/invoices
router
  .route("/")
  .get(invoiceController.getAllInvoices)
  .post(invoiceController.createInvoice);

// https://invoice-api-00552075.herokuapp.com/api/v1/invoices/61cbd7e3a600146dc846a2df
router
  .route("/:id")
  .get(invoiceController.getInvoice)
  .patch(invoiceController.updateInvoice)
  .delete(invoiceController.deleteInvoice);

module.exports = router;
