import React, { useState } from "react";
import axios from "axios";

const Izvjestaj = () => {
  const [formData, setFormData] = useState({
    tipIzvjestaja: "",
    podatci: "",
    datumKreiranja: "",
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
      tipIzvjestaja: formData.tipIzvjestaja.trim(),
      podatci: formData.podatci.trim(),
      datumKreiranja: formData.datumKreiranja,
      idDogadjaj: null,
    };
  
    try {
      const response = await axios.post("http://localhost:5269/api/izvjestaj", payload);
      if (response.status === 200 || response.status === 201) {
        setMessage("Podatci uspješno poslani!");
        setFormData({
          tipIzvjestaja: "",
          podatci: "",
          datumKreiranja: "",
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
      <h2 style={headingStyle}>Unos Izvještaja</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="tipIzvjestaja"
          placeholder="Tip Izvještaja"
          value={formData.tipIzvjestaja}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <textarea
          name="podatci"
          placeholder="Podatci"
          value={formData.podatci}
          onChange={handleChange}
          style={{ ...inputStyle, height: "80px" }}
          required
        />
        <input
          type="date"
          name="datumKreiranja"
          value={formData.datumKreiranja}
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

export default Izvjestaj;
