import { useEffect, useState } from "react";
import {
  FaChevronRight,
  FaChevronDown,
  FaPencilAlt,
  FaTimes,
  FaPlus,
  FaDownload,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as XLSX from "xlsx"; // Importing xlsx

export const Home = () => {
  const [data, setData] = useState({
    dogadjaj: [],
    automobili: [],
    cvjecara: [],
    glazba: [],
    restoran: [],
    restoranJelo: [],
    salon: [],
    slasticarna: [],
  });
  const [expanded, setExpanded] = useState({});
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoints = [
          "dogadjaj",
          "automobili",
          "cvjecara",
          "glazba",
          "restoran",
          "restoranJelo",
          "salon",
          "slasticarna",
        ];

        const responses = await Promise.all(
          endpoints.map((endpoint) =>
            fetch(`http://localhost:5269/api/${endpoint}`).then((res) =>
              res.json(),
            ),
          ),
        );

        const newData = endpoints.reduce((acc, key, index) => {
          acc[key] = responses[index];
          return acc;
        }, {});

        setData(newData);
        console.log("Fetched Data:", newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleExpand = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleEdit = (key, item) => {
    const idFieldMap = {
      dogadjaj: "idDogadjaj",
      automobili: "idAutomobili",
      cvjecara: "idCvjecara",
      glazba: "idGlazba",
      restoran: "idRestoran",
      restoranJelo: "idRj",
      salon: "idSalon",
      slasticarna: "idSlasticarna",
    };
    const id = item[idFieldMap[key]];
    if (id) {
      const routes = {
        automobili: "/edit-automobil/",
        cvjecara: "/edit-cvjecara/",
        dogadjaj: "/edit-dogadjaj/",
        glazba: "/edit-glazba/",
        restoran: "/edit-restoran/",
        restoranJelo: "/edit-jelo/",
        salon: "/edit-salon/",
        slasticarna: "/edit-slasticarna/",
      };
      if (routes[key]) navigate(`${routes[key]}${id}`);
    }
  };

  const handleDelete = async (key, item) => {
    const idFieldMap = {
      dogadjaj: "idDogadjaj",
      automobili: "idAutomobili",
      cvjecara: "idCvjecara",
      glazba: "idGlazba",
      restoran: "idRestoran",
      restoranJelo: "idRj",
      salon: "idSalon",
      slasticarna: "idSlasticarna",
    };
    const id = item[idFieldMap[key]];
    if (id) {
      try {
        await fetch(`http://localhost:5269/api/${key}/${id}`, {
          method: "DELETE",
        });
        setData((prev) => ({
          ...prev,
          [key]: prev[key].filter((i) => i[idFieldMap[key]] !== id),
        }));
        toast.success(
          `${key.toUpperCase().slice(0, 1) + key.slice(1)} izbrisan`,
        );
      } catch (error) {
        toast.error(
          `Greška prilikom brisanja ${
            key.toUpperCase().slice(0) + key.slice(1)
          }`,
        );
        console.error("Error deleting item:", error);
      }
    }
  };

  // Updated addRoutes to match your AppRouter paths
  const addRoutes = {
    dogadjaj: "/dodaj-svatove",
    automobili: "/dodaj-automobil",
    cvjecara: "/dodaj-cvjećarnu",
    glazba: "/dodaj-glazbu",
    restoran: "/dodaj-restoran",
    restoranJelo: "/dodaj-jelo",
    salon: "/dodaj-salon",
    slasticarna: "/dodaj-slastičarnu",
  };

  const handleAdd = (key) => {
    if (addRoutes[key]) navigate(addRoutes[key]);
  };

  // Function to render availability based on pocAngazmana and krajAngazmana
  const renderAvailability = (item) => {
    if (item.pocAngazmana && item.krajAngazmana) {
      const current = new Date();
      const start = new Date(item.pocAngazmana);
      const end = new Date(item.krajAngazmana);
      if (current >= start && current <= end) {
        return <div style={styles.availabilityAvailable}>Dostupno sada!</div>;
      } else if (current < start) {
        return (
          <div style={styles.availabilityNotAvailable}>
            Dostupno od: {item.pocAngazmana}
          </div>
        );
      } else if (current > end) {
        return (
          <div style={styles.availabilityNotAvailable}>
            Isteklo: {item.krajAngazmana}
          </div>
        );
      }
    }
    return null;
  };

  // Styles object inside the Home component
  const styles = {
    sectionContainer: {
      width: "100%",
      maxWidth: "1600px",
      marginBottom: "20px",
      background: "#fff",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    sectionHeader: {
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "2px solid #ddd",
      paddingBottom: "10px",
    },
    itemContainer: {
      marginTop: "10px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      maxHeight: "220px",
      overflow: "hidden",
    },
    itemContainerExpanded: {
      marginTop: "10px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
    },
    itemCard: {
      backgroundColor: "#fff7ed",
      padding: "15px",
      margin: "10px",
      borderRadius: "10px",
      width: "220px",
      height: "160px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      position: "relative",
    },
    // New add item card style: matching dimensions, transparent background, dashed green border
    addItemCard: {
      backgroundColor: "transparent",
      border: "2px dashed #28a745",
      borderRadius: "10px",
      width: "220px",
      height: "188px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "10px",
      cursor: "pointer",
    },
    headerRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      maxWidth: "1600px",
      marginBottom: "20px",
    },
    editButton: {
      backgroundColor: "#f7f7f7",
      color: "#333",
      padding: "10px",
      border: "none",
      borderRadius: "50%",
      cursor: "pointer",
    },
    actionButtons: {
      position: "absolute",
      top: "5px",
      right: "5px",
      display: "flex",
      gap: "5px",
    },
    iconButton: {
      background: "transparent",
      border: "none",
      cursor: "pointer",
    },
    exportButton: {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      padding: "10px 20px",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      fontSize: "16px",
      cursor: "pointer",
      borderRadius: "5px",
    },
    availabilityAvailable: {
      color: "#28a745",
      border: "1px solid #28a745",
      backgroundColor: "#e6f9e6",
      padding: "4px 8px",
      borderRadius: "5px",
      fontSize: "14px",
      margin: "4px",
    },
    availabilityNotAvailable: {
      color: "#dc3545",
      border: "1px solid #dc3545",
      backgroundColor: "#fde2e2",
      padding: "4px 8px",
      borderRadius: "5px",
      fontSize: "14px",
      margin: "4px",
    },
    // New style for price info line
    priceInfo: {
      fontSize: "14px",
      marginTop: "2px",
      color: "#555",
      fontWeight: "bold",
    },
    // New style for the price label above the main price
    priceLabel: {
      fontSize: "12px",
      marginBottom: "2px",
      color: "#777",
    },
  };

  const handleExport = () => {
    const wb = XLSX.utils.book_new();
    Object.keys(data).forEach((key) => {
      const ws = XLSX.utils.json_to_sheet(data[key]);
      XLSX.utils.book_append_sheet(wb, ws, key);
    });
    // Save the Excel file
    XLSX.writeFile(wb, "exported_data.xlsx");
  };

  const renderSection = (title, key) => {
    return (
      <div key={key} style={styles.sectionContainer}>
        <div onClick={() => toggleExpand(key)} style={styles.sectionHeader}>
          <h2>{title}</h2>
          {expanded[key] ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        <div
          style={
            expanded[key] ? styles.itemContainerExpanded : styles.itemContainer
          }
        >
          {data[key]?.map((item, index) => (
            <div key={index} style={styles.itemCard}>
              {editMode && (
                <div style={styles.actionButtons}>
                  <button
                    style={styles.iconButton}
                    onClick={() => handleEdit(key, item)}
                  >
                    <FaPencilAlt />
                  </button>
                  <button
                    style={styles.iconButton}
                    onClick={() => handleDelete(key, item)}
                  >
                    <FaTimes />
                  </button>
                </div>
              )}
              <h3 style={{ fontSize: "24px", margin: "4px" }}>
                {item.tipDogadjaja ||
                  item.marka ||
                  item.ime ||
                  item.naziv ||
                  "N/A"}
              </h3>
              <p style={{ fontSize: "20px", margin: "4px" }}>
                {item.model || item.lokacija || item.adresa || item.datum || ""}
              </p>
              {/* Price info: label and main price */}
              {item.cijena != null && item.provizija != null && (
                <>
                  <p style={styles.priceLabel}>
                    ({item.cijena} KM + {item.provizija}%)
                  </p>
                  <p style={styles.priceInfo}>
                    Cijena:{" "}
                    {(
                      item.cijena +
                      (item.cijena * item.provizija) / 100
                    ).toFixed(2)}{" "}
                    KM
                  </p>
                </>
              )}
              {renderAvailability(item)}
            </div>
          ))}
          {editMode && (
            <div
              style={styles.addItemCard}
              onClick={() => handleAdd(key)}
              title="Dodaj novo"
            >
              <FaPlus size={24} color="#28a745" />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#f7f7f7",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={styles.headerRow}>
        <h1>Ženim se?</h1>
        <div
          style={{
            display: "flex",
            gap: "10px",
            position: "fixed",
            right: "20px",
            top: "5px",
            zIndex: 1001,
          }}
        >
          <button
            style={styles.editButton}
            onClick={() => setEditMode(!editMode)}
          >
            <FaPencilAlt />
          </button>
          <button style={styles.editButton} onClick={handleExport}>
            <FaDownload />
          </button>
        </div>
      </div>
      {renderSection("Dogadjaj", "dogadjaj")}
      {renderSection("Automobili", "automobili")}
      {renderSection("Cvjećara", "cvjecara")}
      {renderSection("Glazba", "glazba")}
      {renderSection("Restoran", "restoran")}
      {renderSection("Salon", "salon")}
      {renderSection("Slastičarna", "slasticarna")}
    </div>
  );
};

export default Home;
