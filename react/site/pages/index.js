import { useEffect,useState, useRef, useCallback } from "react";
import Welcome from "./components/welcome";
import Project from "./components/project";
import AboutMe from "./components/aboutMe";
import MyExp from "./components/myExperience";
import Passion from "./components/passion";
import SearchingFor from "./components/searchingFor";
import Contact from './components/contact'
import { Helmet } from 'react-helmet';

export default function Home(){
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return(
        <div>
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet"/>
            </Helmet>
            <section className="site" style={{ fontFamily: 'Ubuntu, sans-serif'}}>
                {/* <MyNavigation onClick={scrollToElementA}></MyNavigation> */}
                <header className={`header ${scrollPosition > 60 ? 'scrolled' : ''}`}>
                    <div className="header__icon">
                      <div className="logo">Kyrylo Ieremieiev</div>
                      <div className="dot">.</div>
                    </div>
                    <ul className={`header__nav`}>
                        <a className="header__navItem" href="#home">Home</a>
                        <a className="header__navItem" href="#projects">Projects</a>
                        <a className="header__navItem" href="#about">About</a>
                        <a className="header__navItem" href="#skills">Skills</a>
                        <a className="header__navItem" href="#contact">Contact</a>
                    </ul>
                </header>
                <main>
                    <div className="front">
                    <Welcome></Welcome>
                    <div className='box'></div>
                    
                    </div>
                    <div> 
                       <Project ></Project>
                    </div>
                    <div>
                        <AboutMe></AboutMe>
                    </div>
                    <div>
                        <MyExp ></MyExp>
                    </div>
                    <Passion></Passion>
                    <div>
                    <SearchingFor></SearchingFor>
                        <Contact></Contact>
                    </div>
                    
                </main>    
            </section>
        </div>
        
    );
}
