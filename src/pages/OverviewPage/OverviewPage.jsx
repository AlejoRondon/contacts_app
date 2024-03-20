import './OverviewPage.scss'
import HeadingSection from '../../component/HeadingSection/HeadingSection'
import Spacer from '../../component/Spacer/Spacer'
import CardsContainer from '../../component/CardsContainer/CardsContainer'
import ContactCard from '../../component/ContactCard/ContactCard'

import { useSelector, useDispatch } from 'react-redux'
// import { toggleTaskStatus, deleteTask } from '../../redux/appInfoSlice'

function OverviewPage() {
  const contacts = useSelector(state => state.app_info.contacts)
  const settings = useSelector(state => state.app_info.settings)
  // const dispatch = useDispatch()

  // const handleToggleTask = (e, taskId) => {
  //   console.log('handleToggleTask')
  //   dispatchi(toggleTaskStatus(taskId))
  // }

  // const handleDeleteTask = (e, taskId) => {
  //   console.log('handleDeleteTask')
  //   dispatchi(deleteTask(taskId))
  // }
  return (
    <section className='OverviewPage content-wrapper'>
      <Spacer />
      <HeadingSection>Favorites</HeadingSection>
      <CardsContainer>
        {contacts
          .filter(e => {
            return e.favorite === true
          })
          .slice(0, settings.max_favorites_in_overview)
          .map((e, i) => {
            return <ContactCard contactInfo={e} key={i}></ContactCard>
          })}
      </CardsContainer>
      {/* <Spacer /> */}
      <HeadingSection>Contact List</HeadingSection>
      <CardsContainer>
        {contacts
          .filter(e => {
            return e.favorite === false
          })
          .shuffle()
          .slice(0, settings.max_contacts_in_overview)
          .map((e, i) => {
            return <ContactCard contactInfo={e} key={i}></ContactCard>
          })}
      </CardsContainer>
    </section>
  )
}

export default OverviewPage
