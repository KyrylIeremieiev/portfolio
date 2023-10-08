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
    const welcomeRef = useRef(null);
    const projectsRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

  // Function to scroll to a specific element
  const scrollToElement = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
                        <li className="header__navItem" onClick={() => scrollToElement(welcomeRef)}>Home</li>
                        <li className="header__navItem" onClick={() => scrollToElement(projectsRef)}>Projects</li>
                        <li className="header__navItem" onClick={() => scrollToElement(aboutRef)}>About</li>
                        <li className="header__navItem" onClick={() => scrollToElement(skillsRef)}>Skills</li>
                        <li className="header__navItem" onClick={() => scrollToElement(contactRef)}>Contact</li>
                    </ul>
                </header>
                <main>
                    <div ref={welcomeRef}>
                    <Welcome></Welcome>
                    </div>
                    <div ref={projectsRef}> 
                       <Project ></Project>
                    </div>
                    <div ref={aboutRef}>
                        <AboutMe></AboutMe>
                    </div>
                    <div ref={skillsRef}>
                        <MyExp ></MyExp>
                    </div>
                    <Passion></Passion>
                    <SearchingFor></SearchingFor>
                    <div ref={contactRef}>
                        <Contact></Contact>
                    </div>
                    
                </main>    
            </section>
        </div>
        
    );
}
