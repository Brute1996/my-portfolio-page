import { GiHamburgerMenu } from "react-icons/gi";
import { MenuBar, MenuButton } from "../MainLayout/MainLayout.styled"
import { RxCross2 } from "react-icons/rx";

export const MobMenuBar = ({ menuActive, menuToggle }) => {
    return (
        <MenuBar>
            <MenuButton type="button" onClick={menuToggle}>
                {menuActive ? <RxCross2 /> : <GiHamburgerMenu />}</MenuButton>
        </MenuBar>)
};