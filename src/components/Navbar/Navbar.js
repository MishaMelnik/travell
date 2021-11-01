import React from 'react';
import'./Navbar.css'
import {FiMenu, FiX} from "react-icons/fi";

// const navbarLinks =[{ url:"/home", title:"Home"}];

const Navbar = ({navbarLinks}) => {
    return (
        <nav className="navbar">
            <span className="navbar_logo">travell</span>
            <ul className="navbar_list">
                {navbarLinks.map((item) =>{
                return(
                    <li className="navbar_item" key={item.title}>
                        <a className="navbar_link" href={item.url}>
                            {item.title}
                        </a>
                    </li>
                );
            })}
            </ul>
        </nav>
    );
};

export default Navbar;
