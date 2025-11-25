import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL + '/users/'

const register = async (userData) => {
  const response = await axios.post(API_URL, userData)
  return response.data
}

const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)
  return response.data
}

const logout = () => localStorage.removeItem('user')

const authService = {
  register,
  logout,
  login,
}

export default authService

