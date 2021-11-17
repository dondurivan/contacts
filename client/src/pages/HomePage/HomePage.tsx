import React, { useEffect, useState } from 'react';
import { Counter } from '../../features/counter/Counter';
import axios from 'axios';
import './HomePage.css';

interface Category {
  name: string,
  image: string
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
    <div className="Home">
      <header className="Home-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Counter /> */}
        <h1>Categories</h1>
      </header>
      <div className="Home-list">
        {categories && (
          categories.map(item => {
            const image = require(`../../assets/images/jobs-icons/${item.image}.svg`).default;
            return (
              <div key={item.name} className="Home-list-item">
                <h3>{item.name}</h3>
                <img src={image} className="Home-image" alt={item.name} />
              </div>
            )}
          )
        )}
      </div>
      
    </div>
  );
}

export default HomePage;
