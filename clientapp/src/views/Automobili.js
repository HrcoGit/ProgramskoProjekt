import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Automobili = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5269/api/automobili'); // Replace with your API URL
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5269/api/automobili/${id}`); // Adjust the endpoint as needed
      setData(data.filter((car) => car.idAutomobili !== id)); // Update the state to remove the deleted item
      alert('Car deleted successfully!');
    } catch (error) {
      console.error('Error deleting car:', error);
      alert('Failed to delete the car. Please try again.');
    }
  };

  if (loading) {
    return <p style={{ textAlign: 'center', fontSize: '18px' }}>Loading...</p>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Automobili</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Marka</th>
            <th style={styles.th}>Model</th>
            <th style={styles.th}>Cijena</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((car) => (
            <tr key={car.idAutomobili}>
              <td style={styles.td}>{car.idAutomobili}</td>
              <td style={styles.td}>{car.marka}</td>
              <td style={styles.td}>{car.model}</td>
              <td style={styles.td}>${car.cijena.toFixed(2)}</td>
              <td style={styles.td}>
                <button
                  style={styles.button}
                  onClick={() => handleDelete(car.idAutomobili)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Automobili;

const styles = {
    container: {
      margin: '20px auto',
      maxWidth: '800px',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#343a40',
      marginBottom: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      backgroundColor: '#343a40',
      color: '#ffffff',
      padding: '10px',
      textAlign: 'left',
    },
    td: {
      border: '1px solid #dddddd',
      padding: '10px',
      textAlign: 'left',
    },
    button: {
      padding: '8px 12px',
      backgroundColor: '#dc3545',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#c82333',
    },
  };