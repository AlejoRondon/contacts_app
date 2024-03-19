import './ContactCard.scss'
import ContactCardImage from '../ContactCardImage/ContactCardImage'
// import generateGravatar from '../../services/gravatar'
function ContactCard({ contactInfo, page }) {
  return (
    contactInfo && (
      <article className='ContactCard'>
        <ContactCardImage className={`${contactInfo.favorite ? 'favorite' : ''}`} img_url={contactInfo.avatar}></ContactCardImage>
        <span className='fullname'>{`${contactInfo.first_name} ${contactInfo.last_name}`}</span>
        <span className='email'>{contactInfo.email}</span>
        <hr></hr>
      </article>
    )
  )
}

export default ContactCard
