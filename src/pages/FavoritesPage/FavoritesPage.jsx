import './FavoritesPage.scss'
import HeadingSection from '../../component/HeadingSection/HeadingSection'
import Spacer from '../../component/Spacer/Spacer'
import CardsContainer from '../../component/CardsContainer/CardsContainer'
import ContactCard from '../../component/ContactCard/ContactCard'
import ContactsPaginator from '../../component/ContactsPaginator/ContactsPaginator'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function FavoritesPage() {
  const [contactsToShow, setContactToShow] = useState([])
  const contacts = useSelector(state => state.app_info.contacts)
  const settings = useSelector(state => state.app_info.settings)

  const handlePageChange = page_of_contacts => {
    console.log('contactsToShow updated')
    setContactToShow(page_of_contacts)
  }

  return (
    <section className='OverviewPage content-wrapper'>
      <Spacer />
      <HeadingSection>Favorites</HeadingSection>
      {contacts && <ContactsPaginator onlyFavorites onPageChange={handlePageChange} />}
      <CardsContainer>
        {contactsToShow.map((contact, index) => (
          <ContactCard key={index} contactInfo={contact} />
        ))}
      </CardsContainer>
    </section>
  )
}

export default FavoritesPage
