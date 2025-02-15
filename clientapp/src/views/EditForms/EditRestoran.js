import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const EditRestoran = () => {
  const { id } = useParams(); 
  const history = useHistory();

  const [formData, setFormData] = useState({
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
        const response = await axios.get(`http://localhost:5269/api/restoran/${id}`);
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

    try {
      const response = await axios.put(`http://localhost:5269/api/restoran/${id}`, formData);
      if (response.status === 200 || response.status === 201) {
        setMessage("Podatci uspješno ažurirani!");
        history.push("/restoran"); 
      }
    } catch (error) {
      setMessage("Greška prilikom ažuriranja podataka.");
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ maxWidth: "450px", margin: "50px auto", textAlign: "center" }}>
      <h2>Edit Restoran</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          name="naziv"
          placeholder="Naziv"
          value={formData.naziv}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <input
          type="text"
          name="lokacija"
          placeholder="Adresa"
          value={formData.lokacija}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <input
          type="tel"
          name="kontakt"
          placeholder="Kontakt"
          value={formData.kontakt}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <input
          type="email"
          name="mail"
          placeholder="E-mail"
          value={formData.mail}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <input
          type="text"
          name="mjesto"
          placeholder="Mjesto"
          value={formData.mjesto}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#4caf50",
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
        >
          Ažuriraj
        </button>
      </form>
      {message && <p style={{ marginTop: "20px", fontSize: "18px", color: "#333", fontWeight: "bold" }}>{message}</p>}
    </div>
  );
};

export default EditRestoran;