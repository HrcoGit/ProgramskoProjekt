import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const EditSalon = () => {
  const { id } = useParams(); 
  const history = useHistory();

  const [formData, setFormData] = useState({
    ime: "",
    adresa: "",
    telefon: "",
    provizija: "",
    cijena: "",
    broj_mjesta: "",
    velicina: "",
    poc_angazmana: "",
    kraj_angazmana: "",
    id_dogadjaj: null,
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5269/api/salon/${id}`);
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
      const response = await axios.put(`http://localhost:5269/api/salon/${id}`, formData);
      if (response.status === 200 || response.status === 201) {
        setMessage("Podatci uspješno ažurirani!");
        history.push("/salon"); 
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
      <h2>Edit Salon</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          name="ime"
          placeholder="Ime"
          value={formData.ime}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <input
          type="text"
          name="adresa"
          placeholder="Adresa"
          value={formData.adresa}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <input
          type="text"
          name="telefon"
          placeholder="Telefon"
          value={formData.telefon}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <input
          type="number"
          name="provizija"
          placeholder="Provizija"
          value={formData.provizija}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <input
          type="number"
          name="cijena"
          placeholder="Cijena"
          value={formData.cijena}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <input
          type="number"
          name="broj_mjesta"
          placeholder="Broj Mjesta"
          value={formData.broj_mjesta}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <input
          type="number"
          name="velicina"
          placeholder="Velicina"
          value={formData.velicina}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <input
          type="date"
          name="poc_angazmana"
          placeholder="Početak Angažmana"
          value={formData.poc_angazmana}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <input
          type="date"
          name="kraj_angazmana"
          placeholder="Kraj Angažmana"
          value={formData.kraj_angazmana}
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

export default EditSalon;