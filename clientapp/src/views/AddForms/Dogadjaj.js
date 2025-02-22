import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Dogadjaj = ({ vrsta }) => {
  const [formData, setFormData] = useState({
    datum: "",
    kontakt: "",
    tipDogadjaja: vrsta,
    idDg: "",
    idDc: "",
    idDs: "",
    idOstalo: "",
    idIzvjestaj: "",
    idAutomobili: "",
    idSalon: "",
  });

  const [glazba, setGlazba] = useState([]);
  const [cvjecara, setCvjecara] = useState([]);
  const [slasticarna, setSlasticarna] = useState([]);
  const [ostalo, setOstalo] = useState([]);
  const [automobili, setAutomobili] = useState([]);
  const [salon, setSalon] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setFormData((prev) => ({ ...prev, tipDogadjaja: vrsta }));
  }, [vrsta]);

  useEffect(() => {
    const fetchGlazba = async () => {
      try {
        const response = await axios.get("http://localhost:5269/api/glazba");
        setGlazba(response.data);
      } catch (error) {
        console.error("Error fetching glazba:", error);
      }
    };

    const fetchCvjecara = async () => {
      try {
        const response = await axios.get("http://localhost:5269/api/cvjecara");
        setCvjecara(response.data);
      } catch (error) {
        console.error("Error fetching cvjecara:", error);
      }
    };

    const fetchSlasticarna = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5269/api/slasticarna",
        );
        setSlasticarna(response.data);
      } catch (error) {
        console.error("Error fetching slasticarna:", error);
      }
    };

    const fetchOstalo = async () => {
      try {
        const response = await axios.get("http://localhost:5269/api/ostalo");
        setOstalo(response.data);
      } catch (error) {
        console.error("Error fetching ostalo:", error);
      }
    };

    const fetchAutomobili = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5269/api/automobili",
        );
        setAutomobili(response.data);
      } catch (error) {
        console.error("Error fetching automobili:", error);
      }
    };

    const fetchSalon = async () => {
      try {
        const response = await axios.get("http://localhost:5269/api/salon");
        setSalon(response.data);
      } catch (error) {
        console.error("Error fetching salon:", error);
      }
    };

    fetchGlazba();
    fetchCvjecara();
    fetchSlasticarna();
    fetchOstalo();
    fetchAutomobili();
    fetchSalon();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name.startsWith("id_") && value !== "" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.datum || !formData.kontakt) {
      toast.error("Greška prilikom dodavanja događaja.");
      return;
    }

    try {
      const payload = {
        datum: formData.datum,
        kontakt: formData.kontakt,
        tipDogadjaja: formData.tipDogadjaja,
        idDg: formData.idDg === "" ? null : formData.idDg,
        idDc: formData.idDc === "" ? null : formData.idDc,
        idDs: formData.idDs === "" ? null : formData.idDs,
        idOstalo:  null ,
        idIzvjestaj: null,
        idAutomobili:
          formData.idAutomobili === "" ? null : formData.idAutomobili,
        idSalon: formData.id_salon === "" ? null : formData.id_salon,
        idCatering: null,
      };

      console.log("Payload:", payload);

      const response = await axios.post(
        "http://localhost:5269/api/dogadjaj",
        payload,
      );
      if (response.status === 200 || response.status === 201) {
        toast.success("Događaj uspješno poslani!");
        setFormData({
          datum: "",
          kontakt: "",
          tipDogadjaja: vrsta,
          idDg: "",
          idDc: "",
          idDs: "",
          idOstalo: "",
          idIzvjestaj: "",
          idAutomobili: "",
          id_salon: "",
        });
        navigate("/");
      }
    } catch (error) {
      toast.error("Greška prilikom dodavanja događaja.");
      console.error("Error:", error);
    }
  };

  const containerStyle = {
    width: "100%",
    maxWidth: "450px",
    margin: "50px auto",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
    textAlign: "center",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const inputStyle = {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    transition: "border 0.3s",
    width: "100%",
    boxSizing: "border-box",
  };

  const selectStyle = { ...inputStyle, color: "#333", backgroundColor: "#fff" };

  const buttonStyle = {
    padding: "12px",
    backgroundColor: "#4caf50",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    width: "100%",
  };

  const buttonHoverStyle = {
    backgroundColor: "#45a049",
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = "#4caf50";
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = "#ccc";
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Dodaj događaj</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="date"
          name="datum"
          value={formData.datum}
          onChange={handleChange}
          style={inputStyle}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required
        />
        <input
          type="text"
          name="kontakt"
          placeholder="Kontakt"
          value={formData.kontakt}
          onChange={handleChange}
          style={inputStyle}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required
        />

        {/* Select for Glazba */}
        <select
          name="idDg"
          value={formData.idDg}
          onChange={handleChange}
          style={selectStyle}
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
          value={formData.idDc}
          onChange={handleChange}
          style={selectStyle}
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
          value={formData.idDs}
          onChange={handleChange}
          style={selectStyle}
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
       
        

        {/* Select for Automobili */}
        <select
          name="idAutomobili"
          value={formData.idAutomobili}
          onChange={handleChange}
          style={selectStyle}
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
          value={formData.idSalon}
          onChange={handleChange}
          style={selectStyle}
          required
        >
          <option value="">Odaberite Salon</option>
          {salon.map((item) => (
            <option key={item.idSalon} value={item.idSalon}>
              {item.ime}
            </option>
          ))}
        </select>

        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
        >
          Pošalji
        </button>
      </form>
    </div>
  );
};

export default Dogadjaj;
