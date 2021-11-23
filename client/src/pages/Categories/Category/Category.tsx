import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { ICategory } from '../types';

export default function Category() {
  const [category, setCategory] = useState<ICategory>();

  const params = useParams();
  
  const fetchCategory = async () => {
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/categories/${params?.categoryID}`,
      method: "get"
    }) 
  
    setCategory(response.data)
  }

  useEffect(() => {
    fetchCategory();
  }, []);
  return <h2>Category: {category?.name}</h2>;
}