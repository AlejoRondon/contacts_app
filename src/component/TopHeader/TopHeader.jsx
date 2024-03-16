import './TopHeader.scss'
import LogoIcon from '../LogoIcon/LogoIcon'
import Navbar from '../Navbar/Navbar'

function TopHeader() {
  return (
    <header className='TopHeader'>
      <LogoIcon></LogoIcon>
      <Navbar></Navbar>
    </header>
  )
}

export default TopHeader
