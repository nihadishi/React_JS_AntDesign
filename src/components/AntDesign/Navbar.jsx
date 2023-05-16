import { Link } from 'react-router-dom';

import React from 'react'
import { NavLink } from 'reactstrap'
import Tables from './Tables'

const Navbar = () => {
  return (<>
  <NavLink><Link to="/tables"  >Table</Link></NavLink>
    <NavLink><Link to='/forms' >Forms</Link></NavLink>
    </>
  )
}

export default Navbar