import { useState } from 'react';
import { Button, ImageList, TextField } from '@mui/material';
import CategoryImage from '../CategoryImage/CategoryImage';
import './CreateCategory.css';

interface Category {
    name: string,
    image: string,
    _id?: number
}
interface IProps {
    handleClose(): void;
    handleCreateCategory(category: Category): void;
}

const CreateCategory: React.FC<IProps> = props => {
    const [selected, setSelected] = useState('');
    const [categoryName, setCategoryName] = useState('');

    const imagesArray = [];
    for(let i = 1; i <= 50; i++) {
        imagesArray.push(i.toString())
    }

    const addCategory = () => {
        console.log("selected", selected);
        console.log("name", categoryName);
        const category = {
            name: categoryName,
            image: selected
        }
        props.handleCreateCategory(category);
    }

    return (
        <div>
            <TextField
                required
                id="standard-basic"
                label="Category name"
                variant="standard"
                value={categoryName}
                onChange={e => setCategoryName(e.target.value)}
            />
            <h5>Select category image</h5>
            <ImageList sx={{ width: "100%", height: 200 }} cols={5}>
                {imagesArray.map((image) => (
                    <CategoryImage key={image} image={image} onClick={(e) => setSelected(e)}  isSelected={selected === image} />
                ))}
            </ImageList>
            <Button variant="contained" onClick={addCategory}>Create</Button>
            <Button variant="outlined" onClick={props.handleClose}>Cancel</Button>
        </div>
        
    )
}

export default CreateCategory;