import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditRestoran = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    idRestoran: "",
    naziv: "",
    lokacija: "",
    kontakt: "",
    mail: "",
    mjesto: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5269/api/restoran/${id}`,
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching restoran data:", error);
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

    const payload = {
      idRestoran: Number(id),
      naziv: formData.naziv.trim(),
      lokacija: formData.lokacija.trim(),
      kontakt: formData.kontakt.trim(),
      mail: formData.mail.trim(),
      mjesto: formData.mjesto.trim(),
    };

    try {
      const response = await axios.put(
        `http://localhost:5269/api/restoran/${id}`,
        payload,
      );
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
      <h2 style={styles.heading}>Uredi Restoran</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="naziv"
          placeholder="Naziv"
          value={formData.naziv}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="lokacija"
          placeholder="Adresa"
          value={formData.lokacija}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="tel"
          name="kontakt"
          placeholder="Kontakt"
          value={formData.kontakt}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="mail"
          placeholder="E-mail"
          value={formData.mail}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="mjesto"
          placeholder="Mjesto"
          value={formData.mjesto}
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

export default EditRestoran;

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
