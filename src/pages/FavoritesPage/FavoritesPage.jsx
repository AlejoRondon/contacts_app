import './FavoritesPage.scss'
import { useContactsContext } from '../../context/ContactsProvider'
import HeadingSection from '../../component/HeadingSection/HeadingSection'
import Spacer from '../../component/Spacer/Spacer'
import CardsContainer from '../../component/CardsContainer/CardsContainer'

function FavoritesPage() {
  const { state, dispatch } = useContactsContext()
  return (
    <section className='OverviewPage content-wrapper'>
      <Spacer />
      <HeadingSection>Favorites</HeadingSection>
      <CardsContainer></CardsContainer>
    </section>
  )
}

export default FavoritesPage
