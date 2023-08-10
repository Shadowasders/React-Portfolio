import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        </nav>
        <div><Outlet /></div>
      </>
  )
}
