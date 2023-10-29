const Nav = (props) => {

    const goToProjects = () =>{
        props.updateProject(false);
    }
  
    return(
        <ul className='nav'>
            <li className='nav__navItem'>
              <button className='nav__navButton' onClick={()=>{
                props.reset()
                props.setFinal(0)
                goToProjects()
              
              }}
               onMouseEnter={()=>{
                props.setPreview(false); 
                props.setCurrent(0) 
               }} 
                onMouseLeave={()=>{
                  props.setPreview(true)
                }}>
                Projects
              </button>
            </li>
            <li className='nav__navItem'>
              <button className='nav__navButton' onClick={()=>{
                props.reset()
                props.setFinal(1)
                props.setMenu(false)
              
              }}
              onMouseEnter={()=>{
                props.setPreview(false); 
                props.setCurrent(1) 
               }} 
                onMouseLeave={()=>{
                  props.setPreview(true)
                }}>
                Skills
              </button>
            </li>
            <li className='nav__navItem'>
              <button className='nav__navButton' onClick={()=>{
                props.reset()
                props.setFinal(2)
                props.setMenu(false)
              
              }}
              onMouseEnter={()=>{
                props.setPreview(false); 
                props.setCurrent(2) 
               }} 
                onMouseLeave={()=>{
                  props.setPreview(true)
                }}>
                About
              </button>
            </li>
            <li className='nav__navItem' onClick={()=>{
                props.reset()
                props.setFinal(3)
                props.setMenu(false)
              
              }}
            onMouseEnter={()=>{
              props.setPreview(false);  
              props.setCurrent(3) 
             }} 
              onMouseLeave={()=>{
                props.setPreview(true)
              }}>
              <button className='nav__navButton'>
                Contact
              </button>
            </li>
          </ul>
    )
}

export default Nav;