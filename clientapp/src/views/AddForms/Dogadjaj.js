import React, { useState } from "react";
import axios from "axios";

const Dogadjaj = () => {
  const [formData, setFormData] = useState({
    id_dogadjaj: "",
    datum: "",
    kontakt: "",
    tip_dogadjaja: "",
    id_dg: "",
    id_dc: "",
    id_ds: "",
    id_ostalo: "",
    id_izvjestaj: "",
    id_automobili: "",
    id_salon: "",
    id_catering: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5269/api/dogadjaji", formData);
      if (response.status === 200 || response.status === 201) {
        setMessage("Podaci uspješno poslani!");
        setFormData({
          id_dogadjaj: "",
          datum: "",
          kontakt: "",
          tip_dogadjaja: "",
          id_dg: "",
          id_dc: "",
          id_ds: "",
          id_ostalo: "",
          id_izvjestaj: "",
          id_automobili: "",
          id_salon: "",
          id_catering: "",
        });
      }
    } catch (error) {
      setMessage("Greška prilikom slanja podataka.");
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Dodaj događaj</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="id_dogadjaj" placeholder="ID Događaj" value={formData.id_dogadjaj} onChange={handleChange} required />
        <input type="date" name="datum" value={formData.datum} onChange={handleChange} required />
        <input type="text" name="kontakt" placeholder="Kontakt" value={formData.kontakt} onChange={handleChange} required />
        <input type="text" name="tip_dogadjaja" placeholder="Tip događaja" value={formData.tip_dogadjaja} onChange={handleChange} required />
        <input type="number" name="id_dg" placeholder="ID DG" value={formData.id_dg} onChange={handleChange} />
        <input type="number" name="id_dc" placeholder="ID DC" value={formData.id_dc} onChange={handleChange} />
        <input type="number" name="id_ds" placeholder="ID DS" value={formData.id_ds} onChange={handleChange} />
        <input type="number" name="id_ostalo" placeholder="ID Ostalo" value={formData.id_ostalo} onChange={handleChange} />
        <input type="number" name="id_izvjestaj" placeholder="ID Izvještaj" value={formData.id_izvjestaj} onChange={handleChange} />
        <input type="number" name="id_automobili" placeholder="ID Automobili" value={formData.id_automobili} onChange={handleChange} />
        <input type="number" name="id_salon" placeholder="ID Salon" value={formData.id_salon} onChange={handleChange} />
        <input type="number" name="id_catering" placeholder="ID Catering" value={formData.id_catering} onChange={handleChange} />
        <button type="submit">Pošalji</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Dogadjaj;