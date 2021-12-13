import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';

import ItemsList from './ItemsList';

import styles from './Form.module.css';

function Form() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitted, isValid, errors },
  } = useForm({ mode: 'onBlur' });

  // default value for date input
  const todaysDate = dayjs(new Date()).format('YYYY-MM-DD');

  const handleClick = () => console.log();

  // error class
  const formControl = styles['form-control'];
  const formControlBorderRed = `${styles['form-control']} ${styles['border-red']}`;
  // prettier-ignore
  return (
    <div className={styles['form-wrapper']}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <h2 className={styles['form-heading']}>New Invoice</h2>
        <div className={styles['fieldset-wrapper']}>
          <fieldset>
            <legend>Bill From</legend>
            <div className={styles['form-group']}>
              <label htmlFor="senderAddress.street">Street Address</label>
              <input
                {...register('senderAddress.street', { required: true })}
                id="senderAddress.street"
                className={
                  errors.senderAddress?.street ? formControlBorderRed : formControl
                }
              />
            </div>
            <div className={styles['form-row']}>
              <div className={styles['form-group']}>
                <label htmlFor="senderAddress.city">City</label>
                <input
                  {...register('senderAddress.city', { required: true })}
                  id="senderAddress.city"
                  className={
                    errors.senderAddress?.city ? formControlBorderRed : formControl
                  }
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="senderAddress.postCode">Post Code</label>
                <input
                  {...register('senderAddress.postCode', { required: true })}
                  id="senderAddress.postCode"
                  className={
                    errors.senderAddress?.postCode ? formControlBorderRed : formControl
                  }
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="senderAddress.country">Country</label>
                <input
                  {...register('senderAddress.country', { required: true })}
                  id="senderAddress.country"
                  className={
                    errors.senderAddress?.country ? formControlBorderRed : formControl
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
                {...register('clientName', { required: true })}
                id="clientName"
                className={
                  errors.clientName ? formControlBorderRed : formControl
                }
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="clientEmail">Client's Email</label>
              <input
                {...register('clientEmail', { required: true, pattern: /^\S+@\S+$/i })}
                id="clientEmail"
                className={
                  errors.clientEmail ? formControlBorderRed : formControl
                }
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="clientAddress.street">Street Address</label>
              <input
                {...register('clientAddress.street', { required: true })}
                id="clientAddress.street"
                className={
                  errors.clientAddress?.street ? formControlBorderRed : formControl
                }
              />
            </div>
            <div className={styles['form-row']}>
              <div className={styles['form-group']}>
                <label htmlFor="clientAddress.city">City</label>
                <input
                  {...register('clientAddress.city', { required: true })}
                  id="clientAddress.city"
                  className={
                    errors.clientAddress?.city ? formControlBorderRed : formControl
                  }
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="clientAddress.postCode">Post Code</label>
                <input
                  {...register('clientAddress.postCode', { required: true })}
                  id="clientAddress.postCode"
                  className={
                    errors.clientAddress?.postCode ? formControlBorderRed : formControl
                  }
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="clientAddress.country">Country</label>
                <input
                  {...register('clientAddress.country', { required: true })}
                  id="clientAddress.country"
                  className={
                    errors.clientAddress?.country ? formControlBorderRed : formControl
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
                  type="date"
                  {...register('createdAt', { required: true })}
                  defaultValue={todaysDate}
                  id="createdAt"
                  className={
                    errors.createdAt ? formControlBorderRed : formControl
                  }
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="paymentTerms">Payment Terms</label>
                <select
                  {...register('paymentTerms', { required: true })}
                  defaultValue={30}
                  id="paymentTerms"
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
                {...register('description', { required: true })}
                id="description"
                className={
                  errors.description ? formControlBorderRed : formControl
                }
              />
            </div>
          </fieldset>
          {/* Items list */}
          <fieldset>
            <legend className={styles['items-heading']}>Item List</legend>
            <ItemsList control={control} register={register} errors={errors} />
          </fieldset>
        </div>
        {/* Validation errors */}
        <div className={styles.messages}>
          {errors.clientEmail && <small>- Please enter a valid email</small>}
          {isSubmitted && !isValid && (
            <small>- All fields must be added.</small>
          )}
        </div>
        {/* Form buttons */}
        <div className={styles.buttons}>
          <button
            type="button"
            className={`${styles.btn} ${styles.discard}`}
            onClick={handleClick}
          >
            Discard
          </button>
          <button
            type="button"
            className={`${styles.btn} ${styles.draft}`}
            onClick={handleClick}
          >
            Save as Draft
          </button>
          <button
            type="submit"
            className={`${styles.btn} ${styles.send}`}
            onClick={() => console.log()}
          >
            Save & Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
