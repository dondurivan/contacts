import CheckIcon from '@mui/icons-material/Check';
import { ImageListItem } from '@mui/material';

import "./CategoryImage.css";

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
                src={require(`../../assets/images/jobs-icons/${image}.svg`).default}
                alt={image}
                loading="lazy"
            />
            {isSelected && <CheckIcon className="Image-check" />}
        </ImageListItem>
    )
}

export default CategoryImage;