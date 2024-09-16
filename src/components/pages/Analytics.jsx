import React from 'react';
import ApexCharts from 'react-apexcharts';

const Analytics = () => {
  // Sample data for the line chart
  const chartOptions = {
    chart: {
      id: 'sales-chart',
      toolbar: {
        show: false
      },
    },
    title: {
      text: 'Sales Over Time',
      align: 'left',
      style: {
        color: '#004d4d',
        fontSize: '16px'
      }
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      title: {
        text: 'Month'
      }
    },
    yaxis: {
      title: {
        text: 'Sales'
      }
    },
    colors: ['#00E396']
  };

  const chartSeries = [{
    name: 'Sales',
    data: [30, 45, 60, 50, 70, 65, 80]
  }];

  // Summary statistics
  const totalSales = chartSeries[0].data.reduce((a, b) => a + b, 0);
  const averageSales = totalSales / chartSeries[0].data.length;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#004d4d' }}>Analytics Dashboard</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <ApexCharts 
          options={chartOptions} 
          series={chartSeries} 
          type="line" 
          height={350} 
        />
      </div>
      
      <div>
        <h2 style={{ color: '#004d4d' }}>Summary Statistics</h2>
        <p><strong>Total Sales:</strong> ${totalSales}</p>
        <p><strong>Average Sales:</strong> ${averageSales.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Analytics;
