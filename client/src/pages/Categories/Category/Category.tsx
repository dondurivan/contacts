import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Button,  } from '@mui/material';
import { ICategory } from '../types';

const Category = () => {
  const [category, setCategory] = useState<ICategory>();

  let navigate = useNavigate();
  const params = useParams();
  
  const fetchCategory = async () => {
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/categories/${params?.categoryID}`,
      method: "get"
    }) 
  
    setCategory(response.data)
  }

  const deleteItem = () => {
    axios({
      url: `${process.env.REACT_APP_API_URL}/categories/${category?._id}`,
      method: "delete"
    }).then((res) => {
      console.log(res);
      navigate('/categories');
    }).catch(err => console.log(err));
  }

  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div>
      <h2>Category: {category?.name}</h2>
      <footer className="Categories-footer">
        <Button variant="contained" onClick={deleteItem}>Delete category</Button>
      </footer>
    </div>);
}

export default Category;