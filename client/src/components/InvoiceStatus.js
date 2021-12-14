import styles from './InvoiceStatus.module.css';

function InvoiceStatus(props) {
  let color;
  if (props.status === 'pending') {
    color = 'orange';
  }
  if (props.status === 'paid') {
    color = 'green';
  }
  if (props.status === 'draft') {
    color = 'purple';
  }

  return (
    <div className={`${styles.status} ${styles[`status--${color}`]}`}>
      <div
        className={`${styles.list_style} ${styles[`list_style--${color}`]}`}
      />
      <span className={`${styles.text} ${styles[`text--${color}`]}`}>
        {props.status}
      </span>
    </div>
  );
}

export default InvoiceStatus;
