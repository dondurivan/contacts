import { useState, useEffect } from 'react';

import { ImageListItem } from '@mui/material';

interface IProps {
    image: string;
    isSelected: boolean;
    onClick(image: string): void;
}

const CategoryImage: React.FC<IProps> = props => {
    const {isSelected, image} = props;
    
    return (
        <ImageListItem className="Image-item" onClick={() => props.onClick(image)}>
            <img
                src={require(`../../assets/images/jobs-icons/${image}`).default}
                alt={image}
                loading="lazy"
            />
            {isSelected && <div>aa</div>}
        </ImageListItem>
    )
}

export default CategoryImage;