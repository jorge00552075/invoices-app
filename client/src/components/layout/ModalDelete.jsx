import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

import InvoiceContext from "../../context/invoices-context";

import styles from "./ModalDelete.module.css";

// prettier-ignore
function Backdrop({ cancelConfirm }) {
  return (
    <div className={styles.backdrop} onClick={cancelConfirm} />
  );
}

function ModalOverlay({ invoice, cancelConfirm }) {
  const context = useContext(InvoiceContext);
  const navigate = useNavigate();

  return (
    <div className={styles.modal}>
      <h1 className={styles.heading}>Confirm Deletion</h1>
      <p className={styles.text}>
        Are you sure you want to delete invoice #{invoice.uid}? This action
        cannot be undone.
      </p>
      <div className={styles.wrapper}>
        <button
          className={`${styles.btn} ${styles.btnCancel}`}
          onClick={() => cancelConfirm()}
        >
          Cancel
        </button>
        <button
          className={`${styles.btn} ${styles.btnDelete}`}
          onClick={() => {
            context.deleteInvoice(invoice._id);
            navigate("/");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

const backdropEl = document.getElementById("backdrop-root");
const modalOverlaysEl = document.getElementById("modal-root");

// prettier-ignore
function ModalDelete({ invoice, cancelConfirm }) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop cancelConfirm={cancelConfirm} />, backdropEl)}
      {ReactDOM.createPortal(<ModalOverlay cancelConfirm={cancelConfirm} invoice={invoice} />, modalOverlaysEl)}
    </React.Fragment>
  );
}

export default ModalDelete;
