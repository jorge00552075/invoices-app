import { useContext } from 'react';
import InvoiceContext from '../../context/invoices-context';
import { ReactComponent as Plus } from '../../assets/icon-plus.svg';

import styles from './InvoiceHeader.module.css';

function InvoiceHeader({ openModal }) {
  const invoicesContext = useContext(InvoiceContext);

  function handleClick() {
    openModal();
  }

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>Invoices</h1>
        <p className={styles.text}>
          There are {invoicesContext.length} total invoices
        </p>
      </div>

      <button className={styles['new-invoice']} onClick={handleClick}>
        <Plus />
        New Invoice
      </button>
    </header>
  );
}

export default InvoiceHeader;
