import { useState, useEffect } from 'react';
import { ReactComponent as Delete } from '../../assets/icon-delete.svg';

import styles from './Form.module.css';

function Item({ index, remove, register, errors, setValue }) {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(quantity * price);
    setValue(`items[${index}].total`, total, { shouldValidate: true });
  }, [quantity, price, index, setValue, total]);

  // error class
  const formControl = styles['form-control'];
  const formControlBorderRed = `${styles['form-control']} ${styles['border-red']}`;

  // prettier-ignore
  return (
    <div className={`${styles['form-row']} ${styles['col-5']}`}>
      <div className={styles['form-group']}>
        <label htmlFor={`items[${index}].name`}>Item Name</label>
        <input
          {...register(`items[${index}].name`, { required: true })}
          id={`items[${index}].name`}
          className={
            errors.items?.[index]?.name ? formControlBorderRed : formControl
          }
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor={`items[${index}].quantity`}>Qty.</label>
        <input
          {...register(`items[${index}].quantity`, { required: true, valueAsNumber: true })}
          id={`items[${index}].quantity`}
          className={
            errors.items?.[index]?.quantity ? formControlBorderRed : formControl
          }
          onChange={(e) => setQuantity(+e.target.value)}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor={`items[${index}].price`}>Price</label>
        <input
          {...register(`items[${index}].price`, { required: true, valueAsNumber: true })}
          id={`items[${index}].price`}
          className={
            errors.items?.[index]?.price ? formControlBorderRed : formControl
          }
          onChange={(e) => setPrice(+e.target.value)}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor={`items[${index}].total`}>Total</label>
        <input
          disabled
          {...register(`items[${index}].total`)}
          value={total}
          id={`items[${index}].total`}
          className={styles['form-control']}
        />
      </div>
      <button
        type="button"
        className={styles['btn-del']}
        onClick={() => remove(index)}
      >
        <Delete />
      </button>
    </div>
  );
}

export default Item;
