import { NavLink } from 'react-router-dom'
import './TopHeader.scss'
import LogoIcon from '../LogoIcon/LogoIcon'
function TopHeader() {
  return (
    <header className='TopHeader'>
      <LogoIcon></LogoIcon>
      <nav>
        <NavLink to='/'>Overview</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
        <NavLink to='/contacts'>Contacts</NavLink>
      </nav>
    </header>
  )
}

export default TopHeader
