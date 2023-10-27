import { useState } from "react";
/* import doesburg from '../images/doesburgTumb.webp'
import CoH from '../images/podcast.png' */
import doesburg from '../images/bjj.jpg'
import CoH from '../images/coding.jpg'
import Project from './project';
const Projects = ({ updateHome }) =>{
    const projectData = [
        {
        "Img":doesburg,
        "title":"DoesBurg Coaching",
        "Text":"",
        "Len":[
            'js',
            'html',
            'css',
            'scss'
        ],
        "Git":'https://github.com/KyrylIeremieiev/Web-M7',
        "Site":'https://kyryl.dev/projects/Web-M7/public/vlba.html'
        },

        {
        "Img":CoH,
        "title":"Collection of Happiness",
        "Text":"",
        "Len":[
            'js',
            'html',
            'css',
            'scss'
        ],
        "Git":'https://github.com/KyrylIeremieiev/Web-M7',
        "Site":'https://kyryl.dev/projects/Web-M7/public/vlba.html'
        }
    ]

    let prefix1 = '';
    let prefix2 = '';
    const [project1Open, setProject1] = useState(true)
    const [project2Open, setProject2] = useState(true)
    const [goToProject1, setProjectPage1] = useState(true)
    const [goToProject2, setProjectPage2] = useState(true)
    if(project1Open == false){
        prefix1 = <i class="fa-solid fa-arrow-right"></i>;
    }else{
        prefix1 = ''
    }
    if(project2Open == false){
        prefix2 = <i class="fa-solid fa-arrow-right"></i>
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
                        <button className='nav__navButton nav__project' onMouseEnter={()=>{open('1')}} onMouseLeave={reset}>
                            {prefix1} Doesburg
                        </button>
                    </li>
                    <li>
                        <button className='nav__navButton nav__project' onMouseEnter={()=>{open('2')}} onMouseLeave={reset}>
                            {prefix2} CoH
                        </button>
                    </li>
                </ul>
                </div>
            </article>
            {project1Open ? (
                <p className='useless'></p>
            ) : (
                
                <section className="test">
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
                </section>
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
                </figure>
            )}
        </section>
    )
}
export default Projects;