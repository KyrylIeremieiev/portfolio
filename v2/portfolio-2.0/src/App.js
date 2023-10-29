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
        '<p className="project__disc">icecream</p>',
        "Mitchel played lol"
      ],
      "img":SkillsImg
    },

    {
      "Page":"About",
      "heading":[
        "Hobbies",
        "Persona"
      ],
      "p":[
        "Billy did a bad thing",
        "Mitchel played lol"
      ],
      "img":AboutImg
    },

    {
      "Page":"About",
      "heading":[
        "Phone",
        "Email",
        "Linkedin"
      ],
      "p":[
        "Billy did a bad thing",
        "Mitchel played lol",
        "Nothing can change"
      ],
      "img":ContactImg
    },
  ]

  const [projectOpen, setProject] = useState(true);
  const [skillsOpen, setSkills] = useState(true);
  const [homeOpen, setHome] = useState(false)
  const [menuPreview, setPreview] = useState(true)
  const [menuOpen, setMenu] = useState(true);
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

  const reset = () =>{
    setHome(true);
    setProject(true);
    setPreview(true);
    setSkills(true);
    setCurrent(null);
    setMenu(true)
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
      <img src={menuPreview ? "":data[currentMenu].Img} className={`section__background ${menuPreview ? "useless":"rendered"}`}/>
      <div className="static"></div>
      {homeOpen ? (
        <p className='useless'></p> // Show loading message while data is being fetched
      ) : (
          <section className='start navigation'>
            <div className='navWrap'>
              <h1 className='welcome__title title'>Kyrylo Ieremieiev</h1> 
              <Nav updateProject={updateProject} setPreview={setPreview} reset={reset} setCurrent={setCurrent} setFinal={setFinal} setMenu={setMenu}></Nav>
            </div>            
          </section>
      )}


      {projectOpen ? (
        <p className='useless'></p> // Show loading message while data is being fetched
      ) : (
          <Projects updateHome={updateHome}></Projects>
      )}

      {menuOpen ? (
        <p className='useless'></p> // Show loading message while data is being fetched
      ) : (
          
          <PageTemp heading={PageData[finalMenu].heading} p={PageData[finalMenu].p} img={PageData[finalMenu].img} page={PageData[finalMenu].Page} updateHome={updateHome}>{/* <Skills updateHome={updateHome}></Skills> */}</PageTemp>
      )}

      

      </div>
    </div>
  );
}

export default App;
