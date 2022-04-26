import React from 'react'
import { Navbar } from './navbar/navbar'
import { Footer } from './footer/footer'

type Props = {
  children: React.ReactNode
}

export const Theme = ({ children }: Props) => (
  <main>
    <Navbar />
    {children}
    <Footer />
  </main>
)
