import { Link } from "react-router-dom";
import dayjs from "dayjs";
import separator from "../../utils/numberFormat";
import InvoiceStatus from "./InvoiceStatus.jsx";
import { ReactComponent as RightArrow } from "../../assets/icon-arrow-right.svg";

import styles from "./InvoiceItem.module.css";

const formatDate = (date) => dayjs(date).format("DD MMM YYYY");

function InvoiceItem({ invoice }) {
  return (
    <Link to={`/invoice/${invoice.uid}`} className={styles.invoice}>
      <h2 className={styles.id}>
        <span>#</span>
        {invoice.uid}
      </h2>
      <span className={styles.paymentDue}>
        Due {formatDate(invoice.paymentDue)}
      </span>
      <span className={styles.clientName}>{invoice.clientName}</span>
      <span className={styles.total}>
        $ {separator(Number(invoice.total || 0).toFixed(2))}
      </span>

      <div className={styles.container}>
        <InvoiceStatus status={invoice.status} />
        <RightArrow className={styles.rarr} />
      </div>
    </Link>
  );
}

export default InvoiceItem;
