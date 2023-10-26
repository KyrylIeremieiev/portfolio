import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import Nav from './components/nav';
import Projects from './components/projects';
import DarkLight from './components/darkLight';
import { useState } from 'react';
function App() {
  const [projectOpen, setProject] = useState(true);
  const [homeOpen, setHome] = useState(false)
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
      {homeOpen ? (
        <p className='useless'></p> // Show loading message while data is being fetched
      ) : (
          <section className='start navigation'>
            <div className='navWrap'>
              <h1 className='welcome__title title'>Kyrylo Ieremieiev</h1> 
              <Nav updateProject={updateProject}></Nav>
            </div>            
          </section>
      )}


      {projectOpen ? (
        <p className='useless'></p> // Show loading message while data is being fetched
      ) : (
          <Projects updateHome={updateHome}></Projects>
      )}

      </div>
    </div>
  );
}

export default App;
