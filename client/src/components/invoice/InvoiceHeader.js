import { useState } from 'react';

import { ReactComponent as DownArrow } from '../../assets/icon-arrow-down.svg';
import { ReactComponent as Plus } from '../../assets/icon-plus.svg';

import styles from './InvoiceHeader.module.css';

function InvoiceHeader() {
  const [showOptions, setShowOptions] = useState(false);

  function handleClick() {
    console.log('click');
    setShowOptions((prev) => !showOptions);
  }

  function handleChange() {
    // ...
  }

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>Invoices</h1>
        <p className={styles.text}>There are 7 total invoices</p>
      </div>

      <div className={styles.container}>
        <div>
          <button className={styles.filter_btn} onClick={handleClick}>
            Filter by status <DownArrow />
          </button>

          {showOptions && (
            <div className={styles.select} onChange={handleChange}>
              <div className={styles.select_group}>
                <input type="radio" name="select" value="paid" />
                <label htmlFor="paid">Paid</label>
              </div>
              <div className={styles.select_group}>
                <input type="radio" name="select" value="pending" />
                <label htmlFor="pending">Pending</label>
              </div>
              <div className={styles.select_group}>
                <input type="radio" name="select" value="draft" />
                <label htmlFor="draft">Draft</label>
              </div>
            </div>
          )}
        </div>

        <button className={styles.new_btn}>
          <Plus />
          New Invoice
        </button>
      </div>
    </header>
  );
}

export default InvoiceHeader;
