import { useContext } from 'react';

import Select from 'react-select';

import InvoiceContext from '../../context/invoices-context.jsx';
import { ReactComponent as Plus } from '../../assets/icon-plus.svg';

import styles from './MainHeader.module.css';

function MainHeader({ openModal, getFilterStatus }) {
  const { invoices } = useContext(InvoiceContext);

  const options = [
    { value: null, label: 'Show All Invoices' },
    { value: 'Draft', label: 'Draft' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Paid', label: 'Paid' },
  ];

  const customStyles = {
    container: (provided) => ({ ...provided, width: '180px' }),
    control: (provided) => ({
      ...provided,
      border: 'none',
      background: 'none',
    }),
    menuList: (provided) => ({
      ...provided,
      fontSize: '12px',
      fontWeight: 'bold',
      // background: 'hsl(233, 31%, 17%)',
      // color: 'hsl(0, 0%, 100%)',
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: '12px',
      fontWeight: 'bold',
      color: 'hsl(0, 0%, 20%)',
      // color: 'hsl(0, 0%, 100%)',
      textAlign: 'center',
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: '12px',
      fontWeight: 'bold',
      color: 'hsl(233, 31%, 17%)',
      // color: 'hsl(0, 0%, 100%)',
      textAlign: 'center',
    }),
  };

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>Invoices</h1>
        <p className={styles.text}>
          There are {invoices.length} total invoices
        </p>
      </div>
      <div className={styles.wrapper}>
        <Select
          options={options}
          placeholder="Filter by status"
          styles={customStyles}
          onChange={({ value }) => getFilterStatus(value)}
        />
        <button className={styles.newInvoice} onClick={() => openModal()}>
          <Plus />
          New Invoice
        </button>
      </div>
    </header>
  );
}

export default MainHeader;
