import React from 'react';

import DATA from '../data.json';
import Invoice from './Invoice';
import { ReactComponent as Illustration } from '../assets/illustration-empty.svg';

import styles from './InvoicesList.module.css';

function InvoicesList() {
  const invoices = DATA.map((invoice, i) => (
    <Invoice key={invoice.id} invoice={invoice} />
  ));

  // const invoices = undefined;

  return (
    <React.Fragment>
      {invoices ? (
        <div className={styles.invoices_list}>{invoices}</div>
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
