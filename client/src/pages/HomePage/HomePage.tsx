import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Counter } from '../../features/counter/Counter';
import './HomePage.css';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Counter /> */}
        <h1>Categories</h1>
      </header>
      
    </div>
  );
}

export default HomePage;
