import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/health`)
      .then(res => res.text())
      .then(data => console.log('Health check:', data))
      .catch(err => console.error('Backend error:', err));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>MERN Deployment App</h1>
      <p>React frontend connected to Express backend!</p>
    </div>
  );
}

export default App;
