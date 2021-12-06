import React, { useContext } from 'react';

import InvoiceItem from './InvoiceItem';
import InvoiceContext from '../../context/invoices-context';
import { ReactComponent as Illustration } from '../../assets/illustration-empty.svg';

import styles from './InvoicesList.module.css';

function InvoicesList() {
  const invoicesContext = useContext(InvoiceContext);

  const invoices = invoicesContext.map((invoice) => (
    <InvoiceItem key={invoice.id} invoice={invoice} />
  ));

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
