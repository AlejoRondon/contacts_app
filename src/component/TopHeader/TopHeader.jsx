import './TopHeader.scss'
import LogoIcon from '../LogoIcon/LogoIcon'
import Navbar from '../Navbar/Navbar'

function TopHeader({ onNewContactBtnClick }) {
  return (
    <header className='TopHeader'>
      <div className='content-wrapper'>
        <LogoIcon></LogoIcon>
        <Navbar onNewContactBtnClick={onNewContactBtnClick}></Navbar>
      </div>
    </header>
  )
}

export default TopHeader
