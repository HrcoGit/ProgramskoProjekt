import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditAutomobil = () => {
  const { id } = useParams(); // Get ID from URL parameters

  const [formData, setFormData] = useState({
    idAutomobili: "",
    marka: "",
    model: "",
    cijena: "",
    provizija: "",
    pocAngazmana: "",
    krajAngazmana: "",
    idDogadjaj: null,
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAutomobilData = async () => {
      try {
        const response = await axios.get(`http://localhost:5269/api/automobili/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching car data:", error);
        setMessage("Greška prilikom dohvaćanja podataka.");
      } finally {
        setLoading(false);
      }
    };

    fetchAutomobilData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "cijena" || name === "provizija" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        idAutomobili: Number(id), // ✅ Ensures API receives the correct ID field
        marka: formData.marka,
        model: formData.model,
        cijena: parseFloat(formData.cijena),
        provizija: parseFloat(formData.provizija),
        pocAngazmana: formData.pocAngazmana,
        krajAngazmana: formData.krajAngazmana,
        idDogadjaj: null, // Default to 0 if null
      };

      console.log("Submitting payload:", payload); // Debugging

      const response = await axios.put(`http://localhost:5269/api/automobili/${id}`, payload);

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
      <h1 style={styles.title}>Uredi Automobil</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Marka</label>
          <input
            type="text"
            name="marka"
            value={formData.marka}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Model</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Cijena</label>
          <input
            type="number"
            name="cijena"
            value={formData.cijena}
            onChange={handleChange}
            step="0.01"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Provizija (%)</label>
          <input
            type="number"
            name="provizija"
            value={formData.provizija}
            onChange={handleChange}
            step="0.01"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Početak Angažmana</label>
          <input
            type="date"
            name="pocAngazmana"
            value={formData.pocAngazmana}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Kraj Angažmana</label>
          <input
            type="date"
            name="krajAngazmana"
            value={formData.krajAngazmana}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <button type="submit" style={styles.button}>Ažuriraj Automobil</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

export default EditAutomobil;

const styles = {
  container: {
    margin: "20px auto",
    maxWidth: "800px",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#343a40",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "8px",
    fontSize: "16px",
    color: "#343a40",
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
    backgroundColor: "#4caf50", // ✅ GREEN BUTTON LIKE OTHER FORMS
    color: "#ffffff",
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
