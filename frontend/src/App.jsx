import React from 'react';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Dashboard />
      <Leaderboard />
    </div>
  );
};

export default App;
