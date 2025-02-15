import React, { useState } from "react";
import axios from "axios";

const Jelo = () => {
  const [formData, setFormData] = useState({
    naziv: "",
    opis: "",
    cijena: "",
    vrsta_jela: "",
    sastojci: "",
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
      const response = await axios.post("http://localhost:5269/api/jelo", formData);
      if (response.status === 200 || response.status === 201) {
        setMessage("Podatci uspješno poslani!");
        setFormData({
          naziv: "",
          opis: "",
          cijena: "",
          vrsta_jela: "",
          sastojci: "",
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
    alignItems: "center", // Centriranje formi
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    transition: "border 0.3s",
    width: "100%", // Dodano da bude jednako širine
  };

  const textareaStyle = {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    transition: "border 0.3s",
    resize: "vertical",
    width: "100%", // Dodano da bude jednako širine
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
    width: "100%", // I dugme ima istu širinu
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
      <h2 style={headingStyle}>Unos Jela</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="naziv"
          placeholder="Naziv Jela"
          value={formData.naziv}
          onChange={handleChange}
          style={inputStyle}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required
        />
        <textarea
          name="opis"
          placeholder="Opis Jela"
          value={formData.opis}
          onChange={handleChange}
          style={textareaStyle}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required
        />
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
        <input
          type="text"
          name="vrsta_jela"
          placeholder="Vrsta Jela"
          value={formData.vrsta_jela}
          onChange={handleChange}
          style={inputStyle}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required
        />
        <textarea
          name="sastojci"
          placeholder="Sastojci"
          value={formData.sastojci}
          onChange={handleChange}
          style={textareaStyle}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required
        />
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

export default Jelo;