import { Link } from "react-router-dom"
import { CvButtonStyled } from "./CvButton.styled"

export const CvButton = ({className}) => {
    return (
        
            <Link 
                to='https://www.canva.com/design/DAFYAiaUZBo/2sQjOo-Upgbdnulc8CtCIg/view?utm_content=DAFYAiaUZBo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
                rel="noopener noreferrer"
                target="_blank"><CvButtonStyled className={className}>Watch CV</CvButtonStyled></Link>
        
    );
};