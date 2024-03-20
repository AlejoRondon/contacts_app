import { useState, useEffect } from 'react'
import './ContactsPaginator.scss'

const ContactsPaginator = ({ contacts, contactsPerPage, onPageChange }) => {
  const [pageOfContacts, setPageOfContacts] = useState(null)
  const [currentPage, setCurrentPage] = useState(null)
  const [totalPages, setTotalPages] = useState(null)

  useEffect(() => {
    if (!contacts) return
    const contacts_length = contacts.length
    if (!contacts_length) return
    console.log('contacts... ok', contacts)
    setTotalPages(Math.ceil(contacts_length / contactsPerPage))
  }, [contacts, contactsPerPage])

  useEffect(() => {
    if (!totalPages) return
    console.log('totalPages ', totalPages)
    setCurrentPage(1)
  }, [totalPages])

  useEffect(() => {
    if (!currentPage) return
    console.log('>ok currentPage ', currentPage)

    const startIndex = (currentPage - 1) * contactsPerPage
    const endIndex = startIndex + contactsPerPage
    const subarray = contacts.slice(startIndex, endIndex)
    setPageOfContacts(subarray)
  }, [currentPage])

  useEffect(() => {
    if (!pageOfContacts) return

    if (pageOfContacts.length > 0) {
      console.log('->pageOfContacts ', pageOfContacts)
      onPageChange(pageOfContacts)
    }
  }, [pageOfContacts, onPageChange])

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
    </div>
  )
}

export default ContactsPaginator
