import { useState, useContext } from 'react';
import { useParams } from 'react-router';

import InvoiceContext from '../context/invoices-context.jsx';
import Layout from '../components/layout/Layout.jsx';
import DetailHeader from '../components/detail/DetailHeader.jsx';
import DetailBody from '../components/detail/DetailBody.jsx';
import Modal from '../components/form/Modal.jsx';
import DeletePrompt from '../components/detail/DeletePrompt.jsx';
import { useEffect } from 'react';
import Loader from '../components/layout/Loader.jsx';

function InvoicesDetail() {
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const { invoices, getAllInvoices } = useContext(InvoiceContext);
  const { id } = useParams();

  const invoice = invoices.find((invoice) => invoice.uid === id);

  const toggleModal = () => setShowInvoiceForm((previous) => !previous);
  const confirmDeletion = () => setShowPrompt((previous) => !previous);

  useEffect(() => {
    if (invoices.length === 0) getAllInvoices();
  }, [invoices.length, getAllInvoices]);

  if (invoice === undefined) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

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
