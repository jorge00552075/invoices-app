const express = require('express');
const invoiceController = require('./../controllers/invoiceController');

const router = express.Router();

// http://localhost:3000/api/v1/invoices
router
  .route('/')
  .get(invoiceController.getAllInvoices)
  .post(invoiceController.createInvoice);

// http://localhost:3000/api/v1/invoices/619ed40895a37729d83f6103
router
  .route('/:id')
  .get(invoiceController.getInvoice)
  .patch(invoiceController.updateInvoice)
  .delete(invoiceController.deleteInvoice);

module.exports = router;
