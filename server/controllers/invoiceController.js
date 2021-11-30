const Invoice = require('../models/invoice.model');

async function createInvoice(req, res, next) {
  try {
    const invoice = await Invoice.create(req.body);

    return res.status(201).json({
      status: 'success',
      invoice,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

async function getInvoice(req, res, next) {
  try {
    const invoice = await Invoice.findById(req.params.id);

    if (!invoice) {
      throw Error('Your search did not match any invoices.');
    }

    return res.status(200).json({
      status: 'success',
      invoice,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

async function getAllInvoices(req, res, next) {
  try {
    const invoices = await Invoice.find({});

    return res.status(200).json({
      status: 'success',
      results: invoices.length,
      invoices,
    });
  } catch (err) {
    return res.status(400).json({
      message:
        'The server could not understand the request due to invalid syntax',
    });
  }
}

async function updateInvoice(req, res, next) {
  try {
    const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!invoice) {
      throw Error('Your search did not match any invoices.');
    }

    return res.status(200).json({
      status: 'success',
      invoice,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

async function deleteInvoice(req, res, next) {
  try {
    const invoice = await Invoice.findByIdAndDelete(req.params.id);

    if (!invoice) {
      throw Error('Your search did not match any invoices.');
    }

    return res.status(204).json({
      status: 'success',
    });
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
