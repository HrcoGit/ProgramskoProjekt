import React, { useState } from "react";
import axios from "axios";

const DogadjajSlasticarna = () => {
  const [formData, setFormData] = useState({
    id_ds: "",
    id_dogadjaj: "",
    id_slasticarna: "",
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
      const response = await axios.post("http://localhost:5269/api/dogadjaj_slasticarna", formData);
      if (response.status === 200 || response.status === 201) {
        setMessage("Podaci uspješno poslani!");
        setFormData({
          id_ds: "",
          id_dogadjaj: "",
          id_slasticarna: "",
        });
      }
    } catch (error) {
      setMessage("Greška prilikom slanja podataka.");
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Poveži događaj i slastičarnu</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="id_ds" placeholder="ID DS" value={formData.id_ds} onChange={handleChange} required />
        <input type="number" name="id_dogadjaj" placeholder="ID Događaj" value={formData.id_dogadjaj} onChange={handleChange} required />
        <input type="number" name="id_slasticarna" placeholder="ID Slastičarna" value={formData.id_slasticarna} onChange={handleChange} required />
        <button type="submit">Pošalji</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DogadjajSlasticarna;