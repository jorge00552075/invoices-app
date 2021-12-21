import { useState, useContext } from 'react';
import { useParams } from 'react-router';

import InvoiceContext from '../context/invoices-context.jsx';
import Layout from '../components/layout/Layout.jsx';
import DetailHeader from '../components/detail/DetailHeader.jsx';
import DetailBody from '../components/detail/DetailBody.jsx';
import Modal from '../components/form/Modal.jsx';

function InvoicesDetail() {
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);
  const { invoices } = useContext(InvoiceContext);

  const { id } = useParams();
  const invoice = invoices.find((invoice) => invoice.uid === id);

  function toggleModal() {
    setShowInvoiceForm((previous) => !previous);
  }

  return (
    <Layout>
      {showInvoiceForm && <Modal invoice={invoice} closeModal={toggleModal} />}
      <DetailHeader invoice={invoice} openModal={toggleModal} />
      <DetailBody invoice={invoice} />
    </Layout>
  );
}

export default InvoicesDetail;
