import './TopHeader.scss'
import LogoIcon from '../LogoIcon/LogoIcon'
import Navbar from '../Navbar/Navbar'

function TopHeader() {
  return (
    <header className='TopHeader'>
      <div className='content-wrapper'>
        <LogoIcon></LogoIcon>
        <Navbar></Navbar>
      </div>
    </header>
  )
}

export default TopHeader
