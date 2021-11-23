import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Modal, Paper, Grid, Container } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import CreateCategory from '../../components/CreateCategory/CreateCategory';
import axios from 'axios';
import { ICategory } from './types';
import './Categories.css';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Categories() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchCategories = async () => {
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/categories`,
      method: "get"
    }) 
  
    setCategories(response.data)
  }
  
  const addCategory = async (category: ICategory): Promise<void> => {
    console.log(category)
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/categories/add`,
      method: "post",
      data: category
    })

    if (response.status !== 200) {
      return;
    }

    handleClose();
    await fetchCategories();
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="Categories">
      <Container maxWidth="sm">
        <header className="Categories-header">
          <h1>Categories</h1>
        </header>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {categories && (
            categories.map(item => {
              const image = require(`../../assets/images/jobs-icons/${item.image}.svg`).default;
              return (
                <Grid item xs={2} sm={4} md={4} key={item.image}>
                  <Item>
                    <Link
                      to={`/categories/${item._id}`}
                      key={item.name}
                    >
                      <h3>{item.name}</h3>
                      <img src={image} className="Categories-image" alt={item.name} />
                    </Link>
                  </Item>
                </Grid>
              )}
            )
          )}
        </Grid>
        <footer className="Categories-footer">
          <Button variant="contained" onClick={handleOpen}>Add new category</Button>
        </footer>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Paper elevation={3} sx={style}>
            <CreateCategory handleClose={handleClose} handleCreateCategory={(item: ICategory): Promise<void> => addCategory(item)} />
          </Paper>
        </Modal>
      </Container>
    </div>
  );
}

export default Categories;
