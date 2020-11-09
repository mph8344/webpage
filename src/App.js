import React from 'react';
import './App.css';
import MainSides from './MainSides';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="main">
        <MainSides />
      </div>
      
    </div>
  );
}

export default App;
