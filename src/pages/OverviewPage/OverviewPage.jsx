import './OverviewPage.scss'
import { useContactsContext } from '../../context/ContactsProvider'
import HeadingSection from '../../component/HeadingSection/HeadingSection'
import Spacer from '../../component/Spacer/Spacer'
import CardsContainer from '../../component/CardsContainer/CardsContainer'
import ContactCard from '../../component/ContactCard/ContactCard'

function OverviewPage() {
  const { state, dispatch } = useContactsContext()
  return (
    <section className='OverviewPage content-wrapper'>
      <Spacer />
      <HeadingSection>Favorites</HeadingSection>
      <CardsContainer>
        {state.contacts.map((e, i) => {
          return <ContactCard contactInfo={e} key={i}></ContactCard>
        })}
        {state.contacts.map((e, i) => {
          return <ContactCard contactInfo={e} key={i}></ContactCard>
        })}
        {state.contacts.map((e, i) => {
          return <ContactCard contactInfo={e} key={i}></ContactCard>
        })}
      </CardsContainer>
      {/* <Spacer /> */}
      <HeadingSection>Contact List</HeadingSection>
      <CardsContainer></CardsContainer>
    </section>
  )
}

export default OverviewPage
