import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import DATA from './data.json';
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import NotFound from './pages/NotFound';
import InvoiceContext from './context/invoices-context';

function App() {
  // eslint-disable-next-line
  const [invoices, setInvoices] = useState(DATA);

  return (
    <InvoiceContext.Provider value={invoices}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/invoice/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </InvoiceContext.Provider>
  );
}

export default App;
