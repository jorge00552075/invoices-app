import React from "react";
import ReactDOM from "react-dom";

import Layout from "./Layout";
import Form from "../form/Form";

import styles from "./Drawer.module.css";

function Backdrop(props) {
  return (
    <div className={styles.backdrop} onClick={() => props.closeDrawer()} />
  );
}

function ModalOverlay(props) {
  return (
    <div className={styles.drawer}>
      <Layout form>
        <Form invoice={props.invoice} closeDrawer={props.closeDrawer} />
      </Layout>
    </div>
  );
}
// DRAWER
function Drawer(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeDrawer={props.closeDrawer} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay invoice={props.invoice} closeDrawer={props.closeDrawer}>
          {props.children}
        </ModalOverlay>,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
}

export default Drawer;
