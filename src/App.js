import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar_patient';
import FilterOptions from './components/FilterOptions';
import PatientTable from './components/PatientTable';
import PatientForm from './components/PatientForm';
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './UI/Layout'; 
import SignupPage from "./pages/SignupPage";
function App() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});

  

  const fetchPatients = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/patients');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error("Could not fetch patients:", error);
    }
  };
  useEffect(() => {
    fetchPatients();
  }, []);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(`http://localhost:3000/api/patients/search/${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error("Failed to fetch patients:", error);
    }
  };

  const handleFilterChange = async  (filterName, filterValue) => {
    const newFilters = { ...filters, [filterName]: filterValue };
  setFilters(newFilters);

  const queryString = Object.entries(newFilters)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

  try {
    const response = await fetch(`http://localhost:3000/api/patients/filter?${queryString}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setPatients(data);
  } catch (error) {
    console.error('Failed to fetch filtered patients:', error);
  }
  };

  const handleFormSubmit = async (medicalHistory) => {
    try {
      const response = await fetch('http://localhost:3000/api/patients/medicalHistory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(medicalHistory),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedPatient = await response.json();
      setPatients((prevPatients) =>
        prevPatients.map((p) => (p.id === updatedPatient.id ? updatedPatient : p))
      );
    } catch (error) {
      console.error('Failed to submit medical history:', error);
    }
  };

  const filteredPatients = patients.filter((patient) => {
    const matchesSearchTerm = patient.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAgeFilter = filters.age ? patient.age === Number(filters.age) : true;
    const matchesLocationFilter = filters.location ? patient.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
    return matchesSearchTerm && matchesAgeFilter && matchesLocationFilter;
  });
  return ( 
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/products" element={<ProductPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/"
            element={
              <div className="App">
                <SearchBar onSearch={handleSearch} />
                <FilterOptions onFilterChange={handleFilterChange} />
                <PatientTable patients={filteredPatients} />
                <PatientForm onSubmit={handleFormSubmit} />
              </div>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
