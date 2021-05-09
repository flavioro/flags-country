import React from 'react';

import './App.css';
import Home from './pages/Home';
import data from './api/Api'

function App() {
  return (
    <div className="App">
      <Home countries={data} />
    </div>
  );
}

export default App;
