
import React, { useState } from "react";
import axios from "axios";

const Glazba = () => {
  const [formData, setFormData] = useState({
    id_glazba: "",  // Added field for ID_GLAZBA (optional)
    ime: "",
    telefon: "",
    email: "",
    provizija: "",
    cijena: "",
    poc_angazmana: "",
    kraj_angazmana: "",
    id_dogadjaj_glazba: "",
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
      const response = await axios.post("http://localhost:5269/api/glazba", formData);
      if (response.status === 200 || response.status === 201) {
        setMessage("Podaci uspješno poslani!");
        setFormData({
          id_glazba: "",  // Reset field
          ime: "",
          telefon: "",
          email: "",
          provizija: "",
          cijena: "",
          poc_angazmana: "",
          kraj_angazmana: "",
          id_dogadjaj_glazba: "",
        });
      }
    } catch (error) {
      setMessage("Greška prilikom slanja podataka.");
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Unos Glazbe</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id_glazba" placeholder="ID Glazba (optional)" value={formData.id_glazba} onChange={handleChange} />
        <input type="text" name="ime" placeholder="Ime" value={formData.ime} onChange={handleChange} required />
        <input type="text" name="telefon" placeholder="Telefon" value={formData.telefon} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="number" name="provizija" placeholder="Provizija" value={formData.provizija} onChange={handleChange} step="0.01" required />
        <input type="number" name="cijena" placeholder="Cijena" value={formData.cijena} onChange={handleChange} step="0.01" required />
        <input type="date" name="poc_angazmana" placeholder="Početak angažmana" value={formData.poc_angazmana} onChange={handleChange} required />
        <input type="date" name="kraj_angazmana" placeholder="Kraj angažmana" value={formData.kraj_angazmana} onChange={handleChange} required />
        <input type="number" name="id_dogadjaj_glazba" placeholder="ID Događaj Glazba" value={formData.id_dogadjaj_glazba} onChange={handleChange} required />
        <button type="submit">Pošalji</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Glazba;