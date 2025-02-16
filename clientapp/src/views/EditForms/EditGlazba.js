import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditGlazba = () => {
  const { id } = useParams(); 

  const [formData, setFormData] = useState({
    idGlazba: "",
    ime: "",
    telefon: "",
    email: "",
    provizija: "",
    cijena: "",
    pocAngazmana: "",
    krajAngazmana: "",
    idDogadjajGlazba: null,
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5269/api/glazba/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching glazba data:", error);
        setMessage("Greška prilikom dohvaćanja podataka.");
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

    if (formData.provizija <= 0 || formData.cijena <= 0) {
      setMessage("Provizija i cijena moraju biti veći od 0.");
      return;
    }

    const payload = {
      idGlazba: Number(id),
      ime: formData.ime.trim(),
      telefon: formData.telefon.trim(),
      email: formData.email.trim(),
      provizija: parseFloat(formData.provizija),
      cijena: parseFloat(formData.cijena),
      pocAngazmana: formData.pocAngazmana,
      krajAngazmana: formData.krajAngazmana,
      idDogadjajGlazba: formData.idDogadjajGlazba,
    };

    try {
      const response = await axios.put(`http://localhost:5269/api/glazba/${id}`, payload);
      if (response.status === 200) {
        setMessage("Podaci uspješno ažurirani!");
      }
    } catch (error) {
      setMessage("Greška prilikom ažuriranja podataka.");
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Uredi Glazbeni Angažman</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="ime"
          placeholder="Ime izvođača"
          value={formData.ime}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="telefon"
          placeholder="Telefon"
          value={formData.telefon}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="number"
          step="0.01"
          name="provizija"
          placeholder="Provizija (%)"
          value={formData.provizija}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="number"
          step="0.01"
          name="cijena"
          placeholder="Cijena (KM)"
          value={formData.cijena}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="date"
          name="pocAngazmana"
          value={formData.pocAngazmana}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="date"
          name="krajAngazmana"
          value={formData.krajAngazmana}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Ažuriraj</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

export default EditGlazba;

const styles = {
  container: {
    maxWidth: "450px",
    margin: "50px auto",
    backgroundColor: "#f9f9f9",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    transition: "border 0.3s",
  },
  button: {
    padding: "12px",
    backgroundColor: "#4caf50",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  message: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#333",
    fontWeight: "bold",
  },
};
