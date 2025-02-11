import React, { useState, useEffect } from "react";

export const Home = () => {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ name: "", model: "" });

  useEffect(() => {
    fetch("http://localhost:5269/api/Automobili")
      .then(response => response.json())
      .then(data => setCars(data));
  }, []);

  const handleAddCar = async () => {
    try {
      const response = await fetch("http://localhost:5269/api/Automobili", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCar),
      });
      if (response.ok) {
        setCars([...cars, newCar]);
        setNewCar({ name: "", model: "" });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  return (
    <div style={{ backgroundColor: "#f7f7f7", padding: "20px" }}>
      <h1>Wedding Planner App</h1>
      <button
        style={{
          backgroundColor: "#4CAF50",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleAddCar}
      >
        Add Car
      </button>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center"}}>
        {cars.map((car, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              margin: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              width: "200px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>{car.name}</h2>
            <p>{car.model}</p>
          </div>
        ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center"}}>
        {cars.map((car, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              margin: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              width: "200px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>{car.name}</h2>
            <p>{car.model}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};