import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Automobili from './views/Automobili';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/automobili" element={<Automobili />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
