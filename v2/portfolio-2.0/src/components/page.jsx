import { useState } from "react";
const PageTemp = (props) =>{
    const [disc, setDisc] = useState(null);
    const [linked, setLinked] = useState(false)
    let prefix = ['','','','','','','','','','','','','','','','','','',
                  '','','','','','','','','','','','','','','','','','']
    if(disc !== null){
        prefix[disc] = <i class="fa-solid fa-arrow-right"></i>;
    }else{
        prefix = ['','','','','','','','','','','','','','','','','','',
                  '','','','','','','','','','','','','','','','','','']
    }
    if(!props.PageData.links && linked == false){
        setLinked(true)
    }
    const goToHome = () =>{
        props.updateHome(false);
    }
    const reset=()=>{
        setDisc(null)
    }


    const widget = () =>{
        for(let i = 0; i < props.PageData.headings; i++){
            return(<figure className={`test ${disc === i ? 'rendered': ""}`}>
                <h3 className="project__disc project__title" >
                    {props.PageData.headings[i]}
                </h3>
                <p className="project__disc">
                    {props.PageData.p[i]}
                </p>
            </figure>)
        }
        
    }
    console.log(props.PageData)
    return(
            <section className={`section `}>
            <img src={props.PageData.img} className={`section__background base rendered`}></img>
            <nav className='navigation'>
                <div className="navWrap">
                    <h2 className="projects__title title">{props.PageData.Page}</h2>
                    <ul className="nav">
                        <li>
                            <button className='nav__navButton' onClick={goToHome}>
                                Home
                            </button>
                        </li>
                        {props.PageData.heading.map((heading, index) => (
                        <li key={index}>
                            {linked ? (
                <button
                            className={`nav__navButton nav__project ${index === disc ? 'active' : ''}`}
                            onMouseEnter={() => {
                                setDisc(index);
                            }}
                            onMouseLeave={reset}
                            >
                            
                            {/* {prefix[index]} */} {heading}
                            </button>
            ) : (          
                            <a
                            className={`nav__navButton nav__project ${index === disc ? 'active' : ''}`}
                            onMouseEnter={() => {
                                setDisc(index);
                            }}
                            onMouseLeave={reset}
                            href={`
                                ${linked ? '': props.PageData.links[index]}
                                
                            `}
                            target="_blank"
                            >
                            
                            {heading}
                            </a>
                            )}
                        </li>
                        ))}
                    </ul>
                    </div>
                    </nav>
                    {props.PageData.heading.map((heading, index) => (
                    <figure key={index} className={`test ${disc === index ? 'rendered' : ''}`}>
                        <h3 className="project__disc project__title">{heading}</h3>
                        <div className="project__disc" dangerouslySetInnerHTML={{ __html: props.PageData.p[index] }}></div>
                    </figure>
                    ))}
            </section>
    )
}

export default PageTemp;