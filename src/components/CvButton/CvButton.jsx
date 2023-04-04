import { Link } from "react-router-dom"
import { CvButtonStyled } from "./CvButton.styled"

export const CvButton = ({className}) => {
    return (
        <CvButtonStyled className={className}>
            <Link 
                to='https://drive.google.com/file/d/1bQ5xGiWkfvV5gWtq9LJWIkI5fIHt6Q3a/view?usp=sharing'
                rel="noopener noreferrer"
                target="_blank">Watch CV</Link>
        </CvButtonStyled>
    );
};