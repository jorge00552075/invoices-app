import { useState, useEffect } from 'react';
import { ReactComponent as Delete } from '../../assets/icon-delete.svg';

import styles from './Form.module.css';

function Item({ index, remove, register, errors, setValue, fields }) {
  const [quantity, setQuantity] = useState(fields[index].quantity || 0);
  const [price, setPrice] = useState(fields[index].price || 0);
  const [total, setTotal] = useState(fields[index].total || 0);

  useEffect(() => {
    setTotal(quantity * price);
    setValue(`items[${index}].total`, total, { shouldValidate: true });
  }, [quantity, price, index, setValue, total]);

  // ERROR CLASSES
  const formControl = styles.formControl;
  const formControlInvalid = `${styles.formControl} ${styles.invalid}`;

  // prettier-ignore
  return (
    <div className={`${styles.formRow} ${styles['col-5']}`}>
      <div className={styles.formGroup}>
        <label htmlFor={`items[${index}].name`}>Item Name</label>
        <input
          {...register(`items[${index}].name`, { required: true })}
          id={`items[${index}].name`}
          className={
            errors.items?.[index]?.name ? formControlInvalid : formControl
          }
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor={`items[${index}].quantity`}>Qty.</label>
        <input
          {...register(`items[${index}].quantity`, { required: true, valueAsNumber: true })}
          id={`items[${index}].quantity`}
          className={
            errors.items?.[index]?.quantity ? formControlInvalid : formControl
          }
          onChange={(e) => {
            if (Number.isNaN(+e.target.value)) return;
            setQuantity(+e.target.value);
          }}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor={`items[${index}].price`}>Price</label>
        <input
          {...register(`items[${index}].price`, { required: true, valueAsNumber: true })}
          id={`items[${index}].price`}
          className={
            errors.items?.[index]?.price ? formControlInvalid : formControl
          }
          onChange={(e) => {
            if(Number.isNaN(+e.target.value)) return;
            setPrice(+e.target.value)
          }}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor={`items[${index}].total`}>Total</label>
        <input
          disabled
          {...register(`items[${index}].total`)}
          value={total}
          id={`items[${index}].total`}
          className={styles.formControl}
        />
      </div>
      <button
        type="button"
        className={styles.btnDel}
        onClick={() => remove(index)}
      >
        <Delete />
      </button>
    </div>
  );
}

export default Item;
