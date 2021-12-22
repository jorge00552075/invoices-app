import { useState, useContext } from 'react';
import { useParams } from 'react-router';

import InvoiceContext from '../context/invoices-context.jsx';
import Layout from '../components/layout/Layout.jsx';
import DetailHeader from '../components/detail/DetailHeader.jsx';
import DetailBody from '../components/detail/DetailBody.jsx';
import Modal from '../components/form/Modal.jsx';
import DeletePrompt from '../components/detail/DeletePrompt.jsx';

function InvoicesDetail() {
  // hoooks
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const { invoices } = useContext(InvoiceContext);
  const { id } = useParams();

  const invoice = invoices.find((invoice) => invoice.uid === id);

  const toggleModal = () => setShowInvoiceForm((previous) => !previous);
  const confirmDeletion = () => setShowPrompt((previous) => !previous);

  return (
    <Layout>
      {showInvoiceForm && <Modal invoice={invoice} closeModal={toggleModal} />}
      {showPrompt && (
        <DeletePrompt invoice={invoice} cancelConfirm={confirmDeletion} />
      )}
      <DetailHeader
        invoice={invoice}
        showForm={toggleModal}
        confirmDeletion={confirmDeletion}
      />
      <DetailBody invoice={invoice} />
    </Layout>
  );
}

export default InvoicesDetail;
