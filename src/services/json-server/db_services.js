// api.js

import axios from 'axios'

const API_BASE_URL = 'http://localhost:3001' // Adjust the base URL as needed

export async function fetchAllContacts() {
  try {
    const response = await axios.get(`${API_BASE_URL}/contacts`)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export async function fetchContact(contactId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/contacts/${contactId}`)
    return response.data
  } catch (error) {
    console.error('Error fetching contact:', error)
    throw error
  }
}

export async function createNewContact(contact) {
  try {
    const response = await axios.post(`${API_BASE_URL}/contacts`, contact, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status === 201) {
      console.log('Contact created successfully')
    } else {
      throw new Error('Failed to create contact')
    }
  } catch (error) {
    console.error('Error creating contact:', error.message)
    throw error
  }
}

export async function updateContact(contactId, updatedData) {
  try {
    const response = await axios.put(`${API_BASE_URL}/contacts/${contactId}`, updatedData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status === 200) {
      console.log('Contact updated successfully')
    } else {
      throw new Error('Failed to update contact')
    }
  } catch (error) {
    console.error('Error updating contact:', error.message)
    throw error
  }
}

export async function deleteContact(contactId) {
  try {
    const response = await axios.delete(`${API_BASE_URL}/contacts/${contactId}`)

    if (response.status === 200) {
      console.log('Contact deleted successfully')
    } else {
      throw new Error('Failed to delete contact')
    }
  } catch (error) {
    console.error('Error deleting contact:', error.message)
    throw error
  }
}