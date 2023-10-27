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
                            <button className='nav__navButton' onClick={props.goToHome}>
                                Back
                            </button>
                        </li>
                        <li>
                            <button className='nav__navButton nav__project' onMouseEnter={()=>{open('1')}} onMouseLeave={resetProject}>
                                {prefix1} Discription
                            </button>
                        </li>
                    </ul>
                    </div>
                    
                </article>
                <figure className={`test ${discOpen ? "":"rendered"}`}>
                    <p className="project__disc">
                        {props.Title}
                    </p>
                </figure>
                </section>

    );
}

export default Project;