import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import Nav from './components/nav';
import Projects from './components/projects';
import DarkLight from './components/darkLight';
import ProjectImg from './images/officePhoto.webp';
import SkillsImg from './images/codingStockImg.webp';
import AboutImg from './images/about.webp'
import ContactImg from './images/contact.webp'
import { useState } from 'react';
import PageTemp from './components/page';

import Css from './images/CSS-3-01.svg'
import Html from './images/HTML-5-logo-vector-01.svg'
import Mysql from './images/MySQL-01.svg'
import Php from './images/PHP-01.svg'
import Py from './images/Python-01.svg'
import ReactImg from './images/React-01.svg'
import Sass from './images/Sass-01.svg'
import Js from './images/JS.svg'
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

  const FrontEnd = [Css, Html, ReactImg, Sass, Js];
  const BackEnd = [Mysql, Php, Py];

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
        `<ul class="imgList">
          <li class="skills__img">
            <img src="${Html}"></img>
          </li>
          <li class="skills__img">
            <img src="${Css}"></img>
          </li>
          <li class="skills__img">
            <img src="${Sass}"></img>
          </li>
          <li class="skills__img">
            <img src="${ReactImg}"></img>
          </li>
          <li class="skills__img">
            <img src="${Js}"></img>
          </li>
        <ul>`,

        `<ul class="imgList">
          <li class="skills__img">
            <img src="${Mysql}"></img>
          </li>
          <li class="skills__img">
            <img src="${Php}"></img>
          </li>
          <li class="skills__img">
            <img src="${Py}"></img>
          </li>
        <ul>`
      ],
      "img":SkillsImg,
      "links":false
    },

    {
      "Page":"About",
      "heading":[
        "About Me",
        "Hobbies"
      ],
      "p":[
        "<p class='about'>Hallo, mijn naam is Kyryl Ieremieiev. Ik ben 18 jaar oud en ik woon in Hoofddorp. Ik ben in 2022 begonnen aan code toen ik bij Media College Amsterdam Software development begon te studeren. Sindsdien is code schrijven een passie van mij geworden. Ik ben een grote fan van het leren van nieuwe dingen en hoop in de toekomst aan grote projecten mee te doen.</p>",
        "<div className='passion__wrapper'><article className='passion__card coding'><h3 className='passion__cardTitle'>Coding/Programming</h3><p className='passion__dis'>Ik hou van code schrijven, je leert elke dag iets nieuws!</p></article><article className='passion__card bjj'><h3 className='passion__titleTitle'>Brazilian Jiu-Jutsu</h3><p className='passion__dis'>Voor een fullcontactsport is het extreem veilig. Bovendien leer je elke les die je bijwoont iets nieuws!</p></article><article className='passion__card poe'><h3 className='passion__titleTitle'>RPG's</h3><p className='passion__dis'>Wanneer ik wat vrije tijd heb, speel ik games. Vooral rpg's</p></article></div>"
      ],
      "img":AboutImg,
      "links":false
    },

    {
      "Page":"Contact",
      "heading":[
        "kyrylo.ieremieiev@gmail.com",
        "0616604351",
        "GitHub",
        "Linkedin"
      ],
      "p":[
        "Click send me an email me",
        "Click to dial",
        "Click to go to GitHub",
        "Click to go to linkedin"
      ],
      "img":ContactImg,
      "links":[
        "mailto:kyrylo.ieremieiev@gmail.com",
        "dialto:0616604351",
        "https://github.com/KyrylIeremieiev",
        "https://www.linkedin.com/in/kyrylo-ieremieiev-7b0986291/"
      ]
    },
  ]

  const [mode, setMode] = useState('dark');
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
  console.log(mode);
  return (
    <div className={`body ${mode === "light" ? 'light' : ''}`}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Sometype+Mono:wght@400;500;600&family=Ubuntu:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/1a0fbdd901.js" crossorigin="anonymous"></script>
      </Helmet>
      <DarkLight setMode={setMode} mode={mode}></DarkLight>
      <div className={`App ${mode === "light" ? 'lightBorder lightPattern' : ''}`}>
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
          
          <PageTemp PageData={PageData[finalMenu]} updateHome={updateHome}></PageTemp>
      )}

      

      </div>
    </div>
  );
}

export default App;
