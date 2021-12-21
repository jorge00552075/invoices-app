import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import InvoiceStatus from '../invoice/InvoiceStatus.jsx';
import InvoiceContext from '../../context/invoices-context.jsx';

import styles from './DetailHeader.module.css';

function DetailHeader({ invoice, openModal }) {
  const context = useContext(InvoiceContext);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.status_group}>
          <span className={styles.status_text}>Status</span>
          <InvoiceStatus status={invoice.status} />
        </div>

        <div className={styles.buttons}>
          <button
            className={`${styles.btn} ${styles['btn--edit']}`}
            onClick={() => openModal()}
          >
            Edit
          </button>
          <button
            className={`${styles.btn} ${styles['btn--delete']}`}
            onClick={() => {
              context.deleteInvoice(invoice._id);
              navigate('/');
            }}
          >
            Delete
          </button>
          {invoice.status !== 'Paid' && (
            <button
              className={`${styles.btn} ${styles['btn--paid']}`}
              onClick={() =>
                context.updateInvoice(invoice._id, { status: 'Paid' })
              }
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
