import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { CvButton } from "../CvButton/CvButton";
import { MenuBar, MenuButton } from "./MobMenuBar.styled";
import { ThemeButton } from "../ThemeButton/ThemeButton";


export const MobMenuBar = ({ menuActive, menuToggle, handleThemeToggled, theme }) => {
    return (
        <MenuBar>
            <CvButton />
            <ThemeButton handleThemeToggled={handleThemeToggled} theme={theme} />
            <MenuButton type="button" onClick={menuToggle}>
                {menuActive ? <RxCross2 /> : <GiHamburgerMenu />}</MenuButton>
        </MenuBar>)
};