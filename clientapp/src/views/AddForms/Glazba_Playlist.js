import React, { useState } from "react";
import axios from "axios";

const GlazbaPlaylist = () => {
  const [formData, setFormData] = useState({
    id_gp: "",          // Optional, if needed
    id_glazba: "",
    id_playlista: "",
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
      const response = await axios.post("http://localhost:5269/api/glazbaplaylist", formData);
      if (response.status === 200 || response.status === 201) {
        setMessage("Podaci uspješno poslani!");
        setFormData({
          id_gp: "",      // Reset field
          id_glazba: "",
          id_playlista: "",
        });
      }
    } catch (error) {
      setMessage("Greška prilikom slanja podataka.");
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Unos Glazbe u PlayListu</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id_gp" placeholder="ID GP (optional)" value={formData.id_gp} onChange={handleChange} />
        <input type="number" name="id_glazba" placeholder="ID Glazba" value={formData.id_glazba} onChange={handleChange} required />
        <input type="number" name="id_playlista" placeholder="ID Playlista" value={formData.id_playlista} onChange={handleChange} required />
        <button type="submit">Pošalji</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default GlazbaPlaylist;