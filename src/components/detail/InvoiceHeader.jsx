import React, { useContext } from "react";
import { Link } from "react-router-dom";

import InvoiceStatus from "../home/InvoiceStatus.jsx";
import InvoiceContext from "../../context/invoices-context.jsx";

import styles from "./InvoiceHeader.module.css";

function InvoiceHeader({ invoice, showForm, confirmDeletion }) {
  const context = useContext(InvoiceContext);

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.link}>
        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.342.886L2.114 5.114l4.228 4.228"
            stroke="#9277FF"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
        <span>Go back</span>
      </Link>
      <div className={styles.statusGroup}>
        <span className={styles.statusText}>Status</span>
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
        {invoice.status !== "Paid" && (
          <button
            className={`${styles.btn} ${styles.btnPaid}`}
            onClick={() =>
              context.updateInvoice(invoice._id, { status: "Paid" })
            }
          >
            Mark as Paid
          </button>
        )}
      </div>
    </div>
  );
}

export default InvoiceHeader;
