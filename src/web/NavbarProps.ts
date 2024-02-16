import type { ReactNode } from 'react'

interface NavbarProps {
  children?: ReactNode
}

interface NavbarItemProps {
  icon?: ReactNode
  text?: string
  onClick?: () => void
}

export default NavbarProps
export type { NavbarItemProps }