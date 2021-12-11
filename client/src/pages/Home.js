import { useState } from 'react';

import Layout from '../components/layout/Layout';
import InvoiceHeader from '../components/invoice/InvoiceHeader';
import InvoicesList from '../components/invoice/InvoicesList';
import Modal from '../components/form/Modal';

function Invoices() {
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);

  function toggleModal() {
    setShowInvoiceForm((previous) => !previous);
  }

  return (
    <Layout>
      {showInvoiceForm && <Modal closeModal={toggleModal} />}
      <InvoiceHeader openModal={toggleModal} />
      <InvoicesList />
    </Layout>
  );
}

export default Invoices;
