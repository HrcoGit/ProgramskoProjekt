import React, { useState } from "react";
import axios from "axios";

const Vjencanje = () => {
  const [formData, setFormData] = useState({
    marka: "",
    model: "",
    cijena: "",
    provizija: "",
    pocetakAngazmana: "",
    krajAngazmana: "",
    idDogadjaj: "",
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
      const response = await axios.post("http://localhost:5269/api/automobili", formData);
      if (response.status === 200 || response.status === 201) {
        setMessage("Podaci uspješno poslani!");
        setFormData({
          marka: "",
          model: "",
          cijena: "",
          provizija: "",
          pocetakAngazmana: "",
          krajAngazmana: "",
          idDogadjaj: "",
        });
      }
    } catch (error) {
      setMessage("Greška prilikom slanja podataka.");
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Dodaj automobil</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="marka"
          placeholder="Marka"
          value={formData.marka}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={formData.model}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          step="0.01"
          name="cijena"
          placeholder="Cijena"
          value={formData.cijena}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          step="0.01"
          name="provizija"
          placeholder="Provizija"
          value={formData.provizija}
          onChange={handleChange}
          required
        />
        <label>Početak angažmana:</label>
        <input
          type="date"
          name="pocetakAngazmana"
          value={formData.pocetakAngazmana}
          onChange={handleChange}
          required
        />
        <label>Kraj angažmana:</label>
        <input
          type="date"
          name="krajAngazmana"
          value={formData.krajAngazmana}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="idDogadjaj"
          placeholder="ID Događaja"
          value={formData.idDogadjaj}
          onChange={handleChange}
          required
        />
        <button type="submit">Pošalji</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Vjencanje;