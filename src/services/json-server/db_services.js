// api.js

import axios from 'axios'

const API_BASE_URL = 'http://localhost:3001' // Adjust the base URL as needed

export async function fetchAllContactsDB() {
  console.log('Fetching all contacts from the JSON-Server DB')

  try {
    const response = await axios.get(`${API_BASE_URL}/contacts`)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export async function fetchContactDB(contactId) {
  console.log('Fetching contact from the JSON-Server DB')

  try {
    const response = await axios.get(`${API_BASE_URL}/contacts/${contactId}`)
    return response.data
  } catch (error) {
    console.error('Error fetching contact:', error)
    throw error
  }
}

export async function createNewContactDB(contact) {
  console.log('Adding contact to the JSON-Server DB')

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

export async function updateContactDB(contactId, updatedData) {
  console.log('Updating contact JSON-Server DB')

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

export async function deleteContactDB(contactId) {
  console.log('Deleting contact from the JSON-Server DB')

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
