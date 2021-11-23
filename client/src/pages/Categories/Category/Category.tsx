import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import { Button, Container } from '@mui/material';
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
      <Container maxWidth="sm">
        <header className="Categories-header">
          <Link to={`/categories`}>Back</Link>
          <h1>Category: {category?.name}</h1>
        </header>
        <footer className="Categories-footer">
          <Button variant="contained" onClick={deleteItem}>Delete category</Button>
        </footer>
      </Container>
    </div>);
}

export default Category;