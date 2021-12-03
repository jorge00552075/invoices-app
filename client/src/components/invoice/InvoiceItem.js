import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import separator from '../../utils/numberFormat';
import { ReactComponent as RightArrow } from '../../assets/icon-arrow-right.svg';

import styles from './InvoiceItem.module.css';

function InvoiceItem({ invoice }) {
  let color;
  if (invoice.status === 'Pending') {
    color = 'orange';
  }
  if (invoice.status === 'Paid') {
    color = 'green';
  }
  if (invoice.status === 'Draft') {
    color = 'purple';
  }

  return (
    <Link to={`/invoice/${invoice.id}`} className={styles.invoice}>
      <h2 className={styles.id}>
        <span>#</span>
        {invoice.id}
      </h2>
      <span className={styles.payment_due}>
        Due {dayjs(invoice.paymentDue).format('DD MMM YYYY')}
      </span>
      <span className={styles.client_name}>{invoice.clientName}</span>
      <span className={styles.total}>$ {separator(invoice.total)}</span>

      <div className={styles.container}>
        <div className={`${styles.status} ${styles[`status--${color}`]}`}>
          <div
            className={`${styles.list_style} ${styles[`list_style--${color}`]}`}
          />
          <span className={`${styles.text} ${styles[`text--${color}`]}`}>
            {invoice.status}
          </span>
        </div>
        <RightArrow />
      </div>
    </Link>
  );
}

export default InvoiceItem;
