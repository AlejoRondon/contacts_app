import { useState } from 'react'
import './ContactModal.scss'

const ContactModal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className='ContactModal'>
          <button className='close-btn' onClick={onClose}>
            Close
          </button>
          {children}
        </div>
      )}
    </>
  )
}

export default ContactModal
