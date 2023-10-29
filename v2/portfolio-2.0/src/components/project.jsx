import { useState } from "react";

const Project = (props) =>{
    let prefix1 = '';
    let prefix2 = '';
    const [discOpen, setDisc] = useState(true)
    if(discOpen == false){
        prefix1 = <i class="fa-solid fa-arrow-right"></i>;
    }else{
        prefix1 = ''
    }
    const open=(value)=>{
        switch (value){
            case '1':
                resetProject()
                setDisc(false)
                break;
        }
    }

    const resetProject=()=>{
        setDisc(true)
    }
    return(
        <section className="section">
                    <img src={props.Img} className='section__background'>
                    </img>
                    <article className="projects navigation">
                    <div className='navWrap'>
                    <h2 className="projects__title title">Projects</h2>
                    <ul>
                        <li>
                            <button className='nav__navButton' onClick={()=>{
                                props.closeProject(false)
                            }}>
                                Back
                            </button>
                        </li>
                        <li>
                            <button className='nav__navButton nav__project' onMouseEnter={()=>{open('1')}} onMouseLeave={resetProject}>
                                {prefix1} Discription
                            </button>
                        </li>
                        <li>
                            <a className="nav__navButton link" href={props.Git} target="_blank"><i class="fa-brands fa-github"></i></a> <a className="nav__navButton link" href={props.Site} target="_blank"><i class="fa-solid fa-magnifying-glass"></i></a>
                        </li>
                    </ul>
                    </div>
                    
                </article>
                <figure className={`test ${discOpen ? "":"rendered"}`}>
                    <h3 className="project__disc project__title" >
                        {props.Title}
                    </h3>
                    <p className="project__disc">
                        {props.Disc}
                    </p>
                </figure>
                </section>

    );
}

export default Project;