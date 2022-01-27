import styles from './InvoiceStatus.module.css';

function InvoiceStatus(props) {
  let color;
  if (props.status === 'Pending') color = 'orange';
  if (props.status === 'Paid') color = 'green';
  if (props.status === 'Draft') color = 'purple';

  return (
    <div className={`${styles.status} ${styles[`status--${color}`]}`}>
      <div className={`${styles.listStyle} ${styles[`listStyle--${color}`]}`} />
      <span className={`${styles.text} ${styles[`text--${color}`]}`}>
        {props.status}
      </span>
    </div>
  );
}

export default InvoiceStatus;
