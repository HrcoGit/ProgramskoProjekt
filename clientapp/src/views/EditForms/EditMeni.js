import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditMeni = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    idRj: "",
    idRestoran: "",
    selectedJela: [], // List of selected dishes
  });

  const [restorani, setRestorani] = useState([]);
  const [jela, setJela] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all restaurants
        const restoraniRes = await axios.get("http://localhost:5269/api/restoran");
        setRestorani(restoraniRes.data);

        // Fetch all dishes
        const jelaRes = await axios.get("http://localhost:5269/api/jelo");
        setJela(jelaRes.data);

        // Fetch current menu details
        const meniRes = await axios.get(`http://localhost:5269/api/restoranJelo/${id}`);
        setFormData({
          idRestoran: meniRes.data.idRestoran.toString(),
          selectedJela: meniRes.data.jela.map((j) => j.idJelo.toString()), // Convert to string for consistency
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessage("Greška prilikom dohvaćanja podataka.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleRestoranChange = (e) => {
    setFormData({
      ...formData,
      idRestoran: e.target.value,
      selectedJela: [], // Reset dishes when switching restaurants
    });
  };

  const handleJeloChange = (e) => {
    const selectedJeloId = e.target.value;
    if (selectedJeloId && !formData.selectedJela.includes(selectedJeloId)) {
      setFormData({
        ...formData,
        selectedJela: [...formData.selectedJela, selectedJeloId],
      });
    }
  };

  const handleRemoveJelo = (id) => {
    setFormData({
      ...formData,
      selectedJela: formData.selectedJela.filter((jeloId) => jeloId !== id),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.idRestoran || formData.selectedJela.length === 0) {
      setMessage("Odaberite restoran i barem jedno jelo.");
      return;
    }

    try {
      // Clear previous dish associations
      await axios.delete(`http://localhost:5269/api/restoranJelo/${id}`);

      // Submit updated data
      await Promise.all(
        formData.selectedJela.map(async (idJelo) => {
          const payload = {
            idRestoran: parseInt(formData.idRestoran),
            idJelo: parseInt(idJelo),
          };

          console.log("Submitting Payload:", payload);
          return axios.post("http://localhost:5269/api/restoranJelo", payload);
        })
      );

      setMessage("Podatci uspješno ažurirani!");
    } catch (error) {
      setMessage("Greška prilikom ažuriranja podataka.");
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>;
  }

  const availableJela = jela.filter((jelo) => !formData.selectedJela.includes(jelo.idJelo.toString()));

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Uredi Meni</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <select
          name="idRestoran"
          value={formData.idRestoran}
          onChange={handleRestoranChange}
          style={styles.select}
          required
        >
          <option value="">Odaberite Restoran</option>
          {restorani.map((restoran) => (
            <option key={restoran.idRestoran} value={restoran.idRestoran}>
              {restoran.naziv}
            </option>
          ))}
        </select>

        <select name="idJelo" onChange={handleJeloChange} style={styles.select}>
          <option value="">Odaberite Jelo</option>
          {availableJela.map((jelo) => (
            <option key={jelo.idJelo} value={jelo.idJelo}>
              {jelo.naziv}
            </option>
          ))}
        </select>

        {formData.selectedJela.length > 0 && (
          <div style={{ marginTop: "15px" }}>
            <h4>Odabrana Jela:</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {formData.selectedJela.map((idJelo) => {
                const jelo = jela.find((j) => j.idJelo.toString() === idJelo);
                return (
                  <li key={idJelo} style={{ marginBottom: "5px" }}>
                    {jelo ? jelo.naziv : "Nepoznato jelo"}{" "}
                    <button
                      type="button"
                      onClick={() => handleRemoveJelo(idJelo)}
                      style={styles.removeButton}
                    >
                      X
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
        >
          Ažuriraj
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

export default EditMeni;

// Styles
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
  select: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    transition: "border 0.3s",
    backgroundColor: "#fff",
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
  buttonHover: {
    backgroundColor: "#45a049",
  },
  removeButton: {
    marginLeft: "10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
    padding: "5px 10px",
    borderRadius: "5px",
  },
  message: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#333",
    fontWeight: "bold",
  },
};
