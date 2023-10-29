const Nav = (props) => {

    const goToProjects = () =>{
        props.updateProject(false);
    }
    const goToSkills = () =>{
      props.updateSkills(false);
    }
    return(
        <ul className='nav'>
            <li className='nav__navItem'>
              <button className='nav__navButton' onClick={()=>{
                props.setFinal(0)
                goToProjects()
              
              }}
               onMouseEnter={()=>{
                props.setMenu(true)
                props.setMenu(false); 
                props.setCurrent(0) 
               }} 
                onMouseLeave={()=>{
                  props.setMenu(true)
                }}>
                Projects
              </button>
            </li>
            <li className='nav__navItem'>
              <button className='nav__navButton' onClick={()=>{
                props.setFinal(1)
                goToSkills()
              
              }}
              onMouseEnter={()=>{
                props.setMenu(false); 
                props.setCurrent(1) 
               }} 
                onMouseLeave={()=>{
                  props.setMenu(true)
                }}>
                Skills
              </button>
            </li>
            <li className='nav__navItem'>
              <button className='nav__navButton'
              onMouseEnter={()=>{
                props.setMenu(false); 
                props.setCurrent(2) 
               }} 
                onMouseLeave={()=>{
                  props.setMenu(true)
                }}>
                About
              </button>
            </li>
            <li className='nav__navItem'
            onMouseEnter={()=>{
              props.setMenu(false); 
              props.setCurrent(3) 
             }} 
              onMouseLeave={()=>{
                props.setMenu(true)
              }}>
              <button className='nav__navButton'>
                Contact
              </button>
            </li>
          </ul>
    )
}

export default Nav;