import styles from "./InvoiceStatus.module.css";

function InvoiceStatus({ status }) {
  let color;

  if (status === "Pending") {
    color = "orange";
  }

  if (status === "Paid") {
    color = "green";
  }

  if (status === "Draft") {
    color = "purple";
  }

  return (
    <div className={`${styles.status} ${styles[`status--${color}`]}`}>
      <div className={`${styles.bullet} ${styles[`bullet--${color}`]}`} />
      <span className={`${styles.text} ${styles[`text--${color}`]}`}>
        {status}
      </span>
    </div>
  );
}

export default InvoiceStatus;
