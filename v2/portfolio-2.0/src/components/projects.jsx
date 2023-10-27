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
        "Title":"DoesBurg Coaching",
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
        "Title":"Collection of Happiness",
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
    const [goToProject, setProjectPage] = useState(false)
    const [currentProject, setCurrent] = useState(true)
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

    const OpenProject= () =>{
        setProjectPage(true)
    }

    const reset = () =>{
        setProject1(true);
        setProject2(true);
    }
    return(
        <div className="section__wrapper">
            {goToProject ? (
                <Project Img={projectData[currentProject].Img} goToHome={goToHome} Title={projectData[currentProject].Title} Disc={projectData[currentProject].Text} ></Project>
            ) : (
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
                            <button className='nav__navButton nav__project' onMouseEnter={()=>{
                                open('1');
                                setCurrent(0);
                                }} 
                                onMouseLeave={reset}
                                onClick={OpenProject}>
                                {prefix1} Doesburg
                            </button>
                        </li>
                        <li>
                            <button className='nav__navButton nav__project' onMouseEnter={()=>{
                                open('2')
                                setCurrent(1);
                            }} 
                                onMouseLeave={reset} 
                                onClick={OpenProject}>
                                {prefix2} CoH
                            </button>
                        </li>
                    </ul>
                    </div>
                    
                </article>
                <figure className={`test ${project1Open ? "":"rendered"}`}>
                    <img className="project__img" src={doesburg}></img>
                </figure>
                <figure className={`test ${project2Open ? "":"rendered"}`}>
                    <img className="project__img" src={CoH}></img>
                </figure>
            </section>
        )}
        </div>
    )
}
export default Projects;