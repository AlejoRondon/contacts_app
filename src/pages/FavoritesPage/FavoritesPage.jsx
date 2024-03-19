import './FavoritesPage.scss'
import { useContactsContext } from '../../context/ContactsProvider'
import HeadingSection from '../../component/HeadingSection/HeadingSection'
import Spacer from '../../component/Spacer/Spacer'
import CardsContainer from '../../component/CardsContainer/CardsContainer'
import ContactCard from '../../component/ContactCard/ContactCard'
import ContactsPaginator from '../../component/ContactsPaginator/ContactsPaginator'
import { useState } from 'react'

function FavoritesPage() {
  const { state, dispatch } = useContactsContext()
  const [contactsToShow, setContactToShow] = useState([])

  const handlePageChange = page_of_contacts => {
    console.log('contactsToShow updated')
    setContactToShow(page_of_contacts)
  }

  return (
    <section className='OverviewPage content-wrapper'>
      <Spacer />
      <HeadingSection>Favorites</HeadingSection>
      {state.contacts && (
        <ContactsPaginator
          contacts={state.contacts.filter(e => {
            return e.favorite === true
          })}
          contactsPerPage={state.settings.max_contacts_per_page}
          onPageChange={handlePageChange}
        />
      )}
      <CardsContainer>
        {contactsToShow.map((contact, index) => (
          <ContactCard key={index} contactInfo={contact} />
        ))}
      </CardsContainer>
    </section>
  )
}

export default FavoritesPage
