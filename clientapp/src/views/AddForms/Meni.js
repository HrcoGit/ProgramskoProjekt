import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Meni = () => {
  const [formData, setFormData] = useState({
    idRestoran: "",
    selectedJela: [],
  });

  const navigate = useNavigate();

  const [restorani, setRestorani] = useState([]);
  const [jela, setJela] = useState([]);

  useEffect(() => {
    const fetchRestorani = async () => {
      try {
        const response = await axios.get("http://localhost:5269/api/restoran");
        setRestorani(response.data);
      } catch (error) {
        console.error("Error fetching restorani:", error);
      }
    };

    const fetchJela = async () => {
      try {
        const response = await axios.get("http://localhost:5269/api/jelo");
        setJela(response.data);
      } catch (error) {
        console.error("Error fetching jela:", error);
      }
    };

    fetchRestorani();
    fetchJela();
  }, []);

  const handleRestoranChange = (e) => {
    setFormData({
      ...formData,
      idRestoran: e.target.value,
      selectedJela: [], // Reset meals when switching restaurants
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
      toast.error("Molimo odaberi restoran i jelo.");
      return;
    }

    try {
      await Promise.all(
        formData.selectedJela.map(async (idJelo) => {
          const payload = {
            idRestoran: parseInt(formData.idRestoran),
            idJelo: parseInt(idJelo),
          };

          console.log("Submitting Payload:", payload);
          return axios.post("http://localhost:5269/api/RestoranJelo", payload);
        }),
      );

      toast.success("Meni uspješno dodan!");
      setFormData({ idRestoran: "", selectedJela: [] });
      navigate("/");
    } catch (error) {
      toast.error("Greška prilikom dodavanja menija.");
      console.error("Error:", error);
    }
  };

  const availableJela = jela.filter(
    (jelo) => !formData.selectedJela.includes(jelo.idJelo.toString()),
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Unos Podataka za Meni</h2>
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
          onMouseOver={(e) =>
            (e.target.style.backgroundColor =
              styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
        >
          Pošalji
        </button>
      </form>
    </div>
  );
};

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
};

export default Meni;
