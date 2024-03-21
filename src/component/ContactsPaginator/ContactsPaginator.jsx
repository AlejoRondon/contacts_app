import { useState, useEffect } from 'react'
import './ContactsPaginator.scss'
import { useSelector } from 'react-redux'

const ContactsPaginator = ({ onPageChange, onlyFavorites }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const contacts = useSelector(state => state.app_info.contacts) // Suscribing component to the redux store
  const contactsPerPage = useSelector(state => state.app_info.settings.max_contacts_per_page)

  let filtered_contacts = onlyFavorites !== undefined ? contacts.filter(e => e.favorite === true) : contacts

  const totalPages = Math.ceil(filtered_contacts.length / contactsPerPage)

  useEffect(() => {
    if (!contacts.length) return
    console.log('currentPage ', currentPage)

    const startIndex = (currentPage - 1) * contactsPerPage
    const endIndex = startIndex + contactsPerPage
    const pageOfContacts = filtered_contacts.slice(startIndex, endIndex)

    onPageChange(pageOfContacts)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, contacts])

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  const handlePrevious = () => {
    if (!isFirstPage) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (!isLastPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className='Paginator'>
      {contacts.length ? (
        <div className='Paginator_Wrapper'>
          <button className='page-item' onClick={handlePrevious} disabled={isFirstPage}>
            {'<'}
          </button>
          <span className='page-legend'>
            {currentPage} of {totalPages}
          </span>
          <button className='page-item' onClick={handleNext} disabled={isLastPage}>
            {'>'}
          </button>
        </div>
      ) : (
        <div className='Paginator_Wrapper'>
          <span>Loading...</span>
        </div>
      )}
    </div>
  )
}

export default ContactsPaginator
