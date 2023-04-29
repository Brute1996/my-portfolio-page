import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { ThemeButtonStyle } from "./ThemeButton.styled";


export const ThemeButton = ({handleThemeToggled, theme}) => {
    return (
        <ThemeButtonStyle className="theme-btn" type="button" onClick={handleThemeToggled}>{
        theme.id === 'light' ?  <BsSunFill/> : <BsMoonStarsFill /> }
        </ThemeButtonStyle>
    );
};