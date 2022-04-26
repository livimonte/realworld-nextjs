import React from 'react'
import { Link } from './link'

type Props = {
  href: string
  pathname: string
  children: React.ReactNode
}

export const LinkNav = ({ href, pathname, children }: Props) => {
  const navClass = pathname === href ? 'nav-link active' : 'nav-link'

  return (
    <Link href={href} className={navClass}>
      {children}
    </Link>
  )
}
