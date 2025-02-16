import React, { useState } from "react";
import axios from "axios";

const Ostalo = () => {
  const [formData, setFormData] = useState({
    ime: "",
    adresa: "",
    telefon: "",
    email: "",
    provizija: "",
    cijena: "",
    nazivUsuge: "",
    pocAngazmana: "",
    krajAngazmana: "",
    idDogadjaj: null,
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
      ime: formData.ime.trim(),
      adresa: formData.adresa.trim(),
      telefon: formData.telefon.trim(),
      email: formData.email.trim(),
      provizija: formData.provizija ? parseFloat(formData.provizija) : 0,
      cijena: formData.cijena ? parseFloat(formData.cijena) : 0,
      nazivUsuge: formData.nazivUsuge.trim(),
      pocAngazmana: formData.pocAngazmana,
      krajAngazmana: formData.krajAngazmana,
      idDogadjaj: null,
    };

    console.log("Submitting Payload:", payload); // 🔍 Log before sending

    try {
      const response = await axios.post(
        "http://localhost:5269/api/ostalo",
        payload,
      );
      if (response.status === 200 || response.status === 201) {
        setMessage("Podatci uspješno poslani!");
        setFormData({
          ime: "",
          adresa: "",
          telefon: "",
          email: "",
          provizija: "",
          cijena: "",
          nazivUsuge: "",
          pocAngazmana: "",
          krajAngazmana: "",
          idDogadjaj: null,
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
      <h2 style={headingStyle}>Unos Ostalih Podataka</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="ime"
          placeholder="Ime"
          value={formData.ime}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="text"
          name="adresa"
          placeholder="Adresa"
          value={formData.adresa}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="tel"
          name="telefon"
          placeholder="Telefon"
          value={formData.telefon}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="number"
          name="provizija"
          placeholder="Provizija (%)"
          value={formData.provizija}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="number"
          name="cijena"
          placeholder="Cijena (KM)"
          value={formData.cijena}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="text"
          name="nazivUsuge"
          placeholder="Naziv Usluge"
          value={formData.nazivUsuge}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="date"
          name="pocAngazmana"
          value={formData.pocAngazmana}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="date"
          name="krajAngazmana"
          value={formData.krajAngazmana}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
        >
          Pošalji
        </button>
      </form>
      {message && <p style={messageStyle}>{message}</p>}
    </div>
  );
};

export default Ostalo;
