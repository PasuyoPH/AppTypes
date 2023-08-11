import NavItem from './NavItem'

interface PageItem {
  component: (...props: any) => JSX.Element
  name: string

  // nav settings
  nav?: NavItem
}

export default PageItem