import React, { useState } from "react";
import axios from "axios";

const Automobil = () => {
  const [formData, setFormData] = useState({
    marka: "",
    model: "",
    cijena: "",
    provizija: "",
    pocAngazmana: "2025-02-12",
    krajAngazmana: "2025-02-12",
    idDogadjaj: "",
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
      idAutomobili: 0,
      marka: formData.marka,
      model: formData.model,
      cijena: parseFloat(formData.cijena),
      provizija: parseFloat(formData.provizija),
      pocAngazmana: formData.pocAngazmana,
      krajAngazmana: formData.krajAngazmana,
      idDogadjaj: parseInt(formData.idDogadjaj),
      idDogadjajNavigation: {
        idDogadjaj: 0,
        datum: "2025-02-12",
        kontakt: "string",
        tipDogadjaja: "string",
        idDg: 0,
        idDc: 0,
        idDs: 0,
        idOstalo: 0,
        idIzvjestaj: 0,
        idAutomobili: 0,
        idSalon: 0,
        idCatering: 0,
        automobili: ["string"],
      },
    };

    try {
      const response = await axios.post("http://localhost:5269/api/automobili", payload);
      setMessage("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      setMessage("There was an error submitting the form.");
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

  const inputFocusStyle = {
    borderColor: "#4caf50",
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
      <h2 style={headingStyle}>Automobil Form</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="marka"
          placeholder="Marka"
          value={formData.marka}
          onChange={handleChange}
          style={inputStyle}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={formData.model}
          onChange={handleChange}
          style={inputStyle}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required
        />
        <input
          type="text"
          name="cijena"
          placeholder="Cijena (KM)"
          value={formData.cijena}
          onChange={handleChange}
          style={inputStyle}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required
        />
        <input
          type="text"
          name="provizija"
          placeholder="Provizija (%)"
          value={formData.provizija}
          onChange={handleChange}
          style={inputStyle}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required
        />
        <input
          type="date"
          name="pocAngazmana"
          value={formData.pocAngazmana}
          onChange={handleChange}
          style={inputStyle}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required
        />
        <input
          type="date"
          name="krajAngazmana"
          value={formData.krajAngazmana}
          onChange={handleChange}
          style={inputStyle}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required
        />
        <input
          type="text"
          name="idDogadjaj"
          placeholder="ID Dogadjaja"
          value={formData.idDogadjaj}
          onChange={handleChange}
          style={inputStyle}
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
          Submit
        </button>
      </form>
      {message && <p style={messageStyle}>{message}</p>}
    </div>
  );
};

export default Automobil;
