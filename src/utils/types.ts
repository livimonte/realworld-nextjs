export type ErrorWithMessage = {
  message: string
}

export type ErrorResponse = {
  message: string
  status?: number
  error?: any
}

export type SuccessResponse = {
  status?: number
  headers: any
  data?: any
}
