import { useState } from "react";
/* import doesburg from '../images/doesburgTumb.webp'
import CoH from '../images/podcast.png' */
import doesburg from '../images/doesburgTumb.webp'
import CoH from '../images/podcast.webp'
import Cookie from '../images/cookieClicker.webp'
import GitStore from '../images/gitStore.webp'
import Portfolio from '../images/portV1.webp'
import Project from './project';
import ProjectImg from '../images/officePhoto.webp'
const Projects = ({ updateHome }) =>{
    const projectData = [
        {
            "Img":GitStore,
            "Title":"Git Store",
            "Text":"Een simpele webshop met de thema van github. Solo project. Gemaakt in 8 dagen",
            "Len":[
                'js',
                'html',
                'css',
                'php',
                'mysql'
            ],
            "Git":'https://github.com/KyrylIeremieiev/git-store',
            "Site":'https://kyryl.dev/projects/git-store/index.html'
        },
        {
        "Img":doesburg,
        "Title":"DoesBurg Coaching",
        "Text":"Een gezamelijke project gemaakt voor onderdeel BO M7. Gemaakt door Kyrylo Ieremieiev, Ian Schaafma en Frits Bien.",
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
        "Title":"Collection of Happiness",
        "Text":"Bekijk de samenvattingen van 'collection of happiness. Eindopdracht Prog M7, solo project",
        "Len":[
            'js',
            'html',
            'css',
            'scss'
        ],
        "Git":'https://github.com/KyrylIeremieiev/Module7-PROG-Eindopdracht',
        "Site":'https://kyryl.dev/projects/podcast/index.html'
        },
        {
            "Img":Cookie,
            "Title":"Cookie Clicker",
            "Text":"Speel Cookie Clicker! Simpel project met een save systeem dat gebruik maakt van cookies.",
            "Len":[
                'js',
                'html',
                'css',
                'scss'
            ],
            "Git":'https://github.com/KyrylIeremieiev/cookie-clicker',
            "Site":'https://kyryl.dev/projects/cookie_clicker/'
        },
        {
            "Img":Portfolio,
            "Title":"Portfolio V1",
            "Text":"Old version of my portfolio. Its nothing alike the one I use now so i thought i'd put it here. Solo project. ",
            "Len":[
                'js',
                'html',
                'css',
                'react'
            ],
            "Git":'https://github.com/KyrylIeremieiev/portfolio/tree/main/react',
            "Site":'https://kyryl.dev/v1.html'
        },
        


    ]

    const [projectOpen, setProject] = useState(true)
    const [goToProject, setProjectPage] = useState(false)
    const [currentProject, setCurrent] = useState(true)
    const goToHome = () =>{
        updateHome(false);
    }

    const open = (project) =>{
        reset()
        setProject(false)
       
    }

    const OpenProject= () =>{
        setProjectPage(true)
    }

    const reset = () =>{
        setProject(true)
        setCurrent(null);
    }
    return(
        <div className="section__wrapper">
            <img src={ProjectImg} className={`section__background base ${projectOpen ? "rendered":"useless"}`}></img>
                <img src={projectOpen ? "":projectData[currentProject].Img} className={`section__background ${projectOpen ? "useless":"rendered"}`}>
                    </img>
            {goToProject ? (
                <Project Img={projectData[currentProject].Img} closeProject={setProjectPage} Title={projectData[currentProject].Title} Disc={projectData[currentProject].Text} Len={projectData[currentProject].Len} Git={projectData[currentProject].Git} Site={projectData[currentProject].Site}></Project>
            ) : (
            <section className="section">
                <article className="projects navigation">
                
                    <nav className='navWrap'>
                    <h2 className="projects__title title">Projects</h2>
                    <ul className="nav">
                        <li>
                            <button className='nav__navButton' onClick={goToHome}>
                                Home
                            </button>
                        </li>
                        {projectData.map((heading, index) => (
                     <li>
                     <button className='nav__navButton nav__project' onMouseEnter={()=>{
                         open(index);
                         setCurrent(index);
                         }} 
                         onMouseLeave={reset}
                         onClick={()=>{
                             setCurrent(index); //needed for mobile
                             OpenProject()

                         }}>
                         {heading.Title}
                     </button>
                 </li>
                    ))}
                       
                        {/* <li>
                            <button className='nav__navButton nav__project' onMouseEnter={()=>{
                                open('2')
                                setCurrent(1);
                            }} 
                                onMouseLeave={reset} 
                                onClick={()=>{
                                    setCurrent(1);
                                    OpenProject()
                                }}>
                                CoH
                            </button>
                        </li> */}
                    </ul>
                    </nav>
                    
                </article>
                {/* <figure className={`test ${project1Open ? "":"rendered"}`}>
                    <img className="project__img" src={doesburg}></img>
                </figure>
                <figure className={`test ${project2Open ? "":"rendered"}`}>
                    <img className="project__img" src={CoH}></img>
                </figure> */}
            </section>
        )}
        </div>
    )
}
export default Projects;