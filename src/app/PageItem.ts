import NavItem from './NavItem'

interface PageItem {
  component: (...props: any) => JSX.Element
  name: string

  hideHeader?: boolean
  statusBarColor?: 'light' | 'dark'

  // nav settings
  nav?: NavItem
}

export default PageItem