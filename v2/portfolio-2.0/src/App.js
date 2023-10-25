import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import BlackRectangle from './components/rectangle';
import WhiteRectangle from './components/rectangle';
import SpinningPlanet from './components/rectangle';


function App() {
  return (
    <div className='body'>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Sometype+Mono:wght@400;500;600&family=Ubuntu:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet"/>
      </Helmet>
      <div className="App">
        <section className='left'>
          <h1 className='welcome__title'>Kyrylo Ieremieiev</h1>
          <ul className='nav'>
            <li className='nav__navItem'>
              <button className='nav__navButton'>
                Projects
              </button>
            </li>
            <li className='nav__navItem'>
              <button className='nav__navButton'>
                Skills
              </button>
            </li>
            <li className='nav__navItem'>
              <button className='nav__navButton'>
                About
              </button>
            </li>
            <li className='nav__navItem'>
              <button className='nav__navButton'>
                Contact
              </button>
            </li>
          </ul>
        </section>

        <WhiteRectangle></WhiteRectangle>
        <section className='play'>

        </section>
      </div>
    </div>
  );
}

export default App;
