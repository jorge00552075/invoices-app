import { useContext } from 'react';

import InvoiceStatus from '../invoice/InvoiceStatus.jsx';
import InvoiceContext from '../../context/invoices-context.jsx';

import styles from './DetailHeader.module.css';

function DetailHeader({ invoice, showForm, confirmDeletion }) {
  const context = useContext(InvoiceContext);

  // prettier-ignore
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.status_group}>
          <span className={styles.status_text}>Status</span>
          <InvoiceStatus status={invoice.status} />
        </div>
        <div className={styles.buttons}>
          <button
            className={`${styles.btn} ${styles.btnEdit}`}
            onClick={() => showForm()}
          >
            Edit
          </button>
          <button
            className={`${styles.btn} ${styles.btnDelete}`}
            onClick={() => confirmDeletion()}
          >
            Delete
          </button>
          {invoice.status !== 'Paid' && (
            <button
              className={`${styles.btn} ${styles.btnPaid}`}
              onClick={() => context.updateInvoice(invoice._id, { status: 'Paid' })}
            >
              Mark as Paid
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailHeader;
