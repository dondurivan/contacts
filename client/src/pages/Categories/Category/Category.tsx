import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import { Button, Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ICategory, IPerson } from '../types';

const Category = () => {
  const [category, setCategory] = useState<ICategory>();
  const [people, setPeople] = useState<IPerson[]>();

  // const people = [
  //   {
  //     name: "Jovan Kostic",
  //     nickname: "Joca Struja",
  //     phoneNumber: "+1111234567",
  //     isFavorite: false,
  //     comments: [],
  //     rating: undefined
  //   },
  //   {
  //     name: "Milisav Jovanovic",
  //     nickname: "Mrvica",
  //     phoneNumber: "+1111234567",
  //     isFavorite: false,
  //     comments: [],
  //     rating: undefined
  //   }
  // ];

  let navigate = useNavigate();
  const params = useParams();
  
  const fetchCategory = async () => {
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/categories/${params?.categoryID}`,
      method: "get"
    }) 
  
    setCategory(response.data)
  }

  const fetchPeople = async () => {
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/people`,
      method: "get"
    }) 
  
    setPeople(response.data)
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
    fetchPeople();
  }, [params]);
  return (
    <div>
      <Container maxWidth="sm">
        <header className="Categories-header">
          <Link to={`/categories`}>Back</Link>
          <h1>Category: {category?.name}</h1>
        </header>
        <div>
        {people && people.map(person => (
          <Card sx={{ maxWidth: 345 }} key={person._id}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {person.name}({person.nickname})
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone number: <a href="tel:{person.phoneNumber}">{person.phoneNumber}</a>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
        </div>
        <footer className="Categories-footer">
          <Button variant="contained" onClick={deleteItem}>Delete category</Button>
        </footer>
      </Container>
    </div>);
}

export default Category;