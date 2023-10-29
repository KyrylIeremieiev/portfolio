import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import Nav from './components/nav';
import Projects from './components/projects';
import DarkLight from './components/darkLight';
import ProjectImg from './images/officePhoto.jpg';
import SkillsImg from './images/skills.jpg';
import AboutImg from './images/about.jpg'
import ContactImg from './images/contact.jpg'
import { useState } from 'react';
import Skills from './components/skills';
import PageTemp from './components/page';
function App() {
  const data= [
    {
      "Img":ProjectImg
    },
    {
      "Img":SkillsImg
    },
    {
      "Img":AboutImg
    },
    {
      "Img":ContactImg
    }
  ]

  const PageData = [
    {

    },
    {
      "Page":"Skills",
      "heading":[
        "Front-End",
        "Back-End"
      ],
      "p":[
        "Billy did a bad thing",
        "Mitchel played lol"
      ],
      "img":SkillsImg
    }
  ]

  const [projectOpen, setProject] = useState(true);
  const [skillsOpen, setSkills] = useState(true);
  const [homeOpen, setHome] = useState(false)
  const [menuOpen, setMenu] = useState(true)
  const [currentMenu, setCurrent] = useState(null)
  const [finalMenu, setFinal] = useState(null)
  const updateHome = (value) =>{
    reset();
    setHome(value);
  }
  const updateProject = (value) =>{
    reset()
    setProject(value);
  }
  const updateSkills = (value) =>{
    reset()
    setSkills(value);
  }

  const reset = () =>{
    setHome(true);
    setProject(true);
    setMenu(true);
    setSkills(true);
    setCurrent(null);
  }
  return (
    <div className='body'>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Sometype+Mono:wght@400;500;600&family=Ubuntu:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/1a0fbdd901.js" crossorigin="anonymous"></script>
      </Helmet>
      <DarkLight></DarkLight>
      <div className={'App'}>
      <img src={menuOpen ? "":data[currentMenu].Img} className={`section__background ${menuOpen ? "useless":"rendered"}`}/>
      <div className="static"></div>
      {homeOpen ? (
        <p className='useless'></p> // Show loading message while data is being fetched
      ) : (
          <section className='start navigation'>
            <div className='navWrap'>
              <h1 className='welcome__title title'>Kyrylo Ieremieiev</h1> 
              <Nav updateProject={updateProject} setMenu={setMenu} reset={reset} setCurrent={setCurrent} updateSkills={updateSkills} setFinal={setFinal}></Nav>
            </div>            
          </section>
      )}


      {projectOpen ? (
        <p className='useless'></p> // Show loading message while data is being fetched
      ) : (
          <Projects updateHome={updateHome}></Projects>
      )}

      {skillsOpen ? (
        <p className='useless'></p> // Show loading message while data is being fetched
      ) : (
          
          <PageTemp heading={PageData[finalMenu].heading} p={PageData[finalMenu].p} img={PageData[finalMenu].img} page={PageData[finalMenu].Page} updateHome={updateHome}>{/* <Skills updateHome={updateHome}></Skills> */}</PageTemp>
      )}

      

      </div>
    </div>
  );
}

export default App;
