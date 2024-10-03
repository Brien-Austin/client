import axios from 'axios'
import { API_URL } from './constants'

export const apiClient = axios.create({
    baseURL : API_URL
})