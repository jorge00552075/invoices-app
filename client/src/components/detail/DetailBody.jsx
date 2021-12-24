import dayjs from 'dayjs';

import separator from '../../utils/numberFormat';

import styles from './DetailBody.module.css';

const formatDate = (date) => dayjs(date).format('DD MMM YYYY');

function DetailBody({ invoice }) {
  return (
    <div className={styles.gridContainer}>
      <div>
        <h1 className={styles.id}>
          <span>#</span>
          {invoice.uid}
        </h1>
        <span className={styles.description}>{invoice.description}</span>
      </div>

      <address className={styles.senderAddress}>
        <span>{invoice.senderAddress.street}</span>
        <span>{invoice.senderAddress.city}</span>
        <span>{invoice.senderAddress.postCode}</span>
        <span>{invoice.senderAddress.country}</span>
      </address>

      <div className={styles.dates}>
        <div className={styles.dateItem}>
          <span className={styles.dateHeading}>Invoice Date</span>
          <span className={styles.date}>{formatDate(invoice.createdAt)}</span>
        </div>

        <div className={styles.dateItem}>
          <span className={styles.dateHeading}>Payment Due</span>
          <span className={styles.date}>{formatDate(invoice.paymentDue)}</span>
        </div>
      </div>

      <address className={styles.clientInfo}>
        <span>Bill To</span>
        <h2 className={styles.clientName}>{invoice.clientName}</h2>
        <span>{invoice.clientAddress.street}</span>
        <span>{invoice.clientAddress.city}</span>
        <span>{invoice.clientAddress.postCode}</span>
        <span>{invoice.clientAddress.country}</span>
      </address>

      <address className={styles.clientEmail}>
        <span>Sent To</span>
        <a href={`mailto:${invoice.clientEmail}`}>{invoice.clientEmail}</a>
      </address>
      <div className={styles.wrapper}>
        <table>
          <thead>
            <tr>
              <th className={styles.firstCol}>Item Name</th>
              <th className={styles.secondCol}>QTY</th>
              <th className={styles.thirdCol}>Price</th>
              <th className={styles.fourthCol}>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, i) => {
              return (
                <tr key={i}>
                  <td className={styles.firstCol}>{item.name}</td>
                  <td className={`${styles.secondCol} ${styles.qty}`}>
                    {item.quantity}
                  </td>
                  <td className={`${styles.thirdCol} ${styles.price}`}>
                    $ {separator(item.price || 0)}
                  </td>
                  <td className={styles.fourthCol}>
                    $ {separator(item.total || 0)}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th className={styles.firstCol}>Amount Due</th>
              <td></td>
              <td></td>
              <td className={styles.itemsTotal}>
                $ {separator(invoice.total || 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default DetailBody;
