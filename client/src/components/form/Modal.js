import React from 'react';
import ReactDOM from 'react-dom';

import Form from '../form/Form';
import Layout from '../layout/Layout';
import styles from './Modal.module.css';

function Backdrop({ closeModal }) {
  const handleClick = () => closeModal();

  return <div className={styles.backdrop} onClick={handleClick} />;
}

function ModalOverlay() {
  return (
    <div className={styles.modal}>
      <Layout>
        <Form />
      </Layout>
    </div>
  );
}

function Modal({ closeModal }) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeModal={closeModal} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById('modal-root')
      )}
    </React.Fragment>
  );
}

export default Modal;
