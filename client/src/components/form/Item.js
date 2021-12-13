import { ReactComponent as Delete } from '../../assets/icon-delete.svg';

import styles from './Form.module.css';

function Item({ id, i, register, errors, update, remove }) {
  // const total = ((items[i].quantity || 0) * (items[i].price || 0))

  // error class
  const formControl = styles['form-control'];
  const formControlBorderRed = `${styles['form-control']} ${styles['border-red']}`;

  return (
    <div key={id} className={`${styles['form-row']} ${styles['col-5']}`}>
      <div className={styles['form-group']}>
        <label htmlFor={`items[${i}].name`}>Item Name</label>
        <input
          {...register(`items[${i}].name`, { required: true })}
          id={`items[${i}].name`}
          className={
            errors.items?.[i]?.name ? formControlBorderRed : formControl
          }
          onChange={(e) => update(`items[${i}].name`, +e.target.value)}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor={`items[${i}].quantity`}>Qty.</label>
        <input
          {...register(`items[${i}].quantity`, {
            required: true,
            valueAsNumber: true,
          })}
          id={`items[${i}].quantity`}
          className={
            errors.items?.[i]?.quantity ? formControlBorderRed : formControl
          }
          onChange={(e) => update(`items[${i}].quantity`, +e.target.value)}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor={`items[${i}].price`}>Price</label>
        <input
          {...register(`items[${i}].price`, {
            required: true,
            valueAsNumber: true,
          })}
          id={`items[${i}].price`}
          className={
            errors.items?.[i]?.price ? formControlBorderRed : formControl
          }
          onChange={(e) => update(`items[${i}].price`, +e.target.value)}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor={`items[${i}].total`}>Total</label>
        <input
          disabled
          {...register(`items[${i}].total`)}
          id={`items[${i}].total`}
          className={styles['form-control']}
        />
      </div>
      <button
        type="button"
        className={styles['btn-del']}
        onClick={() => remove(i)}
      >
        <Delete />
      </button>
    </div>
  );
}

export default Item;
