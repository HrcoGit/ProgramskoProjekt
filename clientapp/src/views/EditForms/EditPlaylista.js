import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const EditPlaylista = () => {
  const { id } = useParams(); // Get id from URL
  const history = useHistory();

  const [formData, setFormData] = useState({
    id_playlista: "",
    naziv: "",
    opis: "",
    url: "",
    trajanje: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5269/api/playlista/${id}`);
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
      const response = await axios.put(`http://localhost:5269/api/playlista/${id}`, formData);
      if (response.status === 200 || response.status === 201) {
        setMessage("Podatci uspješno ažurirani!");
        history.push('/playlista'); // Redirect to playlist list
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
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Edit Playlista</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id_playlista"
          placeholder="ID Playliste (optional)"
          value={formData.id_playlista}
          onChange={handleChange}
          disabled
        />
        <input
          type="text"
          name="naziv"
          placeholder="Naziv"
          value={formData.naziv}
          onChange={handleChange}
          required
        />
        <textarea
          name="opis"
          placeholder="Opis"
          value={formData.opis}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="url"
          placeholder="URL"
          value={formData.url}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="trajanje"
          placeholder="Trajanje"
          value={formData.trajanje}
          onChange={handleChange}
          required
        />
        <button type="submit">Ažuriraj</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EditPlaylista;