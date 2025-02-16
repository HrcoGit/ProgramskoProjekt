import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditDogadjaj = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    idDogadjaj: "",
    datum: "",
    kontakt: "",
    tipDogadjaja: "",
    idDg: "",
    idDc: "",
    idDs: "",
    idOstalo: "",
    idIzvjestaj: null,
    idAutomobili: "",
    idSalon: "",
    idCatering: null,
  });

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const [glazba, setGlazba] = useState([]);
  const [cvjecara, setCvjecara] = useState([]);
  const [slasticarna, setSlasticarna] = useState([]);
  const [ostalo, setOstalo] = useState([]);
  const [automobili, setAutomobili] = useState([]);
  const [salon, setSalon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5269/api/dogadjaj/${id}`,
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [
          glazbaRes,
          cvjecaraRes,
          slasticarnaRes,
          ostaloRes,
          automobiliRes,
          salonRes,
        ] = await Promise.all([
          axios.get("http://localhost:5269/api/glazba"),
          axios.get("http://localhost:5269/api/cvjecara"),
          axios.get("http://localhost:5269/api/slasticarna"),
          axios.get("http://localhost:5269/api/ostalo"),
          axios.get("http://localhost:5269/api/automobili"),
          axios.get("http://localhost:5269/api/salon"),
        ]);

        setGlazba(glazbaRes.data);
        setCvjecara(cvjecaraRes.data);
        setSlasticarna(slasticarnaRes.data);
        setOstalo(ostaloRes.data);
        setAutomobili(automobiliRes.data);
        setSalon(salonRes.data);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value === "" ? null : value, // ✅ Keep null for optional fields
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        idDogadjaj: formData.idDogadjaj,
        datum: formData.datum,
        kontakt: formData.kontakt,
        tipDogadjaja: formData.tipDogadjaja,
        idDg: formData.idDg ? Number(formData.idDg) : null,
        idDc: formData.idDc ? Number(formData.idDc) : null,
        idDs: formData.idDs ? Number(formData.idDs) : null,
        idOstalo: formData.idOstalo ? Number(formData.idOstalo) : null,
        idIzvjestaj: null, // ✅ Keep null
        idAutomobili: formData.idAutomobili
          ? Number(formData.idAutomobili)
          : null,
        idSalon: formData.idSalon ? Number(formData.idSalon) : null,
        idCatering: null, // ✅ Keep null
      };

      const response = await axios.put(
        `http://localhost:5269/api/dogadjaj/${id}`,
        payload,
      );
      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 204
      ) {
        toast.success("Događaj uspješno ažuriran!");
        navigate("/");
      }
    } catch (error) {
      toast.error("Greška prilikom ažuriranja događaja.");
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Ažuriraj Događaj</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="date"
          name="datum"
          value={formData.datum}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="kontakt"
          placeholder="Kontakt"
          value={formData.kontakt}
          onChange={handleChange}
          style={styles.input}
          required
        />

        {/* Select for Glazba */}
        <select
          name="idDg"
          value={formData.idDg || ""}
          onChange={handleChange}
          style={styles.select}
          required
        >
          <option value="">Odaberite Glazbu</option>
          {glazba.map((item) => (
            <option key={item.idGlazba} value={item.idGlazba}>
              {item.ime}
            </option>
          ))}
        </select>

        {/* Select for Cvjećara */}
        <select
          name="idDc"
          value={formData.idDc || ""}
          onChange={handleChange}
          style={styles.select}
          required
        >
          <option value="">Odaberite Cvjećaru</option>
          {cvjecara.map((item) => (
            <option key={item.idCvjecara} value={item.idCvjecara}>
              {item.ime}
            </option>
          ))}
        </select>

        {/* Select for Slastičarna */}
        <select
          name="idDs"
          value={formData.idDs || ""}
          onChange={handleChange}
          style={styles.select}
          required
        >
          <option value="">Odaberite Slastičarnu</option>
          {slasticarna.map((item) => (
            <option key={item.idSlasticarna} value={item.idSlasticarna}>
              {item.ime}
            </option>
          ))}
        </select>

        {/* Select for Ostalo */}
        <select
          name="idOstalo"
          value={formData.idOstalo || ""}
          onChange={handleChange}
          style={styles.select}
          required
        >
          <option value="">Odaberite Ostalo</option>
          {ostalo.map((item) => (
            <option key={item.idOstalo} value={item.idOstalo}>
              {item.ime}
            </option>
          ))}
        </select>

        {/* Select for Automobili */}
        <select
          name="idAutomobili"
          value={formData.idAutomobili || ""}
          onChange={handleChange}
          style={styles.select}
          required
        >
          <option value="">Odaberite Automobile</option>
          {automobili.map((item) => (
            <option key={item.idAutomobili} value={item.idAutomobili}>
              {item.marka} {item.model}
            </option>
          ))}
        </select>

        {/* Select for Salon */}
        <select
          name="idSalon"
          value={formData.idSalon || ""}
          onChange={handleChange}
          style={styles.select}
          required
        >
          <option value="">Odaberite Salon</option>
          {salon.map((item) => (
            <option key={item.idSalon} value={item.idSalon}>
              {item.ime}
            </option>
          ))}
        </select>

        <button type="submit" style={styles.button}>
          Ažuriraj
        </button>
      </form>
    </div>
  );
};

export default EditDogadjaj;

const styles = {
  container: {
    maxWidth: "450px",
    margin: "50px auto",
    backgroundColor: "#f9f9f9",
    padding: "30px",
    borderRadius: "10px",
  },
  heading: { fontSize: "24px", marginBottom: "20px", color: "#333" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#4caf50",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
