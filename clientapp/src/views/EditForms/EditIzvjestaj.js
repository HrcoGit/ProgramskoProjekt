import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditIzvjestaj = () => {
  const { id } = useParams(); 

  const [formData, setFormData] = useState({
    idIzvjestaj: "",
    tipIzvjestaja: "",
    podatci: "",
    datumKreiranja: "",
    idDogadjaj: null,
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5269/api/izvjestaj/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching izvjestaj data:", error);
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

    if (formData.tipIzvjestaja.trim() === "" || formData.podatci.trim() === "") {
      setMessage("Sva polja su obavezna.");
      return;
    }

    const payload = {
      idIzvjestaj: Number(id),
      tipIzvjestaja: formData.tipIzvjestaja.trim(),
      podatci: formData.podatci.trim(),
      datumKreiranja: formData.datumKreiranja,
      idDogadjaj: formData.idDogadjaj,
    };

    try {
      const response = await axios.put(`http://localhost:5269/api/izvjestaj/${id}`, payload);
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
      <h2 style={styles.heading}>Uredi Izvještaj</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="tipIzvjestaja"
          placeholder="Tip Izvještaja"
          value={formData.tipIzvjestaja}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="podatci"
          placeholder="Podatci"
          value={formData.podatci}
          onChange={handleChange}
          style={styles.textarea}
          required
        />
        <input
          type="date"
          name="datumKreiranja"
          value={formData.datumKreiranja}
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

export default EditIzvjestaj;

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
  textarea: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    transition: "border 0.3s",
    resize: "vertical",
    height: "80px",
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
