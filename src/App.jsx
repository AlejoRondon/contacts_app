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

// import '@fontawesome/fontawesome-free/css/all.css' // Adjust the path as needed

const Layout = () => (
  <>
    <TopHeader></TopHeader>
    {/* Outlet: Renders nested routes */}
    <Outlet />
    <PageFooter></PageFooter>
  </>
)

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Route */}
        <Route path='/' element={<Layout />}>
          {/* Nested Routes */}
          <Route index element={<OverviewPage />} /> {/* Home Page */}
          <Route path='favorites' element={<FavoritesPage />} /> {/* Blogs Page */}
          <Route path='contacts' element={<ContactsPage />} /> {/* Contact Page */}
          <Route path='*' element={<NoPage />} /> {/* 404 Page */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
