import { NavLink, Outlet } from "react-router-dom"
import { NavStyled, MainLayoutStyled, HeaderStyled, MainStyled, MenuStyled } from "./MainLayout.styled"
import { FaHome } from 'react-icons/fa'
import { BsPersonFill, BsFillBriefcaseFill } from 'react-icons/bs'
import { Contacts } from "../Contacts/Contacts";
import { useState } from "react";
import { MobMenuBar } from "../MobMenuBar/MobMenuBar";
import { CvButton } from "../CvButton/CvButton";
import { ThemeProvider } from "@emotion/react";
import { themeLight, themeDark } from "../themeStyles/themeStyles";
import { ThemeButton } from "../ThemeButton/ThemeButton";

const body = document.body
const mobMenuBarWidth = 767;




export const MainLayout = () => {

    // menu processor
    const [menuActive, setMenuActive] = useState(false);
    const menuToggle = () => {
        if (window.innerWidth <= mobMenuBarWidth) setMenuActive(!menuActive)
    };
    if (menuActive) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'auto'
    }

    // theme processor 
    const [theme, setTheme] = useState(themeLight)
    const handleThemeToggled = () => {
        if (theme.id === "light") {
            setTheme(themeDark)
        } else {
            setTheme(themeLight)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <MainLayoutStyled>
                <HeaderStyled>
                    <ThemeButton handleThemeToggled={handleThemeToggled} theme={theme} />
                    <MobMenuBar menuActive={menuActive} menuToggle={menuToggle} />
                    <MenuStyled className={menuActive ? 'active' : null}>
                        <CvButton className={'menu-cv-button'} />
                        <NavStyled>
                            <NavLink onClick={menuToggle} className='navigation-link' to='/'><FaHome />Home</NavLink>
                            <NavLink onClick={menuToggle} className='navigation-link' to='/skills'><BsPersonFill />Skills</NavLink>
                            <NavLink onClick={menuToggle} className='navigation-link' to='/portfolio'><BsFillBriefcaseFill />Portfolio</NavLink>
                        </NavStyled>
                        <Contacts />
                    </MenuStyled>
                    <div className="menu-clone"></div>
                </HeaderStyled>
                <MainStyled>
                    <Outlet />
                </MainStyled>
            </MainLayoutStyled>
        </ThemeProvider>
    );
};