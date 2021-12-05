import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import DATA from '../data.json';
import Layout from '../components/layout/Layout';
import DetailHeader from '../components/detail/DetailHeader';
import DetailBody from '../components/detail/DetailBody';

function DetailPage() {
  const [invoice, setInvoice] = useState(undefined);

  let { id } = useParams();

  useEffect(() => {
    setInvoice(DATA.find((invoice) => invoice.id === id));
  }, [id]);

  if (invoice === undefined) {
    return <Layout>Loading ...</Layout>;
  }

  return (
    <Layout>
      <DetailHeader invoice={invoice} />
      <DetailBody invoice={invoice} />
    </Layout>
  );
}

export default DetailPage;
