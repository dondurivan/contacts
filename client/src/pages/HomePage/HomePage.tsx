import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.svg';
import { Counter } from '../../features/counter/Counter';
import axios from 'axios';
import './HomePage.css';

interface Category {
  name: string
}

function HomePage() {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/categories`,
      method: "get"
    }) 
  
    console.log(response);
    setCategories(response.data)
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Counter /> */}
        <h1>Categories</h1>
        {categories && categories.map(item => (
          <div key={item.name}>{item.name}</div>
        ))}
      </header>
      
    </div>
  );
}

export default HomePage;
