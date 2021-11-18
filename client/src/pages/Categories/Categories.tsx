import { useEffect, useState } from 'react';
import { Button, Modal, Paper } from '@mui/material';
import CreateCategory from '../../components/CreateCategory/CreateCategory';
import axios from 'axios';
import './Categories.css';

interface Category {
  name: string,
  image: string
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  p: 4,
};

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchCategories = async () => {
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/categories`,
      method: "get"
    }) 
  
    console.log(response);
    setCategories(response.data)
  }
  
  const addCategory = async (category: Category): Promise<void> => {
    console.log(category)
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/categories/add`,
      method: "post",
      data: category
    })

    if (response.status !== 200) {
      return;
    }
  
    console.log(response);
    handleClose();
    await fetchCategories();
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="Categories">
      <header className="Categories-header">
        <h1>Categories</h1>
      </header>
      <div className="Categories-list">
        {categories && (
          categories.map(item => {
            const image = require(`../../assets/images/jobs-icons/${item.image}.svg`).default;
            return (
              <div key={item.name} className="Categories-list-item">
                <h3>{item.name}</h3>
                <img src={image} className="Categories-image" alt={item.name} />
              </div>
            )}
          )
        )}
      </div>
      <Button variant="contained" onClick={handleOpen}>Add new category</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper elevation={3} sx={style}>
          <CreateCategory handleClose={handleClose} handleCreateCategory={(item: Category): Promise<void> => addCategory(item)} />
        </Paper>
      </Modal>
    </div>
  );
}

export default Categories;
