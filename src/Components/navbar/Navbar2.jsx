import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar2 = () => {
  return (
    
       <div className='nav-link'>
        <NavLink className="nav-bar" to="/" >Home</NavLink>
        <NavLink className="nav-bar" to="/Todo-app" >TODO APP</NavLink>
        <NavLink className="nav-bar" to="Forms">FORM HAN</NavLink>
        <NavLink className="nav-bar" to="Jsp-cards">PROPS EXAMPLE</NavLink>
        <NavLink className="nav-bar" to="Accordion">ACCORDION</NavLink>
        <NavLink className="nav-bar" to="States">STATE EXAMPLE</NavLink>
        <NavLink className="nav-bar" to="para">PRAGRAPH</NavLink>
        <NavLink className="nav-bar" to="Compp1">PROP DRILLINGG</NavLink>
        
       </div>

  )
}

export default Navbar2