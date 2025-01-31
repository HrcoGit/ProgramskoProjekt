import React, { useState } from "react";
import axios from "axios";

const DogadjajCvjecara = () => {
  const [formData, setFormData] = useState({
    id_dc: "",
    id_dogadjaj: "",
    id_cvjecara: "",
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
      const response = await axios.post("http://localhost:5269/api/dogadjaj_cvjecara", formData);
      if (response.status === 200 || response.status === 201) {
        setMessage("Podaci uspješno poslani!");
        setFormData({
          id_dc: "",
          id_dogadjaj: "",
          id_cvjecara: "",
        });
      }
    } catch (error) {
      setMessage("Greška prilikom slanja podataka.");
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Poveži događaj i cvjećaru</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="id_dc" placeholder="ID DC" value={formData.id_dc} onChange={handleChange} required />
        <input type="number" name="id_dogadjaj" placeholder="ID Događaj" value={formData.id_dogadjaj} onChange={handleChange} required />
        <input type="number" name="id_cvjecara" placeholder="ID Cvjećara" value={formData.id_cvjecara} onChange={handleChange} required />
        <button type="submit">Pošalji</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DogadjajCvjecara;