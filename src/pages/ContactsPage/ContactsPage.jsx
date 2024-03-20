import './ContactsPage.scss'
import { useState } from 'react'
import HeadingSection from '../../component/HeadingSection/HeadingSection'
import Spacer from '../../component/Spacer/Spacer'
import CardsContainer from '../../component/CardsContainer/CardsContainer'
import ContactCard from '../../component/ContactCard/ContactCard'
import ContactsPaginator from '../../component/ContactsPaginator/ContactsPaginator'
import { useSelector, useDispatch } from 'react-redux'

function ContactsPage() {
  const contacts = useSelector(state => state.app_info.contacts)
  const settings = useSelector(state => state.app_info.settings)
  const [contactsToShow, setContactToShow] = useState([])

  const handlePageChange = page_of_contacts => {
    console.log('contactsToShow updated')
    setContactToShow(page_of_contacts)
  }

  return (
    <section className='OverviewPage content-wrapper'>
      <Spacer />
      <HeadingSection>Contact List</HeadingSection>
      {contacts && <ContactsPaginator contacts={contacts} contactsPerPage={settings.max_contacts_per_page} onPageChange={handlePageChange} />}
      <CardsContainer>
        {contactsToShow.map((contact, index) => (
          <ContactCard key={index} contactInfo={contact} />
        ))}
      </CardsContainer>
    </section>
  )
}

export default ContactsPage
