import axios, { AxiosError } from 'axios'

export const normalizeErrorObj = (error: AxiosError | Error) => {
  if (!axios.isAxiosError(error)) return error

  const { message, response } = error

  if (!message && !response && typeof error === 'object') {
    return error.toJSON()
  } else {
    return message || response || error
  }
}
