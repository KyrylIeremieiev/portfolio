import { useState } from "react";
import doesburg from '../images/doesburgTumb.webp'
import CoH from '../images/podcast.png'

const Projects = ({ updateHome }) =>{
    let prefix1 = '';
    let prefix2 = '';
    const [project1Open, setProject1] = useState(true)
    const [project2Open, setProject2] = useState(true)
    if(project1Open == false){
        prefix1 = '>';
    }else{
        prefix1 = ''
    }
    if(project2Open == false){
        prefix2 = '>'
    }else{
        prefix2 = ''
    }
    const goToHome = () =>{
        updateHome(false);
    }

    const open = (project) =>{
        reset()
        switch(project){
            case "1":
                setProject1(false);
                break;
            case "2":
                setProject2(false);
                break;
            
        }
    }

    const reset = () =>{
        setProject1(true);
        setProject2(true);
    }
    return(
        <section className="section">
            <article className="projects navigation">
                <div className='navWrap'>
                <h2 className="projects__title title">Projects</h2>
                <ul>
                    <li>
                        <button className='nav__navButton' onClick={goToHome}>
                            Home
                        </button>
                    </li>
                    <li>
                        <button className='nav__navButton nav__project' onClick={()=>{open('1')}}>
                            {prefix1} Doesburg
                        </button>
                    </li>
                    <li>
                        <button className='nav__navButton nav__project' onClick={()=>{open('2')}}>
                            {prefix2} CoH
                        </button>
                    </li>
                </ul>
                </div>
            </article>
            {project1Open ? (
                <p className='useless'></p>
            ) : (
                
                <figure className="test">
                    {/* <figure className="project">
                    <div className="project__img">
                        <img className="project__img" src={doesburg}></img>
                        <figcaption className="project__caption">
                            <h3 className="project__title">Doesburg Coaching Loopbaanankers Form</h3>
                            <p className="project__len">Talen: <i class="fa-brands fa-square-js"></i> <i class="fa-brands fa-css3-alt"></i> <i class="fa-brands fa-sass"></i> <i class="fa-brands fa-html5"></i>
                            </p>
                        </figcaption>
                        <ul className="project__links">
                            <li className="project__link">
                                <a href='https://github.com/KyrylIeremieiev/Web-M7' target='_blank'><i class="fa-brands fa-github project__link"></i></a>
                            </li>
                            <li className="project__link">
                                <a  href='https://kyryl.dev/projects/Web-M7/public/vlba.html' target='_blank'><i class="fa-solid fa-magnifying-glass project__link"></i></a>
                            </li>
                        </ul>
                        <div className="static"></div>
                    </div>
                </figure> */}
                    <img className="project__img" src={doesburg}></img>
                    <div className="static"></div>
                </figure>
            )}

            {project2Open ? (
                <p className='useless'></p>
            ) : (
                
                <figure className="test">
                    {/* <figure className="project">
                    <div className="project__img">
                        <img className="project__img" src={doesburg}></img>
                        <figcaption className="project__caption">
                            <h3 className="project__title">Doesburg Coaching Loopbaanankers Form</h3>
                            <p className="project__len">Talen: <i class="fa-brands fa-square-js"></i> <i class="fa-brands fa-css3-alt"></i> <i class="fa-brands fa-sass"></i> <i class="fa-brands fa-html5"></i>
                            </p>
                        </figcaption>
                        <ul className="project__links">
                            <li className="project__link">
                                <a href='https://github.com/KyrylIeremieiev/Web-M7' target='_blank'><i class="fa-brands fa-github project__link"></i></a>
                            </li>
                            <li className="project__link">
                                <a  href='https://kyryl.dev/projects/Web-M7/public/vlba.html' target='_blank'><i class="fa-solid fa-magnifying-glass project__link"></i></a>
                            </li>
                        </ul>
                        <div className="static"></div>
                    </div>
                </figure> */}
                    <img className="project__img" src={CoH}></img>
                    <div className="static"></div>
                </figure>
            )}
        </section>
    )
}
export default Projects;