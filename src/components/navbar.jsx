import { Link } from 'react-router-dom'
//figure out why hero isnt working? Rewrite enitre thing? need to be medium size
//figure out why link colors aren't changing, they should not be blue
//impliment navbar burger, shouldnt be too hard same as LoTP See that and copy no biggie

export default function Nav() {
  return (
    <section className='hero is-large headerbg'>
      <div className='hero-head'>
      <nav className='navbar'>
        <div id='' className='navbar-menu'>
          <div className='navbar-start'>
            <p className='navbar-item title has-text-white'>Aubrey McKinney</p>
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
