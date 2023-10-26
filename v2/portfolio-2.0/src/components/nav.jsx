const Nav = ({ updateParentState }) => {

    const goToProjects = () =>{
        console.log("clicked")
    }
    return(
        <ul className='nav'>
            <li className='nav__navItem'>
              <button className='nav__navButton' onClick={goToProjects}>
                Projects
              </button>
            </li>
            <li className='nav__navItem'>
              <button className='nav__navButton'>
                Skills
              </button>
            </li>
            <li className='nav__navItem'>
              <button className='nav__navButton'>
                About
              </button>
            </li>
            <li className='nav__navItem'>
              <button className='nav__navButton'>
                Contact
              </button>
            </li>
          </ul>
    )
}

export default Nav;