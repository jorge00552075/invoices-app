import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Invoices from './pages/Invoices';
import InvoiceDetail from './pages/InvoiceDetail';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Invoices />} />
        <Route path="/invoice/:id" element={<InvoiceDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
