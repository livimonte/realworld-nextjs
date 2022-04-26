import React from 'react'
import NextLink from 'next/link'

type Props = {
  href: string
  as?: string | undefined
  passHref?: boolean
  children: React.ReactNode
  [rest: string]: any
}

export const Link = ({ href, as = undefined, passHref = false, children, ...rest }: Props) => {
  return (
    <NextLink href={href} as={as} passHref={passHref}>
      <a {...rest}>{children}</a>
    </NextLink>
  )
}
