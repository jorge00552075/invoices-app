import React, { useEffect, useState } from 'react';

const InvoiceContext = React.createContext({
  getAllInvoices: () => {},
  createInvoice: () => {},
  getInvoice: () => {},
  updateInvoice: () => {},
  deleteInvoice: () => {},
});

export function InvoiceContextProvider(props) {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getAllInvoices();
  }, []);

  const getAllInvoices = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/invoices');
      if (response.ok !== true) throw Error('Oops something went wrong!');

      const { invoices } = await response.json();
      setInvoices(invoices);
    } catch (err) {
      console.log(err);
    }
  };
  const createInvoice = async (invoice) => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/invoices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(invoice),
      });
      if (response.ok !== true) throw Error('Oops something went wrong!');

      const status = await response.json();
      console.log(status);
    } catch (err) {
      console.log(err);
    }
    getAllInvoices();
  };
  // prettier-ignore
  const getInvoice = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/invoices/${id}`);
      if (response.ok !== true) throw Error('Oops something went wrong!');

      const { invoices } = await response.json();
      setInvoices(invoices);
    } catch (err) {
      console.log(err);
    }
  };

  // prettier-ignore
  const updateInvoice = async (id, data) => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/invoices/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok !== true) throw Error('Oops something went wrong!');

      const status = await response.json();
      console.log(status);
    } catch (err) {
      console.log(err);
    }
    getAllInvoices();
  };
  // prettier-ignore
  const deleteInvoice = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/invoices/${id}`, {
          method: 'DELETE',
        }
      );
      if (response.ok !== true) throw Error('Oops something went wrong!');

      const status = await response.json();
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
