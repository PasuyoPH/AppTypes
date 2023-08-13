import NavItem from './NavItem'

interface PageItem {
  component: (...props: any) => JSX.Element
  name: string

  hideHeader?: boolean
  statusBarColor?: 'light' | 'dark'

  // nav settings
  nav?: NavItem
  animation?: 'default' | 'fade' | 'flip' | 'simple_push' | 'slide_from_bottom' | 'slide_from_right' | 'slide_from_left' | 'none'
}

export default PageItem