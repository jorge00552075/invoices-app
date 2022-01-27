import dayjs from "dayjs";

import separator from "../../utils/numberFormat";

import styles from "./DetailBody.module.css";

const formatDate = (date) => dayjs(date).format("DD MMM YYYY");

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
              <th className={styles["col-1"]}>Item Name</th>
              <th className={styles["col-2"]}>QTY</th>
              <th className={styles["col-3"]}>Price</th>
              <th className={styles["col-4"]}>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, i) => {
              return (
                <tr key={i}>
                  <td className={styles["col-1"]}>{item.name}</td>
                  <td className={`${styles["col-2"]} ${styles.qty}`}>
                    {item.quantity}
                  </td>
                  <td className={`${styles["col-3"]} ${styles.price}`}>
                    $ {separator(Number(item.price).toFixed(2))}
                  </td>
                  <td className={styles["col-4"]}>
                    $ {separator(Number(item.total).toFixed(2))}
                  </td>
                </tr>
              );
            })}
            {
              <tr className={styles.footer}>
                <td className={styles["col-1"]}>Amount Due</td>
                <td className={styles["col-2"]}></td>
                <td className={styles["col-3"]}></td>
                <td className={`${styles["col-4"]} ${styles.total}`}>
                  $ {separator(Number(invoice.total || 0).toFixed(2))}
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DetailBody;
