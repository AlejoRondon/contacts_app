import { NavLink } from 'react-router-dom'
import './TopHeader.scss'
function TopHeader() {
  return (
    // <header className='TopHeader'>
    <nav className='TopHeader'>
      <div className='navlink-wrapper'>
        <NavLink to='/'>Overview</NavLink>
      </div>
      <div className='navlink-wrapper'>
        <NavLink to='/favorites'>Favorites</NavLink>
      </div>
      <div className='navlink-wrapper'>
        <NavLink to='/contacts'>Contacts</NavLink>
      </div>
    </nav>
    // </header>
  )
}

export default TopHeader
