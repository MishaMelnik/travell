import React from 'react';
import s from './Navbar.module.css'
import {FiMenu, FiX} from "react-icons/fi";

// const navbarLinks =[{ url:"/home", title:"Home"}];

const Navbar = ({navbarLinks}) => {
    return (
        <nav className={s.navbar}>
            <span className={s.logo}>travell</span>
            <ul className={s.list}>
                {navbarLinks.map((item) =>{
                return(
                    <li className={s.item} key={item.title}>
                        <a className={s.link} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                )
            })}</ul>
        </nav>
    );
};

export default Navbar;
