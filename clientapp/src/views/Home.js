import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronDown, FaPencilAlt, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as XLSX from "xlsx";  // Import the xlsx library

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

  // Export Data to Excel
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();  // Create a new workbook

    Object.keys(data).forEach((section) => {
      const sectionData = data[section];
      if (sectionData && sectionData.length > 0) {
        // Convert each section to a worksheet
        const ws = XLSX.utils.json_to_sheet(sectionData);  // Convert JSON to sheet
        XLSX.utils.book_append_sheet(wb, ws, section);  // Append the sheet to the workbook
      }
    });

    // Generate and download the Excel file
    XLSX.writeFile(wb, "ExportedData.xlsx");
  };

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

  const styles = {
    // ... existing styles
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
              <h3>
                {item.tipDogadjaja ||
                  item.marka ||
                  item.ime ||
                  item.naziv ||
                  "N/A"}
              </h3>
              <p>
                {item.model || item.lokacija || item.adresa || item.datum || ""}
              </p>
            </div>
          ))}
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
        <button
          style={styles.editButton}
          onClick={() => setEditMode(!editMode)}
        >
          Edit
        </button>
      </div>
      {renderSection("Dogadjaj", "dogadjaj")}
      {renderSection("Automobili", "automobili")}
      {renderSection("Cvjećara", "cvjecara")}
      {renderSection("Glazba", "glazba")}
      {renderSection("Restoran", "restoran")}
      {renderSection("Restoran Jelo", "restoranJelo")}
      {renderSection("Salon", "salon")}
      {renderSection("Slastičarna", "slasticarna")}
      <button style={styles.exportButton} onClick={exportToExcel}>
        Export
      </button>
    </div>
  );
};

export default Home;