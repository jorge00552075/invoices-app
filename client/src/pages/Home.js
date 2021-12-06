import Layout from '../components/layout/Layout';
import InvoiceHeader from '../components/invoice/InvoiceHeader';
import InvoicesList from '../components/invoice/InvoicesList';

function Invoices() {
  return (
    <Layout>
      <InvoiceHeader />
      <InvoicesList />
    </Layout>
  );
}

export default Invoices;
