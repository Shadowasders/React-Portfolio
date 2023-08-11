import { Link } from 'react-router-dom'


export default function Nav() {
  return (
      <nav className='navbar'>
        <div id='' className='navbar-menu'>
          <div className='navbar-start'>
            <p className='navbar-item title'>Aubrey McKinney</p>
          </div>
        <div className='navbar-end'>
            <a className='navbar-item'><Link to="/">About</Link></a>
            <a className='navbar-item'><Link to="/projects">Projects</Link></a>
            <a className='navbar-item'><Link to="/contact">Contact</Link></a>
        </div>
      </div>
    </nav>
  ) 
} 
