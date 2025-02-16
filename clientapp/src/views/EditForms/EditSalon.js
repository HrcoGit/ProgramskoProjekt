import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditSalon = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    idSalon: "",
    ime: "",
    adresa: "",
    telefon: "",
    provizija: "",
    cijena: "",
    brojMjesta: "",
    velicina: "",
    pocAngazmana: "",
    krajAngazmana: "",
    idDogadjaj: null,
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  // Fetch salon data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5269/api/salon/${id}`,
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      idSalon: Number(id),
      ime: formData.ime.trim(),
      adresa: formData.adresa.trim(),
      telefon: formData.telefon.trim(),
      provizija: parseFloat(formData.provizija) || 0,
      cijena: parseFloat(formData.cijena) || 0,
      brojMjesta: parseInt(formData.brojMjesta) || 0,
      velicina: parseFloat(formData.velicina) || 0,
      pocAngazmana: formData.pocAngazmana,
      krajAngazmana: formData.krajAngazmana,
      idDogadjaj: null,
    };

    try {
      const response = await axios.put(
        `http://localhost:5269/api/salon/${id}`,
        payload,
      );
      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 204
      ) {
        toast.success("Salon uspješno ažuriran!");
        navigate("/");
      }
    } catch (error) {
      toast.error("Greška prilikom ažuriranja salona.");
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>;
  }

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Uredi Salon</h2>
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
          type="text"
          name="telefon"
          placeholder="Telefon"
          value={formData.telefon}
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
          type="number"
          name="brojMjesta"
          placeholder="Broj Mjesta"
          value={formData.brojMjesta}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="number"
          name="velicina"
          placeholder="Veličina (m²)"
          value={formData.velicina}
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
        <button type="submit" style={buttonStyle}>
          Ažuriraj
        </button>
      </form>
    </div>
  );
};

export default EditSalon;

// Styles
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
