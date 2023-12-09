import React from 'react';

function PatientTable({ patients }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Location</th>
          {/* Add other headers if needed */}
        </tr>
      </thead>
      <tbody>
        {patients.map((patient) => (
          <tr key={patient.id}>
            <td>{patient.name}</td>
            <td>{patient.age}</td>
            <td>{patient.phone}</td>
            <td>{patient.location}</td>
            {/* Add other patient details */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PatientTable;
