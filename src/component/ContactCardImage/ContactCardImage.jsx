import './ContactCardImage.scss'
function ContactCardImage({ img_url, className }) {
  return <img className={`ContactCardImage  ${className ? className : ''}`} src={`${img_url ? img_url : ''}`} alt='' />
}

export default ContactCardImage
