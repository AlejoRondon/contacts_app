import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import OverviewPage from './pages/OverviewPage/OverviewPage'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import TopHeader from './component/TopHeader/TopHeader'

import 'normalize.css' // Import Normalize.css here

const NotFound = () => (
  <div>
    <h2>Not Found</h2>
  </div>
)

const App = () => (
  <Router>
    <TopHeader></TopHeader>
    <div>
      <Routes>
        <Route exact path='/' element={<OverviewPage />} />
        <Route exact path='/contacts' element={<ContactsPage />} />
        <Route exact path='/favorites' element={<FavoritesPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  </Router>
)

export default App
