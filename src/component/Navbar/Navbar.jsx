import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar({ onNewContactBtnClick }) {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  const handleClickNavLink = () => {
    toggleNav()
  }
  return (
    <section className='Navbar'>
      <nav className={`${showNav ? 'active' : ''}`}>
        <NavLink onClick={handleClickNavLink} to='/'>
          Overview
        </NavLink>
        <NavLink onClick={handleClickNavLink} to='/contacts'>
          Contacts
        </NavLink>
        <NavLink onClick={handleClickNavLink} to='/favorites'>
          Favorites
        </NavLink>
        <NavLink onClick={onNewContactBtnClick}>+ New Contact</NavLink>
      </nav>

      <button className={`toggle-btn ${showNav ? 'active' : ''}`} onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </section>
  )
}

export default Navbar
