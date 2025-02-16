import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; 

const EditJelo = () => {
  const { id } = useParams(); 

  const [formData, setFormData] = useState({
    idJelo: "",
    naziv: "",
    opis: "",
    cijena: "",
    vrstaJela: "",
    sastojci: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch existing Jelo data when component mounts
  useEffect(() => {
    const fetchJeloData = async () => {
      try {
        const response = await axios.get(`http://localhost:5269/api/jelo/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching jelo data:", error);
        setMessage("Greška prilikom dohvaćanja podataka.");
      } finally {
        setLoading(false);
      }
    };

    fetchJeloData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        idJelo: Number(id),
        naziv: formData.naziv,
        opis: formData.opis,
        cijena: parseFloat(formData.cijena),
        vrstaJela: formData.vrstaJela,
        sastojci: formData.sastojci,
      };

      const response = await axios.put(`http://localhost:5269/api/jelo/${id}`, payload);
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
      <h2 style={styles.heading}>Uredi Jelo</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="naziv"
          placeholder="Naziv Jela"
          value={formData.naziv}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="opis"
          placeholder="Opis Jela"
          value={formData.opis}
          onChange={handleChange}
          style={styles.textarea}
          required
        />
        <input
          type="number"
          name="cijena"
          placeholder="Cijena"
          value={formData.cijena}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="vrstaJela"
          placeholder="Vrsta Jela"
          value={formData.vrstaJela}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="sastojci"
          placeholder="Sastojci"
          value={formData.sastojci}
          onChange={handleChange}
          style={styles.textarea}
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

export default EditJelo;

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
    alignItems: "center",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    transition: "border 0.3s",
    width: "100%",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    transition: "border 0.3s",
    resize: "vertical",
    width: "100%",
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
    width: "100%",
  },
  message: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#333",
    fontWeight: "bold",
  },
};
