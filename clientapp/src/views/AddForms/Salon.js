import React, { useState } from "react";
import axios from "axios";

const Salon = () => {
  const [formData, setFormData] = useState({
    ime: "",
    adresa: "",
    telefon: "",
    provizija: "",
    cijena: "",
    broj_mjesta: "",
    velicina: "",
    poc_angazmana: "",
    kraj_angazmana: "",
    id_dogadjaj: null,
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
      const response = await axios.post("http://localhost:5269/api/salon", formData);
      if (response.status === 200 || response.status === 201) {
        setMessage("Podatci uspješno poslani!");
        setFormData({
          ime: "",
          adresa: "",
          telefon: "",
          provizija: "",
          cijena: "",
          broj_mjesta: "",
          velicina: "",
          poc_angazmana: "",
          kraj_angazmana: "",
          id_dogadjaj: null,
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
      <h2 style={headingStyle}>Unos Podataka za Salon</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            name="ime"
            placeholder="Ime"
            value={formData.ime}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            required
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            name="adresa"
            placeholder="Adresa"
            value={formData.adresa}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            required
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            name="telefon"
            placeholder="Telefon"
            value={formData.telefon}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            required
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="number"
            name="provizija"
            placeholder="Provizija"
            value={formData.provizija}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            required
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="number"
            name="cijena"
            placeholder="Cijena"
            value={formData.cijena}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            required
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="number"
            name="broj_mjesta"
            placeholder="Broj Mjesta"
            value={formData.broj_mjesta}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            required
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="number"
            name="velicina"
            placeholder="Velicina"
            value={formData.velicina}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            required
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="date"
            name="poc_angazmana"
            placeholder="Početak Angažmana"
            value={formData.poc_angazmana}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            required
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="date"
            name="kraj_angazmana"
            placeholder="Kraj Angažmana"
            value={formData.kraj_angazmana}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
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

export default Salon;
