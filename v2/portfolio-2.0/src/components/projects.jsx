import { useState } from "react";
import doesburg from '../images/doesburgTumb.webp'

const Projects = ({ updateHome }) =>{
    const [project1Open, setProject1] = useState(true)
    const goToHome = () =>{
        updateHome(false);
    }
    const project1 = () =>{
        setProject1(false)
    }
    return(
        <section className="section">
            <article className="projects navigation">
                <h2 className="projects__title title">Projects</h2>
                <ul>
                    <li>
                        <button className='nav__navButton' onClick={goToHome}>
                            Home
                        </button>
                    </li>
                    <li>
                        <button className='nav__navButton' onClick={project1}>
                            Doesburg
                        </button>
                    </li>
                </ul>
            </article>
            {project1Open ? (
                <p className='useless'></p>
            ) : (
                <figure className="project">
                    <img className="project__img" src={doesburg}></img>
                    <figcaption className="project__caption"></figcaption>
                    <ul className="project__links">
                        <li className="project__link">
                            <a href="#"><i class="fa-brands fa-github project__link"></i></a>
                        </li>
                        <li className="project__link">
                            <a href="#"><i class="fa-solid fa-magnifying-glass project__link"></i></a>
                        </li>
                    </ul>
                </figure>
            )}
        </section>
    )
}
export default Projects;