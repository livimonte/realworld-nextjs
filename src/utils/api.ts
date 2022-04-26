import axios from 'axios'
import { normalizeErrorObj } from './helpers'

const api =
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
      // prettier-ignore
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Headers': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_API_ORIGIN || '',
    },
  }) || {}

api.interceptors.request.use(
  async (request) => request,
  (error) => Promise.reject(normalizeErrorObj(error)),
)

api.interceptors.response.use(
  async (response) => response,
  (error) => Promise.reject(normalizeErrorObj(error)),
)

export { api }
