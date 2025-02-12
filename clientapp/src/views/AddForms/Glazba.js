import React, { useState } from "react";
import axios from "axios";

const Glazba = () => {
  const [formData, setFormData] = useState({
    id_glazba: "",
    ime: "",
    telefon: "",
    email: "",
    provizija: "",
    cijena: "",
    poc_angazmana: "2025-02-12",
    kraj_angazmana: "2025-02-12",
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
          id_glazba: "",
          ime: "",
          telefon: "",
          email: "",
          provizija: "",
          cijena: "",
          poc_angazmana: "2025-02-12",
          kraj_angazmana: "2025-02-12",
          id_dogadjaj_glazba: "",
        });
      }
    } catch (error) {
      setMessage("Greška prilikom slanja podataka.");
      console.error("Error:", error);
    }
  };

  const containerStyle = {
    maxWidth: "450px",
    margin: "50px auto",
    backgroundColor: "#f9f9f9",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    transition: "border 0.3s",
    position: "relative",
  };

  const buttonStyle = {
    padding: "12px",
    backgroundColor: "#4caf50",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#45a049",
  };

  const messageStyle = {
    marginTop: "20px",
    fontSize: "18px",
    color: "#333",
    fontWeight: "bold",
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = "#4caf50";
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = "#ccc";
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Unos Glazbe</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            name="id_glazba"
            value={formData.id_glazba}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="ID Glazba (optional)"
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            name="ime"
            value={formData.ime}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Ime"
            required
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Telefon"
            required
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Email"
            required
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="number"
            name="provizija"
            value={formData.provizija}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Provizija"
            step="0.01"
            required
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="number"
            name="cijena"
            value={formData.cijena}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Cijena"
            step="0.01"
            required
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="date"
            name="poc_angazmana"
            value={formData.poc_angazmana}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Početak angažmana"
            required
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="date"
            name="kraj_angazmana"
            value={formData.kraj_angazmana}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Kraj angažmana"
            required
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="number"
            name="id_dogadjaj_glazba"
            value={formData.id_dogadjaj_glazba}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="ID Događaj Glazba"
            required
          />
        </div>
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
        >
          Pošalji
        </button>
      </form>
      {message && <p style={messageStyle}>{message}</p>}
    </div>
  );
};

export default Glazba;
