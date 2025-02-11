import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Automobili from './views/Automobili';
import Vjencanje from './views/AddForms/Vjencanje';
import Cvjecara from './views/AddForms/Cvjecara';
import Dogadjaj from './views/AddForms/Dogadjaj';
import Glazba from './views/AddForms/Glazba';
import Izvjestaj from './views/AddForms/Izvjestaj';
import Salon from './views/AddForms/Salon';
import Slasticarna from './views/AddForms/Slasticarna';
import Jelo from './views/AddForms/Jelo';
import Ostalo from './views/AddForms/Ostalo';
import Layout from './Layout';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/automobili" element={<Automobili />} />
        <Route path="/cvjecara/add" element={<Cvjecara />} />
        <Route path="/dogadjaj/add" element={<Dogadjaj />} />
        <Route path="/glazba/add" element={<Glazba />} />
        <Route path="/izvjestaji/add" element={<Izvjestaj />} />
        <Route path="/jelo/add" element={<Jelo />} />
        <Route path="/ostalo/add" element={<Ostalo />} />
        <Route path="/salon/add" element={<Salon />} />
        <Route path="/slasticarna/add" element={<Slasticarna />} />
        <Route path="/vjencanje/add" element={<Vjencanje />} />
      </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
