import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://reqres.in/api/users',
  timeout: 25000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
