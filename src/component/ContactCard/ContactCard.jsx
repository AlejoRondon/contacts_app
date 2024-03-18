import './ContactCard.scss'
import ContactCardImage from '../ContactCardImage/ContactCardImage'
function ContactCard({ contactInfo }) {
  return (
    contactInfo && (
      <article className='ContactCard'>
        <ContactCardImage className='favorite' img_url={contactInfo.avatar}></ContactCardImage>
        <span className='fullname'>{`${contactInfo.first_name} ${contactInfo.last_name}`}</span>
        <span className='email'>{contactInfo.email}</span>
        <hr></hr>
      </article>
    )
  )
}

export default ContactCard
