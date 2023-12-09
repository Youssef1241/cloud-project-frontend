import React, { useState } from 'react';

function PatientForm({ onSubmit }) {
  const [medicalHistory, setMedicalHistory] = useState({
    diagnosis: '',
    prescriptions: '',
    surgeries: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMedicalHistory((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(medicalHistory);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Diagnosis:
        <input
          name="diagnosis"
          value={medicalHistory.diagnosis}
          onChange={handleChange}
        />
      </label>
      <label>
        Prescriptions:
        <input
          name="prescriptions"
          value={medicalHistory.prescriptions}
          onChange={handleChange}
        />
      </label>
      <label>
        Surgeries:
        <input
          name="surgeries"
          value={medicalHistory.surgeries}
          onChange={handleChange}
        />
      </label>
      
      <button type="submit">Submit Medical History</button>
    </form>
  );
}

export default PatientForm;
