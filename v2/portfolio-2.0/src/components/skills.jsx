import { useState } from "react";
import SkillsImg from '../images/skills.jpg';
const Skills = ({updateHome}) =>{
    const [frontEnd, setFrontEnd] = useState(true);
    const [backEnd, setBackEnd] = useState(true);
    let prefix1 = '';
    let prefix2 = '';
    if(frontEnd == false){
        prefix1 = <i class="fa-solid fa-arrow-right"></i>;
    }else{
        prefix1 = ''
    }
    if(backEnd == false){
        prefix2 = <i class="fa-solid fa-arrow-right"></i>
    }else{
        prefix2 = ''
    }
    const goToHome = () =>{
        updateHome(false);
    }
    const reset=()=>{
        setFrontEnd(true)
        setBackEnd(true)
    }
    return(
            <section className="section">
            <img src={SkillsImg} className={`section__background base rendered`}></img>
            <nav className='navigation'>
                <div className="navWrap">
                    <h2 className="projects__title title">Projects</h2>
                    <ul className="nav">
                        <li>
                            <button className='nav__navButton' onClick={goToHome}>
                                Home
                            </button>
                        </li>
                        <li>
                            <button className='nav__navButton nav__project' onMouseEnter={()=>{
                                    setFrontEnd(false);
                                }} 
                                onMouseLeave={reset}>
                                {prefix1} Front-End
                            </button>
                        </li>
                        <li>
                            <button className='nav__navButton nav__project' onMouseEnter={()=>{
                                setBackEnd(false);
                            }} 
                                onMouseLeave={reset}>
                                {prefix2} Back-End
                            </button>
                        </li>
                    </ul>
                    </div>
                    </nav>
                    <figure className={`test ${frontEnd ? "":"rendered"}`}>
                        <h3 className="project__disc project__title" >
                            baller
                        </h3>
                        <p className="project__disc">
                            baller
                        </p>
                </figure>
                <figure className={`test ${backEnd ? "":"rendered"}`}>
                        <h3 className="project__disc project__title" >
                            opp
                        </h3>
                        <p className="project__disc">
                            opp
                        </p>
                </figure>
            </section>
    )
}

export default Skills;