import './ContactsPage.scss'
import { useState } from 'react'
import HeadingSection from '../../component/HeadingSection/HeadingSection'
import Spacer from '../../component/Spacer/Spacer'
import CardsContainer from '../../component/CardsContainer/CardsContainer'
import ContactCard from '../../component/ContactCard/ContactCard'
import ContactsPaginator from '../../component/ContactsPaginator/ContactsPaginator'

function ContactsPage() {
  const [contactsToShow, setContactToShow] = useState([])

  const handlePageChange = page_of_contacts => {
    console.log('Page of contacts updated')
    setContactToShow(page_of_contacts)
  }

  return (
    <section className='OverviewPage content-wrapper'>
      <Spacer />
      <HeadingSection>Contact List</HeadingSection>
      <ContactsPaginator onPageChange={handlePageChange} />
      <CardsContainer>
        {contactsToShow.map((contact, index) => (
          <ContactCard key={index} contactInfo={contact} />
        ))}
      </CardsContainer>
    </section>
  )
}

export default ContactsPage
