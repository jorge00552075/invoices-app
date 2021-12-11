import { useState } from 'react';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';

import { ReactComponent as Delete } from '../../assets/icon-delete.svg';

import styles from './Form.module.css';

function Form() {
  const [items, setItems] = useState([1]);

  const {
    register,
    handleSubmit,
    formState: { isSubmitted, isValid, errors },
  } = useForm({ mode: 'onBlur' });

  // default value date input
  const todaysDate = dayjs(new Date()).format('YYYY-MM-DD');

  function handleClick(e) {
    console.log(e.target.innerText);
  }

  function onSubmit(data) {
    console.log(data);
  }
  // error class
  const formControl = styles['form-control'];
  const formControlBorderRed = `${styles['form-control']} ${styles['border-red']}`;

  // prettier-ignore
  return (
    <div className={styles['form-wrapper']}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles['form-heading']}>New Invoice</h2>
        <div className={styles['fieldset-wrapper']}>
          <fieldset>
            <legend>Bill From</legend>
            <div className={styles['form-group']}>
              <label htmlFor="senderAddress.street">Street Address</label>
              <input
                id="senderAddress.street"
                {...register('senderAddress.street', { required: true })}
                className={
                  errors.senderAddress?.street
                    ? formControlBorderRed
                    : formControl
                }
              />
            </div>
            <div className={styles['form-row']}>
              <div className={styles['form-group']}>
                <label htmlFor="senderAddress.city">City</label>
                <input
                  id="senderAddress.city"
                  {...register('senderAddress.city', { required: true })}
                  className={
                    errors.senderAddress?.city
                      ? formControlBorderRed
                      : formControl
                  }
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="senderAddress.postCode">Post Code</label>
                <input
                  id="senderAddress.postCode"
                  {...register('senderAddress.postCode', { required: true })}
                  className={
                    errors.senderAddress?.postCode
                      ? formControlBorderRed
                      : formControl
                  }
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="senderAddress.country">Country</label>
                <input
                  id="senderAddress.country"
                  {...register('senderAddress.country', { required: true })}
                  className={
                    errors.senderAddress?.country
                      ? formControlBorderRed
                      : formControl
                  }
                />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Bill To</legend>
            <div className={styles['form-group']}>
              <label htmlFor="clientName">Client's Name</label>
              <input
                id="clientName"
                {...register('clientName', { required: true })}
                className={
                  errors.clientName ? formControlBorderRed : formControl
                }
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="clientEmail">Client's Email</label>
              <input
                id="clientEmail"
                {...register('clientEmail', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className={
                  errors.clientEmail ? formControlBorderRed : formControl
                }
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="clientAddress.street">Street Address</label>
              <input
                id="clientAddress.street"
                {...register('clientAddress.street', { required: true })}
                className={
                  errors.clientAddress?.street
                    ? formControlBorderRed
                    : formControl
                }
              />
            </div>
            <div className={styles['form-row']}>
              <div className={styles['form-group']}>
                <label htmlFor="clientAddress.city">City</label>
                <input
                  id="clientAddress.city"
                  {...register('clientAddress.city', { required: true })}
                  className={
                    errors.clientAddress?.city
                      ? formControlBorderRed
                      : formControl
                  }
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="clientAddress.postCode">Post Code</label>
                <input
                  id="clientAddress.postCode"
                  {...register('clientAddress.postCode', { required: true })}
                  className={
                    errors.clientAddress?.postCode
                      ? formControlBorderRed
                      : formControl
                  }
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="clientAddress.country">Country</label>
                <input
                  id="clientAddress.country"
                  {...register('clientAddress.country', { required: true })}
                  className={
                    errors.clientAddress?.country
                      ? formControlBorderRed
                      : formControl
                  }
                />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <div className={`${styles['form-row']} ${styles['col-2']}`}>
              <div className={styles['form-group']}>
                <label htmlFor="createdAt">Invoice Date</label>
                <input
                  defaultValue={todaysDate}
                  type="date"
                  id="createdAt"
                  {...register('createdAt', { required: true })}
                  className={
                    errors.createdAt ? formControlBorderRed : formControl
                  }
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="paymentTerms">Payment Terms</label>
                <select
                  defaultValue={30}
                  id="paymentTerms"
                  {...register('paymentTerms', { required: true })}
                  className={
                    errors.paymentTerms ? formControlBorderRed : formControl
                  }
                >
                  <option value="1">Net 1 Day</option>
                  <option value="7">Net 7 Day</option>
                  <option value="14">Net 14 Day</option>
                  <option value="30">Net 30 Day</option>
                </select>
              </div>
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="description">Description</label>
              <input
                id="description"
                {...register('description', { required: true })}
                className={
                  errors.description ? formControlBorderRed : formControl
                }
              />
            </div>
          </fieldset>
          {/* Item List */}
          <fieldset>
            <legend className={styles['items-heading']}>Item List</legend>
            {/* START OF ITEM */}
            {items.map((item, i) => (
              <div className={`${styles['form-row']} ${styles['col-5']}`}>
                <div className={styles['form-group']}>
                  <label htmlFor={`items[${i}].name`}>Item Name</label>
                  <input
                    id={`"items[${i}].name"`}
                    {...register(`items[${i}].name`, { required: true })}
                    className={
                      errors.items?.[i].name
                        ? formControlBorderRed
                        : formControl
                    }
                  />
                </div>
                <div className={styles['form-group']}>
                  <label htmlFor={`items[${i}].quantity`}>Qty.</label>
                  <input
                    id={`items[${i}].quantity`}
                    {...register(`items[${i}].quantity`, { required: true })}
                    className={
                      errors.items?.[i].quantity
                        ? formControlBorderRed
                        : formControl
                    }
                  />
                </div>
                <div className={styles['form-group']}>
                  <label htmlFor={`items[${i}].price`}>Price</label>
                  <input
                    id={`items[${i}].price`}
                    {...register(`items[${i}].price`, { required: true })}
                    className={
                      errors.items?.[i].price
                        ? formControlBorderRed
                        : formControl
                    }
                  />
                </div>
                <div className={styles['form-group']}>
                  <label htmlFor={`items[${i}].total`}>Total</label>
                  <input
                    value={0}
                    id={`items[${i}].total`}
                    {...register(`items[${i}].total`)}
                    className={styles['form-control']}
                    disabled
                  />
                </div>
                <button type="button" className={styles['btn-del']}>
                  <Delete />
                </button>
              </div>
            ))}

            {/* END OF ITEM */}
            <button type="button" className={styles.btn}>
              + Add New item
            </button>
          </fieldset>
        </div>
        {/* Error Messages */}
        <div className={styles.messages}>
          {errors.clientEmail && <small>- Please enter a valid email</small>}
          {isSubmitted && !isValid && (
            <small>- All fields must be added.</small>
          )}
        </div>

        {/* Buttons */}
        <div className={styles.buttons}>
          <button
            type="button"
            onClick={handleClick}
            className={`${styles.btn} ${styles.discard}`}
          >
            Discard
          </button>
          <button
            type="button"
            onClick={handleClick}
            className={`${styles.btn} ${styles.draft}`}
          >
            Save as Draft
          </button>
          <button
            type="submit"
            onClick={() => console.log()}
            className={`${styles.btn} ${styles.send}`}
          >
            Save & Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
