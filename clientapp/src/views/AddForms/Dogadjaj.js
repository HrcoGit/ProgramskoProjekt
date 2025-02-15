import React, { useState, useEffect } from "react";
import axios from "axios";

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

  const [message, setMessage] = useState("");

  const [glazba, setGlazba] = useState([]);
  const [cvjecara, setCvjecara] = useState([]);
  const [slasticarna, setSlasticarna] = useState([]);
  const [ostalo, setOstalo] = useState([]);
  const [automobili, setAutomobili] = useState([]);
  const [salon, setSalon] = useState([]);

  // Update tip_dogadjaja when vrsta prop changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, tipDogadjaja: vrsta }));
  }, [vrsta]);

  // Fetch options for each select
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
        const response = await axios.get("http://localhost:5269/api/slasticarna");
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
        const response = await axios.get("http://localhost:5269/api/automobili");
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

  // Handle change with numeric conversion for fields starting with "id_"
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name.startsWith("id_") && value !== ""
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.datum || !formData.kontakt) {
      setMessage("Molimo popunite sva obavezna polja.");
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
        idOstalo: formData.idOstalo === "" ? null : formData.idOstalo,
        idIzvjestaj: null,
        idAutomobili: formData.idAutomobili === "" ? null : formData.idAutomobili,
        idSalon: formData.id_salon === "" ? null : formData.id_salon,
        idCatering: null,
      };

      console.log("Payload:", payload);

      const response = await axios.post("http://localhost:5269/api/dogadjaj", payload);
      if (response.status === 200 || response.status === 201) {
        setMessage("Podatci uspješno poslani!");
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
      }
    } catch (error) {
      setMessage("Greška prilikom slanja podataka.");
      console.error("Error:", error);
    }
  };

  // Styles
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

  // Set selectStyle to have readable text and background
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

  const messageStyle = {
    marginTop: "20px",
    fontSize: "18px",
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
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
        <select name="idDg" value={formData.idDg} onChange={handleChange} style={selectStyle} required>
          <option value="">Odaberite Glazbu</option>
          {glazba.map((item) => (
            <option key={item.idGlazba} value={item.idGlazba}>
              {item.ime}
            </option>
          ))}
        </select>

        {/* Select for Cvjećara */}
        <select name="idDc" value={formData.idDc} onChange={handleChange} style={selectStyle} required>
          <option value="">Odaberite Cvjećaru</option>
          {cvjecara.map((item) => (
            <option key={item.idCvjecara} value={item.idCvjecara}>
              {item.ime}
            </option>
          ))}
        </select>

        {/* Select for Slastičarna */}
        <select name="idDs" value={formData.idDs} onChange={handleChange} style={selectStyle} required>
          <option value="">Odaberite Slastičarnu</option>
          {slasticarna.map((item) => (
            <option key={item.idSlasticarna} value={item.idSlasticarna}>
              {item.ime}
            </option>
          ))}
        </select>

        {/* Select for Ostalo */}
        <select name="idOstalo" value={formData.idOstalo} onChange={handleChange} style={selectStyle} required>
          <option value="">Odaberite Ostalo</option>
          {ostalo.map((item) => (
            <option key={item.idOstalo} value={item.idOstalo}>
              {item.ime}
            </option>
          ))}
        </select>

        {/* Select for Automobili */}
        <select name="idAutomobili" value={formData.idAutomobili} onChange={handleChange} style={selectStyle} required>
          <option value="">Odaberite Automobile</option>
          {automobili.map((item) => (
            <option key={item.idAutomobili} value={item.idAutomobili}>
              {item.marka} {item.model}
            </option>
          ))}
        </select>

        {/* Select for Salon */}
        <select name="idSalon" value={formData.idSalon} onChange={handleChange} style={selectStyle} required>
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
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "#4caf50")
          }
        >
          Pošalji
        </button>
      </form>
      {message && <p style={messageStyle}>{message}</p>}
    </div>
  );
};

export default Dogadjaj;
