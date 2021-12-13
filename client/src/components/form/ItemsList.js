import React from 'react';
import { useFieldArray } from 'react-hook-form';

import Item from './Item';

import styles from './Form.module.css';
// prettier-ignore
function ItemsList({ control, register, errors }) {
  const { fields, append, update, remove } = useFieldArray({ control, name: 'items' });

  // id, index, register, errors, update, remove
  return (
    <React.Fragment>
      {fields.map((field, index) => (
        <Item
          id={field.id}
          i={index}
          register={register}
          errors={errors}
          update={update}
          remove={remove}
        />
      ))}
      <button
        type="button"
        className={styles.btn}
        onClick={() => append({ name: '', quantity: null, price: null, total: null })}
      >
        + Add New item
      </button>
    </React.Fragment>
  );
}

export default ItemsList;
