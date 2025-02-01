import React, { useState } from "react";
import axios from "axios";

const DogadjajGlazba = () => {
  const [formData, setFormData] = useState({
    id_izvjestaj: "",
    id_dogadjaj: "",
    id_glazba: "",
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
      const response = await axios.post("http://localhost:5269/api/dogadjaj_glazba", formData);
      if (response.status === 200 || response.status === 201) {
        setMessage("Podaci uspješno poslani!");
        setFormData({
          id_izvjestaj: "",
          id_dogadjaj: "",
          id_glazba: "",
        });
      }
    } catch (error) {
      setMessage("Greška prilikom slanja podataka.");
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Poveži događaj i glazbu</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="id_izvjestaj" placeholder="ID Izvještaj" value={formData.id_izvjestaj} onChange={handleChange} required />
        <input type="number" name="id_dogadjaj" placeholder="ID Događaj" value={formData.id_dogadjaj} onChange={handleChange} required />
        <input type="number" name="id_glazba" placeholder="ID Glazba" value={formData.id_glazba} onChange={handleChange} required />
        <button type="submit">Pošalji</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DogadjajGlazba;