import { Link } from 'react-router-dom'
import 'bulma/css/bulma.min.css'
//impliment navbar burger, shouldnt be too hard same as LoTP See that and copy no biggie --it was harder

export default function Nav() {
  function togglebtn () {
    const navdrop = document.querySelector('.navbar-burger')
    navdrop.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = navdrop.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      navdrop.classList.toggle('is-active');
      $target.classList.toggle('is-active');
      //Change to conditional to remove class, two clicks to add the class?
  });
  }
  return (
    <section className='hero is-medium-with-navbar headerbg'>
      <div className='hero-body'>
        <nav className='navbar'>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="dtarg" onClick={togglebtn}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <div className='navbar-menu' id='dtarg'>
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
