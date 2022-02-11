import React from 'react'
import "../css/Navbar.css"
import Logo from './Logo'
import { HiOutlineArrowNarrowLeft, HiOutlineChevronDown, HiMenuAlt4 } from "react-icons/hi";
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <Logo />
                <span><HiOutlineArrowNarrowLeft /></span>
                <span><HiOutlineChevronDown/></span>
            </div>
            <div className='navbar__items'>
                <ul>
                    <li className='navbar__active'>Company</li>
                    <li>Latest</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar