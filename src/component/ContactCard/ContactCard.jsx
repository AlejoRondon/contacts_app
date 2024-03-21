import './ContactCard.scss'
import ContactCardImage from '../ContactCardImage/ContactCardImage'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faHeart, faX } from '@fortawesome/free-solid-svg-icons'
import { RedButton, GreenButton } from '../Buttons/Buttons'
import { useDispatch } from 'react-redux'
import { deleteContact, toggleFavorite } from '../../redux-TK/appInfoSlice'

function ContactCard({ contactInfo }) {
  const dispatch = useDispatch()
  const location = useLocation()

  const handleFavoriteClick = async () => {
    dispatch(toggleFavorite(contactInfo))
  }
  const handleRemoveClick = async () => {
    dispatch(deleteContact(contactInfo))
  }

  const RemoveButton = props => (
    <RedButton $font_size='0.8rem' {...props}>
      {location.pathname === '/' || location.pathname === '/favorites' ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faTrash} />}
      {location.pathname !== '/contacts' ? <span>{'   '}REMOVE</span> : ''}
    </RedButton>
  )

  const FavoriteButton = props =>
    !contactInfo.favorite ? (
      <GreenButton $font_size='0.8rem' {...props}>
        <FontAwesomeIcon icon={faHeart} />
      </GreenButton>
    ) : (
      <RedButton $font_size='0.8rem' {...props}>
        <FontAwesomeIcon icon={faX} />
        {location.pathname !== '/contacts' ? <span>{'   '}REMOVE</span> : ''}
      </RedButton>
    )
  return (
    contactInfo && (
      <article className='ContactCard'>
        <ContactCardImage className={`${contactInfo.favorite ? 'favorite' : ''}`} img_url={contactInfo.avatar}></ContactCardImage>
        <span className='fullname'>{`${contactInfo.first_name} ${contactInfo.last_name}`}</span>
        <span className='email'>{contactInfo.email}</span>
        <span className='source'>{contactInfo.source}</span>
        <hr></hr>
        <div className={`buttons-container`}>
          <FavoriteButton onClick={handleFavoriteClick}></FavoriteButton>

          {location.pathname === '/contacts' ? <RemoveButton onClick={handleRemoveClick}></RemoveButton> : ''}
        </div>
      </article>
    )
  )
}

export default ContactCard
