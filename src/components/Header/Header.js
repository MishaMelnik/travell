import React from 'react';
import s from './Header.module.css'

const Header = ({imageSrc}) => {
    return (
        <div className={s.header}>
            <img src={imageSrc} alt="Travel" className={s.image}/>
            <h1 className={s.title}>Travel made simple</h1>
        </div>
    );
};

export default Header;
