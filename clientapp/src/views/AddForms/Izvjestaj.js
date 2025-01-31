import React, { useState } from "react";
import axios from "axios";

const Izvjestaj = () => {
  const [formData, setFormData] = useState({
    id_izvjestaj: "",   // Optional if auto-generated by backend
    tip_izvjestaja: "",
    podatci: "",
    datum_kreiranja: "",
    id_dogadjaj: "",
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
      const response = await axios.post("http://localhost:5269/api/izvjestaj", formData);
      if (response.status === 200 || response.status === 201) {
        setMessage("Podaci uspješno poslani!");
        setFormData({
          id_izvjestaj: "",  // Reset field
          tip_izvjestaja: "",
          podatci: "",
          datum_kreiranja: "",
          id_dogadjaj: "",
        });
      }
    } catch (error) {
      setMessage("Greška prilikom slanja podataka.");
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Unos Izvještaja</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id_izvjestaj" placeholder="ID Izvještaja (optional)" value={formData.id_izvjestaj} onChange={handleChange} />
        <input type="text" name="tip_izvjestaja" placeholder="Tip Izvještaja" value={formData.tip_izvjestaja} onChange={handleChange} required />
        <textarea name="podatci" placeholder="Podaci" value={formData.podatci} onChange={handleChange} required />
        <input type="date" name="datum_kreiranja" placeholder="Datum Kreiranja" value={formData.datum_kreiranja} onChange={handleChange} required />
        <input type="number" name="id_dogadjaj" placeholder="ID Događaj" value={formData.id_dogadjaj} onChange={handleChange} required />
        <button type="submit">Pošalji</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Izvjestaj;