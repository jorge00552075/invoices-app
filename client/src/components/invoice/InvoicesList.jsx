import React, { useContext } from 'react';

import InvoiceItem from './InvoiceItem.jsx';
import InvoiceContext from '../../context/invoices-context.jsx';
import { ReactComponent as Illustration } from '../../assets/illustration-empty.svg';

import styles from './InvoicesList.module.css';

function InvoicesList({ filterStatus }) {
  const context = useContext(InvoiceContext);

  let invoices;
  if (filterStatus) {
    invoices = context.invoices.filter(
      (invoice) => invoice.status === filterStatus
    );
  } else {
    invoices = context.invoices;
  }

  const invoicesList = invoices.map((invoice) => (
    <InvoiceItem key={invoice.uid} invoice={invoice} />
  ));

  return (
    <React.Fragment>
      {invoicesList.length > 0 ? (
        <div className={styles.invoices_list}>{invoicesList}</div>
      ) : (
        <div className={styles.container}>
          <Illustration className={styles.illustration} />
          <div className={styles.text}>
            <h2>There is nothing here</h2>
            <h3>
              Create an invoice by clicking the
              <br />
              <strong>New Invoice</strong> button and get started.
            </h3>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default InvoicesList;
