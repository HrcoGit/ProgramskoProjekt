import React, { useState } from "react";
import axios from "axios";

const Restoran = () => {
  const [formData, setFormData] = useState({
    naziv: "",
    lokacija: "",
    kontakt: "",
    mail: "",
    mjesto: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      naziv: formData.naziv.trim(),
      lokacija: formData.lokacija.trim(),
      kontakt: formData.kontakt.trim(),
      mail: formData.mail.trim(),
      mjesto: formData.mjesto.trim(),
    };

    console.log("Submitting Payload:", payload); // 🔍 Log before sending

    try {
      const response = await axios.post("http://localhost:5269/api/restoran", payload);
      if (response.status === 200 || response.status === 201) {
        setMessage("Podaci uspješno poslani!");
        setFormData({
          naziv: "",
          lokacija: "",
          kontakt: "",
          mail: "",
          mjesto: "",
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

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Unos Podataka za Restoran</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="naziv"
          placeholder="Naziv"
          value={formData.naziv}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="text"
          name="lokacija"
          placeholder="Adresa"
          value={formData.lokacija}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="tel"
          name="kontakt"
          placeholder="Kontakt"
          value={formData.kontakt}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="mail"
          placeholder="E-mail"
          value={formData.mail}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="text"
          name="mjesto"
          placeholder="Mjesto"
          value={formData.mjesto}
          onChange={handleChange}
          style={inputStyle}
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

export default Restoran;
