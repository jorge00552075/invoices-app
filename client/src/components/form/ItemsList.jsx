import React from 'react';
import { useFieldArray } from 'react-hook-form';

import Item from './Item.jsx';

import styles from './Form.module.css';
// prettier-ignore
function ItemsList({ register, errors, setValue, control }) {
  const { fields, append, remove } = useFieldArray({ control, name: 'items' });

  return (
    <React.Fragment>
      {fields.map(({ id }, index) => (
        <Item
          key={id}
          index={index}
          remove={remove}
          register={register}
          errors={errors}
          setValue={setValue}
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
