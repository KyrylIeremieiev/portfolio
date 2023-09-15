import React, { useState } from 'react';
import MenuIcon from './menuIcon';


const MyNavigation = () =>{
    //is open is by default false
    const [isOpen, setIsOpen] = useState(true);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    return(
        <section>
            <button onClick={toggleMenu}><MenuIcon/></button>
            {isOpen && (
                <header className="header">
                    <ul className="header__nav">
                        <li className="header__navItem">Projects</li>
                        <li className="header__navItem">Skills</li>
                        <li className="header__navItem">About me</li>
                        <li className="header__navItem">CV</li>
                        <li className="header__navItem">Contact</li>
                    </ul>
                </header>
            )}
        </section>
    );
}

export default MyNavigation

