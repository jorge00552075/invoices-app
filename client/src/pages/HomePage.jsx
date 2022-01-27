import { useState } from "react";

import Layout from "../components/layout/Layout.jsx";
import MainHeader from "../components/home/MainHeader.jsx";
import InvoicesList from "../components/home/InvoicesList.jsx";
import Drawer from "../components/layout/Drawer.jsx";

function HomePage() {
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState(null);

  function toggleDrawer() {
    setShowInvoiceForm((previous) => !previous);
  }

  function getFilterStatus(value) {
    setFilterStatus(value);
  }

  return (
    <Layout>
      {showInvoiceForm && <Drawer closeDrawer={toggleDrawer}></Drawer>}
      <MainHeader openDrawer={toggleDrawer} getFilterStatus={getFilterStatus} />
      <InvoicesList filterStatus={filterStatus} />
    </Layout>
  );
}

export default HomePage;
