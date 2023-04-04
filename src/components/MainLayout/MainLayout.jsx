import { Link, NavLink, Outlet } from "react-router-dom"
import { NavStyled, MainLayoutStyled, HeaderStyled, MainStyled, MenuButton, MenuStyled, MenuBar } from "./MainLayout.styled"
import { FaHome } from 'react-icons/fa'
import { BsPersonFill, BsFillBriefcaseFill } from 'react-icons/bs'
import { Contacts } from "../Contacts/Contacts";
import { GiHamburgerMenu } from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'
import { useState } from "react";

const body = document.body
const menuBarWidth = 767;


export const MainLayout = () => {

    const [menuActive, setMenuActive] = useState(false);

    const menuToggle = () => {
        if (window.innerWidth <= menuBarWidth) setMenuActive(!menuActive)
    };

    
    if (menuActive) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'auto'
    }

    return (
        <MainLayoutStyled>
            <HeaderStyled>
                <MenuBar>
                    <MenuButton type="button" onClick={menuToggle}>
                        {menuActive ? <RxCross2 /> : <GiHamburgerMenu />}</MenuButton>
                </MenuBar>
                
                <MenuStyled className={menuActive ? 'active' : null}>
                                    <Link className="cv-download-button"
                    to='https://drive.google.com/file/d/1bQ5xGiWkfvV5gWtq9LJWIkI5fIHt6Q3a/view?usp=sharing'
                    rel="noopener noreferrer"
                    target="_blank">Watch CV</Link>
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
    );
};