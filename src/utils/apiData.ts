import axios, { AxiosError, AxiosResponse } from 'axios'
import { ErrorResponse, ErrorWithMessage, SuccessResponse } from './types'

export function conduitFormErrorsToString(err: ErrorResponse): string {
  // Specific format for Conduit API form errors

  const errorObj = err?.error?.errors

  return (
    errorObj &&
    Object.entries(errorObj)
      .map((i) => `${i[0]} ${i[1]}`)
      .join(', ')
  )
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  )
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError

  try {
    return new Error(JSON.stringify(maybeError))
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError))
  }
}

export function getErrorMessage(error: unknown) {
  if (typeof error === 'string') return error
  return toErrorWithMessage(error).message
}

export function handleError(error: unknown) {
  const message = getErrorMessage(error)

  if (process.env.NEXT_PUBLIC_DEBUG) {
    console.error('ERROR', message)
  }

  return message
}

export function normalizeErrorObj(error: AxiosError | Error | any): ErrorResponse {
  if (process.env.NEXT_PUBLIC_DEBUG === 'ALL') {
    console.error('AXIOS_ERROR=>', error)
  }

  if (axios.isAxiosError(error)) {
    const { message, response, request } = error

    const errorResponse: ErrorResponse = {
      message: message || JSON.stringify(error),
    }

    if (!message && typeof error === 'object') {
      errorResponse.error = error.toJSON()
    }

    if (response) {
      const { status, data } = response

      errorResponse.status = status

      if (data) {
        errorResponse.error = data
      }

      return errorResponse
    } else if (request) {
      const { status } = request

      errorResponse.status = status

      return errorResponse
    }
  }

  return {
    error,
    status: error?.status,
    message: error?.message || 'An unexpected error occurred',
  }
}

export function normalizeSuccessObj(response: AxiosResponse): SuccessResponse {
  const { data, headers, status } = response

  return {
    data,
    headers,
    status,
  }
}
