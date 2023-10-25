import logo from './logo.svg';
import './App.css';
import Donut from './components/donut';

function App() {
  return (
    <div className='body'>
      <div className="App">
        <section className='left'>
        <h1 className='welcome__title'>Welcome To My Portfolio</h1>
        <Donut></Donut>
        </section>
        <section className='play'>

        </section>
      </div>
    </div>
  );
}

export default App;
