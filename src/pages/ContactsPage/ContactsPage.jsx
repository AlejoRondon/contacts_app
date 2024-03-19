import React, { useState } from 'react'
import './ContactsPage.scss'
import { useContactsContext } from '../../context/ContactsProvider'
import HeadingSection from '../../component/HeadingSection/HeadingSection'
import Spacer from '../../component/Spacer/Spacer'
import CardsContainer from '../../component/CardsContainer/CardsContainer'
import ContactCard from '../../component/ContactCard/ContactCard'
import ContactsPaginator from '../../component/ContactsPaginator/ContactsPaginator'

function ContactsPage() {
  const { state } = useContactsContext()
  const [contactsToShow, setContactToShow] = useState([])

  const handlePageChange = page_of_contacts => {
    console.log('contactsToShow updated')
    setContactToShow(page_of_contacts)
  }

  return (
    <section className='OverviewPage content-wrapper'>
      <Spacer />
      <HeadingSection>Contact List</HeadingSection>
      {state.contacts && <ContactsPaginator contacts={state.contacts} contactsPerPage={state.settings.max_contacts_per_page} onPageChange={handlePageChange} />}
      <CardsContainer>
        {contactsToShow.map((contact, index) => (
          <ContactCard key={index} contactInfo={contact} />
        ))}
      </CardsContainer>
    </section>
  )
}

export default ContactsPage
