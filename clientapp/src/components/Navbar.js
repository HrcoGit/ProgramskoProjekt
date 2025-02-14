import React, { useState } from "react";
import { LiaRingSolid } from "react-icons/lia";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav style={styles.navbar}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={styles.logo}><LiaRingSolid /></div>
                <ul style={styles.navList}>
                    <li style={styles.navItem}><a href="/" style={styles.navLink}>Svatovi</a></li>
                    <li style={styles.navItem}><a href="/" style={styles.navLink}>Krštenja</a></li>
                    <li style={styles.navItem}><a href="/" style={styles.navLink}>Pričesti</a></li>
                    <li style={styles.navItem}><a href="/" style={styles.navLink}>Krizme</a></li>
                </ul>
            </div>
            <div style={styles.dropdownContainer}>
                <button style={styles.addNew} onClick={toggleDropdown}>+</button>
    
                {dropdownOpen && (
                    <div style={styles.dropdownMenu}>
                        <ul style={styles.dropdownList}>
                            {[
                               // "Dodaj Događaj",  imam drugu ideju za ovo
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
                                <li key={index} style={styles.dropdownItem}>
                                    <a href={`${item.toLowerCase().replace(/\s+/g, '-')}`} style={styles.link}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
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
        position: "relative"
    },
    link: {
        textDecoration: "none",
        color: "inherit",         
        fontSize: "16px",
        display: "block",
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
        padding: 0
    },
    navItem: {
        marginLeft: "20px"
    },
    navLink: {
        textDecoration: "none",
        color: "#fff",
        fontSize: "20px"
    },
    dropdownContainer: {
        position: "relative",
    },
    addNew: {
        backgroundColor: "#50C878",
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
        zIndex: 1000
    },
    dropdownList: {
        listStyle: "none",
        margin: 0,
        padding: 0
    },
    dropdownItem: {
        padding: "10px",
        cursor: "pointer",
        fontSize: "16px",
        color: "#543A14",
        borderBottom: "1px solid #ddd",
        transition: "background 0.2s",
    },
    dropdownItemLast: {
        borderBottom: "none"
    }
};

export default Navbar;
