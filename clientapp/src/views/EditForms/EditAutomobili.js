import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const EditAutomobil = () => {
  const { id } = useParams(); // Id automobila iz URL-a
  const history = useHistory();

  const [formData, setFormData] = useState({
    id_automobil: "",
    marka: "",
    model: "",
    godina_proizvodnje: "",
    boja: "",
    cijena: "",
    kontakt: "",
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
      } finally {
        setLoading(false);
      }
    };

    fetchAutomobilData();
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
      const response = await axios.put(`http://localhost:5269/api/automobili/${id}`, formData);
      if (response.status === 200) {
        setMessage("Podaci uspješno ažurirani!");
        // Redirect to automobili page after successful update
        history.push('/automobili');
      }
    } catch (error) {
      setMessage("Greška prilikom ažuriranja podataka.");
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <p style={{ textAlign: 'center', fontSize: '18px' }}>Loading...</p>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Edit Automobil</h1>
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
          <label style={styles.label}>Godina Proizvodnje</label>
          <input
            type="number"
            name="godina_proizvodnje"
            value={formData.godina_proizvodnje}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Boja</label>
          <input
            type="text"
            name="boja"
            value={formData.boja}
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
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Kontakt</label>
          <input
            type="text"
            name="kontakt"
            value={formData.kontakt}
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
    margin: '20px auto',
    maxWidth: '800px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
    fontSize: '16px',
    color: '#343a40',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: 'none',
    transition: 'border 0.3s',
  },
  button: {
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#ffffff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  message: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#333',
    fontWeight: 'bold',
  },
};