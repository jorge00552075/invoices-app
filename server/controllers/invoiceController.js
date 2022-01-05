const Invoice = require('../models/invoice.model');
const AppError = require('../util/appError');

async function createInvoice(req, res, next) {
  try {
    const invoice = await Invoice.create(req.body);

    return res.status(201).json({ invoice });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

async function getInvoice(req, res, next) {
  try {
    const invoice = await Invoice.findById(req.params.id);

    if (!invoice) {
      return next('Your search did not match any invoices.', 400);
    }

    return res.status(200).json({ invoice });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

async function getAllInvoices(req, res, next) {
  try {
    const invoices = await Invoice.find({});

    return res.status(200).json({ results: invoices.length, invoices });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

async function updateInvoice(req, res, next) {
  try {
    const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!invoice) {
      return next('Your search did not match any invoices.', 400);
    }

    return res.status(200).json({ invoice });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

async function deleteInvoice(req, res, next) {
  try {
    const invoice = await Invoice.findByIdAndDelete(req.params.id);

    if (!invoice) {
      return next('Your search did not match any invoices.', 400);
    }

    return res.status(204).json({});
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

module.exports = {
  getAllInvoices,
  createInvoice,
  getInvoice,
  updateInvoice,
  deleteInvoice,
};
