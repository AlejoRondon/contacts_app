import './TopHeader.scss'
import LogoIcon from '../LogoIcon/LogoIcon'
import Navbar from '../Navbar/Navbar'
import StyledButton from '../Buttons/Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function TopHeader({ onNewContactBtnClick }) {
  return (
    <header className='TopHeader'>
      <div className='content-wrapper'>
        <LogoIcon></LogoIcon>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%', gap: '1rem' }}>
          <Navbar onNewContactBtnClick={onNewContactBtnClick}></Navbar>
          <StyledButton onClick={onNewContactBtnClick} background_color={'#C1D72F'}>
            <FontAwesomeIcon icon={faPlus} /> New
          </StyledButton>
        </div>
      </div>
    </header>
  )
}

export default TopHeader
