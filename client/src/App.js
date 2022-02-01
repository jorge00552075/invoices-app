import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import NotFoundPage from "./pages/NotFoundPage";
import { InvoiceContextProvider } from "./context/invoices-context.jsx";

function App() {
  return (
    <InvoiceContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invoice/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </InvoiceContextProvider>
  );
}

export default App;
