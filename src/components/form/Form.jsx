import { useContext } from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import InvoiceContext from "../../context/invoices-context.jsx";
import createUID from "../../utils/createUID";
import ItemsList from "./ItemsList";
import styles from "./Form.module.css";

const TODAYSDATE = dayjs(new Date()).format("YYYY-MM-DD");

// functions
const calculatePaymentDue = (date, terms) => dayjs(date).add(terms, "day").$d;
const calculateTotal = (items) =>
  items.reduce((total, item) => total + item.total, 0);

function Form({ invoice, closeDrawer }) {
  const context = useContext(InvoiceContext);

  const {
    register,
    formState: { isSubmitted, isValid, errors },
    handleSubmit,
    setValue,
    getValues,
    control,
  } = useForm({ defaultValues: invoice });

  function onSubmit(data) {
    // edit invoice
    if (!!invoice) {
      const updatedInvoice = {
        ...data,
        paymentDue: calculatePaymentDue(data.createdAt, data.paymentTerms),
        total: calculateTotal(data.items),
      };
      context.updateInvoice(invoice._id, updatedInvoice);
      closeDrawer();
    } else {
      // new invoice
      const newInvoice = {
        ...data,
        uid: createUID(),
        paymentDue: calculatePaymentDue(data.createdAt, data.paymentTerms),
        total: calculateTotal(data.items),
      };
      context.createInvoice(newInvoice);
      closeDrawer();
    }
  }
  // save as draft
  function createDraft(data) {
    const invoiceDraft = {
      ...data,
      uid: createUID(),
      paymentDue: calculatePaymentDue(data.createdAt, data.paymentTerms),
      status: "Draft",
    };
    context.createInvoice(invoiceDraft);
    closeDrawer();
  }

  // form control classes
  const formControl = styles.formControl;
  const formControlInvalid = `${styles.formControl} ${styles.invalid}`;

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {invoice ? (
          <h2 className={styles.formHeading}>
            Edit <span>#</span>
            {invoice.uid}
          </h2>
        ) : (
          <h2 className={styles.formHeading}>New Invoice</h2>
        )}
        <div className={styles.fieldsetWrapper}>
          <fieldset>
            <legend>Bill From</legend>
            <div className={styles.formGroup}>
              <label htmlFor="senderAddress.street">Street Address</label>
              <input
                {...register("senderAddress.street", { required: true })}
                id="senderAddress.street"
                className={
                  errors.senderAddress?.street
                    ? formControlInvalid
                    : formControl
                }
              />
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="senderAddress.city">City</label>
                <input
                  {...register("senderAddress.city", { required: true })}
                  id="senderAddress.city"
                  className={
                    errors.senderAddress?.city
                      ? formControlInvalid
                      : formControl
                  }
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="senderAddress.postCode">Post Code</label>
                <input
                  {...register("senderAddress.postCode", { required: true })}
                  id="senderAddress.postCode"
                  className={
                    errors.senderAddress?.postCode
                      ? formControlInvalid
                      : formControl
                  }
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="senderAddress.country">Country</label>
                <input
                  {...register("senderAddress.country", { required: true })}
                  id="senderAddress.country"
                  className={
                    errors.senderAddress?.country
                      ? formControlInvalid
                      : formControl
                  }
                />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Bill To</legend>
            <div className={styles.formGroup}>
              <label htmlFor="clientName">Client's Name</label>
              <input
                {...register("clientName", { required: true })}
                id="clientName"
                className={errors.clientName ? formControlInvalid : formControl}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="clientEmail">Client's Email</label>
              <input
                {...register("clientEmail", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                id="clientEmail"
                className={
                  errors.clientEmail ? formControlInvalid : formControl
                }
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="clientAddress.street">Street Address</label>
              <input
                {...register("clientAddress.street", { required: true })}
                id="clientAddress.street"
                className={
                  errors.clientAddress?.street
                    ? formControlInvalid
                    : formControl
                }
              />
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="clientAddress.city">City</label>
                <input
                  {...register("clientAddress.city", { required: true })}
                  id="clientAddress.city"
                  className={
                    errors.clientAddress?.city
                      ? formControlInvalid
                      : formControl
                  }
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="clientAddress.postCode">Post Code</label>
                <input
                  {...register("clientAddress.postCode", { required: true })}
                  id="clientAddress.postCode"
                  className={
                    errors.clientAddress?.postCode
                      ? formControlInvalid
                      : formControl
                  }
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="clientAddress.country">Country</label>
                <input
                  {...register("clientAddress.country", { required: true })}
                  id="clientAddress.country"
                  className={
                    errors.clientAddress?.country
                      ? formControlInvalid
                      : formControl
                  }
                />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <div className={`${styles.formRow} ${styles["col-2"]}`}>
              <div className={styles.formGroup}>
                <label htmlFor="createdAt">Invoice Date</label>
                <input
                  type="date"
                  {...register("createdAt", { required: true })}
                  defaultValue={TODAYSDATE}
                  id="createdAt"
                  className={
                    errors.createdAt ? formControlInvalid : formControl
                  }
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="paymentTerms">Payment Terms</label>
                <select
                  {...register("paymentTerms", { required: true })}
                  defaultValue={30}
                  id="paymentTerms"
                  className={
                    errors.paymentTerms ? formControlInvalid : formControl
                  }
                >
                  <option value="1">Net 1 Day</option>
                  <option value="7">Net 7 Day</option>
                  <option value="14">Net 14 Day</option>
                  <option value="30">Net 30 Day</option>
                </select>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="description">Description</label>
              <input
                {...register("description", { required: true })}
                id="description"
                className={
                  errors.description ? formControlInvalid : formControl
                }
              />
            </div>
          </fieldset>
          <fieldset>
            <legend className={styles.itemsHeading}>Item List</legend>
            <ItemsList
              register={register}
              errors={errors}
              setValue={setValue}
              control={control}
            />
          </fieldset>
        </div>
        <div className={styles.messages}>
          {errors.clientEmail && <small>- Please enter a valid email</small>}
          {isSubmitted && !isValid && (
            <small>- All fields must be added.</small>
          )}
        </div>
        <div className={styles.buttons}>
          <button
            type="button"
            className={`${styles.btn} ${styles.discard}`}
            onClick={() => closeDrawer()}
          >
            {invoice ? "Cancel" : "Discard"}
          </button>
          {!invoice && (
            <button
              type="button"
              className={`${styles.btn} ${styles.draft}`}
              onClick={() => createDraft(getValues())}
            >
              Save as Draft
            </button>
          )}
          <button type="submit" className={`${styles.btn} ${styles.send}`}>
            {invoice ? "Save Changes" : "Save & Send"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
