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

import { ContactsProvider } from './context/ContactsProvider'

function Layout() {
  return (
    <>
      <TopHeader></TopHeader>
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
