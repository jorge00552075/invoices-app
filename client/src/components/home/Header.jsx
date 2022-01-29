import { useState, useContext } from "react";

import InvoiceContext from "../../context/invoices-context.jsx";
import { ReactComponent as Plus } from "../../assets/icon-plus.svg";
import { ReactComponent as Darr } from "../../assets/icon-arrow-down.svg";

import styles from "./Header.module.css";

function Header({ openDrawer, getFilterStatus }) {
  const [showOptions, setShowOptions] = useState(false);
  const { invoices } = useContext(InvoiceContext);
  // Show filter options
  const handleClick = () => {
    setShowOptions((previous) => !previous);
  };
  // handle filter change
  const handleChange = (e) => {
    getFilterStatus(e.target.value);
  };

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>Invoices</h1>
        <p className={styles.text}>
          <span>There are </span>
          {invoices.length}
          <span> total</span> invoices
        </p>
      </div>
      <div className={styles.wrapper}>
        <button className={styles.btn} onClick={handleClick}>
          <span className={styles.btnText}>
            Filter <span className={styles.hidden}>by status</span>
          </span>
          <Darr />
        </button>
        {showOptions && (
          <div className={styles.selectEl} onChange={handleChange}>
            <div className={styles.formGroup}>
              <input
                type="checkbox"
                id="all"
                name="filter"
                value=""
                className={styles.formControl}
              />
              <label htmlFor="draft">All</label>
            </div>
            <div className={styles.formGroup}>
              <input
                type="checkbox"
                id="draft"
                name="filter"
                value="Draft"
                className={styles.formControl}
              />
              <label htmlFor="draft">Draft</label>
            </div>
            <div className={styles.formGroup}>
              <input
                type="checkbox"
                id="pending"
                name="filter"
                value="Pending"
                className={styles.formControl}
              />
              <label htmlFor="all">Pending</label>
            </div>
            <div className={styles.formGroup}>
              <input
                type="checkbox"
                id="paid"
                name="filter"
                value="Paid"
                className={styles.formControl}
              />
              <label htmlFor="all">Paid</label>
            </div>
          </div>
        )}
        <button className={styles.newInvoice} onClick={() => openDrawer()}>
          <Plus />
          New<span> Invoice</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
