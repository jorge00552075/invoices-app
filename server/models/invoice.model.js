const mongoose = require('mongoose');
const validator = require('validator');

const invoiceSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  paymentDue: {
    type: Date,
    required: true,
  },
  description: String,
  paymentTerms: Number,
  clientName: String,
  clientEmail: {
    type: String,
    unique: false,
  },
  status: {
    type: String,
    enum: ['Draft', 'Pending', 'Paid'],
    default: 'Pending',
    required: true,
  },
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

// DOCUMENT MIDDLEWARE
invoiceSchema.pre('save', function (next) {
  this.total = this.items.reduce((total, item) => total + item.total, 0);
  next();
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
