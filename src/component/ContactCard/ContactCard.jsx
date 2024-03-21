import './ContactCard.scss'
import ContactCardImage from '../ContactCardImage/ContactCardImage'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faHeart, faX } from '@fortawesome/free-solid-svg-icons'
import { RedButton, GreenButton } from '../Buttons/Buttons'
import { useDispatch } from 'react-redux'
import { deleteContact, toggleFavorite } from '../../redux/appInfoSlice'
import { updateContactDB, deleteContactDB } from '../../services/json-server/db_services'

function ContactCard({ contactInfo }) {
  const dispatch = useDispatch()
  const location = useLocation()

  const handleFavoriteClick = async (e, id) => {
    console.log('favorite toggled', id)
    dispatch(toggleFavorite({ id }))
    if (contactInfo.source === 'json_server') updateContactDB(contactInfo.id, { ...contactInfo, favorite: !contactInfo.favorite })
  }
  const handleRemoveClick = async (e, id) => {
    console.log('Remove ', id)
    dispatch(deleteContact(id))
    if (contactInfo.source === 'json_server') deleteContactDB(contactInfo.id)
  }

  const RemoveButton = props => (
    <RedButton font_size='0.8rem' {...props}>
      {location.pathname === '/' || location.pathname === '/favorites' ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faTrash} />}
      {location.pathname !== '/contacts' ? <span>{'   '}REMOVE</span> : ''}
    </RedButton>
  )

  const FavoriteButton = props =>
    !contactInfo.favorite ? (
      <GreenButton font_size='0.8rem' {...props}>
        <FontAwesomeIcon icon={faHeart} />
      </GreenButton>
    ) : (
      <RedButton font_size='0.8rem' {...props}>
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
        <hr></hr>
        <div className={`buttons-container`}>
          <FavoriteButton
            onClick={e => {
              handleFavoriteClick(e, contactInfo.id)
            }}></FavoriteButton>

          {location.pathname === '/contacts' ? (
            <RemoveButton
              onClick={e => {
                handleRemoveClick(e, contactInfo.id)
              }}></RemoveButton>
          ) : (
            ''
          )}
        </div>
      </article>
    )
  )
}

export default ContactCard
