import { useState } from 'react';
import { ImageList } from '@mui/material';
import CategoryImage from '../CategoryImage/CategoryImage';
import './CreateCategory.css';

const CreateCategory = () => {
    const [selected, setSelected] = useState('');

    const imagesArray = [];
    for(let i = 1; i <= 50; i++) {
        imagesArray.push(i.toString() +'.svg')
    }

    return (
        <div>
            <h3>Select category image</h3>
            <ImageList sx={{ width: "100%", height: 200 }} cols={5}>
                {imagesArray.map((image) => (
                    <CategoryImage key={image} image={image} onClick={(e) => setSelected(e)}  isSelected={selected === image} />
                ))}
            </ImageList>
        </div>
        
    )
}

export default CreateCategory;