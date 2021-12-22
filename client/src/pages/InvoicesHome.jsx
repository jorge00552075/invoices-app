import { useState } from 'react';

import Layout from '../components/layout/Layout.jsx';
import MainHeader from '../components/layout/MainHeader.jsx';
import InvoicesList from '../components/invoice/InvoicesList.jsx';
import Modal from '../components/form/Modal.jsx';

function InvoicesHome() {
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState(null);

  function toggleModal() {
    setShowInvoiceForm((previous) => !previous);
  }

  function getFilterStatus(value) {
    setFilterStatus(value);
  }

  return (
    <Layout>
      {showInvoiceForm && <Modal closeModal={toggleModal}></Modal>}
      <MainHeader openModal={toggleModal} getFilterStatus={getFilterStatus} />
      <InvoicesList filterStatus={filterStatus} />
    </Layout>
  );
}

export default InvoicesHome;
