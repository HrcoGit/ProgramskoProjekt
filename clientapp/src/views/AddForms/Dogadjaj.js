import React, { useState } from "react";
import axios from "axios";

const Dogadjaj = () => {
  const [formData, setFormData] = useState({
    id_dogadjaj: "",
    datum: "",
    kontakt: "",
    tip_dogadjaja: "",
    id_dg: "",
    id_dc: "",
    id_ds: "",
    id_ostalo: "",
    id_izvjestaj: "",
    id_automobili: "",
    id_salon: "",
    id_catering: "",
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
      const response = await axios.post("http://localhost:5269/api/dogadjaji", formData);
      if (response.status === 200 || response.status === 201) {
        setMessage("Podaci uspješno poslani!");
        setFormData({
          id_dogadjaj: "",
          datum: "",
          kontakt: "",
          tip_dogadjaja: "",
          id_dg: "",
          id_dc: "",
          id_ds: "",
          id_ostalo: "",
          id_izvjestaj: "",
          id_automobili: "",
          id_salon: "",
          id_catering: "",
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
      <h2 style={headingStyle}>Dodaj događaj</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={{ position: "relative" }}>
          <input
            type="number"
            name="id_dogadjaj"
            placeholder="ID Događaj"
            value={formData.id_dogadjaj}
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
            name="datum"
            value={formData.datum}
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
            name="kontakt"
            placeholder="Kontakt"
            value={formData.kontakt}
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
            name="tip_dogadjaja"
            placeholder="Tip događaja"
            value={formData.tip_dogadjaja}
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
            name="id_dg"
            placeholder="ID DG"
            value={formData.id_dg}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="number"
            name="id_dc"
            placeholder="ID DC"
            value={formData.id_dc}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="number"
            name="id_ds"
            placeholder="ID DS"
            value={formData.id_ds}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="number"
            name="id_ostalo"
            placeholder="ID Ostalo"
            value={formData.id_ostalo}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="number"
            name="id_izvjestaj"
            placeholder="ID Izvještaj"
            value={formData.id_izvjestaj}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="number"
            name="id_automobili"
            placeholder="ID Automobili"
            value={formData.id_automobili}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="number"
            name="id_salon"
            placeholder="ID Salon"
            value={formData.id_salon}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="number"
            name="id_catering"
            placeholder="ID Catering"
            value={formData.id_catering}
            onChange={handleChange}
            style={inputStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
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

export default Dogadjaj;
