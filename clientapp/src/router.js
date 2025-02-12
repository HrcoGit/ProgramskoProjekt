import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Automobili from './views/Automobili';
import Vjencanje from './views/AddForms/Vjencanje';
import Cvjecara from './views/AddForms/Cvjecara';
import Dogadjaj from './views/AddForms/Dogadjaj';
import Glazba from './views/AddForms/Glazba';
import Layout from './Layout';
import Izvjestaj from './views/AddForms/Izvjestaj';
import Salon from './views/AddForms/Salon';
import Slasticarna from './views/AddForms/Slasticarna';
import Jelo from './views/AddForms/Jelo';
import Ostalo from './views/AddForms/Ostalo';
import { Home } from './views/Home';
import Automobil from './views/AddForms/Automobil';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/automobili" element={<Automobili />} />
        <Route path="/dodaj-automobil" element={<Automobil />} />
        <Route path="/dodaj-cvjećarnu" element={<Cvjecara />} />
        <Route path="/dodaj-događaj" element={<Dogadjaj />} />
        <Route path="/dodaj-glazbu" element={<Glazba />} />
        <Route path="/izvjestaji/add" element={<Izvjestaj />} />
        <Route path="/dodaj-jelo" element={<Jelo />} />
        <Route path="/ostalo/add" element={<Ostalo />} />
        <Route path="/dodaj-salon" element={<Salon />} />
        <Route path="/dodaj-slastičarnu" element={<Slasticarna />} />
        <Route path="/vjencanje/add" element={<Vjencanje />} />
      </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
