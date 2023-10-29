import { useState } from "react";
const PageTemp = (props) =>{
    const [disc, setDisc] = useState(null);

    let prefix = ['','','','','','','','','','','','','','','','','','',
                  '','','','','','','','','','','','','','','','','','']
    if(disc !== null){
        prefix[disc] = <i class="fa-solid fa-arrow-right"></i>;
    }else{
        prefix = ['','','','','','','','','','','','','','','','','','',
                  '','','','','','','','','','','','','','','','','','']
    }
    const goToHome = () =>{
        props.updateHome(false);
    }
    const reset=()=>{
        setDisc(null)
    }

    const widget = () =>{
        for(let i = 0; i < props.headings; i++){
            return(<figure className={`test ${disc === i ? 'rendered': ""}`}>
                <h3 className="project__disc project__title" >
                    {props.headings[i]}
                </h3>
                <p className="project__disc">
                    {props.p[i]}
                </p>
            </figure>)
        }
        
    }
    return(
            <section className="section">
            <img src={props.img} className={`section__background base rendered`}></img>
            <nav className='navigation'>
                <div className="navWrap">
                    <h2 className="projects__title title">{props.page}</h2>
                    <ul className="nav">
                        <li>
                            <button className='nav__navButton' onClick={goToHome}>
                                Home
                            </button>
                        </li>
                        {props.heading.map((heading, index) => (
                        <li key={index}>
                            <button
                            className={`nav__navButton nav__project ${index === disc ? 'active' : ''}`}
                            onMouseEnter={() => {
                                setDisc(index);
                            }}
                            onMouseLeave={reset}
                            >
                            {prefix[index]} {heading}
                            </button>
                        </li>
                        ))}
                    </ul>
                    </div>
                    </nav>
                    {props.heading.map((heading, index) => (
  <figure key={index} className={`test ${disc === index ? 'rendered' : ''}`}>
    <h3 className="project__disc project__title">{heading}</h3>
    <p className="project__disc">{props.p[index]}</p>
  </figure>
))}



            </section>
    )
}

export default PageTemp;