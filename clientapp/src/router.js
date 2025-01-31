import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Automobili from './views/Automobili';
import Vjencanje from './views/AddForms/Vjencanje';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/automobili" element={<Automobili />} />
        <Route path="/vjencanje/add" element={<Vjencanje />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
