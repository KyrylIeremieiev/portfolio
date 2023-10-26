import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import Nav from './components/nav';
import Projects from './components/projects';
function App() {

  return (
    <div className='body'>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Sometype+Mono:wght@400;500;600&family=Ubuntu:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet"/>
      </Helmet>
      <div className="App">
        <section className='start navigation'>
          <h1 className='welcome__title title'>Kyrylo Ieremieiev</h1> 
          <Nav></Nav>
        </section>
        <section className='projects'>
           <Projects></Projects>
        </section>
      </div>
    </div>
  );
}

export default App;
