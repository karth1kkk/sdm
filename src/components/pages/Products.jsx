import React from 'react';

const Products = () => {
  // Mock data for products
  const products = [
    { id: 1, name: 'Furnitures', description: 'Fast and reliable express delivery service.', price: '$20',method: 'Visa', available: 'Out For devivery' },
    { id: 2, name: 'Certificates', description: 'Standard delivery service with average shipping time.', price: '$15',method: 'Mastercard', available: 'Out For devivery' },
    { id: 3, name: 'Parcel', description: 'Guaranteed next-day delivery for urgent packages.', price: '$30',method: 'TNG', available: 'Out For devivery' },
    { id: 4, name: 'Letters', description: 'International shipping service with tracking.', price: '$50',method: 'Visa', available: 'Out For devivery' },
    { id: 5, name: 'Documents', description: 'Delivery issue to to payment', price: '$40',method: 'error', available: 'Devivery issue' },
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
      <h1 style={headingStyles}>Courier Service Products</h1>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={{ ...thTdStyles, ...thStyles }}>ID</th>
            <th style={{ ...thTdStyles, ...thStyles }}>Name</th>
            <th style={{ ...thTdStyles, ...thStyles }}>Description</th>
            <th style={{ ...thTdStyles, ...thStyles }}>Paid</th>
            <th style={{ ...thTdStyles, ...thStyles }}>Payment Method (Secure TAC)</th>
            <th style={{ ...thTdStyles, ...thStyles }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} style={index % 2 === 0 ? trEvenStyles : {}}>
              <td style={thTdStyles}>{product.id}</td>
              <td style={thTdStyles}>{product.name}</td>
              <td style={thTdStyles}>{product.description}</td>
              <td style={thTdStyles}>{product.price}</td>
              <td style={thTdStyles}>{product.method}</td>
              <td style={thTdStyles}>{product.available}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
