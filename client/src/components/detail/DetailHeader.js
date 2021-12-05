import InvoiceStatus from '../InvoiceStatus';

import styles from './DetailHeader.module.css';

function DetailHeader({ invoice }) {
  function handleClick(e) {
    console.log(e.target.innerText);
  }

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
            onClick={handleClick}
          >
            Edit
          </button>
          <button
            className={`${styles.btn} ${styles['btn--delete']}`}
            onClick={handleClick}
          >
            Delete
          </button>
          {invoice.status !== 'Paid' && (
            <button
              className={`${styles.btn} ${styles['btn--paid']}`}
              onClick={handleClick}
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
