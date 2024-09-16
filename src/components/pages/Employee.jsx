import React from 'react';

const Employee = () => {
  // Mock data for employees
  const employees = [
    { id: 1, name: 'John Doe', role: 'Courier', email: 'john.doe@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'Dispatcher', email: 'jane.smith@example.com', status: 'Active' },
    { id: 3, name: 'Emily Johnson', role: 'Customer Service', email: 'emily.johnson@example.com', status: 'Inactive' },
    { id: 4, name: 'Michael Brown', role: 'Courier', email: 'michael.brown@example.com', status: 'Active' },
    { id: 5, name: 'Chris Evans', role: 'Logistics Manager', email: 'chris.evans@example.com', status: 'Active' },
  ];

  // Inline CSS styles
  const pageStyles = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thTdStyles = {
    padding: '12px',
    border: '1px solid #ddd',
    textAlign: 'left',
  };

  const thStyles = {
    backgroundColor: '#004d4d',
    color: 'white',
  };

  const trEvenStyles = {
    backgroundColor: '#f2f2f2',
  };

  const headingStyles = {
    color: '#004d4d',
  };

  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>Employees</h1>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={{ ...thTdStyles, ...thStyles }}>ID</th>
            <th style={{ ...thTdStyles, ...thStyles }}>Name</th>
            <th style={{ ...thTdStyles, ...thStyles }}>Role</th>
            <th style={{ ...thTdStyles, ...thStyles }}>Email</th>
            <th style={{ ...thTdStyles, ...thStyles }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id} style={index % 2 === 0 ? trEvenStyles : {}}>
              <td style={thTdStyles}>{employee.id}</td>
              <td style={thTdStyles}>{employee.name}</td>
              <td style={thTdStyles}>{employee.role}</td>
              <td style={thTdStyles}>{employee.email}</td>
              <td style={thTdStyles}>{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
