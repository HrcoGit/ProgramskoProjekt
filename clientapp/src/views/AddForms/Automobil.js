import React, { useState } from "react";
import axios from "axios";

const Automobil = () => {
  // Define state for each field in the form
  const [formData, setFormData] = useState({
    marka: "",
    model: "",
    cijena: 0,
    provizija: 0,
    pocAngazmana: "2025-02-12",
    krajAngazmana: "2025-02-12",
    idDogadjaj: 0,
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      idAutomobili: 0, // Adjust as needed
      marka: formData.marka,
      model: formData.model,
      cijena: parseFloat(formData.cijena),
      provizija: parseFloat(formData.provizija),
      pocAngazmana: formData.pocAngazmana,
      krajAngazmana: formData.krajAngazmana,
      idDogadjaj: parseInt(formData.idDogadjaj),
      idDogadjajNavigation: {
        idDogadjaj: 0,
        datum: "2025-02-12", // Adjust if needed
        kontakt: "string",
        tipDogadjaja: "string",
        idDg: 0,
        idDc: 0,
        idDs: 0,
        idOstalo: 0,
        idIzvjestaj: 0,
        idAutomobili: 0,
        idSalon: 0,
        idCatering: 0,
        automobili: ["string"], // Example
        // Add other nested properties if required
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:5269/api/automobili",
        payload
      );
      console.log("Success:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div>
      <h2>Automobil Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Marka:
          <input
            type="text"
            name="marka"
            value={formData.marka}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Model:
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Cijena:
          <input
            type="number"
            name="cijena"
            value={formData.cijena}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Provizija:
          <input
            type="number"
            name="provizija"
            value={formData.provizija}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Početak Angažmana:
          <input
            type="date"
            name="pocAngazmana"
            value={formData.pocAngazmana}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Kraj Angažmana:
          <input
            type="date"
            name="krajAngazmana"
            value={formData.krajAngazmana}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          ID Dogadjaja:
          <input
            type="number"
            name="idDogadjaj"
            value={formData.idDogadjaj}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Automobil;
