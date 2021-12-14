const mongoose = require('mongoose');
const validator = require('validator');

const invoiceSchema = new mongoose.Schema({
  uid: String,
  createdAt: Date,
  paymentDue: Date,
  description: String,
  paymentTerms: Number,
  clientName: String,
  clientEmail: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email.'],
  },
  status: String,
  senderAddress: {
    street: String,
    city: String,
    postCode: String,
    country: String,
  },
  clientAddress: {
    street: String,
    city: String,
    postCode: String,
    country: String,
  },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
      total: Number,
    },
  ],
  total: Number,
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
