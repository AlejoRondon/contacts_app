import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import OverviewPage from './pages/OverviewPage/OverviewPage'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import TopHeader from './component/TopHeader/TopHeader'
import NoPage from './pages/NoPage/NoPage'
import PageFooter from './component/PageFooter/PageFooter'

// import 'normalize.css' // Import Normalize.css here
import 'reset-css'
import './App.scss'
import ContactForm from './component/ContactForm/ContactForm'
import generateAvatarUrl from './services/avatar'
import { createNewContact } from './services/json-server/db_services'
import { ContactsProvider } from './context/ContactsProvider'

import { useContactsContext } from './context/ContactsProvider'
function Layout() {
  const { state, dispatch } = useContactsContext()

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    let new_unique_id = 'id' + Math.random().toString(16).slice(2)
    let new_contact = { id: new_unique_id, avatar: generateAvatarUrl(values.first_name, values.last_name), ...values }
    console.log(new_contact)
    createNewContact(new_contact)
    dispatch({ type: 'SET_CONTACTS', payload: [new_contact, ...state.contacts] })
    setSubmitting(false)
    resetForm()
  }
  return (
    <>
      <TopHeader></TopHeader>
      <ContactForm onSubmit={handleSubmit}></ContactForm>
      {/* Outlet: Renders nested routes */}
      <Outlet />
      {/* <PageFooter></PageFooter> */}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ContactsProvider>
        <Routes>
          {/* Main Route */}
          <Route path='/' element={<Layout />}>
            {/* Nested Routes */}
            <Route index element={<OverviewPage />} /> {/* Home Page */}
            <Route path='contacts' element={<ContactsPage />} /> {/* Contact Page */}
            <Route path='favorites' element={<FavoritesPage />} /> {/* Blogs Page */}
            <Route path='*' element={<NoPage />} /> {/* 404 Page */}
          </Route>
        </Routes>
      </ContactsProvider>
    </BrowserRouter>
  )
}

export default App
