import NavItem from './NavItem'

interface PageItem {
  component: JSX.Element
  name: string

  // nav settings
  nav?: NavItem
}

export default PageItem