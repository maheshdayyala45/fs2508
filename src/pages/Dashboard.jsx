import '../styles/Dashboard.css';
import React from 'react';
import Navbar from '../components/Navbar';

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '40px' }}>
        <h1>Welcome to Edify CRM Dashboard</h1>
        <p>This is the landing page after login.</p>
      </div>
    </div>
  );
}

export default Dashboard;