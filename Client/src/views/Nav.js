import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {

  return (
    <div className='nav-container'>
        <ul className='nav-list'>
            <NavLink to='/'><li><button className='nav-item' >Home</button></li></NavLink>
            <h1>IP Database Search</h1>
            <NavLink to='/new'><li><button className='nav-item' >New</button></li></NavLink>
        </ul>
    </div>
  )
}

export default Nav