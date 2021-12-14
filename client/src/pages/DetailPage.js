import { useContext } from 'react';
import { useParams } from 'react-router';

import InvoiceContext from '../context/invoices-context';
import Layout from '../components/layout/Layout';
import DetailHeader from '../components/detail/DetailHeader';
import DetailBody from '../components/detail/DetailBody';

function DetailPage() {
  const context = useContext(InvoiceContext);

  const { id } = useParams();
  const invoice = context.find((invoice) => invoice.uid === id);

  return (
    <Layout>
      <DetailHeader invoice={invoice} />
      <DetailBody invoice={invoice} />
    </Layout>
  );
}

export default DetailPage;
