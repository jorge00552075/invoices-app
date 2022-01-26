import React, { useContext } from "react";

import InvoiceContext from "../../context/invoices-context.jsx";

import styles from "./DetailFooter.module.css";

function DetailFooter({ invoice, showForm, confirmDeletion }) {
  const context = useContext(InvoiceContext);

  return (
    <div className={styles.header}>
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

export default DetailFooter;
