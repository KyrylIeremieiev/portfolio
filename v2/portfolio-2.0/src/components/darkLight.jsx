const DarkLight = (props) =>{
    return(
        <section className="darkLight">
            <ul className={`socials `}>
                <li>
                    <a href="mailto:kyrylo.ieremieiev@gmail.com" className={`darkLight__btn ${props.mode === "light" ? 'light' : ''}`} target="_blank"><i class="fa-solid fa-envelope"></i></a>
                </li>
                <li>
                    <a href="https://github.com/KyrylIeremieiev" className={`darkLight__btn ${props.mode === "light" ? 'light' : ''}`} target="_blank"><i class="fa-brands fa-github"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/kyrylo-ieremieiev-7b0986291/" className={`darkLight__btn ${props.mode === "light" ? 'light' : ''}`} target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                </li>
            </ul>
            <ul className="themes">
                <li className="rotate">
                    <button className={`darkLight__btn ${props.mode === "light" ? 'light' : ''}`}
                    onClick={()=>{
                        props.setMode('dark')
                        console.log(props.mode);
                    }
                    }>
                        DARK
                    </button>
                </li>
                <li className="rotate">
                    <button className={`darkLight__btn ${props.mode === "light" ? 'light' : ''}`}
                    onClick={()=>{
                        props.setMode('light')
                    }
                        
                    }>
                        LIGHT
                    </button>
                </li>
            </ul>
        </section>
    );
}

export default DarkLight;