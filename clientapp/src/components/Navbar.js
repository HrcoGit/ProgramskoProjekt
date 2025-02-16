import React, { useState } from "react";
import { LiaRingSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav style={styles.navbar}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={styles.logo}>
          <LiaRingSolid />
        </div>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <span style={styles.navLink} onClick={() => navigate("/")}>
              Svatovi
            </span>
          </li>
          <li style={styles.navItem}>
            <span style={styles.navLink} onClick={() => navigate("/")}>
              Krštenja
            </span>
          </li>
          <li style={styles.navItem}>
            <span style={styles.navLink} onClick={() => navigate("/")}>
              Pričesti
            </span>
          </li>
          <li style={styles.navItem}>
            <span style={styles.navLink} onClick={() => navigate("/")}>
              Krizme
            </span>
          </li>
        </ul>
      </div>
      {/* <div style={styles.dropdownContainer}>
        <button style={styles.addNew} onClick={toggleDropdown}>
          +
        </button>

        {dropdownOpen && (
          <div style={styles.dropdownMenu}>
            <ul style={styles.dropdownList}>
              {[
                "Dodaj Cvjećarnu",
                "Dodaj Automobil",
                "Dodaj Glazbu",
                "Dodaj Izvještaj",
                "Dodaj Restoran",
                "Dodaj Jelo",
                "Dodaj Meni",
                "Dodaj Slastičarnu",
                "Dodaj Salon",
                "Dodaj Ostalo",
              ].map((item, index) => (
                <li
                  key={index}
                  style={styles.dropdownItem}
                  onClick={() =>
                    navigate(`/${item.toLowerCase().replace(/\s+/g, "-")}`)
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      */}
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#C09560",
    padding: "10px 20px",
    color: "#fff",
    position: "fixed",
    top: 0,
    minWidth: "100%",
    zIndex: 1000,
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    width: "300px",
    justifyContent: "space-between",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "20px",
  },
  navLink: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
  },
  dropdownContainer: {
    position: "relative",
  },
  addNew: {
    backgroundColor: "#28a745",
    color: "#fff",
    fontSize: "24px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "5px 10px",
    fontWeight: "bold",
    width: "40px",
    height: "40px",
    textAlign: "center",
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    right: 0,
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width: "200px",
    marginTop: "5px",
    zIndex: 1000,
  },
  dropdownList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  dropdownItem: {
    padding: "10px",
    cursor: "pointer",
    fontSize: "16px",
    color: "#543A14",
    borderBottom: "1px solid #ddd",
    transition: "background 0.2s",
  },
};

export default Navbar;
