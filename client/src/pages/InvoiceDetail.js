import { useParams } from 'react-router';
import Layout from '../components/layout/Layout';
import Details from '../components/Details';

function InvoiceDetail() {
  let { id } = useParams();

  return (
    <Layout>
      <Details /> {id}
    </Layout>
  );
}

export default InvoiceDetail;
