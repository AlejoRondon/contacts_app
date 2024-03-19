import './OverviewPage.scss'
import { useContactsContext } from '../../context/ContactsProvider'
import HeadingSection from '../../component/HeadingSection/HeadingSection'
import Spacer from '../../component/Spacer/Spacer'
import CardsContainer from '../../component/CardsContainer/CardsContainer'
import ContactCard from '../../component/ContactCard/ContactCard'
import { useState, useEffect } from 'react'

function OverviewPage() {
  const { state, dispatch } = useContactsContext()
  const { favorites, setFavorites } = useState()
  // max_favorites_in_overview: 6,
  // max_contacts_in_overview: 12,
  // max_contact_per_page: 12,
  return (
    <section className='OverviewPage content-wrapper'>
      <Spacer />
      <HeadingSection>Favorites</HeadingSection>
      <CardsContainer>
        {state.contacts
          .filter(e => {
            return e.favorite === true
          })
          .slice(0, state.settings.max_favorites_in_overview)
          .map((e, i) => {
            return <ContactCard contactInfo={e} key={i}></ContactCard>
          })}
      </CardsContainer>
      {/* <Spacer /> */}
      <HeadingSection>Contact List</HeadingSection>
      <CardsContainer>
        {state.contacts
          .filter(e => {
            return e.favorite === false
          })
          .shuffle()
          .slice(0, state.settings.max_contacts_in_overview)
          .map((e, i) => {
            return <ContactCard contactInfo={e} key={i}></ContactCard>
          })}
      </CardsContainer>
    </section>
  )
}

export default OverviewPage
