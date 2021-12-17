import React from 'react';
import ReactDOM from 'react-dom';

import Form from '../form/Form';
import Layout from '../layout/Layout';
import styles from './Modal.module.css';

function Backdrop({ closeModal }) {
  const handleClick = () => closeModal();

  return <div className={styles.backdrop} onClick={handleClick} />;
}

function ModalOverlay({ invoice, closeModal }) {
  return (
    <div className={styles.modal}>
      <Layout>
        <Form invoice={invoice} closeModal={closeModal} />
      </Layout>
    </div>
  );
}

const backdrop = document.getElementById('backdrop-root');
const overlay = document.getElementById('modal-root');

function Modal({ invoice, closeModal }) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop closeModal={closeModal} />, backdrop)}
      {ReactDOM.createPortal(
        <ModalOverlay invoice={invoice} closeModal={closeModal} />,
        overlay
      )}
    </React.Fragment>
  );
}

export default Modal;
