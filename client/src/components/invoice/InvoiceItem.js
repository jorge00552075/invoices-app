import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import separator from '../../utils/numberFormat';
import InvoiceStatus from '../InvoiceStatus';
import { ReactComponent as RightArrow } from '../../assets/icon-arrow-right.svg';

import styles from './InvoiceItem.module.css';

function InvoiceItem({ invoice }) {
  return (
    <Link to={`/invoice/${invoice.uid}`} className={styles.invoice}>
      <h2 className={styles.id}>
        <span>#</span>
        {invoice.uid}
      </h2>
      <span className={styles.payment_due}>
        Due {dayjs(invoice.paymentDue).format('DD MMM YYYY')}
      </span>
      <span className={styles.client_name}>{invoice.clientName}</span>
      {/* <span className={styles.total}>$ {separator(invoice.total)}</span> */}
      <span className={styles.total}>
        $ {invoice.total ? separator(invoice.total) : 0}
      </span>

      <div className={styles.container}>
        <InvoiceStatus status={invoice.status} />
        <RightArrow />
      </div>
    </Link>
  );
}

export default InvoiceItem;
