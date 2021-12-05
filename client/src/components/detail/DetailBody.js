import styles from './DetailBody.module.css';

function DetailBody({ invoice }) {
  return (
    <div className={styles['grid-container']}>
      <div>
        <h1 className={styles.id}>
          <span>#</span>
          {invoice.id}
        </h1>
        <span className={styles.description}>{invoice.description}</span>
      </div>

      <address className={styles.sender_address}>
        <span>{invoice.senderAddress.street}</span>
        <span>{invoice.senderAddress.city}</span>
        <span>{invoice.senderAddress.postCode}</span>
        <span>{invoice.senderAddress.country}</span>
      </address>

      <div className={styles.dates}>
        <div className={styles['date-item']}>
          <span className={styles['date-heading']}>Invoice Date</span>
          <span className={styles.date}>{invoice.createdAt}</span>
        </div>

        <div className={styles['date-item']}>
          <span className={styles['date-heading']}>Payment Due</span>
          <span className={styles.date}>{invoice.paymentDue}</span>
        </div>
      </div>

      <address className={styles['client-info']}>
        <span>Bill To</span>
        <h2 className={styles['client-name']}>{invoice.clientName}</h2>
        <span>{invoice.clientAddress.street}</span>
        <span>{invoice.clientAddress.city}</span>
        <span>{invoice.clientAddress.postCode}</span>
        <span>{invoice.clientAddress.country}</span>
      </address>

      <address className={styles['client-email']}>
        <span>Sent To</span>
        <a href={`mailto:${invoice.clientEmail}`}>{invoice.clientEmail}</a>
      </address>
      {/* TABLE */}
      <div className={styles.wrapper}>
        <table>
          <thead>
            <tr>
              <th className={styles['first-col']}>Item Name</th>
              <th className={styles['second-col']}>QTY</th>
              <th className={styles['third-col']}>Price</th>
              <th className={styles['fourth-col']}>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, i) => {
              return (
                <tr key={i}>
                  <td className={styles['first-col']}>{item.name}</td>
                  <td className={`${styles['second-col']} ${styles.qty}`}>
                    {item.quantity}
                  </td>
                  <td className={`${styles['third-col']} ${styles.price}`}>
                    $ {item.price}
                  </td>
                  <td className={styles['fourth-col']}>$ {item.total}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th className={styles['first-col']}>Amount Due</th>
              <td></td>
              <td></td>
              <td className={styles['items-total']}>$ {invoice.total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default DetailBody;
