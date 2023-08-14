import { Link } from 'react-router-dom'
import 'bulma/css/bulma.min.css'
import './burger'
//impliment navbar burger, shouldnt be too hard same as LoTP See that and copy no biggie --it was harder

export default function Nav() {
  return (
    <section className='hero is-medium-with-navbar headerbg'>
      <div className='hero-body'>
        <nav className='navbar'>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="dtarg">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <div className='navbar-menu dtarg'>
            <div id='navbar' className='navbar-start'>
              <p className='navbar-item name title has-text-white'>Aubrey McKinney</p>
            </div>
            <div className='navbar-end'>
              <a className='navbar-item'><Link to="/">About</Link></a>
              <a className='navbar-item'><Link to="/projects">Projects</Link></a>
              <a className='navbar-item'><Link to="/contact">Contact</Link></a>
              <a className='navbar-item'><Link to="/resume">Resume</Link></a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
} 
