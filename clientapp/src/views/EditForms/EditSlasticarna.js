import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditSlasticarna = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    idSlasticarna: "",
    ime: "",
    adresa: "",
    telefon: "",
    email: "",
    provizija: "",
    cijena: "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5269/api/slasticarna/${id}`,
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
      idSlasticarna: Number(id),
      ime: formData.ime.trim(),
      adresa: formData.adresa.trim(),
      telefon: formData.telefon.trim(),
      email: formData.email.trim(),
      provizija: formData.provizija ? parseFloat(formData.provizija) : 0,
      cijena: formData.cijena ? parseFloat(formData.cijena) : 0,
    };

    try {
      const response = await axios.put(
        `http://localhost:5269/api/slasticarna/${id}`,
        payload,
      );
      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 204
      ) {
        toast.success("Slastičarna uspješno ažurirana!");
        navigate("/");
      }
    } catch (error) {
      toast.error("Greška prilikom ažuriranja slastičarne.");
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>;
  }

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Uredi Slastičarnu</h2>
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
          step="0.01"
          value={formData.provizija}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="number"
          name="cijena"
          placeholder="Cijena (KM)"
          step="0.01"
          value={formData.cijena}
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

export default EditSlasticarna;

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
