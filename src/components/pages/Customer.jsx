import React from 'react';

const Customer = () => {
  // Mock data for customers
  const customers = [
    { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', phone: '555-1234', address: '123 Elm St',payments: 'Visa' },
    { id: 2, name: 'Bob Brown', email: 'bob.brown@example.com', phone: '555-5678', address: '456 Oak St',payments: 'Mastercard' },
    { id: 3, name: 'Charlie Davis', email: 'charlie.davis@example.com', phone: '555-8765', address: '789 Pine St',payments: 'GPay' },
    { id: 4, name: 'Diana Evans', email: 'diana.evans@example.com', phone: '555-4321', address: '321 Maple St',payments: 'TNG' },
    { id: 5, name: 'Eve Adams', email: 'eve.adams@example.com', phone: '555-6789', address: '654 Birch St',payments: 'Visa' },
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
      <h1 style={headingStyles}>Customers</h1>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={{ ...thTdStyles, ...thStyles }}>ID</th>
            <th style={{ ...thTdStyles, ...thStyles }}>Name</th>
            <th style={{ ...thTdStyles, ...thStyles }}>Email</th>
            <th style={{ ...thTdStyles, ...thStyles }}>Phone</th>
            <th style={{ ...thTdStyles, ...thStyles }}>Address</th>
            <th style={{ ...thTdStyles, ...thStyles }}>Payments & Transactions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id} style={index % 2 === 0 ? trEvenStyles : {}}>
              <td style={thTdStyles}>{customer.id}</td>
              <td style={thTdStyles}>{customer.name}</td>
              <td style={thTdStyles}>{customer.email}</td>
              <td style={thTdStyles}>{customer.phone}</td>
              <td style={thTdStyles}>{customer.address}</td>
              <td style={thTdStyles}>{customer.payments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
