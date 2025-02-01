import React, { useState } from "react";
import axios from "axios";

const DogadjajRestoran = () => {
  const [formData, setFormData] = useState({
    id_dr: "",
    id_dogadjaj: "",
    id_restoran: "",
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
      const response = await axios.post("http://localhost:5269/api/dogadjaj_restoran", formData);
      if (response.status === 200 || response.status === 201) {
        setMessage("Podaci uspješno poslani!");
        setFormData({
          id_dr: "",
          id_dogadjaj: "",
          id_restoran: "",
        });
      }
    } catch (error) {
      setMessage("Greška prilikom slanja podataka.");
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Poveži događaj i restoran</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="id_dr" placeholder="ID DR" value={formData.id_dr} onChange={handleChange} required />
        <input type="number" name="id_dogadjaj" placeholder="ID Događaj" value={formData.id_dogadjaj} onChange={handleChange} required />
        <input type="number" name="id_restoran" placeholder="ID Restoran" value={formData.id_restoran} onChange={handleChange} required />
        <button type="submit">Pošalji</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DogadjajRestoran;