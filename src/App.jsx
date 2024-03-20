import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import OverviewPage from './pages/OverviewPage/OverviewPage'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import TopHeader from './component/TopHeader/TopHeader'
import NoPage from './pages/NoPage/NoPage'
import PageFooter from './component/PageFooter/PageFooter'
import 'reset-css'
import './App.scss'
import ContactForm from './component/ContactForm/ContactForm'
import ContactModal from './component/ContactModal/ContactModal'
import generateAvatarUrl from './services/avatar'
import reqrest from './services/reqres'
import { createNewContactDB, fetchAllContactsDB } from './services/json-server/db_services'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setContacts, addContact } from './redux/appInfoSlice'
import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'

function Layout() {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModal = value => {
    setIsModalOpen(value)
  }

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    let new_contact = { id: nanoid(), avatar: generateAvatarUrl(values.first_name, values.last_name), ...values }
    createNewContactDB(new_contact)
    dispatch(addContact(new_contact))
    setSubmitting(false)
    resetForm()
    setIsModalOpen(false)
  }

  return (
    <>
      <TopHeader
        onNewContactBtnClick={() => {
          handleModal(true)
        }}></TopHeader>
      <ContactModal isOpen={isModalOpen} onClose={() => handleModal(false)}>
        <ContactForm onSubmit={handleSubmit}></ContactForm>
      </ContactModal>
      {/* Outlet: Renders nested routes */}
      <Outlet />
      {/* <PageFooter></PageFooter> */}
    </>
  )
}

function App() {
  const contacts = useSelector(state => state.app_info.contacts)
  console.log('Contacts from <app>: ', contacts)
  const dispatch = useDispatch()

  useEffect(() => {
    // prettier-ignore
    (async () => {
      try {
        let response = await reqrest.get(`/?page=1`)
        let contacts_reqres = response.data.data

        response = await reqrest.get(`/?page=2`)
        contacts_reqres = [...contacts_reqres, ...response.data.data]
        contacts_reqres = contacts_reqres.map((e)=>{
          return {...e, 'favorite': false}
        })

        let contacts_json_server = await fetchAllContactsDB()
  
        dispatch(setContacts([...contacts_reqres, ...contacts_json_server]))
      } catch (error) {
        console.error('Error fetching pokemons information:', error)
      }
    })()
  }, [dispatch])

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
