import React from 'react'
import { NavLink} from 'react-router-dom'

function Header() {
  return (
    <nav>
      <NavLink to='/'>
        Home
      </NavLink>        
      <NavLink to='/bookmarks'>Bookmarks</NavLink>
        </nav>
  )
}

export default Header
