import React, { useState } from 'react';


const MyNavigation = ({ onClick }) =>{
    return(
        <header className="header">
            <ul className="header__nav">
                <li className="header__navItem" onClick={() => onClick('element1')} label="Projects">Projects</li>
                <li className="header__navItem" onClick={() => scrollToElement('about')} label="About" >About</li>
                <li className="header__navItem" onClick={() => scrollToElement('skills')} label="Skills" >Skills</li>
                <li className="header__navItem" onClick={() => scrollToElement('contact')} label="Contact" >Contact</li>
            </ul>
        </header>
    );
}

export default MyNavigation

