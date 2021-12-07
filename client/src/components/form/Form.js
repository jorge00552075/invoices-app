import { ReactComponent as Delete } from '../../assets/icon-delete.svg';

import styles from './Form.module.css';

function Form() {
  function handleClick(e) {
    console.log(e.target.innerText);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('FORM SUBMITTED');
  }

  return (
    <div className={styles['form-wrapper']}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles['form-heading']}>New Invoice</h2>
        <div className={styles['fieldset-wrapper']}>
          <fieldset>
            <legend>Bill From</legend>
            <div className={styles['form-group']}>
              <label htmlFor="senderAddress.street">Street Address</label>
              <input
                id="senderAddress.street"
                name="senderAddress.street"
                className={styles['form-control']}
              />
            </div>
            <div className={styles['form-row']}>
              <div className={styles['form-group']}>
                <label htmlFor="senderAddress.city">City</label>
                <input
                  id="senderAddress.city"
                  name="senderAddress.city"
                  className={styles['form-control']}
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="senderAddress.postCode">Post Code</label>
                <input
                  id="senderAddress.postCode"
                  name="senderAddress.postCode"
                  className={styles['form-control']}
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="senderAddress.country">Country</label>
                <input
                  id="senderAddress.country"
                  name="senderAddress.country"
                  className={styles['form-control']}
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
                name="clientName"
                className={styles['form-control']}
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="clientEmail">Client's Email</label>
              <input
                id="clientEmail"
                name="clientEmail"
                className={styles['form-control']}
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="clientAddress.street">Street Address</label>
              <input
                id="clientAddress.street"
                name="clientAddress.street"
                className={styles['form-control']}
              />
            </div>
            <div className={styles['form-row']}>
              <div className={styles['form-group']}>
                <label htmlFor="clientAddress.city">City</label>
                <input
                  id="clientAddress.city"
                  name="clientAddress.city"
                  className={styles['form-control']}
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="clientAddress.postCode">Post Code</label>
                <input
                  id="clientAddress.postCode"
                  name="clientAddress.postCode"
                  className={styles['form-control']}
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="clientAddress.country">Country</label>
                <input
                  id="clientAddress.country"
                  name="clientAddress.country"
                  className={styles['form-control']}
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
                  id="createdAt"
                  name="createdAt"
                  className={styles['form-control']}
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="paymentTerms">Payment Terms</label>
                <select
                  id="paymentTerms"
                  name="paymentTerms"
                  className={styles['form-control']}
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
                name="description"
                className={styles['form-control']}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend className={styles['items-heading']}>ItemList</legend>
            <div className={`${styles['form-row']} ${styles['col-5']}`}>
              <div className={styles['form-group']}>
                <label htmlFor="items[0].name">Item Name</label>
                <input
                  id="items[0].name"
                  name="items[0].name"
                  className={styles['form-control']}
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="items[0].quantity">Qty.</label>
                <input
                  id="items[0].quantity"
                  name="items[0].quantity"
                  className={styles['form-control']}
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="items[0].price">Price</label>
                <input
                  id="items[0].price"
                  name="items[0].price"
                  className={styles['form-control']}
                />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="items[0].total">Total</label>
                <input
                  id="items[0].total"
                  name="items[0].total"
                  className={styles['form-control']}
                  disabled
                />
              </div>
              <button type="button" className={styles['btn-del']}>
                <Delete />
              </button>
            </div>
            <button type="button" className={styles.btn}>
              + Add New item
            </button>
          </fieldset>
        </div>
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
