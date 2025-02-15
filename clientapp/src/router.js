import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Automobili from './views/Automobili';
import Cvjecara from './views/AddForms/Cvjecara';
import Dogadjaj from './views/AddForms/Dogadjaj';
import Restoran from './views/AddForms/Restoran';
import Glazba from './views/AddForms/Glazba';
import Layout from './Layout';
import Izvjestaj from './views/AddForms/Izvjestaj';
import Salon from './views/AddForms/Salon';
import Slasticarna from './views/AddForms/Slasticarna';
import Jelo from './views/AddForms/Jelo';
import Ostalo from './views/AddForms/Ostalo';
import { Home } from './views/Home';
import Automobil from './views/AddForms/Automobil';
import Meni from './views/AddForms/Meni';
import EditAutomobili from './views/EditForme/EditAutomobili';
import EditCvjecara from './views/EditForme/EditCvjecara';
import EditDogadjaj from './views/EditForme/EditDogadjaj';
import EditGlazba from './views/EditForme/EditGlazba';
import EditIzvjestaj from './views/EditForme/EditIzvjestaj';
import EditJelo from './views/EditForme/EditJelo';
import EditMeni from './views/EditForme/EditMeni';
import EditOstalo from './views/EditForme/EditOstalo';
import EditPlaylista from './views/EditForme/EditPlaylista';
import EditRestoran from './views/EditForme/EditRestoran';
import EditSalon from './views/EditForme/EditSalon';
import EditSlasticarna from './views/EditForme/EditSlasticarna';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/automobili" element={<Automobili />} />
        <Route path="/dodaj-automobil" element={<Automobil />} />
        <Route path="/dodaj-cvjećarnu" element={<Cvjecara />} />
        <Route path="/dodaj-svatove" element={<Dogadjaj vrsta="Svatovi" />} />
        <Route path="/dodaj-krtštenje" element={<Dogadjaj vrsta="Krštenje" />} />
        <Route path="/dodaj-pričest" element={<Dogadjaj vrsta="Pričest" />} />
        <Route path="/dodaj-krizmu" element={<Dogadjaj vrsta="Krizma" />} />
        <Route path="/dodaj-glazbu" element={<Glazba />} />
        <Route path="/dodaj-izvještaj" element={<Izvjestaj />} />
        <Route path="/dodaj-jelo" element={<Jelo />} />
        <Route path="/dodaj-meni" element={<Meni />} />
        <Route path="/dodaj-ostalo" element={<Ostalo />} />
        <Route path="/dodaj-salon" element={<Salon />} />
        <Route path="/dodaj-restoran" element={<Restoran />} />
        <Route path="/dodaj-slastičarnu" element={<Slasticarna />} />
        <Route path="/edit-automobil/:id" element={<EditAutomobili />} />
        <Route path="/edit-cvjecara/:id" element={<EditCvjecara />} />
        <Route path="/edit-dogadjaj/:id" element={<EditDogadjaj />} />
        <Route path="/edit-glazba/:id" element={<EditGlazba />} />
        <Route path="/edit-izvjestaj/:id" element={<EditIzvjestaj />} />
        <Route path="/edit-jelo/:id" element={<EditJelo />} />
        <Route path="/edit-meni/:id" element={<EditMeni />} />
        <Route path="/edit-ostalo/:id" element={<EditOstalo />} />
        <Route path="/edit-playlista/:id" element={<EditPlaylista />} />
        <Route path="/edit-restoran/:id" element={<EditRestoran />} />
        <Route path="/edit-salon/:id" element={<EditOstalo />} />
        <Route path="/edit-slasticarna/:id" element={<EditSlasticarna />} />

      </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
