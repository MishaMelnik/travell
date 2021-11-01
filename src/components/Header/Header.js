import React from 'react';
import'./Header.css'

const Header = ({imageSrc}) => {
    return (
        <div className="header">
            <img src={imageSrc} alt="Travel" className="header_image"/>
            <h1 className="header_title">Travel made simple</h1>
        </div>
    );
};

export default Header;
