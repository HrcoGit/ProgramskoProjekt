import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditCvjecara = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    idCvjecara: "", // ✅ Include ID for API compatibility
    ime: "",
    adresa: "",
    telefon: "",
    email: "",
    provizija: "",
    cijena: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5269/api/cvjecara/${id}`,
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessage("Greška prilikom dohvaćanja podataka.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]:
        name === "provizija" || name === "cijena" ? parseFloat(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        idCvjecara: Number(id), // ✅ Ensure the ID is passed correctly
        ime: formData.ime,
        adresa: formData.adresa,
        telefon: formData.telefon,
        email: formData.email,
        provizija: parseFloat(formData.provizija), // ✅ Convert numbers properly
        cijena: parseFloat(formData.cijena),
      };

      const response = await axios.put(
        `http://localhost:5269/api/cvjecara/${id}`,
        payload,
      );
      if (response.status === 200 || response.status === 201) {
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
      <h2 style={styles.heading}>Ažuriraj Cvjećaru</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="ime"
          placeholder="Ime cvjećare"
          value={formData.ime}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="adresa"
          placeholder="Adresa"
          value={formData.adresa}
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
        <button type="submit" style={styles.button}>
          Ažuriraj
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

export default EditCvjecara;

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
