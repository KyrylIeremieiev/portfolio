import React, { useState } from 'react';
import MenuIcon from './menuIcon';


const MyNavigation = () =>{
    return(
                <header className="header">
                    <ul className="header__nav">
                        <li className="header__navItem">Projects</li>
                        <li className="header__navItem">Skills</li>
                        <li className="header__navItem">About me</li>
                        <li className="header__navItem">CV</li>
                        <li className="header__navItem">Contact</li>
                    </ul>
                </header>
    );
}

export default MyNavigation

