import React from 'react';
import ReactDOM from 'react-dom';

import Layout from '../layout/Layout';
import Form from './Form';

import styles from './Modal.module.css';

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={() => props.closeModal()} />;
}

function ModalOverlay(props) {
  return (
    <div className={styles.modal}>
      <Layout form>
        <Form invoice={props.invoice} closeModal={props.closeModal} />
      </Layout>
    </div>
  );
}

function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeModal={props.closeModal} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay invoice={props.invoice} closeModal={props.closeModal}>
          {props.children}
        </ModalOverlay>,
        document.getElementById('modal-root')
      )}
    </React.Fragment>
  );
}

export default Modal;
