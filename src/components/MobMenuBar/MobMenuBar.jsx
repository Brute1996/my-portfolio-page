import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { CvButton } from "../CvButton/CvButton";
import { MenuBar, MenuButton } from "./MobMenuBar.styled";

export const MobMenuBar = ({ menuActive, menuToggle }) => {
    return (
        <MenuBar>
            <CvButton/>
            <MenuButton type="button" onClick={menuToggle}>
                {menuActive ? <RxCross2 /> : <GiHamburgerMenu />}</MenuButton>
        </MenuBar>)
};