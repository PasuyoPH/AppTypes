const Layout = {
    primary: '#FAFAFA',
    secondary: '#FFFFFF',
    tertiary: '#3680e2', 
    main: '#154b93',
    danger: '#d24f32',
    alt: '#FAFAFA',
    yellow: '#c4bf1b',
    gold: '#FFD700',
    green: '#56996b'
  },
  Text = {
    primary: '#1a1a1a',
    secondary: '#8a8a8a',
    tertiary: '#394047',
    blue: '#3680e2',
    main: '#154b93',
    danger: '#d24f32',
    alt: '#FAFAFA',
    yellow: '#c4bf1b',
    gold: '#FFD700',
    green: '#56996b'
  },
  All = { // colors that is available to both layout and text
    //TODO: Move gold, green, yellow, etc... here
    whiteSmoke: '#F5F5F5',
    main: '#154b93',
    mainDesaturated: '#3d5a80'
  }

const StatusColors: string[] = []

StatusColors[3] = Layout.green
StatusColors[-1] = Layout.danger

export {
  All,
  Layout,
  Text,
  StatusColors
}