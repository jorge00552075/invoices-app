import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";

import InvoiceContext from "../context/invoices-context.jsx";
import Layout from "../components/layout/Layout.jsx";
import DetailHeader from "../components/detail/InvoiceHeader.jsx";
import DetailBody from "../components/detail/InvoiceBody.jsx";
import DetailFooter from "../components/detail/InvoicesFooter.jsx";
import Drawer from "../components/layout/Drawer.jsx";
import ModalDelete from "../components/layout/ModalDelete.jsx";
import Loader from "../components/other/Loader.jsx";

function DetailPage() {
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const { invoices, getAllInvoices } = useContext(InvoiceContext);
  const { id } = useParams();

  const invoice = invoices.find((invoice) => invoice.uid === id);

  const toggleDrawer = () => setShowInvoiceForm((previous) => !previous);
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
      {showInvoiceForm && (
        <Drawer invoice={invoice} closeDrawer={toggleDrawer} />
      )}
      {showPrompt && (
        <ModalDelete invoice={invoice} cancelConfirm={confirmDeletion} />
      )}
      <DetailHeader
        invoice={invoice}
        showForm={toggleDrawer}
        confirmDeletion={confirmDeletion}
      />
      <DetailBody invoice={invoice} />
      <DetailFooter
        invoice={invoice}
        showForm={toggleDrawer}
        confirmDeletion={confirmDeletion}
      />
    </Layout>
  );
}

export default DetailPage;
