import React, { useEffect, useState } from 'react';

const InvoiceContext = React.createContext({
  getAllInvoices: () => {},
  createInvoice: (data) => {},
  getInvoice: (id) => {},
  updateInvoice: (id, data) => {},
  deleteInvoice: (id) => {},
});

export function InvoiceContextProvider(props) {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getAllInvoices();
  }, []);

  const getAllInvoices = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/v1/invoices');
      // if (response.ok !== true) throw Error('Oops something went wrong!');

      const { invoices } = await res.json();
      setInvoices(invoices);
    } catch (err) {
      console.log(err);
    }
  };

  const createInvoice = async (data) => {
    try {
      const res = await fetch('http://localhost:3000/api/v1/invoices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const status = await res.json();
      console.log(status);
    } catch (err) {
      console.log(err);
    }
    getAllInvoices();
  };

  const getInvoice = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/v1/invoices/${id}`);

      const { invoices } = await res.json();
      setInvoices(invoices);
    } catch (err) {
      console.log(err);
    }
  };

  const updateInvoice = async (id, data) => {
    try {
      const res = await fetch(`http://localhost:3000/api/v1/invoices/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const status = await res.json();
      console.log(status);
    } catch (err) {
      console.log(err);
    }
    getAllInvoices();
  };

  const deleteInvoice = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/v1/invoices/${id}`, {
        method: 'DELETE',
      });

      const status = await res.json();
      console.log(status);
    } catch (err) {
      console.log(err);
    }
    getAllInvoices();
  };

  const value = {
    invoices: invoices,
    getAllInvoices,
    createInvoice,
    getInvoice,
    updateInvoice,
    deleteInvoice,
  };

  return (
    <InvoiceContext.Provider value={value}>
      {props.children}
    </InvoiceContext.Provider>
  );
}

export default InvoiceContext;