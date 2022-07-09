import Router from 'next/router'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { api } from '../../utils/apiClient'

type User = {
  email: string
  token: string
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>
  signOut: () => void
  user: User
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

export const CtxAuth = createContext({} as AuthContextData)

let authChannel: BroadcastChannel

export function signOut() {
  destroyCookie(undefined, '@rw:token')
  destroyCookie(undefined, '@rw:refreshToken')

  authChannel.postMessage('signOut')

  Router.push('/')
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user

  useEffect(() => {
    authChannel = new BroadcastChannel('auth')

    authChannel.onmessage = (message) => {
      if (message.data === 'signOut') {
        signOut()
      }
    }
  }, [])

  useEffect(() => {
    const { '@rw:token': token } = parseCookies()

    if (token) {
      api
        .get('/user')
        .then((response) => {
          const { email, permissions, roles } = response.data

          setUser({ email })
        })
        .catch(() => {
          signOut()
        })
    }
  }, [])

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const response = await api.post('/users/login', {
        email,
        password,
      })

      const { token, email, username, images } = response.data.user

      setCookie(undefined, '@rw:token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      })

      // setCookie(undefined, '@rw:refreshToken', refreshToken, {
      //   maxAge: 60 * 60 * 24 * 30, // 30 days
      //   path: '/',
      // })

      setUser({
        email,
      })

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      // api.defaults.headers['Authorization'] = `Bearer ${token}`

      Router.push('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  return <CtxAuth.Provider value={{ signIn, signOut, isAuthenticated, user }}>{children}</CtxAuth.Provider>
}
