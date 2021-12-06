import styles from './Form.module.css';

function Form() {
  return (
    <div className={styles['form-wrapper']}>
      <form>
        <h2>New Invoice</h2>
        <div>
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
            <div className={`${styles['form-row']} ${styles['col-3']}`}>
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
            <div className={`${styles['form-row']} ${styles['col-3']}`}>
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
            <legend>ItemList</legend>
            <div className={`${styles['form-row']} ${styles['col-4']}`}>
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
                />
              </div>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  );
}

export default Form;
